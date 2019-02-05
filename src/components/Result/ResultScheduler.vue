<template>
    <div style="height: 100%;">
        <div id="scheduler_wrap">
            <div class="table_head">
                <table>
                    <thead>
                        <th>&nbsp;</th>
                        <td class="day" style="border-style: none;">월</td>
                        <td class="day" style="border-style: none;">화</td>
                        <td class="day" style="border-style: none;">수</td>
                        <td class="day" style="border-style: none;">목</td>
                        <td class="day" style="border-style: none;">금</td>
                    </thead>
                </table>
            </div>
            <div class="table_body">
                <table>
                    <tbody>
                        <tr>
                            <th>
                                <div class="hours">
                                    <div v-for="hour in hours" :key="hour" style="text-align: right;">
                                        {{hour}}
                                    </div>
                                </div>
                            </th>
                            <td style="position: relative; z-index: 900; width: calc(94% / 5 - 4px); border-radius:  10px 0 0 10px; overflow:hidden; border-top: 1px solid; border-left: 1px solid; border-bottom: 1px solid">
                            <div class="cols" v-for="(lecture, index) in mon" :key="index">
                                    <div v-for="(timetable, index) in lecture.timetable" :key="index">
                                        <div v-if="timetable.day === '월' " class="lecture_wrap"  v-bind:style="{top: 'calc('+calculate_top_margin(timetable, '월')+'% )', height: 'calc('+calculate_lecture_height(timetable.start, timetable.end) + '% - 1px)'}">
                                            <div class="lecture_inner">
                                                <div class="lecture_title">
                                                    {{lecture.title}}
                                                </div>
                                                <div class="lecture_professor">
                                                    {{lecture.division}}
                                                </div>
                                                <div class="lecture_professor">
                                                    {{lecture.professor}}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="grids">
                                    <div class="grid mon" style="border-radius: 10px 0 0 0;">&nbsp;</div>
                                    <div class="grid mon">&nbsp;</div>
                                    <div class="grid mon">&nbsp;</div>
                                    <div class="grid mon">&nbsp;</div>
                                    <div class="grid mon">&nbsp;</div>
                                    <div class="grid mon">&nbsp;</div>
                                    <div class="grid mon">&nbsp;</div>
                                    <div class="grid mon">&nbsp;</div>
                                    <div class="grid mon">&nbsp;</div>
                                    <div class="grid mon">&nbsp;</div>
                                    <div class="grid mon">&nbsp;</div>
                                    <div class="grid mon" style="border-radius: 0 0 0 10px;">&nbsp;</div>
                                </div>
                            </td>
                            <td style="width: calc(94% / 5 - 4px);">
                                <div class="cols" v-for="(lecture, index) in tue" :key="index">
                                    <div v-for="(timetable, index) in lecture.timetable" :key="index">
                                        <div class="lecture_inner">
                                            <div v-if="timetable.day === '화' " class="lecture_wrap"  v-bind:style="{top: 'calc('+calculate_top_margin(timetable, '화')+'% )', height: 'calc('+calculate_lecture_height(timetable.start, timetable.end) + '% - 1px)'}">
                                                <div class="lecture_inner">
                                                    <div class="lecture_title">
                                                        {{lecture.title}}
                                                    </div>
                                                    <div class="lecture_professor">
                                                        {{lecture.division}}
                                                    </div>
                                                    <div class="lecture_professor">
                                                        {{lecture.professor}}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="grids">
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                </div>
                            </td>
                            <td style="width: calc(94% / 5 - 4px);">
                                <div class="cols" v-for="(lecture, index) in wed" :key="index">
                                    <div v-for="(timetable, index) in lecture.timetable" :key="index">
                                        <div v-if="timetable.day === '수'" class="lecture_wrap"  v-bind:style="{top: 'calc('+calculate_top_margin(timetable, '수')+'% )', height: 'calc('+calculate_lecture_height(timetable.start, timetable.end) + '% - 1px)'}">
                                            <div class="lecture_inner">
                                                <div class="lecture_title">
                                                    {{lecture.title}}
                                                </div>
                                                <div class="lecture_professor">
                                                    {{lecture.division}}
                                                </div>
                                                <div class="lecture_professor">
                                                    {{lecture.professor}}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="grids">
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                </div>
                            </td>
                            <td style="width: calc(94% / 5 - 4px);">
                                <div class="cols" v-for="(lecture, index) in thu" :key="index">
                                    <div v-for="(timetable, index) in lecture.timetable" :key="index">
                                        <div v-if="timetable.day === '목' " class="lecture_wrap"  v-bind:style="{top: 'calc('+calculate_top_margin(timetable, '목')+'% )', height: 'calc('+calculate_lecture_height(timetable.start, timetable.end) + '% - 1px)'}">
                                            <div class="lecture_inner">
                                                <div class="lecture_title">
                                                    {{lecture.title}}
                                                </div>
                                                <div class="lecture_professor">
                                                    {{lecture.division}}
                                                </div>
                                                <div class="lecture_professor">
                                                    {{lecture.professor}}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="grids" >
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid" >&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                </div>

                            </td>
                            <td style="width: calc(94% / 5 - 4px); border-radius:0 10px 10px 0; overflow: hidden">
                                <div class="cols" v-for="(lecture, index) in fri" :key="index">
                                    <div v-for="(timetable, index) in lecture.timetable" :key="index">
                                        <div v-if="timetable.day === '금'" class="lecture_wrap"  v-bind:style="{width: 'calc(100% + 0.1px)', top: 'calc('+calculate_top_margin(timetable, '금')+'%)', height: 'calc('+calculate_lecture_height(timetable.start, timetable.end) + '% - 1px)'}">
                                            <div class="lecture_inner">
                                                <div class="lecture_title">
                                                    {{lecture.title}}
                                                </div>
                                                <div class="lecture_professor">
                                                    {{lecture.division}}
                                                </div>
                                                <div class="lecture_professor">
                                                    {{lecture.professor}}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="grids">
                                    <div class="grid" style="border-radius: 0 10px 0 0;">&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid">&nbsp;</div>
                                    <div class="grid" style="border-radius: 0 0 10px 0;">&nbsp;</div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Scheduler",
        props: ["schedule"],
        data(){
            return{
                hours:['9','10','11','12','1','2','3','4','5','6','7','8'],
                mon: [],
                tue: [],
                wed: [],
                thu: [],
                fri: [],
                one_px: '1px',
            }
        },
        mounted(){
            this.$bus.$on('add_pin_lecture',this.add_pin_lecture);
            this.$bus.$on('sub_pin_lecture',this.sub_pin_lecture);

            if (this.schedule.length > 0){
                for (let i=0; i<this.schedule.length; i++){
                    this.add_pin_lecture(this.schedule[i]);
                }
            }
        },//mounted()
        methods:{
            add_pin_lecture(lecture){
                for(let i=0; i<lecture.timetable.length; i++){
                    if(lecture.timetable[i].day === '월'){
                        this.mon.push(lecture);
                    }
                    else if(lecture.timetable[i].day === '화'){
                        this.tue.push(lecture);
                    }
                    else if(lecture.timetable[i].day === '수'){
                        this.wed.push(lecture);
                    }
                    else if(lecture.timetable[i].day === '목'){
                        this.thu.push(lecture);
                    }
                    else if(lecture.timetable[i].day === '금'){
                        this.fri.push(lecture);
                    }
                }
            },//add_pin_lecture
            calculate_top_margin(time){
                let hour = parseInt(time.start[0]+time.start[1]);
                let min = parseInt(time.start[3]+time.start[4]);
                let margin = hour - 9;

                margin *= 100/12;
                if(min !== 0){
                    margin += 100/12/2;
                }
                return margin;
            },//calculate_top_margin
            calculate_lecture_height(start_time, end_time){
                let end = parseFloat(end_time[0]+end_time[1]) - 9;
                if(end_time[3] !== '0'){
                    end += 0.5;//6
                }
                let start = parseFloat(start_time[0]+start_time[1]) - 9;
                if(start_time[3] !== '0'){
                    start += 0.5;//4.5
                }

                let lecture_height = (end - start);
                return lecture_height* (100/12.0);
            },//calculate_lecture_height
            sub_pin_lecture(lecture){
                let sub_index = this.mon.indexOf(lecture);
                while(sub_index !== -1){
                    this.mon.splice(sub_index, 1);
                    sub_index = this.mon.indexOf(lecture);
                }

                sub_index = this.tue.indexOf(lecture);
                while(sub_index !== -1){
                    this.tue.splice(sub_index, 1);
                    sub_index = this.tue.indexOf(lecture);
                }

                sub_index = this.wed.indexOf(lecture);
                while(sub_index !== -1) {
                    this.wed.splice(sub_index, 1);
                    sub_index = this.wed.indexOf(lecture);
                }

                sub_index = this.thu.indexOf(lecture);
                while(sub_index !== -1){
                    this.thu.splice(sub_index, 1);
                    sub_index = this.thu.indexOf(lecture);
                }

                sub_index = this.fri.indexOf(lecture);
                while(sub_index !== -1){
                    this.fri.splice(sub_index, 1);
                    sub_index = this.fri.indexOf(lecture);
                }
            },//sub_pin_lecture
        },//methods
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    #scheduler_wrap{
        height: 100%;
        width: auto;
    }
    table{
        border-spacing: 0;
        border-collapse: collapse;
    }
    td{
        position: relative;
        width: 100%;
    }
    .cols{
        position: absolute;
        display: inline-block;
        height: 100%;
        width: 100%;
        left: 0;
    }
    .day{
        color:#353866;
        font-weight: bold;
        height: 5%;
    }

    .lecture_wrap{
        position: absolute;
        display: inline-block;
        overflow: hidden;
        /*top: calc(100% / 12);*/
        left: 0;
        width:100%;
        font-size: 10px;
        background-color: rgba(217,219,235,1);
        text-align: left;
        color:#353866;
    }
    .lecture_inner{
        display:inline-block;
        margin-top: 3%;
        margin-left: 8%;
    }
    .lecture_title{
        font-weight: bold;
    }
    .table_head{
        display: block;
        width: 100%;
        height: 30px;
    }
    .table_head>table{
        width: 100%;
        height: 100%;
    }

    .table_head>table>thead>th{
        display: inline-block;
        width: 6%;
        float: left;
        height: 100%;
    }

    .table_head>table>thead>td{
        display: block;
        width: calc(94% / 5);
        float: left;
        height: 100%;
    }
    .table_body{
        display: block;
        width: 100%;
        height: calc(93% - 2px);
    }

    .table_body>table{
        display: inline-block;
        border-spacing: 0;
        height: 100%;
        width: 100%;
    }

    .table_body>table>tbody{
        display: inline-block;
        height: 100%;
        width: 100%;
    }
    .table_body>table>tbody>tr{
        display: inline-block;
        width: 100%;
        height: 100%;
    }
    .table_body>table>tbody>tr>th{
        display: inline-block;
        float: left;
        width: 6%;
        height: 100%;
    }
    .hours{
        display: block;
        width: 100%;
        height: 100%;
        float: right;
    }

    .hours>div{
        width: 60%;
        display:block;
        height: calc( (100% - 1px) / 12 );
        text-align: right;
        font-size: 13px;
    }
    .table_body>table>tbody>tr>td{
        display: inline-block;
        float: left;
        width: calc( 18% - 1px);
        height: 100%;
    }
    .grids{
        display: inline-block;
        height: 100%;
        width: 100%;
    }
    .grid{
        display:inline-block;
        width: 100%;
        height: calc( (100% / 12) - 1px);
        border-bottom: 1px solid #353866;
        /*border-left: 1px solid #353866;*/
        background-color: white;
    }

   .table_body>table>tbody>tr>td:last-child>.grids>.grid{
       /*border-right: 1px solid #353866;*/
   }

    .grids>.grid:first-child{
        /*border-top:1px solid #353866;*/
    }


    .grids>.grid:last-child{
        border-bottom: none;
    }

    .mon{
        border-left: none;
    }
    td{
        border-top: 1px solid;
        border-bottom: 1px solid;
        border-right: 1px solid;
    }


</style>
