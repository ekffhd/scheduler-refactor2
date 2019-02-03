<template>
    <div id="input_inform_wrap">
        <div id="mobile_bar">
            <img id="mobile_caser_icon" src="../assets/Caser2.png" width="50%">
            <div id="plus_icon_wrap">
                <div class="wrap" @click="open_side_bar">
                    <div class="inner">
                        <i id="plus_icon" class="fas fa-calendar-plus"></i>
                    </div>
                </div>
            </div>
        </div>
        <div id="scheduler_wrap" @click="close_side_bar">
            <div id="scheduler_inner">
                <img src="../assets/Caser.png" id="caser_icon" width="30%" style="margin-bottom: 5%; margin-left: 8%">
                <scheduler id="scheduler"></scheduler>
                <div id="submit_button_wrap">
                    <button id="submit_button">SUBMIT</button>
                </div>
            </div>
        </div>
        <div id="option_select_wrap">
            <div id="input_basic_inform_wrap">
                <input-basic-inform></input-basic-inform>
            </div>
            <div id="lecture_type_button_wrap">
                <button :class="[isActive ? 'active':'un_active']" @click="turn_to_pin">고정 강의</button>
                <button :class="[isActive ? 'un_active':'active']" @click="turn_to_option"
                        style="margin-left: 5px;">선택 강의</button>
                <div class="option_description" v-if="isActive">
                    OOO교수님의 △△수업은 꼭들어야해!<br>
                    반드시 들어야하는 특정 강의를 선택해주세요.
                </div>
                <div class="option_description" v-else>
                    △△ 수업을 듣고싶은데, 시간과 교수님은 상관없어!<br>
                    가능한 경우의 수를 알고싶은 강의를 선택해주세요.
                </div>
            </div>
            <div id="lecture_layout_wrap">
                <pin-lecture-layout v-show="pin === true"></pin-lecture-layout>
                <option-lecture-layout v-show="pin === false"></option-lecture-layout>
            </div>
            <div id="added_lecture_list_wrap">
                <pin-added-lecture-list v-show="pin === true"></pin-added-lecture-list>
                <option-added-lecture-list v-show="pin === false"></option-added-lecture-list>
            </div>
        </div>
            <div id="mobile_option_select_wrap">
                <div style="display: inline-block; position: relative; width: 100%; height: 100%;">
                    <div id="mobile_break_time_title" style="background-color : #353866; color: white" @click="toggle_break_time_tab">
                        <div class="wrap">
                            <div class="inner">
                                공강선택
                            </div>
                        </div>
                    </div>
                    <div id="mobile_input_basic_inform_wrap">
                        <mobile-input-basic-inform  id="mobile_input_basic_inform" :class="[active_tab ==='break' ? 'active_tab': 'un_active_tab'] "></mobile-input-basic-inform>
                    </div>
                    <div id="mobile_lecture_layout_title" style="background-color : #353866; color: white" @click="toggle_add_lecture_tab">
                        <div class="wrap">
                            <div class="inner">
                                시간표 담기
                            </div>
                        </div>
                    </div>
                    <div id="mobile_lecture_layout_wrap">
                        <div id="mobile_lecture_type_button_wrap">
                            <button :class="[isActive ? 'active':'un_active']" @click="turn_to_pin">고정 강의</button>
                            <button :class="[isActive ? 'un_active':'active']" @click="turn_to_option"
                                    style="margin-left: 5px;">선택 강의</button>
                            <div class="mobile_option_description" v-if="isActive">
                                OOO교수님의 △△수업은 꼭들어야해!<br>
                                반드시 들어야하는 특정 강의를 선택해주세요.
                            </div>
                            <div class="mobile_option_description" v-else>
                                △△ 수업을 듣고싶은데, 시간과 교수님은 상관없어!<br>
                                가능한 경우의 수를 알고싶은 강의를 선택해주세요.
                            </div>
                        </div>
                        <div id="mobile_lecture_wrap">
                            <mobile-pin-search-lecture v-show="pin === true"></mobile-pin-search-lecture>
                            <mobile-option-search-lecture v-show="pin === false"></mobile-option-search-lecture>
                        </div>
                    </div>
                    <div id="mobile_added_lecture_title" style="background-color : #353866; color: white"  @click="toggle_added_lecture_list_tab">
                        <div class="wrap">
                            <div class="inner">
                                추가된 강의 목록

                            </div>
                        </div>
                    </div>
                    <div id="mobile_added_lecture_list_wrap" >

                    </div>
                    <!--
                    <div id="mobile_lecture_type_button_wrap">
                        <button :class="[isActive ? 'active':'un_active']" @click="turn_to_pin">고정 강의</button>
                        <button :class="[isActive ? 'un_active':'active']" @click="turn_to_option"
                                style="margin-left: 5px;">선택 강의</button>
                        <div class="mobile_option_description" v-if="isActive">
                            OOO교수님의 △△수업은 꼭들어야해!<br>
                            반드시 들어야하는 특정 강의를 선택해주세요.
                        </div>
                        <div class="mobile_option_description" v-else>
                            △△ 수업을 듣고싶은데, 시간과 교수님은 상관없어!<br>
                            가능한 경우의 수를 알고싶은 강의를 선택해주세요.
                        </div>
                    </div>
                    <div id="mobile_lecture_layout_wrap">
                        <mobile-option-search-lecture></mobile-option-search-lecture>
                    </div>
                    -->
                </div>
            </div>
    </div>
