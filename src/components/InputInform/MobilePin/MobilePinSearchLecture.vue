<template>
    <div id="mobile_pin_search_lecture_wrap">
        <div id="mobile_pin_search_input_form_wrap">
            <form v-on:submit.prevent="mobile_search_pin_lecture()">
                <input autocomplete="off" id="search_input" placeholder="과목명/교수님성함/학과" v-model="search_param" type="text" class="search_input"/>
                <i id="search_icon" class="fas fa-search" @click="mobile_search_pin_lecture()"></i>
                <!--
                <transition  name="fade" id="fade">
                    <div class="loading" v-show="loading">
                        <span class="fa fa-smobile_pinner fa-smobile_pin"></span> Loading
                    </div>
                </transition>
                -->
            </form>
        </div>
        <div id="mobile_pin_search_lecture_list">
            <div id="lecture_data" v-for="(lecture, index) in search_data" @click="add_mobile_pin_lecture(lecture)" :key="index">
                <div id="lecture_title">
                    <div class="wrap">
                        <div class="inner">
                            {{lecture.title}}
                        </div>
                    </div>
                </div>

                <div class="lecture_info">
                    {{lecture.professor}} {{lecture.division}}반 {{lecture.classroom}}
                </div>

                <div class="lecture_info">
                    {{lecture.department}} {{lecture.code}} {{lecture.point}}학점
                </div>
                <div id="lecture_time_wrap">
                    <div class="wrap">
                        <div class="inner">
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
    import axios from 'axios'
    export default {
        name: "MobilePinSearchLecture",
        data(){
            return{
                search_data:[],
                search_param: '',
                page: 1,
                notfound: false
            }
        },//data
        methods:{
            mobile_search_pin_lecture(){
                this.page = 1;
                this.search_data = [];
                this.notfound = false;
                axios.get('lectures/search/?search='+this.search_param+'&page='+this.page)
                    .then((response) => {
                        this.search_data = this.search_data.concat(response.data.results);
                    });
            },
            add_mobile_pin_lecture(lecture){
                const select = confirm(lecture.professor+' 교수님의 '+lecture.title+' 을(를) 고정강의로 추가하겠습니까?');
                if (select === true){
                    this.$store.dispatch('ADD_PIN_LECTURE', lecture);
                    if(lecture.out.status === "succeed"){
                        this.$bus.$emit('add_pin_lecture',lecture);
                    }
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
            const list = document.querySelector('#mobile_pin_search_lecture_list');
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
    #mobile_pin_search_lecture_wrap{
        display: inline-block;
        color: #566270;
        height: 100%;
        width: 100%;
    }
    #mobile_pin_search_input_form_wrap{
        display: inline-block;
        background-color: white;
        border: none;
        border-radius: 5px;
        box-shadow: 1px 1px 5px;
        margin: 10px auto;
        height: 30px;
        width: 90%;
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
    #mobile_pin_search_lecture_list{
        display: inline-block;
        height: calc(100% - 50px);
        width: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
        -webkit-overflow-scrolling: touch;
    }
    #lecture_data{
        position: relative;
        display:block;
        border-bottom: 1px solid #aaabd3;
        width: 100%;
        height: 90px;
        cursor: pointer;
        padding-left: 10px;
    }
    #lecture_title{
        display: inline-block;
        top: 10%;
        width: 65%;
        height: 30px;
        font-size: 12px;
        font-weight: bold;
        float: left;
        margin-top: 10px;
        text-align: left;
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
    .lecture_info{
        display: inline-block;
        float: left;
        top:55%;
        left: 3%;
        width: 65%;
        height: auto;
        font-size: 11px;
        text-align: left;
    }
    #lecture_time_wrap{
        display: inline-block;
        position: absolute;
        width: 25%;
        left: 70%;
        top: 0;
        height: 100%;
        padding-right: 15px;
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
    @media (max-width: 374px){
        #lecture_info{
            font-size: 10px;
        }
        #lecture_time{
            font-size: 10px;
        }
    }

</style>
