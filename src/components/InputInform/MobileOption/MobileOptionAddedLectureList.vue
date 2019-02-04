<template>
    <div id="mobile_option_added_lecture_list">
        <div id="lecture_data_wrap" v-for="(lecture, index) in added_lectures" :key="index" @click="sub_option_lecture(lecture)">
            <option-lecture-data :lecture="lecture" ></option-lecture-data>
        </div>
    </div>
</template>

<script>
    import OptionLectureData from './MobileOptionAddedLectureData'
    export default {
        name: "MobileOptionAddedLectureList",
        components:{
            'option-lecture-data': OptionLectureData
        },
        data(){
            return {
                added_lectures:[],
            }
        },
        mounted(){
            this.$bus.$on('add_option_lecture', this.add_option_lecture);
        },
        methods:{
            add_option_lecture(){
                this.added_lectures=this.$store.getters.GET_OPTION_LECTURES;
            },
            sub_option_lecture(lecture){
                const select = confirm(lecture.title+' 을(를) 선택강의에서 삭제하겠습니까?');
                if (select === true){
                    this.$store.dispatch('SUB_OPTION_LECTURE', lecture);
                    this.$bus.$emit('sub_option_lecture',lecture);
                    this.added_lectures=this.$store.getters.GET_OPTION_LECTURES;
                }


            }
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }

    #mobile_option_added_lecture_list{
        height: 100%;
        display: inline-block;
        overflow-y: scroll;
        width: 100%;
        -ms-overflow-style: none;
    }
    #mobile_option_added_lecture_list::-webkit-scrollbar {
        display: none;
    }
    #lecture_data_wrap{
        position: relative;
        display: inline-block;
        border-bottom: 1px solid #aaabd3;
        width: 100%;
        height: 90px;
    }

</style>
