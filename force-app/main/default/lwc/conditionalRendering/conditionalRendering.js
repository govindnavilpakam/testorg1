import { LightningElement,track } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    @track likeState = false;
    @track answerState = false;
    @track likeStateSize01 = false;
    @track likeStateSize02 = false;
    @track likeStateSize03 = false;
    @track likeStateSize04 = false;
    @track likeStateDisabled = false;
    @track answerStateDisabled = false;

    displaySetting = false;
    displayOne = false;
    displayTwo = false;
    displayThree = false;
    displayPosition = true;
    handleLikeButtonClick() {
        this.likeState = !this.likeState;
    }

    handleAnswerButtonClick() {
        this.answerState = !this.answerState;
    }

    handleLikeButtonSizeClick(event) {
        const buttonNumber = event.target.dataset.buttonNumber;

        this[`likeStateSize${buttonNumber}`] = !this[`likeStateSize${buttonNumber}`];
    }

    handleLikeButtonDisabledClick() {
        this.likeStateDisabled = !this.likeStateDisabled;
    }

    handleAnswerButtonDisabledClick() {
        this.answerStateDisabled = !this.answerStateDisabled;
    }

    displayOption1(){
        this.displayOne = true;
        this.displayTwo = false;
        this.displayThree = false;
    }
    displayOption2(){
        this.displayTwo = true;
        this.displayOne = false;
        this.displayThree = false;
    }
    displayOption3(){
        this.displayThree = true;
        this.displayOne = false;
        this.displayTwo = false;
    }
}