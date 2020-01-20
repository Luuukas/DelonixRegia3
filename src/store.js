// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        number: 0,
    },
    mutations: {
        ADD(state) {  //我们把state传入 就可以对 state内的数据进行我们想要的变化，它必须按照我们想要得到的格式去变化， 想要直接提交mutations 需要使用 this.$stote.commit('mutations的方法名',参数) 如果想要在mutations方法中传参，写法就要变成 ADD(state,形参){ ... } 这样一种形式了 我举个例子
            state.number++
        },
        SUB(state) {
            state.number--
        },
        // ADDPARAM(state,param){
        //   if (typeof param !== 'number'){
        //     param = 0
        //   }
        //   state.number = state.number + param
        // }  这个方法就可以传入我们想用的参数了，相应调用的地方也需要改变
    },
    actions: {

    },
    getters: {
        getNumber(state) {   //getter的书写方法
            return state.number + 100
        }
    }
})