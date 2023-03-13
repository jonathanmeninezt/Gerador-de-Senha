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

  }

  function calculateQualy(){
    const percent = Math.round((passworldLength / 64) * 100)
    

    securityIndicatorBarEl.style.width = `${percent}%`
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