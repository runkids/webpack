import Vue  from 'vue';
import App from '@/App';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//console.log(`process.env.NODE_ENV===`,process.env.NODE_ENV);

export default new Vue({
  el:'#app',
  render: h => h(App)
})  