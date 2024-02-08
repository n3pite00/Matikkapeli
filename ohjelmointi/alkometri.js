document.querySelector('#calculate').addEventListener('click', () => {
    const weight = parseFloat(document.getElementById('weight').value);
    const time = parseFloat(document.getElementById('time').value);
    const bottles = parseFloat(document.getElementById('bottles').value);
    const radioButtonGroup = document.getElementsByName('gender');
    const checkedRadio = Array.from(radioButtonGroup).find((radio) => radio.checked);
    const gender = checkedRadio.value;
    let promilles = 0;

    var litrat = bottles * 0.33;
    var grammat = litrat * 8 * 4.5;
    var palamisvauhti = weight / 10;
    var jaljella = grammat - (palamisvauhti * time);

    if (gender == "male") {
        promilles = jaljella / (weight * 0.7);
    } else {
        promilles = jaljella / (weight * 0.6);
    }

    const result = document.getElementById('promilles');
    result.innerHTML = promilles.toFixed(2);
})