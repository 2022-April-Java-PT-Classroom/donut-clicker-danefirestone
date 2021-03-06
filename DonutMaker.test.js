import DonutMaker from "./DonutMaker";

describe("DonutMaker", ()=>{

    test("should be able to add a donut", () => {  
    //Arrange
    const underTest = new DonutMaker(0, 0 ,0);
    //Act
    underTest.addDonut();
    //Assert
    expect(underTest.numDonuts).toEqual(1);
    });

    test("should be able to add an autoclicker with 100 donuts", () => {
        //Arrange
        const underTest = new DonutMaker(100, 0, 0);
        //Act
        underTest.addAutoClicker();
        //Assert
        expect(underTest.numDonuts).toEqual(0);
        expect(underTest.numAutoClickers).toEqual(1);
    });

    test("should NOT be able to purchase an autoclicker with 99 donuts", () => {
        const underTest = new DonutMaker(99, 0, 0);
        underTest.addAutoClicker();
        expect(underTest.numDonuts).toEqual(99);
        expect(underTest.numAutoClickers).toEqual(0);
    });

    test("the cost of a second autoclicker increases by 10 percent each time", () => {
        const underTest = new DonutMaker(100, 1, 100);
        underTest.addAutoClicker();
        expect(underTest.autoClickerCost).toEqual(110);
    });

    test("the cost of a third autoclicker increases by 10 percent each time", () => {
        const underTest = new DonutMaker(100, 2, 110);
        underTest.addAutoClicker();
        expect(underTest.autoClickerCost).toEqual(121);
    });

    test("the autoclicker should be able to increase the amount of donuts", () => {
        const underTest = new DonutMaker(100, 5, 100);
        underTest.activateAutoClickers();
        expect(underTest.numDonuts).toEqual(105);
    });

    test("should have the ability to add a multiplier", () => {
        const underTest = new DonutMaker(10, 0, 0);
        underTest.addMultiplier();
        expect(underTest.numMultipliers).toEqual(1);
    });

    test("the cost of the second multiplier should increase by 10%", () => {
        const underTest = new DonutMaker(100, 1, 1);
        underTest.addMultiplier();
        expect(underTest.multiplierCost).toEqual(11);
    });

    test("the cost of any additional multiplier should increase by 10%", () => {
        const underTest = new DonutMaker(100, 0, 2);
        underTest.addMultiplier();
        expect(underTest.multiplierCost).toEqual(12.1);
    });

    test("should not be able to purchase a multiplier if there are not enough donuts", () => {
        const underTest = new DonutMaker(9, 0, 0);
        underTest.addMultiplier();
        expect(underTest.numMultipliers).toEqual(0);
    });

    test("each multiplier should multiply the donuts produced by clickers by 1.2", () => {
        const underTest = new DonutMaker(0, 0, 1);
        underTest.addDonut();
        expect(underTest.numDonuts).toEqual(1.2);
    });

    test("each multiplier purhcased will increase the multiplier exponentially", () => {
        const underTest = new DonutMaker(0, 0, 4);
        underTest.addDonut();
        expect(underTest.numDonuts).toEqual(2.1);
    });

    test("multipliers will effect clicks from the auto clicker", () => {
        const underTest = new DonutMaker(0, 4, 4);
        underTest.activateAutoClickers();
        expect(underTest.multiplierAmount).toEqual(2.1);
        expect(underTest.numDonuts).toEqual(10.4)
    });

    

    


    

    

});