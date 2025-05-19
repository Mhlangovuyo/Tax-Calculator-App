function calculateTax() {
    const income = parseFloat(document.getElementById('income').value);
    const taxLabel = document.getElementById('taxAmountLabel');
  
    if (isNaN(income) || income <= 0) {
      taxLabel.value = "Please enter a valid income.";
      return;
    }
  
    let tax = 0;
  
    if (income <= 237100) {
      tax = income * 0.18;
    } else if (income <= 370500) {
      tax = 42678 + (income - 237100) * 0.26;
    } else if (income <= 512800) {
      tax = 77362 + (income - 370500) * 0.31;
    } else if (income <= 673000) {
      tax = 121475 + (income - 512800) * 0.36;
    } else if (income <= 857900) {
      tax = 179147 + (income - 673000) * 0.39;
    } else if (income <= 1817000) {
      tax = 251258 + (income - 857900) * 0.41;
    } else {
      tax = 644489 + (income - 1817000) * 0.45;
    }
  
    taxLabel.value = `R${tax.toFixed(2)}`;
  }
  