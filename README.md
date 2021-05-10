基于vue3 + vite2 + vant2+tailwind
1,初始化工程
$ vue init vite-app fast-brain
$ cd fast-brain
$ npm i
初始完成后，即可执行npm run dev 启动项目

2，添加vant
$ npm i vant@next -S

3，后端使用koa，所有服务都放在server文件夹
安装koa
$ npm i koa koa-router mongoose events util

4，前端使用滚动到底部触发加载，后端使用mongo时，collection的名字必须用复数（坑）