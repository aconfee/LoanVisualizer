function LoanManager(){
	var self = this;

	self.loans = [];

	self.addLoan = function(loan){
		self.loans.push(loan);
		console.log("Loan added to loans: ");
		loan.print();
	};

	self.getTotalAmount = function(){
		var total = 0;
		for(var i = 0; i < self.loans.length; ++i){
			total += self.loans[i].getAmount();
		}

		return total;
	};

	self.makePayment = function(){

	};

	self.accrueInterest = function(){

	};

	self.paymentDue = function(date){

	};

	self.payDue = function(){

	};

	self.print = function(){
		console.log("All loans:")
		for(var i = 0; i < self.loans.length; ++i){
			console.log("Loan " + i + ": \n" + self.loans[i]);
		}
	};
}