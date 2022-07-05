class DonutMaker {

    constructor(numDonuts, numAutoClickers, numMultipliers){
        this.numDonuts = numDonuts;
        this.numAutoClickers = numAutoClickers;
        this.numMultipliers = numMultipliers;
        this.autoClickerCost = 100;
        this.multiplierCost = 10;
        this.multiplierAmount = 1;
    }

    determineMultiplierAmount(){
        multiplierAmount = 1.2 * this.numMultipliers;
        return multiplierAmount;
    }

    addDonut(){
        this.numDonuts +=1;
    }

    addAutoClicker() {
        if(this.numDonuts >= 100) {
            this.numDonuts -= 100;
            this.numAutoClickers += 1;
        }
        
        if(this.numAutoClickers >= ){
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