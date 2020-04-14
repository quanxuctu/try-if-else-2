function feetToMet(n) {
    let convert;
    convert = 0.305 * n;
    return convert.toFixed(5);
}

function metToFeet(n) {
    let convert;
    convert = n * 3.279;
    return convert.toFixed(5);
}

function mainMet() {
    let met = document.getElementById('inputF').value;
    met = parseFloat(met);
    document.getElementById('resultM').value = feetToMet(met);
}

function mainFeet() {
    let feet = document.getElementById('inputM').value;
    feet = parseFloat(feet);
    document.getElementById('resultF').value = metToFeet(feet);
}