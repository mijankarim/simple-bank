const loginArea = document.getElementById('login-area');
const loginBtn = document.getElementById('login');
const transactionArea = document.getElementById('transaction-area');
loginBtn.addEventListener('click', function () {
    loginArea.style.display = 'none';
    transactionArea.style.display = "block";
});

//deposite button event handler
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function () {

    const depositNumber = getInputNumber('depositAmount');
    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);
    document.getElementById('depositAmount').value = "";
});

//withdraw button event handler
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function () {

    const withdrawNumber = getInputNumber("withdrawAmount");
    updateSpanText("currentWithdraw", withdrawNumber);
    updateSpanText("currentBalance", -1 * withdrawNumber);
    document.getElementById('withdrawAmount').value = "";
})

function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = currentNumber + depositNumber;
    document.getElementById(id).innerText = total;
}

