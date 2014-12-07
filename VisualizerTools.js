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
		var dataPoints = []; // Daily total loan amnt

		while(loanManager.getTotalAmount() > 0 && days < 20000){
			// One more day has gone by.
			dateManager.addDay();
			console.log("\n");
			dateManager.print();

			// Accrue interest every day
			totalInterest += loanManager.accrueInterest();
			console.log("Total interest: " + totalInterest.toFixed(2));

			// Pay any due balances if they exist.
			overpay = loanManager.payDue(dateManager.dayNumber());

			// If loan was paid off and money remains, make an extra payement.
			if(overpay > 0){
				loanManager.payExtra(overpay);
			}

			// Pay off extra amount
			if(extraPaymentDay === dateManager.dayNumber()){
				// If a loan has been paid off, apply its min payment as extra.
				extraPaymentAmount += loanManager.oldMinimumPayments();
				loanManager.payExtra(extraPaymentAmount);
			}

			// Save this information to graph
			dataPoints.push(loanManager.getTotalAmount());

			++days;
		}

		console.log("\nCONGRATS!");
		console.log("Your loans are paid on ");
		dateManager.print();
		console.log("Total interest paid $" + totalInterest.toFixed(2));

		return dataPoints;
	};	
};