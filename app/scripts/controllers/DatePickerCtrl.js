angular.module('angularjsSelfApp').controller('datePickerCtrl', ['$scope', function($scope){
	$('#dob').datepicker({
		autoclose: true,
	    todayHighlight: true,
	    orientation: "bottom auto",
	});
	$('#dob').on("changeDate", function() {
	    // $('#my_hidden_input').val(
	    //     $('#datepicker').datepicker('getFormattedDate')
	    console.log($('#dob').datepicker('getDate'));
	    var today=$('#dob').datepicker('getDate');
	});

	
}]);