function DateManager(startDay){
	var self = this;
	self.date = startDay;

	self.addDay = function(){
		self.date.setDate(self.date.getDate() + 1);
	};

	self.dayNumber = function(){
		var dateString = self.date.toDateString();
		var parts = dateString.split(' ');
		return parseInt( parts[2] );
	};

	self.yearNumber = function(){
		var dateString = self.date.toDateString();
		var parts = dateString.split(' ');
		return parseInt( parts[3] );
	};

	self.deltaDays = function(startDate, endDate){

	};

	self.deltaYears = function(startYear, endYear){

	};

	self.print = function(){
		var dateString = self.date.toDateString();
		console.log(dateString);
	};
};