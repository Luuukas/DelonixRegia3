// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        number: 0,
    },
    mutations: {
        ADD(state) {  //���ǰ�state���� �Ϳ��Զ� state�ڵ����ݽ���������Ҫ�ı仯�������밴��������Ҫ�õ��ĸ�ʽȥ�仯�� ��Ҫֱ���ύmutations ��Ҫʹ�� this.$stote.commit('mutations�ķ�����',����) �����Ҫ��mutations�����д��Σ�д����Ҫ��� ADD(state,�β�){ ... } ����һ����ʽ�� �Ҿٸ�����
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
        // }  ��������Ϳ��Դ����������õĲ����ˣ���Ӧ���õĵط�Ҳ��Ҫ�ı�
    },
    actions: {

    },
    getters: {
        getNumber(state) {   //getter����д����
            return state.number + 100
        }
    }
})