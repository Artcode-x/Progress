function test() {
  const progressBlock = document.getElementById("box")
  const hideBox = document.getElementById("hideBox")
  const loaderElement = document.getElementById("loader")
  const valueInput = document.getElementById("valueInput")
  const animateToggle = document.getElementById("animateToggle")

  const loaderAPI = {
    setValue: function (value) {
      if (value < 0 || value > 100) {
        console.log("Значение должно быть от 0 до 100")
        return
      }

      const degree = (value / 100) * 360
      loaderElement.style.transform = `rotate(${degree - 43}deg)`
    },
    setAnimated: function (isAnimated) {
      if (isAnimated) {
        loaderElement.style.animation = "spin 2s linear infinite"
      } else {
        loaderElement.style.animation = "none"
      }
    }
  }

  valueInput.addEventListener("input", function () {
    const value = valueInput.value === "" ? 0 : parseInt(valueInput.value)
    if (value > 100) {
      valueInput.style.color = "red"
    } else if (value < 100) {
      valueInput.style.color = ""
    }
    loaderAPI.setValue(value)
  })

  animateToggle.addEventListener("change", function () {
    loaderAPI.setAnimated(animateToggle.checked)
  })

  hideBox.addEventListener("change", function (event) {
    if (event.target.checked) {
      progressBlock.style.display = "none"
    } else {
      progressBlock.style.display = "block"
    }
  })
}

test()
