let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

function sendMoney(){
   var enterName2 = document.getElementById("enterName2").value;
   var enterName1 = document.getElementById("enterName1").value;
   var enterAmount = parseInt(document.getElementById("enterAmount").value);

   if (enterAmount > parseInt(document.getElementById(enterName1 + "BankBalance").innerHTML)) {
      alert("Insufficient Balance.")
   } else {
      var findUserBankAccount1 = enterName1 + "BankBalance";
      var findUserBankAccount2 = enterName2 + "BankBalance";
      var finalAmount2 = parseInt(document.getElementById(findUserBankAccount2).innerHTML) + enterAmount;
      var finalAmount1 = parseInt(document.getElementById(findUserBankAccount1).innerHTML) - enterAmount;
      // var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - enterAmount
      // document.getElementById("myAccountBalance").innerText = myAccountBalance
      document.getElementById(findUserBankAccount2).innerHTML = finalAmount2;
      document.getElementById(findUserBankAccount1).innerHTML = finalAmount1;
      alert(`Successful Transaction !!  
      ₹${enterAmount} is sent to ${enterName2}@gmail.com from ${enterName1}@gmail.com`)

      // transaction history 
      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`₹${enterAmount} is sent to recepient with Email-id ${enterName2}@gmail.com from ${enterName1}@gmail.com on ${Date()}.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
   }
}