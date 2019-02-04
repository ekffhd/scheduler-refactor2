<template>
    <div id="result">
        <div id="scheduler_data_wrap" :style="{width: 'calc((30vw + 10px) * 10)', 'min-width': 370*10+10+'px'}">
            <div id="scheduler_data" v-for="i in 10">
                <scheduler style="height: 100%;"></scheduler>
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
</style>
