
import inquirer from "inquirer";
function calculater(number1:number,number2:number,operater:string){
  
    let result=0;
    if(operater === "+" ){
    result = number1 + number2;
    }else if(operater === "-" ){
    result = number1 - number2;
    }else if(operater === "*"){
        result = number1 * number2;
    }else if(operater === "/"){
        result = number1 / number2;
    }else if(number1 === null || number1 === undefined && number2 === null || number2 === undefined  && operater  === null || operater === undefined){
        console.log("you have missed somethings")
    }
    return result
    }
    async function getValues() {
      let number1 = await inquirer.prompt([{
        name:"number1",
        type:"number",
        message:"enter your number"
    
    }])
    let number2 = await inquirer.prompt([{
        name:"number2",
        type:"number",
        message:"enter your number"
    
    }])
    let inputOperator =await  inquirer.prompt([{
       name:"operater",
        type:"string",
        message:"enter your operater"
    
    }])
    let mainCalculatorResult = calculater(number1.number1, number2.number2, inputOperator.operater );
    console.log(mainCalculatorResult);
    }
   
  
    getValues()