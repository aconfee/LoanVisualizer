
// Example: new Loan("Demo Loan", 3000, 3.5, 200, "03");
function Loan(name, amount, interestRate, minimumPayment, paymentDay){
	var self = this;

	self.amount = amount;
	self.interestRate = interestRate;
	self.minimumPayment = minimumPayment;
	self.paymentDay = paymentDay;
	self.name = name;

	self.getName = function(){
		return self.name;
	};

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

	self.makePayment = function(paymentAmount){
		// If this loan is already paid, return the entire amound.
		if(self.amount === 0){
			return paymentAmount;
		}

		if(paymentAmount < 0){
			console.log("Invalid payment amount. Negative number.");
			return;
		}

		// Make a payment
		var previousAmount = self.amount;
		self.amount -= paymentAmount;

		// If we overpaid, return that amount back to user.
		if(self.amount < 0){
			var overpay = self.amount * -1;
			self.amount = 0;

			console.log(self.name + " recieved payment of $" + paymentAmount.toFixed(2) + ". Total reduced from $" + previousAmount.toFixed(2) + " to $" + self.amount.toFixed(2) + ". Returning amount of $" + overpay.toFixed(2));
			return overpay;
		}
		else{
			console.log(self.name + " recieved payment of $" + paymentAmount.toFixed(2) + ". Total reduced from $" + previousAmount.toFixed(2) + " to $" + self.amount.toFixed(2));
		}

		return 0;
	};

	self.accrueInterest = function(){
		if(self.amount === 0){
			return;
		}
		
		var interestAdded = (self.amount * (self.interestRate / 100)) / 365;
		self.amount += interestAdded;
		console.log(self.name + " added $" + interestAdded.toFixed(2) + " interest to loan.");

		return interestAdded;
	};

	self.print = function(){
		console.log(self.name);
		console.log("	Amount: $" + self.amount.toFixed(2));
		console.log("	Interest Rate: " + self.interestRate + "%");
		console.log("	Minimum payment of $" + self.minimumPayment.toFixed(2) + " due every " + self.paymentDay + " of the month.");
	};
}