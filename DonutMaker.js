class DonutMaker {

    constructor(numDonuts, numAutoClickers, numMultipliers){
        this.numDonuts = numDonuts;
        this.numAutoClickers = numAutoClickers;
        this.numMultipliers = numMultipliers;
        this.autoClickerCost = Math.round(100 * (1.1 ** numAutoClickers) *10) /10;
        this.multiplierCost = Math.round(10 * (1.1 ** this.numMultipliers) * 10) /10;
        this.multiplierAmount = Math.round(Math.pow(1.2, this.numMultipliers) * 10) /10;
        this.autoClickerPower = this.numAutoClickers * this.multiplierAmount;
    }
    
    addDonut() {
        this.numDonuts += this.multiplierAmount;
    }
    
    addAutoClicker() {
        if(this.numDonuts >= this.autoClickerCost) {
            this.numDonuts -= this.autoClickerCost;
            this.numAutoClickers++;
        }
        
        if(this.numAutoClickers >= 10){
            this.autoClickerCost += this.autoClickerCost * 0.1;
        }
    }
    
    activateAutoClickers(){
        this.numDonuts += this.autoClickerPower;
    }
    
    addMultiplier(){
        if (this.numDonuts >= this.multiplierCost) {
            this.numDonuts -= this.multiplierCost;
            this.numMultipliers++;
        }
        
    }
    
    
}


export default DonutMaker;