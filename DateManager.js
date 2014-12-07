function DateManager(startDay){
	var self = this;
	self.date = startDay;

	self.getCurrentDate = function(){
		return self.date;
	};

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

	self.print = function(){
		var dateString = self.date.toDateString();
		console.log(dateString);
	};
};