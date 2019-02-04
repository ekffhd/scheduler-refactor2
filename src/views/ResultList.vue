<template>
    <div id="result">
        <div id="scheduler_data_wrap" :style="{width: 'calc((30vw + 10px) * 10)', 'min-width': 370*10+10+'px'}">
            <div id="scheduler_data" v-for="i in 10">
                <div>
                    {{i}}
                </div>
                <scheduler style="height: 100%;"></scheduler>
            </div>
        </div>

        <div id="mobile_scheduler_data_wrap" :style="{width: 'calc(100vw * 10)', 'min-width': 370*10+10+'px'}">
            <div id="mobile_scheduler_data" v-for="i in 10">
                <div>
                    x
                </div>
                <scheduler style="height: 100%;"></scheduler>
            </div>
        </div>
        <div id="mobile_move_button">
            <div class="move_button" @click="move_left">
                <
            </div>
            <div class="move_button" @click="move_right">
                >
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
            }
        },
        methods:{
            move_left(){
                console.log('hi');
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
        height: 60vh;
        min-height: 420px;
        float: left;
        margin-top: 20vh;
        margin-left: 10px;
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
            left: 0;
        }
        #mobile_scheduler_data{
            display: inline-block;
            width: 95vw;
            margin-right: 5vw;
            min-width: 90vw;
            margin-top: 5vh;
            height: 70vh;
            margin-left: 0;
            min-height: 420px;
            float: left;
        }
        #mobile_move_button{
            display: inline-block;
            margin-top: 90vh;
            width: 100vw;
            height: 10vh;
            background-color: pink;
        }
        .move_button{
            display: inline-block;
            position: relative;
            height: 10vh;
            width: 40vw;
            border: 1px solid;
            z-index: 900;
        }

    }
</style>
