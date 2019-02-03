<template>
    <div id="input_inform_wrap">
        <div id="mobile_bar">
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
            <div id="mobile_input_basic_inform_wrap">
                <div id="mobile_break_time_tab_wrap" >
                    <div id="mobile_break_time_title" @click="toggle_break_time_tab">
                        공강선택
                    </div>
                        <mobile-input-basic-inform  id="mobile_input_basic_inform" style="background-color :red;" :class="[active_tab ==='break' ? 'active_tab': 'un_active_tab'] "></mobile-input-basic-inform>
                </div>
            </div>
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
        },
        data(){
            return{
                isActive: true,
                pin: true,
                open: true,
                active_tab: 'break',
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
                console.log('hi');
                document.getElementById("mobile_input_basic_inform").style.top = "-1000%";
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
        padding-left: 5px;
        padding-right: 5px;
        float:left;
        border: none;
        font-weight: bold;
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
            display: inline-block;
            width: 100%;
            border: 1px solid;
        }
        #mobile_break_time_title{
            display: inline-block;
            position: relative;
            background-color: #f8faff;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            font-weight: bold;
            z-index: 1200;
        }
        #mobile_input_basic_inform{
            position: absolute;
            display: inline-block;
            width: 100%;
            left: 0;
            top: 100%;
            transition: .7s;
            backface-visibility: hidden;
            z-index: 1100;
            /**

            position: fixed;
            display: inline-block;
            width: 90%;
            left: -100%;
            height: 100%;

            z-index: 1000;
            background-color: #f8faff;/
             */
        }
        .active_tab{
            display: inline-block;
        }
        .un_active_tab{
            display: none;
        }
        #mobile_option_select_wrap{
            position: fixed;
            display: inline-block;
            width: 90%;
            left: -100%;
            height: 100%;
            transition: .7s;
            backface-visibility: hidden;
            z-index: 1000;
            background-color: #f8faff;
        }
        #mobile_input_basic_inform_wrap{
            position: relative;
        }
        #mobile_lecture_type_button_wrap{
            padding-left: 5%;
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

        }
        .mobile_option_description{
            display: inline-block;
            font-size: 11px;
            width: 100%;
            text-align: left;
            font-weight: bold;
        }
        #mobile_lecture_layout_wrap{
            display: inline-block;
            height: 40%;
            width: 100%;
        }

    }

    @media (max-width: 638px){
        #scheduler{
            width: 95%;
        }
    }

</style>
