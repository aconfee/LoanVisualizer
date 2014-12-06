function DateManager(startDay){
	var self = this;
	self.date = startDay;

	self.addDay = function(){
		//self.day = new Date(self.day + 1);
		self.date.setDate(self.date.getDate() + 1);
	};

	self.addWeek = function(){

	};

	self.addMonth = function(){

	};

	self.dayNumber = function(){

	};

	self.yearNumber = function(){

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