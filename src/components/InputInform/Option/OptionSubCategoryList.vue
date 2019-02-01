<template>
    <div id="option_sub_category_list">
        <div id="category_wrap">
            <div id="angle_left_icon_wrap">
                <i class="fas fa-angle-left" @click="up_layer"></i>
            </div>
            <div id="category_title_wrap">
                {{category}}
            </div>
        </div>
        <div id="sub_category_wrap">
            <div id="sub_category_data" v-for="(category, index) in sub_category" :key="index" @click="sub_to_lecture(category)">
                <div id="sub_category_title_wrap">
                    {{category}}
                </div>
                <div id="angle_right_icon_wrap">
                    <i class="fas fa-angle-right"></i>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "OptionSubCategoryList",
        props:['category'],
        data(){
            return{
                sub_category: ['컴퓨터공학', '정보보호', '데이터분석', '머신러닝', '인공지능', '프로그래밍언어'],
            }
        },
        methods:{
            sub_to_lecture(sub_category){
                this.$bus.$emit('sub_to_lecture',sub_category);
            },
            up_layer(){
                this.$bus.$emit('up_layer');
            }
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    #option_sub_category_list{
        display: inline-block;
        width: 100%;
        height: 100%;
    }
    #category_wrap{
        font-size: 18px;
        font-weight: bold;
        margin-top: 10px;
        padding-bottom: 5px;
        height: 30px;
        border-bottom: 1px solid #353866;
    }
    #angle_left_icon_wrap{
        display: inline-block;
        height: 100%;
        width: 20%;
        color:  #353866;
        cursor: pointer;
    }
    #category_title_wrap{
        display: inline-block;
        height: 100%;
        width: 80%;
        text-align: left;
        color: #353866;
    }

    #sub_category_wrap{
        display: block;
        width: 100%;
        height: 84%;
        font-size: 18px;
        font-weight: bold;
        overflow-y: scroll;
    }
    #sub_category_data{
        display: inline-block;
        height: auto;
        width: 100%;
        border-bottom: 1px solid  #353866;
        cursor: pointer;
    }
    #sub_category_data:hover{
        background-color:rgba(170, 173, 211,0.3);
    }

    #sub_category_title_wrap{
        display: inline-block;
        height: 100%;
        float: left;
        width: 60%;
        font-size: 18px;
        text-align: left;
        padding-left: 5%;
        padding-top: 3%;
        padding-bottom: 3%;
        font-weight: bold;
        color:  #353866;
    }
    #angle_right_icon_wrap{
        display: inline-block;
        width: 30%;
        height: 100%;
        font-size: 20px;
        padding-top: 3%;
        padding-bottom: 3%;
        padding-right: 5%;
        text-align: right;
        color:  #aaabd3;
    }



</style>
