"use strict"

const allButtons = document.querySelectorAll(".btn");
const operators = document.querySelectorAll(".operator");
const result = document.querySelector(".result");
const equalBtn = document.querySelector(".operatorequal");
const clearBtn = document.querySelector(".clear");
const delBtn = document.querySelector(".del")

// result.value = '0';
// let total = 0;
// let oper = "";
// let numb1 = "";
// let numb2 = "";

const updateUI = () =>{
    result.value = "0";
    let total = 0
    let numb1 = "";
    let numb2 = "";
    let oper = "";

    allButtons.forEach((button) => {
        button.addEventListener("click", ()=>{

            if(result.value == "0" || (oper != "" && numb2 == "")){
                result.value = "";
            }

            if(numb1 != "" || oper == ""){
                result.value += button.textContent;
            }else{
                result.value = button.textContent;
            }

            if(oper == "" || numb1 == ""){
                numb1 = result.value;
            }else{
                numb2 = result.value;
            }
        });
    });

    operators.forEach((operator) =>{
        operator.addEventListener("click", () => {
            oper = operator.dataset.action;
            result.value += " " + operator.textContent + " ";
        });
    });

    equalBtn.addEventListener("click", () => {
        switch (oper){
            case "add":
                total = Number.parseFloat(numb1) + Number.parseFloat(numb2);
                break;
            
            case "substract":
                total = Number.parseFloat(numb1) - Number.parseFloat(numb2);
                break;
            
            case "divide":
                total = Number.parseFloat(numb1) / Number.parseFloat(numb2);
                break;
            
            case "multiply":
                total = Number.parseFloat(numb1) * Number.parseFloat(numb2);
                break;
        }

        result.value = total;
        numb2 = "";
        oper = "";
        numb1 = total;
    });

    
    clearBtn.addEventListener("click", ()=>{
        result.value = "0";
    });

    delBtn.addEventListener("click", ()=>{
        result.value = result.value.slice(0, -1);
    });

}


updateUI();







