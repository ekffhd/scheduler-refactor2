<template>
    <div id="option_category_list">
        <div id="category_data" v-for="(category, index) in categories" :key="index" @click="category_to_sub(category)">
            <div id="category_title_wrap">
                {{category}}
            </div>
            <div id="angle_icon_wrap">
                <i class="fas fa-angle-right"></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OptionCategoryList",
        data(){
            return{
                categories: ['인문','사회','IT','과학'],
            }
        },
        methods:{
            category_to_sub(category){
                this.$bus.$emit('category_to_sub', category);
            }
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    #option_category_list{
    }
    #category_data{
        display: inline-block;
        height: 30%;
        width: 100%;
        border-bottom: 1px solid  #353866;
        cursor: pointer;
    }
    #category_data:hover{
        background-color:rgba(170, 173, 211,0.3);
    }
    #category_title_wrap{
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
        color:  #353866;;
    }
    #angle_icon_wrap{
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
