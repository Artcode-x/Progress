class ProgressComponent {
  constructor(container) {
    this.container = container
    this.valueInput = null
    this.hideBox = null
    this.animateToggle = null
    this.loaderElement = null

    this.render()
    this.bindEvents()
  }

  render() {
    this.container.innerHTML = `
        <div class="progress">
            <div class="progress__block" id="box">
                <div id="loader" class="progress__block-loader"></div>
            </div>
            <div class="progress__control-panel">
                <label class="progress__toggle">
                    <input type="number" id="valueInput" min="0" max="100" placeholder="...">Value
                </label>
                <label class="progress__toggle">
                    <input type="checkbox" id="animateToggle">
                    <span class="switch"></span> Animate
                </label>
                <label class="progress__toggle">
                    <input type="checkbox" id="hideBox">
                    <span class="switch"></span> Hide
                </label>
            </div>
        </div>
      `

    this.valueInput = this.container.querySelector("#valueInput")
    this.hideBox = this.container.querySelector("#hideBox")
    this.animateToggle = this.container.querySelector("#animateToggle")
    this.loaderElement = this.container.querySelector("#loader")
  }

  bindEvents() {
    this.valueInput.addEventListener("input", () => {
      let value = parseInt(this.valueInput.value)
      if (isNaN(value)) value = 0

      if (value < 0) {
        value = 0
      } else if (value > 100) {
        value = 100
      }

      this.valueInput.value = value
      this.setValue(value)
    })

    this.animateToggle.addEventListener("change", () => {
      this.setAnimated(this.animateToggle.checked)
    })

    this.hideBox.addEventListener("change", (event) => {
      this.toggleVisibility(event.target.checked)
    })
  }

  setValue(value) {
    if (value < 0 || value > 100) {
      console.log("Значение должно быть от 0 до 100")
      return
    }
    const degree = (value / 100) * 360
    this.loaderElement.style.transform = `rotate(${degree - 43}deg)`
  }

  setAnimated(isAnimated) {
    this.loaderElement.style.animation = isAnimated ? "spin 2s linear infinite" : "none"
  }

  toggleVisibility(isHidden) {
    this.container.querySelector(".progress__block").style.display = isHidden
      ? "none"
      : "block"
  }
}

const container = document.getElementById("progressComponent")
const progressComponent = new ProgressComponent(container)
