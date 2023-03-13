var passworldLength = 16
const inputEl = document.querySelector("#password")
const upperCaseCheckEl = document.querySelector("#uppercase-check")
const numberCheckEl = document.querySelector("#number-check")
const symbolCheckEl = document.querySelector("#symbol-check")
const securityIndicatorBarEl = document.querySelector("#security-indicator-bar")


function generatePassworld(){
let chars = "abcdefghjkmnpqrstuvwxyz"

const uperCaseChars = "ABCDEFGHJKLMNPQRSTUVWXYZ"
const numberChars = "123456789"
const symbolChars = "?!@&*()[]"

if (upperCaseCheckEl.checked){
  chars += uperCaseChars

}

if (numberCheckEl.checked){
  chars += numberChars
}

if (symbolCheckEl.checked){
  chars += symbolChars
}



let passworld = ""

for (let i = 0; i < passworldLength; i++){
    const randomNumber = Math.floor(Math.random() * chars.length) // floor nivela tirando a virgula - random gera um nº aleatório
    passworld += chars.substring(randomNumber, randomNumber + 1)  // faz um corte dentro da string chars
    
  }

  
  inputEl.value = passworld

  calculateQualy()
  calculateFontSize()

  }

  function calculateQualy(){
    //T*0.25 + M*0.15 + N*0.25 + S*0.35 = 100%

    const percent = Math.round((passworldLength / 64) * 25 + 
    (upperCaseCheckEl.checked ? 15 : 0) + (numberCheckEl.checked ? 20 : 0) +
    (symbolCheckEl.checked ? 40 : 0))
    

    securityIndicatorBarEl.style.width = `${percent}%`

    if(percent > 69){
      //safe
      securityIndicatorBarEl.classList.remove("critical")
      securityIndicatorBarEl.classList.remove("warning")
      securityIndicatorBarEl.classList.add("safe")
    }else if(percent > 50){
      //warning
      securityIndicatorBarEl.classList.remove("critical")
      securityIndicatorBarEl.classList.add("warning")
      securityIndicatorBarEl.classList.remove("safe")
    }else {
      //critical
      securityIndicatorBarEl.classList.add("critical")
      securityIndicatorBarEl.classList.remove("warning")
      securityIndicatorBarEl.classList.remove("safe")
    }

    if(percent >= 100){
      securityIndicatorBarEl.classList.add("completed")
    }else{
      securityIndicatorBarEl.classList.remove("completed")
    }
  }

  function calculateFontSize(){
    if(passworldLength > 45){
      inputEl.classList.remove("font-small")
      inputEl.classList.remove("font-xsmall")
      inputEl.classList.add("font-xxsmall")
    }else if(passworldLength > 32){
      inputEl.classList.remove("font-small")
      inputEl.classList.add("font-xsmall")
      inputEl.classList.remove("font-xxsmall")
    }else if(passworldLength > 22){
      inputEl.classList.add("font-small")
      inputEl.classList.remove("font-xsmall")
      inputEl.classList.remove("font-xxsmall")
    }else{
      inputEl.classList.remove("font-small")
      inputEl.classList.remove("font-xsmall")
      inputEl.classList.remove("font-xxsmall")
    }
  }



  function copy(){
    navigator.clipboard.writeText(inputEl.value)  //clipboard - ação de copiar e colar
  }

  const passworldLengthEl = document.querySelector('#password-length')
  passworldLengthEl.addEventListener("input", function() {
    passworldLength = passworldLengthEl.value
    document.querySelector("#password-length-text").innerText = passworldLength
    
    generatePassworld()

  })

  upperCaseCheckEl.addEventListener("click",generatePassworld)
  numberCheckEl.addEventListener("click", generatePassworld)
  symbolCheckEl.addEventListener("click", generatePassworld)

 

  const copyButtonEl = document.querySelector('#copy-2')
  copyButtonEl.addEventListener("click", copy)
    
generatePassworld()