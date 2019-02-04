<template>
    <div id="result">
        <div id="scheduler_data_wrap" :style="{width: 'calc((30vw + 10px) * '+length+')', 'min-width': 370*length+10+'px'}">
            <div id="scheduler_data" v-for="i in 10">
                <div id="remove_button">
                    <i class="fas fa-times"></i>
                </div>
                <scheduler style="height: 60vh;"></scheduler>
            </div>
        </div>

        <div v-if="schedules" id="mobile_scheduler_data_wrap" :style="{width: 'calc(100vw * '+length+')', 'min-width': 370*length+10+'px'}">
            <div id="mobile_scheduler_data" v-for="i in 10">
                <div id="mobile_remove_button">
                    <i class="fas fa-times"></i>
                </div>
                <scheduler style="height: 65vh;"></scheduler>
            </div>
        </div>
        <div id="mobile_move_button">
            <div class="move_button" @click="move_left" style="float: left;">
                <i class="fas fa-chevron-left"></i>
            </div>
            <div class="move_button" @click="move_right" style="float: right;">
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
            console.log(this.schedules);
        },
        methods:{
            move_left(){
                document.getElementById("mobile_scheduler_data_wrap").style.left = this.left + 100 + 'vw';
                this.left+=100;
            },
            move_right(){
                document.getElementById("mobile_scheduler_data_wrap").style.left = this.left - 100 + 'vw';
                this.left-=100;
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
    #remove_button{
        display: inline-block;
        font-size: 5vh;
        float: right;
    }
    #mobile_scheduler_data_wrap{
        display: none;
    }
    #mobile_move_button{
        display: none;
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
            border: 1px solid;
            left: 0;
        }

        #mobile_scheduler_data{
            display: inline-block;
            width: 95vw;
            margin-right: 5vw;
            min-width: 90vw;
            margin-top: 7vh;
            height: 70vh;
            margin-left: 0;
            min-height: 420px;
            float: left;
        }
        #mobile_remove_button{
            display: inline-block;
            float: right;
            font-size: 5vh;
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
