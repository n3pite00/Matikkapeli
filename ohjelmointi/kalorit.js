document.querySelector('button').addEventListener('click', () => {
    const weight = document.querySelector('input[type=number]').value
    const intensity = document.querySelector('select').value
    const radioButtonGroup = document.getElementsByName('gender')
    const checkedRadio = Array.from(radioButtonGroup).find((radio) => radio.checked)
    const gender = checkedRadio.value
    let calories = 0

    if (gender == "male") {
        calories = (879 + 10.2 * weight) * intensity
    } else {
        calories = (795 + 7.18 * weight) * intensity
    }

    const result = document.querySelector('output')
    result.innerHTML = calories.toFixed(0)
})