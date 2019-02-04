import axios from "axios";

const SUBMIT = 'SUBMIT';

const state ={
    result_data: []
};

const mutations = {
    SUBMIT(state, submit_data){
        axios.get('lectures/query/?timetable='+submit_data.timetable+'&fixed='+submit_data.fixed+'&selected='+submit_data.selected)
            .then((response)=>{
                state.result_data = response.data;
            });
    }
};

const actions ={
    SUBMIT({commit}, submit_data){
        commit(SUBMIT, submit_data);
    }
};

const getters = {

};

export default{
    state,
    mutations,
    actions,
    getters,
}
