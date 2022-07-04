import DonutMaker from "./DonutMaker";

describe("DonutMaker", ()=>{

    test("should be able to add a donut", () => {  
    //Arrange
    const underTest = new DonutMaker(0);
    //Act
    underTest.addDonut();
    //Assert
    expect(underTest.numDonuts).toEqual(1);
    });

    test("should be able to add an autoclicker with 100 donuts", () => {
        //Arrange
        const underTest = new DonutMaker(100, 0);
        //Act
        underTest.addAutoClicker();
        //Assert
        expect(underTest.numDonuts).toEqual(0);
        expect(underTest.numAutoClickers).toEqual(1);
    });

    test("should NOT be able to purchase an autoclicker with 99 donuts", () => {
        const underTest = new DonutMaker(99, 0);
        underTest.addAutoClicker();
        expect(underTest.numDonuts).toEqual(99);
        expect(underTest.numAutoClickers).toEqual(0);
    });

    test("the cost of a second autoclicker increases by 10 percent each time", () => {
        const underTest = new DonutMaker(100, 1, 100);
        underTest.addAutoClicker();
        expect(underTest.autoClickerCost).toEqual(110);
    });

    test("the cost of any additional autoclicker increases by 10 percent each time", () => {
        const underTest = new DonutMaker(100, 2, 100);
        underTest.addAutoClicker();
        expect(underTest.autoClickerCost).toEqual(121);
    });

    

    

});