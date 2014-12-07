function LoanManager(){
	var self = this;

	self.loans = [];

	self.addLoan = function(loan){
		self.loans.push(loan);
		console.log("'" + loan.getName() + "' added to loans: ");
		loan.print();
	};

	self.getTotalAmount = function(){
		var total = 0;
		for(var i = 0; i < self.loans.length; ++i){
			total += self.loans[i].getAmount();
		}

		return total;
	};

	self.highestInterestLoanIndex = function(){
		var maxRate = -1;
		var maxIdx = -1;
		for(var i = 0; i < self.loans.length; ++i){
			if(self.loans[i].getInterestRate() > maxRate && 
				self.loans[i].getAmount() > 0){
				maxRate = self.loans[i].getInterestRate();
				maxIdx = i;
			}
		}

		if(maxIdx < 0 || maxIdx >= self.loans.length){
			console.warn("Something went wrong finding highestInterestLoanIndex. Possible all loans have been paid.");
			return -1;
		}

		return maxIdx;
	};

	// Pays extra to highest interest loans first
	self.payExtra = function(paymentAmount){
		var overpay = paymentAmount;

		// Make extra payments to highest interest loans while
		// we have money left over from paid loans and not all 
		// loans are paid.
		do{
			var maxInterestIdx = self.highestInterestLoanIndex();
			if(maxInterestIdx === -1){
				return;
			}

			overpay = self.loans[maxInterestIdx].makePayment(overpay);
		} while(overpay > 0 && maxInterestIdx != -1);
	};

	self.accrueInterest = function(){
		var interestAdded = 0;

		for(var i = 0; i < self.loans.length; ++i){
			interestAdded += self.loans[i].accrueInterest();
		}

		return interestAdded;
	};

	self.payDue = function(payDayNumber){
		var overpay = 0;
		for(var i = 0; i < self.loans.length; ++i){
			// If today is our payment day, make the minimum payment.
			if(self.loans[i].getPaymentDay() === payDayNumber){
				overpay += self.loans[i].makePayment(self.loans[i].getMinimumPayment());
			}
		}

		return overpay;
	};

	self.oldMinimumPayments = function(){
		var oldMins = 0;
		for(var i = 0; i < self.loans.length; ++i){
			// If loan is paid off
			if(self.loans[i].getAmount() === 0){
				// Apply its min payment to extra amount
				oldMins += self.loans[i].getMinimumPayment();
			}
		}

		return oldMins;
	};

	self.print = function(){
		console.log("All loans:")
		for(var i = 0; i < self.loans.length; ++i){
			self.loans[i].print();
		}
	};
};