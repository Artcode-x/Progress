function test() {
  const progressBlock = document.getElementById("box")
  const hideBox = document.getElementById("hideBox")

  const loaderElement = document.getElementById("loader")
  const valueInput = document.getElementById("valueInput")
  const animateToggle = document.getElementById("animateToggle")

  const loaderAPI = {
    setValue: function (value) {
      if (value < 0 || value > 100) {
        console.error("Значение должно быть от 0 до 100")
        return
      }

      const degree = (value / 100) * 360
      loaderElement.style.transform = `rotate(${degree}deg)`
    },
    setAnimated: function (isAnimated) {
      if (isAnimated) {
        loaderElement.style.animation = "spin 1s linear infinite"
      } else {
        loaderElement.style.animation = "none"
        loaderElement.style.transform = "none"
      }
    }
  }

  valueInput.addEventListener("input", function () {
    const value = parseInt(valueInput.value)
    loaderAPI.setValue(value)
  })

  animateToggle.addEventListener("change", function () {
    loaderAPI.setAnimated(animateToggle.checked)
  })

  hideBox.addEventListener("change", function () {
    console.log(event.target.checked)
    if (event.target.checked) {
      progressBlock.style.display = "none"
    } else {
      progressBlock.style.display = "block"
    }
  })
}

test()
