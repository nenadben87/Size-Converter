
const selectFrom = document.getElementById('selectFrom');
const selectTo = document.getElementById('selectTo');

let amount = document.getElementById('amount');

const convertBtn = document.querySelector('.convert-btn');

// Add Event Listener
convertBtn.addEventListener('click', function(e){
    
   // Inch to ...
    convertInchtoFoot();

    convertInchtoMeter();

    convertInchtoYards();

    convertInchtoInch();

    // Foot to ...
    convertFoottoInch();

    convertFoottoFoot();

    convertFoottoMeter();

    convertFoottoYards();

    // Meter to ...
    convertMetertoInch();

    convertMetertoFoot();

    convertMetertoMeter();

    convertMetertoYards();

    // Yards to ...
    convertYardstoInch();

    convertYardstoFoot();

    convertYardstoMeter();

    convertYardstoYards();

    showError();

    e.preventDefault();
})

// Inch to Foot
function convertInchtoFoot() {
  let calculatedValue;
  let amountVal = amount.value;
  let output = document.querySelector('.output');

  if(selectFrom.value === 'Inch' && selectTo.value === 'Foot') {
     calculatedValue = (amountVal / 12).toFixed(3);
     
     output.innerHTML = ` <p>${amountVal} Inches = ${calculatedValue} Feet </p>`;
  }
}

// Inch to Meter
function convertInchtoMeter() {
  let calculatedValue;
  let amountVal = amount.value;
  let output = document.querySelector('.output');

  if(selectFrom.value === 'Inch' && selectTo.value === 'Meter') {
     calculatedValue = amountVal * 0.0254 
     
     output.innerHTML = ` <p>${amountVal} Inches = ${calculatedValue} Meter </p>`;
  }
}

// Inch to Yards
function convertInchtoYards() {
  let calculatedValue;
  let amountVal = amount.value;
  let output = document.querySelector('.output');

  if(selectFrom.value === 'Inch' && selectTo.value === 'Yards') {
     calculatedValue = (amountVal / 36).toFixed(3); 
     
     output.innerHTML = ` <p>${amountVal} Inches = ${calculatedValue} Yards </p>`;
  }
}

// Inch to Inch
function convertInchtoInch() {
  let calculatedValue;
  let amountVal = amount.value;
  let output = document.querySelector('.output');

  if(selectFrom.value === 'Inch' && selectTo.value === 'Inch') {
     calculatedValue = amountVal * 1; 
     
     output.innerHTML = ` <p>${amountVal} Inches = ${calculatedValue} Inches </p>`;
  }
}

// Foot to Inch
function convertFoottoInch() {
  let calculatedValue;
  let amountVal = amount.value;
  let output = document.querySelector('.output');

  if(selectFrom.value === 'Foot' && selectTo.value === 'Inch') {
     calculatedValue = (amountVal * 12).toFixed(2); 
     
     output.innerHTML = ` <p>${amountVal} Feet = ${calculatedValue} Inches </p>`;
  }
}

// Foot to Foot
function convertFoottoFoot() {
  let calculatedValue;
  let amountVal = amount.value;
  let output = document.querySelector('.output');

  if(selectFrom.value === 'Foot' && selectTo.value === 'Foot') {
     calculatedValue = amountVal * 1; 
     
     output.innerHTML = ` <p>${amountVal} Feet = ${calculatedValue} Feet </p>`;
  }
}

//Foot to Meter
function convertFoottoMeter() {
  let calculatedValue;
  let amountVal = amount.value;
  let output = document.querySelector('.output');

  if(selectFrom.value === 'Foot' && selectTo.value === 'Meter') {
     calculatedValue = (amountVal / 3.28).toFixed(3); 
     
     output.innerHTML = ` <p>${amountVal} Feet = ${calculatedValue} Meters </p>`;
  }
}

