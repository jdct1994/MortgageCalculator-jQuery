/*

Create a function that will be called when the user clicks on the button element you added to your HTML.
This function should grab the values entered by the user from the input elements and the select element.
The function should then calculate the monthly payment as follows (we can break this formula into 4 'buckets' for readability):

*/

$(document).ready(function () {


// Create an array for the select menu
	var selection = [
		["Monthly (12 months)", 12],
		["Bi-Monthly (6 months)", 6]
];

for (var i = 0; i < selection.length; i++) {
	$("<option>").val(selection[i][1]).html(selection[i][0]).appendTo("#selectMenu");
};


$("#calculate").click(function(){

// $("form").on('submit', function(e) {
// 	e.preventDefault();

	var loanBalance = $("#inputLoanBalance").val();
	var interestRate = $("#inputInterestRate").val();
	var loanTerm = $("#inputLoanTerm").val();
	var period = $("#selectMenu").val();
	var numberOfPayments = loanTerm * period;
	var monthlyInterestRate = (interestRate / 100) / period;
	var compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);
	var interestQuotient = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);
	var monthlyPayment = loanBalance * interestQuotient;
	monthlyPayment = Math.round(monthlyPayment * 100) / 100;
	$("#output").html("Your rent is $" + monthlyPayment + ".");
	console.log("hello");
});


});