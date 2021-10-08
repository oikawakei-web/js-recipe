const waterButton = document.getElementById("water-button")
const ochaButton = document.getElementById("ocha-button")

// 退勤ボタン
waterButton.onclick = function () {
  isWorking = false
  draw()
}

// 打ち上げボタン
ochaButton.onclick = function () {
  isInSpace = true
  draw()
}