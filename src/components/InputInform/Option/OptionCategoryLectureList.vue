<template>
    <div id="option_category_lecture_list">
        <div id="category_wrap">
            <div id="angle_left_icon_wrap" @click="up_layer">
                <i class="fas fa-angle-left"></i>
            </div>
            <div id="category_title_wrap">
                {{category}} / {{sub_category}}
            </div>
        </div>
        <div id="category_lecture_list">
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
    export default {
        name: "OptionCategoryLectureList",
        props: ['category', 'sub_category'],
        data(){
            return{
                search_data:[
                    {
                        title: '문제해결및실습:JAVA',
                        professor: '안용학',
                        classroom: '율401',
                        point: '3',
                        code: '001',
                        timetable:[
                            {
                                day: '화',
                                start: '13:30',
                                end: '15:00',
                            },
                            {
                                day: '목',
                                start: '13:30',
                                end: '15:00'
                            }
                        ]
                    },//JAVA
                    {
                        title: '공학설계기초(산학프로젝트입문)',
                        professor: '송재욱',
                        classroom: '광711',
                        point: '3',
                        code: '002',
                        timetable:[
                            {
                                day: '월',
                                start: '13:30',
                                end: '15:00',
                            },
                            {
                                day: '수',
                                start: '13:30',
                                end: '15:00',
                            }
                        ]
                    },//공학설계
                    {
                        title: '컴퓨터구조론',
                        professor: '박기호',
                        classroom: '율305',
                        point: '3',
                        code: '003',
                        timetable:[
                            {
                                day: '화',
                                start: '16:30',
                                end: '18:00',
                            },
                            {
                                day: '목',
                                start: '16:30',
                                end: '18:00'
                            }
                        ]
                    },//컴푸터구조론
                    {
                        title: '알고리즘및실습',
                        professor: '나중채',
                        classroom: '율202, 율 404',
                        point: '4',
                        code: '004',
                        timetable:[
                            {
                                day: '화',
                                start: '12:00',
                                end: '13:30',
                            },
                            {
                                day: '화',
                                start: '18:00',
                                end: '20:00',
                            },
                            {
                                day: '목',
                                start: '12:00',
                                end: '13:30',
                            }
                        ]
                    }
                ]
            }
        },
        methods:{
            add_option_lecture(lecture){
                this.$store.dispatch('ADD_OPTION_LECTURE', lecture);
                if(lecture.out.status === "succeed"){
                    this.$bus.$emit('add_option_lecture',lecture);
                }
            },
            up_layer(){
                this.$bus.$emit('up_layer');
            }
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    #option_category_lecture_list{
        display: inline-block;
        height: 100%;
    }
    #category_wrap{
        font-size: 18px;
        font-weight: bold;
        margin-top: 10px;
        padding-bottom: 5px;
        margin-bottom: 4px;
        height: 30px;
        border-bottom: 1px solid #353866;
    }
    #angle_left_icon_wrap{
        display: inline-block;
        height: 100%;
        width: 20%;
        color:  #353866;
        cursor: pointer;
    }
    #category_title_wrap{
        display: inline-block;
        width: 80%;
        text-align: left;

    }

    #category_lecture_list{
        display: inline-block;
        height: calc(100% - 50px);
        overflow-y: scroll;
    }

    #lecture_data{
        display: inline-block;
        border: 2px solid #aaabd3;
        border-radius: 10px;
        width: 80%;
        height: 28%;
        padding-left: 15px;
        padding-right: 15px;
        color: #566270;
    }
    #lecture_data:hover{
        border: 2px solid #353866;
        cursor: pointer;
        color: #353866;
        background-color:rgba(170, 173, 211,0.3);
    }
    #lecture_title{
        display: inline-block;
        float: left;
        width: 67%;
        height: 55%;
        font-size: 14px;
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
        font-size: 13px;
        text-align: left;
    }
    #lecture_time_wrap{
        display: inline-block;
        width: 30%;
        height: 100%;
        font-size: 12px;
    }

</style>
