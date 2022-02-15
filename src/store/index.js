import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   cities:[]
  },
  mutations: {
    setCities(state,iskender){
      state.cities=iskender;
    }
  },
  actions: {
    getAllCountries({ commit }) {
      return fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((doner)=>{commit("setCities",doner);});
    },
  },
  modules: {
  },

})
