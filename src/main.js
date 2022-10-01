import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.css'

// 組件
import Search from '@/components/Search.vue'
import Activity from '@/components/Activity.vue'
import Btn from '@/components/Btn.vue'
import HeaderComp from '@/components/HeaderComp.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import InformItem from '@/components/InformItem.vue'
import ItemBtn from '@/components/ItemBtn.vue'
import MessageItem from '@/components/MessageItem.vue'
import Navbar from '@/components/Navbar.vue'
import Product from '@/components/Product.vue'
import Title from '@/components/Title.vue'



const app = createApp(App);

app.use(router)

app.component("Search",Search);
app.component("Activity",Activity);
app.component("Btn",Btn);
app.component("HeaderComp",HeaderComp);
app.component("HelloWorld",HelloWorld);
app.component("InformItem",InformItem);
app.component("ItemBtn",ItemBtn);
app.component("MessageItem",MessageItem);
app.component("Navbar",Navbar);
app.component("Product",Product);
app.component("Title",Title);
// app.component("",);
// app.component("",);
// app.component("",);
// app.component("",);
// app.component("",);

app.mount('#app');
