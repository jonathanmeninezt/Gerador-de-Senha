function generatePassworld(){
const chars = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789?!@&*()[]"

let passworld = ""

for (let i = 0; i < 8; i++){
    const randomNumber = Math.floor(Math.random() * chars.length) // floor nivela tirando a virgula - random gera um nº aleatório
    passworld += chars.substring(randomNumber, randomNumber + 1)  // faz um corte dentro da string chars
    
  }

  const inputEl = document.querySelector("#passworld")
  inputEl.value = passworld

  }

  const passworldLengthEl = document.querySelector('#passworld-length')
  passworldLengthEl.addEventListener("input", function() {
    const passworldLength = passworldLengthEl.value
    console.log(passworldLength)

  })
    

  



generatePassworld()