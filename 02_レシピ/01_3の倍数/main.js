const FizzBuzz = function(number) {
  for (let n = 1; n <= number; n++) {
    if (n % 15 == 0) {
      console.log("FizzBuzz")
    } else if (n % 5 == 0) {
      console.log("Buzz")
    } else if (n % 3 == 0) {
      console.log("Fizz")
    } else {
      console.log(n)
    }
  }
}

const sansuki = function(number) {
  for (let n = 1; n <= number; n++) {
    let thisString = n.toString()
    if (n % 3 == 0 || thisString.indexOf("3") >= 0) {
      console.log(n + "!!")
    } else {
      console.log(n)
    }
  }
}


const display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0

const countUp = function(){
    count += 1
    console.log(count)
    display.textContent = count/100
}

let id = null

button.onclick = function(){
    if (id === null) { // start
        id = setInterval(countUp, 10)
        button.textContent = "stop"
    } else { // stop
        clearInterval(id)
        id = null
        button.textContent = "start"
    }
    if (n % 3 == 0) {
      console.log("!!")
    }
}