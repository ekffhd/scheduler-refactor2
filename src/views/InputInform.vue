<template>
    <div id="input_inform_wrap">
        <div id="scheduler_wrap">
            <div id="scheduler_inner">
                <scheduler id="scheduler"></scheduler>
            </div>
            <div id="submit_button_wrap">
                <button id="submit_button">SUBMIT</button>
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
                    OOO 교수님의 △△ 수업은 꼭들어야해!<br>
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
    </div>
</template>

<script>
    import Scheduler from '../components/InputInform/Scheduler'
    import InputBasicInform from '../components/InputInform/InputBasicInform'
    import PinLectureLayout from '../components/InputInform/Pin/PinLectureLayout'
    import PinAddedLectureList from '../components/InputInform/Pin/PinAddedLectureList'
    import OptionLectureLayout from '../components/InputInform/Option/OptionLectureLayout'
    import OptionAddedLectureList from '../components/InputInform/Option/OptionAddedLectureList'

    export default {
        name: "InputInform",
        components:{
            'scheduler': Scheduler,
            'input-basic-inform': InputBasicInform,
            'pin-lecture-layout': PinLectureLayout,
            'pin-added-lecture-list': PinAddedLectureList,
            'option-lecture-layout': OptionLectureLayout,
            'optionAddedLectureList': OptionAddedLectureList,
        },
        data(){
            return{
                isActive: true,
                pin: true,
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
        min-width: 980px;
        max-width: 1100px;
        height: 100vh;
    }
    #scheduler_wrap{
        position: relative;
        display: inline-block;
        width: 55%;
        height: 100%;
        float: left;
    }
    #scheduler_inner{
        display: inline-block;
        height: 100%;
        padding-top: 10%;
    }
    #submit_button_wrap{
        position: absolute;
        display: inline-block;
        height: 5%;
        width: 70%;
        min-width: 440px;
        top: 85%;
        right: 0;
    }
    #scheduler{
        display: inline-block;
        width: 70%;
        height: calc(100% + 1px);
    }
    #option_select_wrap{
        display: inline-block;
        width: calc( 40% - 4px);
        min-width: 430px;
        height: 100%;
        min-height: 630px;
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
        margin-left: 0px;
        width: 65%;
        font-size: 11px;
        text-align: left;
        font-weight: bold;
        color:  #353866;
    }
    #lecture_layout_wrap{
        display: inline-block;
        width: 80%;
        min-width: 345px;
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

</style>
