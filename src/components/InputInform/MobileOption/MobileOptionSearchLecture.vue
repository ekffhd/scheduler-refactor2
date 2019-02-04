<template>
    <div id="option_search_lecture_wrap">
        <div id="option_search_input_form_wrap">
            <form v-on:submit.prevent="mobile_search_option_lecture()">
                <input autocomplete="off" id="search_input" v-model="search_param" placeholder="과목명/교수님성함/학과" type="text" class="search_input"/>
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
        <div id="mobile_option_search_lecture_list">
            <div id="lecture_data" v-for="(lecture, index) in search_data" @click="add_option_lecture(lecture)" :key="index">
                <div id="lecture_title">
                    <div class="wrap">
                        <div class="inner">
                            {{lecture.title}}
                        </div>
                    </div>
                </div>
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
                search_data:[],
                search_param: '',
                page: 1,
                notfound: false
            }
        },//data
        methods:{
            mobile_search_option_lecture(){
                this.page = 1;
                this.search_data = [];
                this.notfound = false;
                axios.get('lectures/unique/?search='+this.search_param+'&page='+this.page)
                    .then((response) => {
                        this.search_data = this.search_data.concat(response.data.results);
                    })
            },
            add_option_lecture(lecture){
                const select = confirm(lecture.title+' 을(를) 선택 강의로 추가하겠습니까?');
                if (select === true){
                    this.$store.dispatch('ADD_OPTION_LECTURE', lecture);
                    if(lecture.out.status === "succeed"){
                        this.$bus.$emit('add_option_lecture',lecture);
                    }
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
            const list = document.querySelector('#mobile_option_search_lecture_list');
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
        color: #566270;
        height: 100%;
        width: 100%;

    }
    #option_search_input_form_wrap{
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
    #mobile_option_search_lecture_list{
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
    }

    #lecture_title{
        position: absolute;
        display: inline-block;
        top: 10%;
        left: 3%;
        width: 100%;
        height: 45%;
        font-size: 12px;
        font-weight: bold;
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
    #lecture_info{
        display: inline-block;
        position: absolute;
        float: left;
        top:55%;
        left: 3%;
        width: 100%;
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

    @media (max-width: 400px){
        #lecture_info{
            font-size: 10px;
        }
    }

</style>
