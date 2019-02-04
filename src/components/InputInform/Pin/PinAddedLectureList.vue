<template>

    <div id="pin_added_lecture_list">
        <div id="lecture_data_wrap" v-for="(lecture, index) in added_lectures" :key="index" @click="sub_pin_lecture(lecture)">
            <pin-lecture-data :lecture="lecture" ></pin-lecture-data>
        </div>
    </div>
</template>

<script>
    import PinLectureData from './PinAddedLectureData'
    export default {
        name: "PinAddedLectureList",
        components:{
            'pin-lecture-data': PinLectureData
        },
        data(){
            return {
                added_lectures:[],
            }
        },
        mounted(){
            this.$bus.$on('add_pin_lecture', this.add_pin_lecture);
        },
        methods:{

            add_pin_lecture(){
                this.added_lectures=this.$store.getters.GET_PIN_LECTURES;
            },
            sub_pin_lecture(lecture){
                this.$store.dispatch('SUB_PIN_LECTURE', lecture);
                this.$bus.$emit('sub_pin_lecture',lecture);
                this.added_lectures=this.$store.getters.GET_PIN_LECTURES;
            }
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }

    #pin_added_lecture_list{
        height: 100%;
        display: inline-block;
        overflow-y: scroll;
        width: 100%;
        -ms-overflow-style: none;
    }
    #pin_added_lecture_list::-webkit-scrollbar {
        display: none;
    }
    #lecture_data_wrap{
        position: relative;
        display: inline-block;
        border: 2px solid #aaabd3;
        border-radius: 10px;
        width: calc(80% + 30px);
        background-color: white;
        height: 80px;
    }

</style>
