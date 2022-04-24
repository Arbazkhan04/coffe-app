
let $=document.querySelector.bind(document);
let $$=document.querySelectorAll.bind(document);
let value1=0;
let value2=0;
let value3=0;
let value4=0;
let Result=0;
const GetButton1Value=()=>{
    try {
        let temporaryValue=  parseInt($('#value1').dataset.value);
           value1+=temporaryValue;
           let GetInput=$('#one');
           GetInput.placeholder=value1;

    } catch (error) {
        console.log(error.message);
}
}

const GetButton2Value=()=>{
    try {

        let temp= parseInt($('#value2').dataset.value);
        value2+=temp;
        $('#two').placeholder=value2;
        
    } catch (error) {
        console.log(error.message)
        
    }
}

const GetButton3value=()=>{
    try {

        let temp= parseInt($("#value3").dataset.value);
        value3+=temp;
        $('#three').placeholder=value3;

        
    } catch (error) {
        
    }
}

const GetButton4value=()=>{
    let tmep=parseInt(document.querySelector('#value4').dataset.value);
    value4+=tmep;
    document.querySelector("#four").placeholder=value4;
}


const calculatePrice=()=>
{
    if(value1!==0){
        Result=Result+value1;
    }
    if(value2!==0){
        Result=Result+value2;
    }
    if(value3!==0){
        Result=Result+value3;
    }
    if(value4!==0){
        Result=Result+value4;
    }
    console.log(Result)
    document.querySelector('.result1').innerHTML=`Thanks for coming here Your total Bill is = ${Result}`;
}

