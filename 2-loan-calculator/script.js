function calculateEMI() {
    const amount = Number(document.getElementById("amount").value);
    const rate = Number(document.getElementById("interest").value);
    const tenure = Number(document.getElementById("tenure").value);

    if (amount <= 0 || rate <= 0 || tenure <= 0) {
        alert("Please enter valid numbers");
        return;
    }

    const monthlyRate = (rate / 12) / 100;
    const months = tenure * 12;
    
    const emi = (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);

    document.getElementById("emi-result").innerHTML = "Monthly EMI: ₹" + emi.toFixed(2);

    generateTable(amount, monthlyRate, months, emi);
}

function generateTable(balance, monthlyRate, months, emi) {
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = ""; 

    for (let i = 1; i <= months; i++) {
        let interestPayment = balance * monthlyRate;
        let principalPayment = emi - interestPayment;
        
        balance = balance - principalPayment;

        if (balance < 0) { balance = 0; }

        let row = `<tr>
            <td>${i}</td>
            <td>₹${principalPayment.toFixed(2)}</td>
            <td>₹${interestPayment.toFixed(2)}</td>
            <td>₹${balance.toFixed(2)}</td>
        </tr>`;

        tableBody.innerHTML += row;
    }
}