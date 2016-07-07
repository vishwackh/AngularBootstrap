app.directive('navDivider', ['$timeout', function($timeout) {
  return {
    restrict: 'AE',
      link: function(scope, element, attrs) {
        if(!scope.$last) {
          scope.$evalAsync(function() {
            element.after('<li role="separator" class="divider" ></li>');
          });
        }
      }
  }
}]);

// if code is queued using $evalAsync from a directive, it should run after the DOM has been manipulated by Angular, but before the browser renders
// if code is queued using $evalAsync from a controller, it should run before the DOM has been manipulated by Angular (and before the browser renders) -- rarely do you want this
// if code is queued using $timeout, it should run after the DOM has been manipulated by Angular, and after the browser renders (which may cause flicker in some cases)

app.directive('myNav', function () {
    return {
        restrict: 'EA', 
        replace: true,
        templateUrl: "views/nav.html",
        controller: 'navMenu'
    }
});

app.directive('myFooter', function () {
    return {
        restrict: 'EA', 
        replace: true,
        templateUrl: "views/footer.html",
        controller: ['$scope', '$filter', function ($scope, $filter) {
           $scope.cyrit="Bootstap Components By";
		   $scope.name="Using AngularJS";
        }]
    }
});