// Foot to Yards
function convertFoottoYards() {
  let calculatedValue;
  let amountVal = amount.value;
  let output = document.querySelector('.output');

  if(selectFrom.value === 'Foot' && selectTo.value === 'Yards') {
     calculatedValue = (amountVal / 3).toFixed(2); 
     
     output.innerHTML = ` <p>${amountVal} Feet = ${calculatedValue} Yards </p>`;
  }
}

// Meter to Inch
function convertMetertoInch() {
  let calculatedValue;
  let amountVal = amount.value;
  let output = document.querySelector('.output');

  if(selectFrom.value === 'Meter' && selectTo.value === 'Inch') {
     calculatedValue = (amountVal * 39.37).toFixed(2); 
     
     output.innerHTML = ` <p>${amountVal} Meters = ${calculatedValue} Inches </p>`;
  }
}

// Meter to Foot
function convertMetertoFoot() {
  let calculatedValue;
  let amountVal = amount.value;
  let output = document.querySelector('.output');

  if(selectFrom.value === 'Meter' && selectTo.value === 'Foot') {
     calculatedValue = (amountVal * 3.28).toFixed(2); 
     
     output.innerHTML = ` <p>${amountVal} Meters = ${calculatedValue} Feet </p>`;
  }
}

//Meter to Meter
function convertMetertoMeter() {
  let calculatedValue;
  let amountVal = amount.value;
  let output = document.querySelector('.output');

  if(selectFrom.value === 'Meter' && selectTo.value === 'Meter') {
     calculatedValue = amountVal * 1; 
     
     output.innerHTML = ` <p>${amountVal} Meters = ${calculatedValue} Meters </p>`;
  }
}

//Meter to Yards
function convertMetertoYards() {
  let calculatedValue;
  let amountVal = amount.value;
  let output = document.querySelector('.output');

  if(selectFrom.value === 'Meter' && selectTo.value === 'Yards') {
     calculatedValue = (amountVal * 1.093).toFixed(3); 
     
     output.innerHTML = ` <p>${amountVal} Meters = ${calculatedValue} Feet </p>`;
  }
}

// Yards to Inch
function convertYardstoInch() {
  let calculatedValue;
  let amountVal = amount.value;
  let output = document.querySelector('.output');

  if(selectFrom.value === 'Yards' && selectTo.value === 'Inch') {
     calculatedValue = (amountVal * 36).toFixed(2); 
     
     output.innerHTML = ` <p>${amountVal} Yards = ${calculatedValue} Inches </p>`;
  }
}

function convertYardstoFoot() {
  let calculatedValue;
  let amountVal = amount.value;
  let output = document.querySelector('.output');

  if(selectFrom.value === 'Yards' && selectTo.value === 'Foot') {
     calculatedValue = (amountVal * 3).toFixed(2); 
     
     output.innerHTML = ` <p>${amountVal} Yards = ${calculatedValue} Feet </p>`;
  }
}

function convertYardstoMeter() {
  let calculatedValue;
  let amountVal = amount.value;
  let output = document.querySelector('.output');

  if(selectFrom.value === 'Yards' && selectTo.value === 'Meter') {
     calculatedValue = (amountVal * 0.9144).toFixed(2); 
     
     output.innerHTML = ` <p>${amountVal} Yards = ${calculatedValue} Meters </p>`;
  }
}

function convertYardstoYards() {
  let calculatedValue;
  let amountVal = amount.value;
  let output = document.querySelector('.output');

  if(selectFrom.value === 'Yards' && selectTo.value === 'Yards') {
     calculatedValue = amountVal * 1; 
     
     output.innerHTML = ` <p>${amountVal} Yards = ${calculatedValue} Yards </p>`;
  }
}

function showError() {
   let output = document.querySelector('.output');
   let outputError = document.querySelector('.output-error');

  if(amount.value === '') {
    output.innerHTML = '';
    outputError.innerHTML = `Please Enter Your Amount !`
    setTimeout(clearError, 3000);
  }
}

function clearError() {
  let outputError = document.querySelector('.output-error');

  outputError.innerHTML = '';
}





