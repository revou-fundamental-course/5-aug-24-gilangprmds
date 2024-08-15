// 
const bmiText = document.getElementById("bmi");
const descText = document.getElementById("desc");
const form = document.querySelector("form");

form.addEventListener("submit", onFormSubmit);
form.addEventListener("reset", onFormReset);

// fungsi tombol reset
function onFormReset() {
  bmiText.textContent = 0;
  bmiText.className = "";
  descText.textContent = "N/A";
}

// fungsi tombol sumbit
function onFormSubmit(e) {
  e.preventDefault();

  const weight = parseFloat(form.weight.value);
  const height = parseFloat(form.height.value);

// untuk validasi agar nilai berat badan dan tinggi badan tidak kososng
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Please enter a valid weight and height");
    return;
  }

//   menghitung nilai BMI dan mengkonversi tinggi badan
  const heightInMeters = height / 100; // cm -> m
  const bmi = weight / Math.pow(heightInMeters, 2);
  const desc = interpretBMI(bmi);

//   mengkonversi hasil BMI menjadi 2 angka decimal dan menentukan kategori BMI
  bmiText.textContent = bmi.toFixed(2);
  bmiText.className = desc;
  descText.innerHTML = `Kamu <strong>${desc}</strong>`;
}

// fungsi untuk menampilkan kategori BMI
function interpretBMI(bmi) {
  if (bmi < 18.5) {
    return "Kurang Berat Badan";
  } else if (bmi < 25) {
    return "Normal";
  } else if (bmi < 30) {
    return "Kelebihan Berat Badan";
  } else {
    return "Obesitas";
  }
}