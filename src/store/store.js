import Vue from 'vue'
import Vuex from 'vuex'

import InputData from './modules/InputData_module'
import TimeTable from './modules/TimeTable_module'


Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
      InputData,
      TimeTable,

    }
});

export default store
