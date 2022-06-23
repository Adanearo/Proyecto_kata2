//AREGLOS DE CUENTAS
var user =[
    { name:'Adrian', fname:'Adrian Izaid Ramos', balance: 500.00, phone: 5512345678, password: "Uno.123", },
    { name:'Blanca', fname:'Blanca Olvera López', balance: 123.00, phone: 5512345679, password: "Dos.123", },
    { name:'Andrea', fname:'Andrea Melgarejo Ortega', balance: 720.00, phone: 5512345670, password: "Tres.123",}
]

//GLOBAL VARIABLES
var actualUser 
var actualBalance
var actualPassword
var actualPhone

//VARIABLES TO BUTTONS
var logIn1 = document.getElementById('logIn1')
var logIn2 = document.getElementById('logIn2')
var lenguage = document.getElementById('lenguage')
var help1 = document.getElementById('help1')
var help2 = document.getElementById('help2')
var help3 = document.getElementById('help3')

var logInButton1 = document.getElementById('logInB1')
var logInButton2 = document.getElementById('logInB2')
var backButton1 = document.getElementById('back1')
var backButton2 = document.getElementById('back2')
var backButton3 = document.getElementById('back3')
var backButton4 = document.getElementById('back4')
var logOutButton = document.getElementById('logOut')

var balance = document.getElementById('balanceButton')
var deposit = document.getElementById('depositButton')
var withdraw = document.getElementById('withdrawButton')

var acceptWithdraw = document.getElementById('acceptWith')
var acceptDeposit = document.getElementById('acceptDepo')

//OTHER VARIABLES
var error1 = document.getElementById('error1')

//PAGE MOVEMENT
logIn1.addEventListener('click', function logInwU(){
    containerWelcome.classList.add('none')
    containerLogin1.classList.remove('none')
})
logIn2.addEventListener('click', function logInwPN(){
    containerWelcome.classList.add('none')
    containerLogin2.classList.remove('none')
})
lenguage.addEventListener('click', function lenguage(){
    containerWelcome.classList.add('none')
    containerLenguage.classList.remove('none')
})
help1.addEventListener('click', function help1(){
    containerWelcome.classList.add('none')
    containerHelp.classList.remove('none')
})
help2.addEventListener('click', function help2(){
    containerLenguage.classList.add('none')
    containerHelp.classList.remove('none')
})
help3.addEventListener('click', function help3(){
    containerUser.classList.add('none')
    containerHelp.classList.remove('none')
})
backButton1.addEventListener('click', function back1(){
    containerLogin1.classList.add('none')
    containerWelcome.classList.remove('none')
})
backButton2.addEventListener('click', function back2(){
    containerLogin2.classList.add('none')
    containerWelcome.classList.remove('none')
})
backButton3.addEventListener('click', function back3(){
    containerLenguage.classList.add('none')
    containerWelcome.classList.remove('none')
})
backButton4.addEventListener('click', function back4(){
    containerHelp.classList.add('none')
    containerUser.classList.remove('none')
})
logOutButton.addEventListener('click', function logOut(){
    containerUser.classList.add('none')
    containerWelcome.classList.remove('none')
    document. location. reload()
})

//VARIABLE SUSTITUTION
var userName = document.getElementById('userName')
var phoneNumber = document.getElementById('phoneNumber')
var totalBalance = document.getElementById('totalBalance')

