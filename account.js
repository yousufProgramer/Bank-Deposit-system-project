const diposit = document.getElementById('diposit');
const WithdrawAmount = document.getElementById('WithdrawAmount');
const inputValue = document.getElementById('input');
diposit.addEventListener('click',function(){
   if(input.value > 0){
    const inputValueName = inputValue.value;
    const totalVAmount = parseInt(inputValueName);
   
    const dipositAmount = document.getElementById('dipositAmount').innerHTML;
    const totalDAmount = parseInt(dipositAmount);

    const totalDiposit = totalVAmount + totalDAmount;
    document.getElementById('dipositAmount').innerHTML = totalDiposit;

    const totalAmount = document.getElementById('totalAmount').innerHTML;

    const totalCheckAmount = parseInt(totalAmount);

    const totalNewAmount = totalVAmount + totalCheckAmount;

    document.getElementById('totalAmount').innerHTML = totalNewAmount;
   }
   else{
    alert ('Enter your amount')
   }
   inputValue.value = ' ';
    ////// ***** total amount
 

})

/////**** withdraw amount

WithdrawAmount.addEventListener('click',function(){
    const withdrawValue = document.getElementById ('withdrawValue');
    const withdrawBlance = withdrawValue.value;
    const newWithdAmount = parseInt(withdrawBlance);
    const withdAmount = document.getElementById('withdAmount').innerHTML;

    const withdAmountValue = parseInt(withdAmount);

    const avergeWitdAmount = newWithdAmount + withdAmountValue;
    console.log(avergeWitdAmount);
    document.getElementById('withdAmount').innerHTML = avergeWitdAmount;



})