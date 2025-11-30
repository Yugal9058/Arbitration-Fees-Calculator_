// script.js
function calculateFees() {
    const claimAmount = parseFloat(document.getElementById('claimAmount').value);
    const arbitratorType = document.getElementById('arbitratorType').value;
    let fees = 0;

    if (claimAmount <= 500000) {
        fees = arbitratorType === 'sole' ? 56250 : 45000;
    } else if (claimAmount <= 2000000) {
        fees = (45000 + (0.035 * (claimAmount - 500000))) * (arbitratorType === 'three' ? 1 : 1.25);
    } else if (claimAmount <= 10000000) {
        fees = (97500 + (0.03 * claimAmount)) * (arbitratorType === 'three' ? 1 : 1.25);
    } else if (claimAmount <= 100000000) {
        fees = (337500 + (0.01 * claimAmount)) * (arbitratorType === 'three' ? 1 : 1.25);
    } else if (claimAmount <= 200000000) {
        fees = (1237500 + (0.0075 * claimAmount)) * (arbitratorType === 'three' ? 1 : 1.25);
    } else {
        fees = (1987500 + Math.min(0.005 * claimAmount, 3000000)) * (arbitratorType === 'three' ? 1 : 1.25);
    }

    document.getElementById('result').innerText = `Calculated Fees: Rs. ${fees.toFixed(2)}`;
}