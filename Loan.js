function Loan(amount, interestRate, minimumPayment, paymentDay){
	var self = this;

	self.amount = amount;
	self.interestRate = interestRate;
	self.minimumPayment = minimumPayment;
	self.paymentDay = paymentDay;

	self.getAmount = function(){
		return self.amount;
	};

	self.getInterestRate = function(){
		return self.interestRate;
	};

	self.getMinimumPayment = function(){
		return self.minimumPayment;
	};

	self.getPaymentDay = function(){
		return self.paymentDay;
	};

	self.makePayment = function(amount){

	};

	self.accrueInterest = function(){

	};

	self.print = function(){
		console.log("	Amount: $" + self.amount);
		console.log("	Interest Rate: " + self.interestRate + "%");
		console.log("	Minimum payment of $" + self.minimumPayment + " due every " + self.paymentDay + " of the month.");
	};
}