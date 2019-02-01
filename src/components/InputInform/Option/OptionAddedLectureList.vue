<template>
    <div id="option_added_lecture_list">
        <div id="lecture_data_wrap" v-for="(lecture, index) in added_lectures" :key="index" @click="sub_option_lecture(lecture)">
            <option-lecture-data :lecture="lecture" ></option-lecture-data>
        </div>
    </div>
</template>

<script>
    import OptionLectureData from './OptionAddedLectureData'
    export default {
        name: "OptionAddedLectureList",
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
                this.$store.dispatch('SUB_OPTION_LECTURE', lecture);
                this.$bus.$emit('sub_option_lecture',lecture);
                this.added_lectures=this.$store.getters.GET_OPTION_LECTURES;
            }
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }

    #option_added_lecture_list{
        height: 100%;
        display: inline-block;
        overflow-y: scroll;
        width: 100%;
    }
    #lecture_data_wrap{
        position: relative;
        display: inline-block;
        border: 2px solid #aaabd3;
        border-radius: 10px;
        width: calc(80% + 30px);
        background-color: white;
        height: 40%;
    }

</style>
