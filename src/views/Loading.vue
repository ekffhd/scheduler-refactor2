<template>
    <div id="loading">
        <div id="wrap">
            <div id="inner">
                <div id="content_wrap">
                    <div id="load_icon">
                        <i class="fas fa-spinner fa-2x fa-spin"></i>

                    </div>
                    <div id="warn">
                        공강시간이 너무 적거나, 선택강의가 너무 많으면 경우의수가 너무 많아질 수 있습니다.
                    </div>
                    <div id="text">
                        결과를 불러오는 중 입니다.
                    </div>
                    <div id="mobile_text">
                        로딩 중
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
                if (this.$store.state.TimeTable.result_data.length > 0){
                    clearInterval(check);
                    this.$router.push('/result_list');
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
        height: 30%;
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
        top: 30%;
        font-size: 20px;
        color: #353866;
    }
    #text{
        position: absolute;
        display: inline-block;
        height: 100%;
        width: 400px;
        left: 45%;
        top: 30%;
        font-weight: bold;
        font-size: 25px;
        text-align: left;
        padding-top: 5px;
        color: #353866;
    }
    #mobile_text{
        display: none;
    }
    #warn{
        display: inline-block;
        width: 100%;
        height: auto;
        font-weight: bold;
        font-size: 13px;
    }
    @media (max-width: 769px){
        #warn{
            display: inline-block;
            width: 250px;
            height: auto;
            margin: 30% auto auto;
            font-weight: bold;
            font-size: 13px;
        }
        #loading{
            width: 100vw;
            height: 100vh;
        }
        #content_wrap{
            height: 80%;
            width: 100%;
        }
        #load_icon{
            height:auto;
            width: 10%;
            left: 33%;
            top: 40%;

        }
        #text{
            display: none;
        }
        #mobile_text{
            position: absolute;
            display: inline-block;
            left: 45%;
            width: 100px;
            top: 40%;
            font-size: 30px;
            font-weight: bold;
        }
    }
</style>
