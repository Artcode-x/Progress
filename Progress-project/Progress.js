function test() {
  const progressBlock = document.getElementById("progress-block")

  const hideBox = document.getElementById("hideBox")

  hideBox.addEventListener("change", function () {
    console.log(event.target.checked)
    if (event.target.checked) {
      hideProgress()
    } else {
      showProgress()
    }
  })

  function hideProgress() {
    progressBlock.style.display = "none"
  }

  function showProgress() {
    progressBlock.style.display = "block"
  }
}

test()
