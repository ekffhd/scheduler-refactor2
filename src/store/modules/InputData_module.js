const ADD_PIN_LECTURE = 'ADD_PIN_LECTURE';
const ADD_OPTION_LECTURE = 'ADD_OPTION_LECTURE';
const SUB_PIN_LECTURE = 'SUB_PIN_LECTURE';
const SUB_OPTION_LECTURE = 'SUB_OPTION_LECTURE';

const state ={
    pin_lectures: [],
    option_lectures: [],
};

const mutations = {
    ADD_PIN_LECTURE(state, subject){
        let result = state.pin_lectures.findIndex(lecture => lecture.code === subject.code);
        if(result === -1){
            result = state.option_lectures.findIndex(lecture => lecture.code === subject.code);
            if(result === -1){
                state.pin_lectures.push(subject);
                subject.out = {
                    status : "succeed"
                }
            }
            else{
                alert('해당 학수번호는 이미 선택강의에 추가되었습니다.');
                subject.out = {
                    status : "failed"
                }
            }
        }else{
            alert('해당 학수번호는 이미 고정강의에 추가되었습니다.');
            subject.out = {
                status : "failed"
            }
        }
    },
    ADD_OPTION_LECTURE(state, subject){
        let result = state.pin_lectures.findIndex(lecture => lecture.code === subject.code);
        if(result === -1){
            result = state.option_lectures.findIndex(lecture => lecture.code === subject.code);
            if(result === -1){
                state.option_lectures.push(subject);
                subject.out = {
                    status : "succeed"
                }
            }
            else{
                alert('해당 학수번호는 이미 선택강의에 추가되었습니다.');
                subject.out = {
                    status : "failed"
                }
            }
        }else{
            alert('해당 학수번호는 이미 고정강의에 추가되었습니다.');
            subject.out = {
                status : "failed"
            }
        }
    },
    SUB_PIN_LECTURE(state, subject){
        let sub_index = state.pin_lectures.indexOf(subject);
        state.pin_lectures.splice(sub_index, 1);
    },
    SUB_OPTION_LECTURE(state, subject){
        let sub_index = state.option_lectures.indexOf(subject);
        state.option_lectures.splice(sub_index, 1);
    }
};

const actions ={
    ADD_PIN_LECTURE({commit}, subject){
        commit(ADD_PIN_LECTURE, subject);
    },
    ADD_OPTION_LECTURE({commit}, subject){
        commit(ADD_OPTION_LECTURE, subject);
    },
    SUB_PIN_LECTURE({commit}, subject){
        commit(SUB_PIN_LECTURE, subject)
    },
    SUB_OPTION_LECTURE({commit}, subject){
        commit(SUB_OPTION_LECTURE, subject)
    }
};

const getters = {
    GET_PIN_LECTURES: state => {
        return state.pin_lectures;
    },
    GET_OPTION_LECTURES: state => {
        return state.option_lectures;
    },
};

export default{
    state,
    mutations,
    actions,
    getters,
}
