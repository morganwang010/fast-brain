import { createApp } from 'vue'
import App from './App.vue'
import 'vant/lib/index.css';
import './index.css'

 

import { Divider,Icon,Button,Collapse, CollapseItem } from 'vant';
const app = createApp(App)
app.use(Button)
app.use(Collapse)
app.use(CollapseItem)
app.use(Icon)
app.use(Divider)

app.mount('#app')
