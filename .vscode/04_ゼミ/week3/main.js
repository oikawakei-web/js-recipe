const input = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")
let memos = []

addButton.onclick = function() {
  memos.push(input.value)
  console.log(memos)
  memoContainer.innerHTML = ""
  for (let i = 0; i < memos.length; i++) {
    const memo = document.createElement("div")
    memo.textContent = memos[i]
    memoContainer.append(memo)
  }
  input.value = ""
}
