class DonutMaker {

    constructor(numDonuts, numAutoClickers, autoClickerCost, numMultipliers, multiplierCost){
        this.numDonuts = numDonuts;
        this.numAutoClickers = numAutoClickers;
        this.autoClickerCost = autoClickerCost;
        this.numMultipliers = numMultipliers;
        this.multiplierCost = multiplierCost;
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

    addMultiplier(){
        if (this.numDonuts >= this.multiplierCost){
            this.numMultipliers += 1;
            this.numDonuts -= this.multiplierCost;
        }
        if (this.numMultipliers >= 1){
            this.multiplierCost += this.multiplierCost * 0.1;
        }
    }
}

export default DonutMaker;