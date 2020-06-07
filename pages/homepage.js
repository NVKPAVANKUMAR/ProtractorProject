let homepage = function(){
    
    let firstNumber_input = element(by.model('first'));
    let secondNumber_input = element(by.model('second'));
    let goButton = element(by.buttonText('Go!'));

    this.get = (url) =>{
        browser.get(url);
    }

    this.enterFirstNumber = (firstNo) =>{
        firstNumber_input.sendKeys(firstNo);
    };

    this.enterSecondNumber = (secondNo) =>{
        secondNumber_input.sendKeys(secondNo);
    };

    this.clickGo = () =>{
        goButton.click();
    };

    this.verifyResult = function(result){
        let output =  element(by.css('h2.ng-binding'));
        expect(output.getText()).toEqual(result);
    }

    this.selectOperator = (operator) =>{
        element(by.cssContainingText("option",operator)).click();
    }




};

module.exports = new homepage();