//AUTHENTICATION
logInButton1.addEventListener('click',function auth1(){
    let userNameLI = document.getElementById('inputUser').value;
    let userPassLI = document.getElementById('inputPassword1').value;

    if(userNameLI == user[0].name && userPassLI == user[0].password){
        containerLogin1.classList.add('none');
        containerUser.classList.remove('none');
        userPicA.classList.remove('none');
        userPicB.classList.add('none');
        userPicC.classList.add('none');
        userName.innerHTML = (user[0].fname);
        phoneNumber.innerHTML = (user[0].phone);
        actualBalance = (user[0].balance);
    } 
    else if (userNameLI === user[1].name && userPassLI === user[1].password){
        containerLogin1.classList.add('none');
        containerUser.classList.remove('none');
        userPicA.classList.add('none');
        userPicB.classList.remove('none');
        userPicC.classList.add('none');
        userName.innerHTML = (user[1].fname);
        phoneNumber.innerHTML = (user[1].phone);
        actualBalance = (user[1].balance);
    } 
    else if (userNameLI === user[2].name && userPassLI === user[2].password){
        containerLogin1.classList.add('none');
        containerUser.classList.remove('none');
        userPicA.classList.add('none');
        userPicB.classList.add('none');
        userPicC.classList.remove('none');
        userName.innerHTML = (user[2].fname);
        phoneNumber.innerHTML = (user[2].phone);
        actualBalance = (user[2].balance);
    }
    else {
        error1.classList.remove('none')
    }
})
logInButton2.addEventListener('click',function auth2(){
    let userPhoneLI = document.getElementById('inputPhone').value;
    let userPassLI = document.getElementById('inputPassword2').value;

    if(userPhoneLI == user[0].phone && userPassLI == user[0].password){
        containerLogin2.classList.add('none');
        containerUser.classList.remove('none');
        userPicA.classList.remove('none');
        userPicB.classList.add('none');
        userPicC.classList.add('none');
        userName.innerHTML = (user[0].fname);
        phoneNumber.innerHTML = (user[0].phone);
        actualBalance = (user[0].balance);
    } 
    else if (userPhoneLI === user[1].phone && userPassLI === user[1].password){
        containerLogin2.classList.add('none');
        containerUser.classList.remove('none');
        userPicA.classList.add('none');
        userPicB.classList.remove('none');
        userPicC.classList.add('none');
        userName.innerHTML = (user[1].fname);
        phoneNumber.innerHTML = (user[1].phone);
        actualBalance = (user[1].balance);
    } 
    else if (userPhoneLI === user[2].phone && userPassLI === user[2].password){
        containerLogin2.classList.add('none');
        containerUser.classList.remove('none');
        userPicA.classList.add('none');
        userPicB.classList.add('none');
        userPicC.classList.remove('none');
        userName.innerHTML = (user[2].fname);
        phoneNumber.innerHTML = (user[2].phone);
        actualBalance = (user[2].balance);
    }
    else {
        error1.classList.remove('none')
    }
})

 // ACCOUNT OPERTAIONS
 withdraw.addEventListener('click', function withdraw(){
    withdrawBox.classList.remove('none')
    depositBox.classList.add('none')
    balanceBox.classList.add('none')
    withdrawBalance.classList.add('none')
    depositBalance.classList.add('none')
 })
 deposit.addEventListener('click', function deposit(){
    withdrawBox.classList.add('none')
    depositBox.classList.remove('none')
    balanceBox.classList.add('none')
    withdrawBalance.classList.add('none')
    depositBalance.classList.add('none')
 })

 var money
 acceptWithdraw.addEventListener('click', function acceptWithdraw(){
    let withAmount = document.getElementById('withdrawAmount').value;
    money = parseFloat(withAmount)
    if ((actualBalance - money) >= 10){
        withdrawBalance.classList.remove('none')
        withdrawnAmount.innerHTML = '$' + withAmount + '.00'
        actualBalance = actualBalance - money
        newBalanceWith.innerHTML = '$' + actualBalance.toFixed(2)
    } else {
        alert('That amount cannot be withdrawn.\nThe minimum balance must be $10.00.')
    }
    withdrawAmount.value=''
})
acceptDeposit.addEventListener('click', function acceptDeposit(){
    let depoAmount = document.getElementById('depositAmount').value;
    money = parseFloat(depoAmount)
    if ((actualBalance + money) <= 990){
        depositBalance.classList.remove('none')
        depositedAmount.innerHTML = '$' + depoAmount + '.00'
        actualBalance = actualBalance + money
        newBalanceDepo.innerHTML = '$' + actualBalance.toFixed(2)
    } else {
        alert('That amount cannot be depostited.\nThe maximum balance must be $990.00.')
    }
    depositedAmount.value=''
})

balance.addEventListener('click', function balance(){
    withdrawBox.classList.add('none')
    depositBox.classList.add('none')
    balanceBox.classList.remove('none')
    totalBalance.innerHTML = '$' + actualBalance.toFixed(2)
 })