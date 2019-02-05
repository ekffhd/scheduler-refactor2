<template>
    <div id="input_basic_inform">
        <!--<div>
            <p>학과 선택</p>
            <label>
                <select>
                    <option v-for="(department, i) in departments" :key="i">{{department.title}}</option>
                </select>
            </label>
        </div>
        <div id="point_wrap">
            <p id="set_point">학점 선택 </p>
            <input id="set_point_input"/>
            <p id="left_point">남은 학점 : 10</p>
        </div>-->
        <div id="warning">선택된 공강시간에 해당하는 강의들은 결과에 나오지 않습니다</div>

        <div id="break_wrap">
            <i class="fas fa-plus-circle" @click="add_break_time()"></i>
            <div id="set_break_wrap">
                <div v-for="(break_time, index) in break_time_data" :key="index" class="break_time_select">
                    <select v-model="break_time.day" class="day_select">
                        <option value="mon">월</option>
                        <option value="tue">화</option>
                        <option value="wed">수</option>
                        <option value="thu">목</option>
                        <option value="fri">금</option>
                        <option value="all">매일</option>
                    </select>
                    <select v-model="break_time.start_time" class="time_select">
                        <option v-for="(start,index) in time_list" :key="index" >{{start}}</option>
                    </select>
                    <div style="display: inline-block; width: 5%; float: left;">
                        ~
                    </div>
                    <select v-model="break_time.end_time" class="time_select">
                        <option v-for="(end,index) in time_list" :key="index" >{{end}}</option>
                    </select>
                    <div class="minus_icon">
                        <i @click="sub_break_time(index)" class="fas fa-minus-circle"></i>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "MobileInputBasicInform",
        data(){
            return{
                departments: [],
                day_list: ["월","화","수","목","금"],
                option_day_value: ["mon","tue","wed", "thu", "fri"],
                time_list:[
                    "09:00",
                    "09:30",
                    "10:00",
                    "10:30",
                    "11:00",
                    "11:30",
                    "12:00",
                    "12:30",
                    "13:00",
                    "13:30",
                    "14:00",
                    "14:30",
                    "15:00",
                    "15:30",
                    "16:00",
                    "16:30",
                    "17:00",
                    "17:30",
                    "18:00",
                    "18:30",
                    "19:00",
                    "19:30",
                    "20:00",
                    "20:30",
                    "21:00",
                ],
                break_time_data: this.$store.state.InputData.break_time,
                break_time_count: 1,
            }
        },
        methods:{
            add_break_time(){
                this.break_time_count++;
                this.$store.state.InputData.break_time.push({day: "", start_time: "", end_time: ""});
                //store
            },
            sub_break_time(index){
                this.break_time_count--;
                this.break_time_data.splice(index, 1);
                //store
            },
            submit(){
                const pin_lecture_data = this.$store.state.InputData.pin_lectures;
                const option_lecture_data = this.$store.state.InputData.option_lectures;
                const break_time_data = this.$store.state.InputData.break_time;

                if (break_time_data.length === 0){
                    alert('공강시간을 최소 한개 이상 선택해야 합니다.');
                    return;
                }

                let timetable = "";

                for (let i=0; i<break_time_data.length; i++){
                    let day = break_time_data[i].day;
                    let start = break_time_data[i].start_time.replace(':', "");
                    let end = break_time_data[i].end_time.replace(':', "");

                    if (day === "" || start === "" || end === ""){
                        continue;
                    }
                    if (i >= 1){
                        timetable += ',';
                    }
                    if (break_time_data[i].day === 'all'){
                        timetable += start + ':' +end;
                    }
                    else {
                        timetable += day + ':' + start + ':' + end;
                    }
                }

                let fixed = "";

                for (let i=0; i<pin_lecture_data.length; i++){
                    if (i >= 1) {
                        fixed += ',';
                    }
                    fixed += pin_lecture_data[i].id;
                }

                let selected = "";

                for (let i=0; i<option_lecture_data.length; i++){
                    if (i >= 1){
                        selected += ',';
                    }
                    selected += option_lecture_data[i].code;
                }

                const submit_data = {
                    'timetable' : timetable,
                    'fixed' : fixed,
                    'selected': selected
                };

                this.$store.dispatch('SUBMIT', submit_data);

                this.$router.push('/loading');

            },
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    #input_basic_inform{
        height: 100%;
        font-size: 13px;
        color: #353866;

    }
    #point_wrap{
        display: inline;
        width: 100%;
    }
    #set_point{
        display: inline-block;
        width: 20%;
        font-weight: bold;
        float: left;
    }
    #set_point_input{
        display: inline-block;
        outline: none;
        width: 10%;
        height: 15px;
        text-align: center;
        border-radius: 5px;
        border: 1px solid #353866;
        text-shadow: none;
        float: left;
        margin-bottom: 5px;
    }
    #left_point{
        display: inline-block;
        width: 40%;
        float: right;
        font-weight: bold;
    }
    #set_point_input:focus{
        box-shadow: 1px 1px 5px;
    }
    #warning{
        display: inline-block;
        font-size: 11px;
        color: gray;
        width: 100%;
        float: left;
        height: 20px;

    }

    #break_wrap{
        display: inline-block;
        width: 100%;
        height: calc(90% - 20px);
    }
    #break_wrap > i{
        display: inline-block;
        width: 10%;
        float: left;
        height: 100%;
        font-size: 15px;
    }
    #set_break{
        display: inline-block;
        width: 25%;
        margin-bottom: 5%;
        font-weight: bold;
        font-size: 12px;
        float: left;
    }
    #set_break_wrap{
        display: inline-block;
        width: 70%;
        margin-left: 10%;
        height: 100%;
        overflow-y: scroll;
        float: right;
        padding-left: 3%;
    }
    #set_break{
        height: 30%;
    }
    select{
        background-color: white;
        border: 1px solid #aaabd3;
        outline:none;
        -webkit-appearance: none; /* 화살표 없애기 for chrome*/
        -moz-appearance: none;
        text-align: center;
        font-size: 10px;
        height: 17px;
        padding-left: 5px;
    }
    select:focus{
        border: 2px solid #353866;
               /* 화살표 없애기 공통*/
    }
    select::-ms-expand {
        display: none;            /* 화살표 없애기 for IE10, 11*/
    }
    .break_time_select{
        display: inline-block;
        height: 10%;
        width: 100%;
    }
    .day_select{
        display: inline-block;
        width: 13%;
        margin-right: 5%;
        outline: none;
        float: left;
    }
    .time_select{
        display: inline-block;
        float: left;
    }
    .minus_icon{
        display: inline-block;
        float: left;
        width: 10%;
        margin-right: 5px;
        font-size: 15px;
    }

</style>
