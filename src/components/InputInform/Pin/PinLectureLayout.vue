<template>
    <div id="pin_lecture_layout_wrap">
        <div id="menu_tab">
            <div class="tab" :class="[isActive? 'active': 'un_active']" @click="isActive = true">
                <div class="icon_wrap">
                    <i class="fas fa-search" style="height: 50%;"></i>
                </div>
            </div>
            <div class="tab" :class="[isActive? 'un_active': 'active']">
                <div class="icon_wrap">
                    &nbsp;
                    <!--<i class="fas fa-bars"></i>-->
                </div>
            </div>
            <div id="blank_tab"></div>
        </div>
        <div id="contents_wrap">
            <pin-search-lecture v-show="isActive"></pin-search-lecture>
            <div v-show="!isActive" id="category_wrap">
                <pin-category-list v-if="layer === 0"></pin-category-list>
                <pin-sub-category-list v-if="layer === 1" :category = category></pin-sub-category-list>
                <pin-category-lecture-list v-if="layer === 2" :category = category :sub_category = sub_category></pin-category-lecture-list>
            </div>
        </div>
    </div>
</template>

<script>
    import PinSearchLecture from './PinSearchLecture'
    import PinCategoryList from './PinCategoryList'
    import PinSubCategoryList from "./PinSubCategoryList"
    import PinCategoryLectureList from './PinCategoryLectureList'

    export default {
        name: "PinLectureLayout",
        components:{
            'pin-search-lecture': PinSearchLecture,
            'pin-category-list': PinCategoryList,
            'pin-sub-category-list': PinSubCategoryList,
            'pin-category-lecture-list': PinCategoryLectureList,
        },
        data(){
            return{
                isActive: true,
                layer: 0,
                category: '',
                sub_category: '',
            }
        },
        mounted(){
            this.$bus.$on('category_to_sub', this.category_to_sub);
            this.$bus.$on('sub_to_lecture', this.sub_to_lecture);
            this.$bus.$on('up_layer', this.up_layer);
        },
        methods:{
            category_to_sub(category){
                this.category = category;
                this.layer++;
            },
            sub_to_lecture(sub_category){
                this.sub_category = sub_category;
                this.layer++;
            },
            up_layer(){
                this.layer--;
            }
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    #pin_lecture_layout_wrap{
        display:inline-block;
        height: 100%;
        width: 100%;
    }
    #menu_tab{
        display: inline-block;
        height: 10%;
        width: 100%;
    }
    #gap{
        display: inline-block;
        height: calc(100% - 1px);
        width: 1px;
        border-bottom: 1px solid darkgray;
    }
    .tab{
        display: inline-block;
        width: 17%;
        height: calc(100% - 1px);
        text-align: center;

    }

    .active{
        background-color: white;
        cursor: pointer;
        height: 100%;
        width: 17%;
        border-radius: 5px 5px 0 0;
        border-top: 1px solid #353866;
        border-right: 1px solid #353866;
        border-left: 1px solid #353866;
        color: #353866;
    }

    .un_active{
        border-bottom: 1px solid #353866;
        border-top: 1px solid #f8f8f8;
        border-right: 1px solid #f8f8f8;
        border-left: 1px solid #f8f8f8;
        color: #aaabd3;
    }
    /*
    .un_active:hover{
        background-color: rgba(170, 171, 211, 0.2);
        border-radius: 10px 10px 0 0;
        color: #353866;
    }*/

    .icon_wrap{
        height: 100%;
        padding-top: 10%;
    }
    .icon_wrap > i {
        height: 100%;
    }

    #blank_tab{
        display: inline-block;
        width: calc(66% - 4px);
        height: 100%;
        float: right;
        border-bottom: 1px solid #353866;
    }

    #contents_wrap{
        display: inline-block;
        height: calc(90%);
        width: calc(100% - 2px);
        border-left: 1px solid #353866;
        border-right: 1px solid #353866;
        border-bottom: 1px solid #353866;
    }
    #category_wrap{
        display: inline-block;
        height: calc(100% - 1px);
        width: 100%;
        margin-top: 1px;
        background-color :white;


    }




    /* 로딩 아이콘
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-to {
        opacity: 0
    }
    .loading {
        text-align: center;
        position: absolute;
        color: #fff;
        z-index: 9;
        background: rgb(200, 200 ,200);
        padding: 8px 18px;
        border-radius: 5px;
        left: calc(50% - 50px);
        top: 40%;
    }
    */
</style>
