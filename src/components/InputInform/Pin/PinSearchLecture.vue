<template>
    <div id="pin_search_lecture_wrap">
        <div id="pin_search_input_form_wrap">
            <form v-on:submit.prevent="search_pin_lecture()">
                <input id="search_input" v-model="search_param" placeholder="과목명/교수님성함/학과" type="text" class="search_input"/>
                <i id="search_icon" class="fas fa-search"></i>
                <!--
                <transition  name="fade" id="fade">
                    <div class="loading" v-show="loading">
                        <span class="fa fa-spinner fa-spin"></span> Loading
                    </div>
                </transition>
                -->
            </form>
        </div>
        <div id="pin_search_lecture_list">
            <div id="lecture_data" v-for="(lecture, index) in search_data" @click="add_pin_lecture(lecture)" :key="index">
                    <div id="lecture_title"> <div class="wrap" style="margin-top: 5%; height: 95%;"><div class="inner">{{lecture.title}}</div></div> </div>
                    <div id="lecture_info">
                        {{lecture.professor}} &nbsp; {{lecture.classroom}} &nbsp; {{lecture.point}} 학점
                    </div>
                    <div id="lecture_time_wrap">
                        <div class="wrap">
                            <div class="inner" style="text-align: center;">
                                <div id="lecture_time" v-for="(time, index) in lecture.timetable" :key="index">
                                    {{time.day}} {{time.start.split(":")[0]+":"+time.start.split(":")[1]}}~{{time.end.split(":")[0]+":"+time.end.split(":")[1]}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "PinSearchLecture",
        data(){
            return{
                search_data:[],
                search_param: '',
                page: 1,
                notfound: false
            }
        },//data
        methods:{
            search_pin_lecture(){
                this.page = 1;
                this.search_data = [];
                this.notfound = false;
                axios.get('lectures/search/?search='+this.search_param+'&page='+this.page)
                    .then((response) => {
                        this.search_data = this.search_data.concat(response.data.results);
                    });
            },
            add_pin_lecture(lecture){
                this.$store.dispatch('ADD_PIN_LECTURE', lecture);
                if(lecture.out.status === "succeed"){
                    this.$bus.$emit('add_pin_lecture',lecture);
                }
            }
        },
        mounted(){
            const load_data = () =>{
                if (this.notfound === false){
                    this.page++;
                    axios.get('lectures/search/?search='+this.search_param+'&page='+this.page)
                        .then((response) => {
                            this.search_data = this.search_data.concat(response.data.results);
                        })
                        .catch(() => {
                            this.notfound = true;
                        });
                }
            };
            const list = document.querySelector('#pin_search_lecture_list');
            list.addEventListener('scroll', function() {
                if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
                    load_data();
                }
            });
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    #pin_search_lecture_wrap{
        display: inline-block;
        margin-top: 1px;
        background-color: white;
        color: #566270;
        height: calc(100% - 2px);
        width: calc(100% - 1px);
    }
    #pin_search_input_form_wrap{
        display: inline-block;
        border: none;
        background-color: white;
        border-radius: 5px;
        box-shadow: 1px 1px 5px;
        margin: auto;
        margin-top: 10px;
        margin-bottom: 10px;
        width: 90%;
        height: 30px;
    }

    #search_input{
        display: inline-block;
        background-color: white;
        outline: none;
        height: 30px;
        border: none;
        width: 80%;
    }
    #search_icon{
        color: #aaabd3;
    }
    #pin_search_lecture_list{
        -ms-overflow-style: none;
        height: calc(100% - 50px);
        overflow-y: scroll;

    }

    #pin_search_lecture_list::-webkit-scrollbar {
        display: none;
    }


    #lecture_data{
        display: inline-block;
        border: 2px solid #aaabd3;
        border-radius: 10px;
        width: 80%;
        height: 28%;
        padding-left: 15px;
        padding-right: 15px;
        margin-bottom: 5px;
        cursor: pointer;
    }
    #lecture_data:hover{
        border: 2px solid #353866;
        color: #353866;
        background-color:rgba(170, 173, 211,0.3);
    }
    #lecture_title{
        display: inline-block;
        float: left;
        width: 67%;
        height: 55%;
        font-size: 13px;
        font-weight: bold;
    }
    .wrap{
        display: table;
        height: 100%;
        width: 100%;

    }
    .inner{
        display: table-cell;
        vertical-align: middle;
        text-align: left;
    }
    #lecture_info{
        display: inline-block;
        float: left;
        width: 67%;
        height: 40%;
        font-size: 11px;
        text-align: left;
    }
    #lecture_time_wrap{
        display: inline-block;

        width: 30%;
        height: 100%;
        font-size: 11px;

    }


    /*로딩 아이콘
    .loading {
        text-align: center;
        position: absolute;
        color: #fff;
        z-index: 9;
        background: rgb(200, 200 ,200);
        padding: 8px 18px;
        border-radius: 5px;
        left: calc(50% - 50px);
        top: 40%;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-to {
        opacity: 0
    }*/

</style>
