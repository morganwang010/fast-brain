<template>
  <!-- <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button> -->
  
<ul>
  
 <li  v-for="(item,index) in items" :key="index" >
     <div class="box">

   <span class="QsTitle"><a href="https://m.yuwenmi.com/jzw/56432.html" target="_blank" title="">{{item.question}}</a></span>
<span class="Answers"><div class="list_ans cover"   @click="show(index)"  :ref="check">查看答案</div></span>

<div  :ref="ans" class="ans1"><div class="innerans">答案：{{item.answer}}</div></div>
</div>
   </li>
  
  </ul>

  <div class="box1">

<!-- 
<van-collapse v-model="activeNames">
  
      
      <van-collapse-item   v-for="(item ,index) in items" :key="index"  class="box"   >
        <template #title>
			<div>{{index+1}}、题目：{{item.question}}</div>
		</template>
       <template #right-icon>
       		 
           <van-icon :name="activeNames.indexOf(index) ? 'cross' : 'plus'" />
       </template>
        答案： {{ item.answer }}
         </van-collapse-item>

  <van-collapse-item title="标题3" name="3" disabled>内容</van-collapse-item>
</van-collapse> -->

  </div>
  
   


  
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0,
      lians:0,
      refsitem:[],
      refscheck:[],
      activeNames: [],
      isAchiveBottom: false,
      items: [
   
    ]
    }
  },
  created(){
//使用window.onscroll = function(){}this指向出现问题
    //故应该使用箭头函数，因为箭头函数无this，会从上一级找，故会找到vue实例的this
    window.onscroll = () => {
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      //变量windowHeight是可视区的高度
      var windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      //变量scrollHeight是滚动条的总高度
      var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      //滚动条到底部的条件(距底部20px时触发加载)
      if (
        scrollTop + windowHeight >= scrollHeight - 20 &&
        !this.isAchiveBottom &&
        !this.noMore
      ) {
        // console.log(
        //   "距顶部" +
        //     scrollTop +
        //     "可视区高度" +
        //     windowHeight +
        //     "滚动条总高度" +
        //     scrollHeight
        // );
        this.isAchiveBottom = true;
        //延时触发数据加载
        setTimeout(() => {
          //后端需要进行分页，然后前端从后端拿来实现滚动加载
          //这里利用数组push来模拟从后端拿到的数据
          // this.datas.push("test");
          console.log("bottom")
          axios.get("/api/question?skip="+this.count+"").then(
          res => (
            // this.items = res.data,
            res.data.forEach(data=>{this.items.push(data)}),

            // this.items.push(res.data),
            console.log(this.items)),
            this.count = this.count + 10

        ). catch(function (error) { // 请求失败处理
                console.log(error);
              })

          this.isAchiveBottom = false;
        }, 500);
      }
    };
  },
  mounted() {

 axios.get("/api/question?skip=0").then(
  res => (
    // this.items = res.data,
    res.data.forEach(data=>{this.items.push(data)}),

    // this.items.push(res.data),
    console.log(this.items)),
this.count = this.count + 10
). catch(function (error) { // 请求失败处理
        console.log(error);
      })

  },
  methods:{
    ans(el){
   console.log(el)
    if(el){
      this.refsitem.push(el)
    }
    },
    check(el){
       if(el){
      this.refscheck.push(el)
    }

    },
    show(i){
      // const ansH = this.$refs.ans[i].offsetHeight;
      console.log(i)
      console.log(this.refscheck[i])
      if(this.refscheck[i].innerHTML == "查看答案"){
        this.refsitem[i].style.height = '40px'
      this.refscheck[i].innerHTML = "隐藏"

      }else{
   this.refsitem[i].style.height = '0px'
      this.refscheck[i].innerHTML = "查看答案"

      }
      

      
      
      }
  }
}
</script>
<style>
.innerans {
padding-top: 5px;
    margin-right: 15px;
    border-top-style: dotted;

}
.van-divider {
  margin:5px 0;
}
.ans1{
  margin-left: 15px;
  margin-top:15px;
  height: 0px;
  overflow: hidden;
  transition: height .3s;
}
 ul li .QsTitle {
   
    width: 75%;

    line-height: 25px;
    text-align: left;
    display: inline-block;
    margin-top:5px;
    margin-left:15px;
    margin-bottom:5px;

    text-overflow: ellipsis;
}

  ul li .Answers {
    float: right;
    width: 15%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    padding: 0;
    display: inline-block;
}

  ul li p {
    float: left;
    width: 100%;
    line-height: 40px;
    font-size: 19px;
    text-align: left;
    color: #ff0000;
    background: #f8f8f8;
    display: none;
}

  ul li .cover {
    float: right;
    width: 55px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    color: #fff;
    background: #ff8376;
    border-radius: 5px;
    padding: 2px 5px;
    box-shadow: -2px 2px 4px rgb(0 0 0 / 20%);
    border: 1px solid #fff;
    margin-right: 15px;
}

.box {
    box-shadow: 0 2px 6px 0 rgb(0 0 0 / 10%);
    background: #fff;
    border-radius: .25rem;
    margin-bottom: 15px;
    margin-left: 10px;
    margin-right:10px;
}
.van-icon-plus,
.van-icon-cross {
    color: #8bc63e;
}

 ul li .Answers .list_ans {
    
    font-size: 12px;
    margin: 10px;
}
</style>