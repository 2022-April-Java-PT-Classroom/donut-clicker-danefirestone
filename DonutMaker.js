class DonutMaker {

    constructor(numDonuts, numAutoClickers, autoClickerCost){
        this.numDonuts = numDonuts;
        this.numAutoClickers = numAutoClickers;
        this.autoClickerCost = autoClickerCost;
    }

    addDonut(){
        this.numDonuts +=1;
    }

    addAutoClicker() {
        if(this.numDonuts >= 100) {
            this.numDonuts -= 100;
            this.numAutoClickers += 1;
        }
        
        if(this.numAutoClickers >= 1){
            this.autoClickerCost += this.autoClickerCost * 0.1;
        }
    }

    activateAutoClickers(){
        this.numDonuts += this.numAutoClickers;
    }
}

export default DonutMaker;