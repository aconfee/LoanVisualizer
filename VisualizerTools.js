function VisualizerTools(){
	var self = this;

	self.loanPayoffSimulation = function(startDate, extraAmount, extraPayDay, loans){
		var loanManager = new LoanManager();
		var dateManager = new DateManager(startDate);
		var extraPaymentAmount = extraAmount;
		var extraPaymentDay = extraPayDay;

		for(var i = 0; i < loans.length; ++i){
			loanManager.addLoan(loans[i]);
		}

		var overpay;
		var totalInterest = 0;
		var days = 0;
		var totalAmountPrediction = []; // Daily total loan amnt
		var totalInterestPrediction = [];
		var loan0 = [];

		// Data is returned to graph
		var data = {
			"totalAmountPrediction":totalAmountPrediction,
			"totalInterestPrediction":totalInterestPrediction,
			"loan0":loan0
		};

		while(loanManager.getTotalAmount() > 0 && days < 20000){
			// Log the current day.
			console.log("\n");
			dateManager.print();

			// Accrue interest every day
			totalInterest += loanManager.accrueInterest();

			// Pay any due balances if they exist.
			// Over pay comes from paid off loans
			// Example: If a loan is fully paid, min payment is applied through overpay
			overpay = loanManager.payDue(dateManager.dayNumber());

			// If loan was paid off and money remains, make an extra payement.
			if(overpay > 0){
				loanManager.payExtra(overpay);
			}

			// Pay off extra amount
			if(extraPaymentDay === dateManager.dayNumber()){
				loanManager.payExtra(extraPaymentAmount);
			}

			// Save this information to graph
			totalAmountPrediction.push([dateManager.getUTC(), loanManager.getTotalAmount()]);
			totalInterestPrediction.push([dateManager.getUTC(), totalInterest]);
			//loan1.push([dateManager.getUTC(), loanManager.getLoans()[0].getAmount()]);

			for(var i = 0; i < loanManager.getLoans().length; ++i){
				var name = "loan" + i;
				if(data.hasOwnProperty(name)){
					console.log("has property!")
				}
				else{
					data[name] = [];
					console.log("property added");
				}

				data[name].push([dateManager.getUTC(), loanManager.getLoans()[i].getAmount()]);
			}

			// One more day has gone by.
			dateManager.addDay();
			++days;
		}

		console.log("\nCONGRATS!");
		console.log("Your loans are paid on ");
		dateManager.print();
		console.log("Total interest paid $" + totalInterest.toFixed(2));

		return data;
	};	
};