'use strict'
angular.module('angularjsSelfApp').directive('ngFocus', ['', function(){
	// Runs during compile
	var Focus_Class='ng-focused';
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			controller.$focused=false;
			iElm.bind('focus',function (evt) {
				iElm.addClass(Focus_Class);
				$scope.$apply(function () {
					controller.$focused=true;
				});
			}).bind('blur',function (evt) {
				iElm.removeClass(Focus_Class);
				$scope.$apply(function () {
					controller.$focused=false;
				});
			});
			
		}
	};
}]);