const input= document.querySelector('input');
const checkBtn=document.querySelector('button');
const result=document.getElementsByTagName('p')[0];
const result1=document.getElementsByTagName('p')[1];
const result2=document.getElementsByTagName('p')[2];
console.log(result);

let fizz=[];
let buzz=[];
let fizzBuzz=[];
function fB(){
    let inputNum=input.value;
    for (let i = 0; i <= inputNum; i++) {    
    number=i;
        if(i%3===0){
                fizz.push(`${i}`);
            result.innerHTML=`  fizz numbers : ${fizz}`;
        }else if(i%5===0){
            result1.innerHTML=`buzz numbers : ${buzz}`;
                buzz.push(`${i}`);   
        } 
        if(i%3===0 && i%5===0){
            fizzBuzz.push(`${i}`);
            result2.innerHTML=`fizzBuzz numbers: ${fizzBuzz} `;
        }
        
    }   
}





console.log(fizz);
console.log(buzz);
console.log(fizzBuzz);
checkBtn.addEventListener('click', fB);