import Vue from 'vue' 
import Vuex from 'vuex'
import pathify from 'vuex-pathify'; 
import kalee from './kalee';
Vue.use(Vuex) 

const modules = {
    kalee
}

export default new Vuex.Store({
    plugins: [pathify.plugin],
    modules: modules
})