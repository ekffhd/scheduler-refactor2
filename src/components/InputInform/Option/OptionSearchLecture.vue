<template>
    <div id="option_search_lecture_wrap">
        <div id="option_search_input_form_wrap">
            <form v-on:submit.prevent="search_option_lecture()">
                <input id="search_input" placeholder="과목명/교수님성함/학과" v-model="search_param" type="text" class="search_input"/>
                <i id="search_icon" class="fas fa-search"></i>
                <!--
                <transition  name="fade" id="fade">
                    <div class="loading" v-show="loading">
                        <span class="fa fa-soptionner fa-soption"></span> Loading
                    </div>
                </transition>
                -->
            </form>
        </div>
        <div id="option_search_lecture_list">
            <div id="lecture_data" v-for="(lecture, index) in search_data" @click="add_option_lecture(lecture)" :key="index">
                <div id="lecture_title"> <div class="wrap" style="margin-top: 5%; height: 95%;"><div class="inner">{{lecture.title}}</div></div> </div>
                <div id="lecture_info">
                        {{lecture.code}} {{lecture.point}}학점
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "OptionSearchLecture",
        data(){
            return{
                search_data: [],
                search_param: '',
                page: 1,
                notfound: false
            }
        },//data
        methods:{
            search_option_lecture(){
                this.page = 1;
                this.search_data = [];
                this.notfound = false;
                axios.get('lectures/unique/?search='+this.search_param+'&page='+this.page)
                    .then((response) => {
                        this.search_data = this.search_data.concat(response.data.results);
                    });
            },
            add_option_lecture(lecture){
                this.$store.dispatch('ADD_OPTION_LECTURE', lecture);
                if(lecture.out.status === "succeed"){
                    this.$bus.$emit('add_option_lecture',lecture);
                }
            }
        },

        mounted(){
            const load_data = () =>{
                if (this.notfound === false){
                    this.page++;
                    axios.get('lectures/unique/?search='+this.search_param+'&page='+this.page)
                        .then((response) => {
                            this.search_data = this.search_data.concat(response.data.results);
                        })
                        .catch(() => {
                            this.notfound = true;
                        });
                }
            };
            const list = document.querySelector('#option_search_lecture_list');
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
    #option_search_lecture_wrap{
        display: inline-block;
        margin-top: 1px;
        background-color: white;
        color: #566270;
        height: calc(100% - 2px);
        width: calc(100% - 1px);
    }
    #option_search_input_form_wrap{
        display: inline-block;
        border: none;
        background-color: white;
        border-radius: 5px;
        box-shadow: 1px 1px 5px;
        margin: auto;
        margin-top: 10px;
        margin-bottom: 10px;
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
    #option_search_lecture_list{
        -ms-overflow-style: none;
        height: calc(100% - 50px);
        overflow-y: scroll;
    }

    #option_search_lecture_list::-webkit-scrollbar {
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
