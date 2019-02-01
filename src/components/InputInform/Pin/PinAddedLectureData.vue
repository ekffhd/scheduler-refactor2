<template>
    <div id="pin_added_lecture_data_wrap" @mouseenter="show = true" @mouseleave="show = false">
        <div id="lecture_data">
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
        <div id="minus_hover_wrap" v-show="show===true">
            <div class="wrap">
                <div class="inner">
                    <i id="minus_icon" class="fas white fa-times" ></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PinLectureData",
        props:['lecture'],
        data(){
            return{
                show: false,
            }
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    #pin_added_lecture_data_wrap{
        position: relative;
        width: calc(100% - 30px);
        height: 100%;
        padding-left: 15px;
        padding-right: 15px;
        cursor: pointer;
    }
    #lecture_data{
        display: inline-block;
        width: 100%;
        height: 100%;
        margin-bottom: 5px;
    }
    /*
    #lecture_data_wrap:hover{
        border: 2px solid #353866;
        color: #353866;
        background-color:rgba(170, 173, 211,0.3);
    }*/
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
        margin: auto;
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
    #minus_hover_wrap{
        position: absolute;
        display: inline-block;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 8px;
        background-color: rgba(255, 255, 255, 0.4)

    }
    #minus_icon{
        display: inline-block;
        font-size: 30px;
        margin-left: calc(50% - 10.5px);
        width: 21px;
        color: #353866;
    }
</style>
