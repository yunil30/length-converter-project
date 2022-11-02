var txtBoxInput = document. getElementById('centimeter');
var convertButton = document. getElementById('convertBtn');

convertButton.addEventListener('click', convertNumber);

function convertNumber(){
        document.getElementById('inches').innerHTML = (txtBoxInput.value * 0.393701).toFixed(5) + 'inch';
        document.getElementById('feet').innerHTML = (txtBoxInput.value * 0.0328084).toFixed(5) + 'ft';
        document.getElementById('decimeter').innerHTML = (txtBoxInput.value * 0.1).toFixed(5) + 'dm'; 
        document.getElementById('meter').innerHTML = (txtBoxInput.value * 0.01).toFixed(5) + 'm';
        document.getElementById('hectometer').innerHTML = (txtBoxInput.value * 0.0001).toFixed(5) + 'hm'; 
        document.getElementById('kilometer').innerHTML = (txtBoxInput.value * 0.00001).toFixed(5) + 'km'; 
}


