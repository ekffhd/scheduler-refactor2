<template>
    <div id="result">
        <div id="scheduler_data_wrap" :style="{width: 350+'vw'}">
            <div id="scheduler_data" v-for="i in 10">
                <scheduler style="height: 80%;"></scheduler>
            </div>
        </div>
    </div>
</template>

<script>
    import Scheduler from '../components/InputInform/Scheduler'
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
        display: inline-block;
        height: 100vh;
        width: auto;
    }
    #scheduler_data{
        display: inline-block;
        width: auto;
        margin-top: 20vh;
        height: 80vh;
        float: left;
        margin-left: 2vw;
    }

</style>
