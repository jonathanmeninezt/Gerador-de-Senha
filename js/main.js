var passworldLength = 16
const inputEl = document.querySelector("#passworld")

function generatePassworld(){
const chars = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789?!@&*()[]"

let passworld = ""

for (let i = 0; i < passworldLength; i++){
    const randomNumber = Math.floor(Math.random() * chars.length) // floor nivela tirando a virgula - random gera um nº aleatório
    passworld += chars.substring(randomNumber, randomNumber + 1)  // faz um corte dentro da string chars
    
  }

  
  inputEl.value = passworld

  }

  function copy(){
    navigator.clipboard.writeText(inputEl.value)  //clipboard - ação de copiar e colar
  }

  const passworldLengthEl = document.querySelector('#passworld-length')
  passworldLengthEl.addEventListener("input", function() {
    passworldLength = passworldLengthEl.value
    
    generatePassworld()

  })

  const copyButtonEl = document.querySelector('#copy')
  copyButtonEl.addEventListener("click", copy)
    

  



generatePassworld()