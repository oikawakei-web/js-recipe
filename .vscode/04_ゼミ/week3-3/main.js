const input = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")
let memos = []
if (localStorage.memos) {
  const memosJson = localStorage.memos
  memos = JSON.parse(memosJson)

  for (let i = 0; i < memos.length; i++) {
    const div = document.createElement("div")
    div.textContent = memos[i]
    memoContainer.append(div)
  }
}

addButton.onclick = function() {
  memos.push(input.value)
  localStorage.memos = JSON.stringify(memos)
  console.log(memos)
  memoContainer.innerHTML = ""
  for (let i = 0; i < memos.length; i++) {
    const memo = document.createElement("div")
    memo.textContent = memos[i]
    memoContainer.append(memo)
  }
  input.value = ""
}