</template>

<script>
    import Scheduler from '../components/InputInform/Scheduler'
    import InputBasicInform from '../components/InputInform/InputBasicInform'
    import MobileInputBasicInform from '../components/InputInform/MobileInputBasicInform'
    import PinLectureLayout from '../components/InputInform/Pin/PinLectureLayout'
    import PinAddedLectureList from '../components/InputInform/Pin/PinAddedLectureList'
    import OptionLectureLayout from '../components/InputInform/Option/OptionLectureLayout'
    import OptionAddedLectureList from '../components/InputInform/Option/OptionAddedLectureList'
    import MobileOptionSearchLecture from '../components/InputInform/MobileOption/MobileOptionSearchLecture'
    import MobilePinSearchLecture from '../components/InputInform/MobilePin/MobilePinSearchLecture'

    export default {
        name: "InputInform",
        components:{
            'scheduler': Scheduler,
            'input-basic-inform': InputBasicInform,
            'pin-lecture-layout': PinLectureLayout,
            'pin-added-lecture-list': PinAddedLectureList,
            'option-lecture-layout': OptionLectureLayout,
            'option-added-lecture-list': OptionAddedLectureList,
            'mobile-input-basic-inform': MobileInputBasicInform,
            'mobile-option-search-lecture': MobileOptionSearchLecture,
            'mobile-pin-search-lecture': MobilePinSearchLecture,
        },
        data(){
            return{
                isActive: true,
                pin: true,
                open: true,
                active_tab: '',
            }
        },
        methods:{
            turn_to_pin(){
                this.isActive = true;
                this.pin = true;
            },
            turn_to_option(){
                this.isActive = false;
                this.pin = false;
            },
            open_side_bar(){
                document.getElementById("mobile_option_select_wrap").style.left = "0%";
            },
            close_side_bar(){
                document.getElementById("mobile_option_select_wrap").style.left = "-100%";
            },
            toggle_break_time_tab(){
                if(this.active_tab !== 'break'){
                    this.active_tab = 'break';

                    //공강시간 탭
                    document.getElementById("mobile_input_basic_inform_wrap").style.top = "5%";
                    document.getElementById("mobile_input_basic_inform_wrap").style.height = "20%";
                    document.getElementById("mobile_input_basic_inform").style.top = "5%";
                    document.getElementById("mobile_input_basic_inform").style.height = "100%";


                    //시간표 추가 탭
                    document.getElementById('mobile_lecture_layout_title').style.top = "25%";
                    document.getElementById("mobile_lecture_layout_wrap").style.top = "-100%";
                    document.getElementById("mobile_lecture_layout_wrap").style.height = "5%";

                    //추가된 강의 목록 탭
                    document.getElementById("mobile_added_lecture_title").style.top = "30%";
                    document.getElementById("mobile_added_lecture_list_wrap").style.top = "-100%";
                    document.getElementById("mobile_added_lecture_list_wrap").style.height = "5%";

                }
                else{
                    this.active_tab = '';
                    document.getElementById("mobile_input_basic_inform").style.top = "-100%";
                    document.getElementById("mobile_input_basic_inform").style.height = "0";
                    document.getElementById("mobile_input_basic_inform_wrap").style.height = "5%";

                    //시간표 추가 탭
                    document.getElementById('mobile_lecture_layout_title').style.top = "5%";
                    //document.getElementById("mobile_lecture_layout_wrap").style.top = "5%";

                    //추가된 강의 목록 탭
                    document.getElementById("mobile_added_lecture_title").style.top = "10%";
                    document.getElementById("mobile_added_lecture_list_wrap").style.top = "-100%";
                    document.getElementById("mobile_added_lecture_list_wrap").style.height = "5%";
                }
            },
            toggle_add_lecture_tab(){
                if(this.active_tab !== 'add_lecture'){
                    this.active_tab = 'add_lecture';
                    //공강시간 탭
                    document.getElementById("mobile_input_basic_inform_wrap").style.top = "-100%";
                    document.getElementById("mobile_input_basic_inform_wrap").style.height = "5%";

                    //시간표 추가 탭
                    document.getElementById('mobile_lecture_layout_title').style.top = "5%";
                    document.getElementById("mobile_lecture_layout_wrap").style.top = "10%";
                    document.getElementById("mobile_lecture_layout_wrap").style.height = "80%";

                    //추가된 강의 목록 탭
                    document.getElementById("mobile_added_lecture_title").style.top = "90%";
                    document.getElementById("mobile_added_lecture_list_wrap").style.top = "-100%";
                    document.getElementById("mobile_added_lecture_list_wrap").style.height = "5%";
                }
                else{
                    this.active_tab = '';
                    //시간표 추가 탭
                    document.getElementById("mobile_lecture_layout_wrap").style.top = "-100%";
                    document.getElementById("mobile_lecture_layout_wrap").style.height = "5%";

                    //추가된 강의 목록 탭
                    document.getElementById("mobile_added_lecture_title").style.top = "10%";
                }
            },
            toggle_added_lecture_list_tab(){
                if(this.active_tab !== 'lecture_list'){
                    this.active_tab = 'lecture_list';
                    //공강시간 탭
                    document.getElementById("mobile_break_time_title").style.top = "0%";
                    document.getElementById("mobile_input_basic_inform_wrap").style.top = "-100%";
                    document.getElementById("mobile_input_basic_inform_wrap").style.height = "5%";

                    //시간표 추가 탭
                    document.getElementById("mobile_lecture_layout_title").style.top = "5%";
                    document.getElementById("mobile_lecture_layout_wrap").style.top = "-100%";
                    document.getElementById("mobile_lecture_layout_wrap").style.height = "5%";


                    //추가된 강의 목록 탭
                    document.getElementById("mobile_added_lecture_title").style.top = "10%";
                    document.getElementById("mobile_added_lecture_list_wrap").style.top = "15%";
                    document.getElementById("mobile_added_lecture_list_wrap").style.height = "80%";
                }
                else{
                    this.active_tab = '';
                    //공강시간 탭

                    //시간표 추가 탭
                    document.getElementById("mobile_lecture_layout_wrap").style.height = "-100%";
                    document.getElementById("mobile_lecture_layout_wrap").style.height = "5%";

                    //추가된 강의 목록 탭
                    document.getElementById("mobile_added_lecture_list_wrap").style.top = "-100%";
                    document.getElementById("mobile_added_lecture_list_wrap").style.height = "5%";

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
    #input_inform_wrap{
        display: inline-block;
        width: 90%;
        max-width: 1100px;
        max-height: 950px;
        height: 100vh;
    }
    #mobile_bar{
        display: none;
    }
    #scheduler_wrap{
        /*position: relative;*/
        display: table;
        width: 55%;
        height: 100%;
        float: left;
    }
    #scheduler_inner{
        padding-right: 6%;
        display: table-cell;
        vertical-align: middle;
    }
    #submit_button_wrap{
        display: inline-block;
        height: 5%;
        width: 90%;
        margin-top: 5%;
    }

    #scheduler{
        display: inline-block;
        width: 80%;
        height: 70%;
    }
    #option_select_wrap{
        display: inline-block;
        width: calc( 40% - 4px);
        height: 100%;
        min-height: 630px;
        min-width: 320px;
    }

    #input_basic_inform_wrap{
        display: inline-block;
        width: 80%;
        height: 15%;
    }
    #lecture_type_button_wrap{
        display: inline-block;
        height: 5%;
        width: 80%;
    }
    #lecture_type_button_wrap > button{
        outline: none;
        height: 80%;
        border-radius: 5px;
        padding-left: 1.5%;
        padding-right: 1.5%;
        float:left;
        border: none;
        font-weight: bold;
        font-size: 11px;
        color: white;
        cursor: pointer;
    }
    .option_description{
        display: inline-block;
        float: right;
        width: 65%;
        font-size: 11px;
        text-align: left;
        font-weight: bold;
        color:  #353866;
    }
    #lecture_layout_wrap{
        display: inline-block;
        width: 80%;
        height: 45%;
    }
    .active{
        background-color:  #353866;
    }
    .un_active{
        background-color: rgba(53, 56, 102, 0.3);
    }
    .un_active:hover{
        background-color: #aaabd3;
    }
    #added_lecture_list_wrap{
        display: inline-block;
        margin-top: 3%;
        height: 25%;
        width: calc(80% - 2px);
    }
    #submit_button{
        width: 30%;
        height: 100%;
        border-style: none;
        background-color: #353866;
        color: white;
        font-weight: bold;
        font-size: 15px;
        border-radius: 10px;
        cursor: pointer;
        outline: none;
        margin-left: 9%;
    }
    #mobile_option_select_wrap{
        display: none;
    }


    @media (max-width: 1210px){
        #lecture_layout_wrap{
            width: 85%;
        }
        #added_lecture_list_wrap{
            width: 85%;
        }
        #lecture_type_button_wrap{
            width: 85%;
        }
    }
    @media (max-width: 1075px){
        #lecture_layout_wrap{
            width: 100%;
        }
        #added_lecture_list_wrap{
            width: 100%;
        }
        #lecture_type_button_wrap{
            width: 100%;
        }
    }
    @media (max-width: 1020px){
        #input_inform_wrap{
            width: 100%;
        }
        #scheduler{
            width: 85%;
        }
    }
    @media (max-width: 850px){
        #scheduler{
            width: 90%;
        }
    }
    @media ( max-width: 769px){
        #input_inform_wrap{
            position: relative;
            width: 100vw;
        }
        .wrap{
            display: table;
            width: 100%;
            height: 100%;
        }
        .inner{
            display: table-cell;
            width: 100%;
            height: 100%;
            vertical-align: middle;
        }
        #plus_icon{
            display: inline-block;
            height: auto;
            font-size: 25px;
        }
        #mobile_bar{
            position: absolute;
            display: inline-block;
            background-color: #353866;
            top: 0;
            left: 0;
            width: 100vw;
            height: 7%;
            color: white;
        }
        #mobile_caser_icon{
            margin-left: 15%;
            height: 97%;
        }
        #caser_icon{
            display: none;

        }
        #plus_icon_wrap{
            display: inline-block;
            float: right;
            width: 15%;
            height: 100%;
        }
        #scheduler_wrap{
            width: 100%;
            margin: auto;
        }
        #scheduler{
            width: 80%;
        }
        #option_select_wrap{
            position: fixed;
            display: none;
            width: 90%;
            left: -100%;
            height: 100%;
            transition: .7s;
            backface-visibility: hidden;
            z-index: 1000;
            background-color: #f8faff;
        }
        #mobile_break_time_tab_wrap{
            /*
            display: inline-block;
            position: relative;
            width: 100%;
            height: 15%;
            z-index: 1200;*/
        }
        #mobile_break_time_title{
            display: inline-block;
            position: absolute;
            height: 5%;
            top: 0;
            width: 100%;
            left: 0;
            z-index: 1200;
            background-color : #353866;
            color: white;
            font-weight: bold;
            font-size: 14px;

        }
        #mobile_input_basic_inform{
            position: absolute;
            display: inline-block;
            top: -100%;
            left: 0;
            width: 100%;
            height: 85%;
            transition: 1s;
            backface-visibility: hidden;
            background-color:#edf0f9;
        }
        .active_tab{
            display: inline-block;
        }
        .un_active_tab{
            display: none;
        }
        #mobile_option_select_wrap{
            /*사이드바 전체*/
            position: fixed;
            display: inline-block;
            width: 90%;
            left: -100%;
            height: 100%;
            transition: .7s;
            backface-visibility: hidden;
            z-index: 1000;
            background-color:#edf0f9;
        }
        #mobile_input_basic_inform_wrap{
            position: absolute;
            height: 5%;
            width: 100%;
            transition: .7s;
            backface-visibility: hidden;
            overflow: hidden;
            background-color: #edf0f9;
        }
        #mobile_lecture_type_button_wrap{
            display: inline-block;
            padding-top: 2%;
            padding-left: 5%;
            width: 100%;
            height: 14%;
        }
        #mobile_lecture_type_button_wrap > button{
            width: 20%;
            border: none;
            height: 25px;
            border-radius: 5px;
            color: white;
            font-weight: bold;
            outline: none;
            float: left;
            margin-bottom: 3%;
            font-size: 11px;
        }
        .mobile_option_description{
            display: inline-block;
            font-size: 11px;
            width: 100%;
            height: calc(88% - 30px);
            text-align: left;
            font-weight: bold;
        }

        #mobile_lecture_layout_wrap{
            display: inline-block;
            position: absolute;
            width: 100%;
            height: 5%;
            top: -100%;
            left: 0;
            transition: .7s;
            backface-visibility: hidden;
        }
        #mobile_lecture_layout_title{
            display: inline-block;
            position: absolute;
            height: 5%;
            width: 100%;
            left: 0;
            top: calc(5%);
            background-color : #353866;
            color: white;
            z-index: 1200;
            transition: .5s;
            backface-visibility: hidden;
            border-top: 1px solid white;
            font-weight: bold;
            font-size: 14px;

        }
        #mobile_lecture_wrap{
            display: inline-block;

            width: 100%;
            height: 84%;
        }
        #mobile_added_lecture_list_wrap{
            display: inline-block;
            position: absolute;
            width: 100%;
            height: 5%;
            background-color: #edf0f9;
            top: 10%;
            left: 0;
            transition: .7s;
            backface-visibility: hidden;
        }
        #mobile_added_lecture_title{
            display: inline-block;
            position: absolute;
            height: 5%;
            width: 100%;
            left: 0;
            top: calc(10% + 1px);
            background-color : #353866;
            color: white;
            z-index: 1200;
            transition: .5s;
            backface-visibility: hidden;
            border-top: 1px solid white;
            font-weight: bold;
            font-size: 14px;

        }

    }

    @media (max-width: 638px){
        #scheduler{
            width: 95%;
        }
    }

</style>
