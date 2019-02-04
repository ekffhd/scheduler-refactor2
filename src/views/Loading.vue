<template>
    <div id="loading">
        <div id="wrap">
            <div id="inner">
                <div id="content_wrap">
                    <div id="load_icon">
                        <i class="fas fa-spinner fa-2x fa-spin"></i>

                    </div>
                    <div id="text">
                        결과를 불러오는 중 입니다.
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Loading",
        mounted(){
            const check = setInterval(()=>{
                console.log('hi');
                if (this.$store.state.TimeTable.result_data.length > 0){
                    console.log(this.$store.state.TimeTable.result_data);
                    clearInterval(check);
                }
            }, 500);
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    #loading{
        display: inline-block;
        width: 100%;
        height: 100%;
        background-color: #f8f8f8;
    }
    #wrap{

        display: table;
        width: 100%;
        height: 100%;
    }
    #inner{
        display: table-cell;
        vertical-align: middle;
    }
    #content_wrap{
        position: relative;
        height: 40px;
        width: 100%;

    }
    #load_icon{
        position: absolute;
        display: inline-block;
        border-style: none;
        width: 10%;
        height:100%;
        margin: auto;
        left: 35%;
        font-size: 20px;
        color: #353866;
    }
    #text{
        position: absolute;
        display: inline-block;
        height: 100%;
        width: 400px;
        left: 45%;
        font-weight: bold;
        font-size: 25px;
        text-align: left;
        padding-top: 5px;
        color: #353866;
    }
</style>
