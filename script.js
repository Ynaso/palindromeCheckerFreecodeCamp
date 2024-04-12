const buttonCheck = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");

const result = document.getElementById("result");

function checkPalindrome(){

    if(textInput.value == ""){
        alert("Please input a value")
    } else{


    const reversedWord = textInput.value.match(/[a-zA-Z0-9]+/g).join("").split("").reverse("").join("");
    const normalWord = textInput.value.match(/[a-zA-Z0-9]+/g).join("");
   
    console.log(reversedWord.toUpperCase());
    console.log(normalWord.toUpperCase());
   

      if(reversedWord.toUpperCase() == normalWord.toUpperCase()){
        result.innerText = `${textInput.value} is a palindrome`;
      }
      else{
        result.innerText = `${textInput.value} is not a palindrome`;
      }
    }
}