<template>
    <div id="result">
        <div id="scheduler_data_wrap" :style="{width: 'calc((30vw + 10px) * '+length+')', 'min-width': 370*length+10+'px'}">
            <div id="scheduler_data" v-for="(schedule, index) in schedules" :key="schedule.id">
                <div class="number_text">
                    <div class="wrap">
                        <div class="inner">
                            {{index + 1}} / {{schedules.length}}</div>
                        </div>
                    </div>
                <div id="remove_button">
                    <i @click="remove_lecture(schedule.id)" class="fas fa-times"></i>
                </div>
                <scheduler :schedule="schedule" style="height: 60vh;"></scheduler>
            </div>
        </div>

        <div v-if="schedules" id="mobile_scheduler_data_wrap" :style="{width: 'calc(100vw * '+length+')', 'min-width': 370*length+10+'px'}">
            <div id="mobile_scheduler_data" v-for="(schedule, index) in schedules" :key="schedule.id">
                <div class="number_text">{{index + 1}} / {{schedules.length}}</div>
                <div id="mobile_remove_button" >
                    <i @click="remove_lecture(schedule.id)" class="fas fa-times"></i>
                </div>
                <scheduler :schedule="schedule" style="display: block;  margin-top: 3vh;height: 65vh;"></scheduler>
            </div>
        </div>
        <div id="mobile_move_button">
            <div class="move_button" id="left_button" @click="move_left" style="float: left;">
                <i class="fas fa-chevron-left"></i>
            </div>
            <div class="move_button" id="right_button" @click="move_right" style="float: right;">
                <i class="fas fa-chevron-right"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import Scheduler from '../components/Result/ResultScheduler'
    export default {
        name: "ResultList",
        components:{
            'scheduler': Scheduler,
        },
        data(){
            return{
                left: 0,
                right: 0,
                schedules: [],
                length: 0,
            }
        },
        mounted(){
            this.schedules = this.$store.getters.GET_RESULT;
            this.length = this.schedules.length;
            for(let i=0; i<this.length; i++){
                this.schedules[i].id = i;
            }
        },
        methods:{
            move_left(){
                if(this.left < 0){
                    document.getElementById("mobile_scheduler_data_wrap").style.left = this.left + 100 + 'vw';
                    document.getElementById("right_button").style.display = 'inline-block';
                    this.left+=100;
                    if(this.left === 0){
                        document.getElementById("left_button").style.display= 'none';
                    }
                }
            },
            move_right(){
                if(this.left > -100 * this.length + 100){
                    document.getElementById("mobile_scheduler_data_wrap").style.left = this.left - 100 + 'vw';
                    document.getElementById("left_button").style.display = 'inline-block';
                    this.left-=100;
                    if(this.left <= -100 * this.length +100 ){
                        document.getElementById("right_button").style.display= 'none';

                    }
                }

            },
            remove_lecture(index){
                const select = confirm('해당 시간표를 삭제하시겠습니까?');
                if (select === true){
                    this.schedules = this.schedules.filter((schedule)=>{
                        return schedule.id != index;
                    });
                    this.length--;
                }

            }
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    #result{
        display: inline-block;
        height: 100vh;
        overflow-x: scroll;
        width: 100vw;
    }
    #scheduler_data_wrap{
        overflow-x: scroll;
        -ms-overflow-x: scroll;
        display: inline-block;
        height: 98vh;
        min-height: 676px;
    }
    #scheduler_data{
        display:block;
        width: 30vw;
        min-width: 360px;
        height: 65vh;
        min-height: 420px;
        float: left;
        margin-top: 20vh;
        margin-left: 10px;
    }
    .number_text{
        display: inline-block;
        font-size: 18px;
        height: 5vh;
    }
    #remove_button{
        display: inline-block;
        font-size: 4vh;
        height: 3vh;
        float: right;
    }
    #mobile_scheduler_data_wrap{
        display: none;
    }
    #mobile_move_button{
        display: none;
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

    @media ( max-width: 769px) {
        #result{
            position: relative;
            overflow: hidden;
        }
        #scheduler_data_wrap{
            display: none;
        }
        #scheduler_data{
            display: none;
        }
        #mobile_scheduler_data_wrap{
            overflow-x: scroll;
            -ms-overflow-x: scroll;
            display: inline-block;
            height: 98vh;
            min-height: 676px;
            position: absolute;
            transition: .7s;
            backface-visibility: hidden;
            left: 0;
        }

        #mobile_scheduler_data{
            display: inline-block;
            width: 95vw;
            margin-left: 2vw;
            margin-right: 3vw;
            min-width: 90vw;
            margin-top: 7vh;
            height: 75vh;
            min-height: 420px;
            float: left;
        }
        #mobile_remove_button{
            display: inline-block;
            float: right;
            font-size: 4vh;
            height: 5vh;
        }
        #mobile_move_button{
            display: inline-block;
            margin-top: 93vh;
            width: 100vw;
            height: 7vh;
            background-color: #353866;
        }
        .move_button{
            display: inline-block;
            position: relative;
            height: 7vh;
            width: 40vw;
            border: 1px solid;
            z-index: 900;
        }
        .move_button>i{
            display: block;
            color: white;
            margin-top: 1vh;
            font-size: 5vh;
            margin-bottom: 1vh;
        }

    }
</style>
