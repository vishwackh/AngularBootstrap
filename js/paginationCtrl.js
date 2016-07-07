

app.controller('paginationCtrl',function($scope,$http){
 $scope.itemsPerPage = 5;
  $scope.currentPage = 0;
  $scope.items = [];

  for (var i=1; i<=100; i++) {
    $scope.items.push({ id: i, firstname:'nisar',lastname:'mohamed',email:'nisr19@gmail.com' });
  }


  $scope.range = function() {
    var rangeSize = 5;
    var ret = [];
    var start;

    start = $scope.currentPage;
    if ( start > $scope.pageCount()-rangeSize ) {
      start = $scope.pageCount()-rangeSize+1;
    }
  
   
    for (var i=start; i<start+rangeSize; i++) {
      ret.push(i);
    }
    return ret;
  };

  $scope.prevPage = function() {
    if ($scope.currentPage > 0) {
      $scope.currentPage--;
    }
  };

  $scope.prevPageDisabled = function() {
    return $scope.currentPage === 0 ? "disabled" : "";
  };

  $scope.pageCount = function() {
    return Math.ceil($scope.items.length/$scope.itemsPerPage)-1;
  };

  $scope.nextPage = function() {
    if ($scope.currentPage < $scope.pageCount()) {
      $scope.currentPage++;
    }
  };

  $scope.nextPageDisabled = function() {
    return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
  };

  $scope.setPage = function(n) {
    $scope.currentPage = n;
  };


  //create array for exmples array
  $scope.examples=[{url:'http://jasonwatmore.com/post/2016/01/31/AngularJS-Pagination-Example-with-Logic-like-Google.aspx',description:'Boostrap angularjs pagination'},
  {url:'http://plnkr.co/edit/LUqL5c4xSTqPy77r7spA?p=preview',description:'Custom directive boostrap pagination'}];

  //custom directive pagination with start and end page number
  $scope.users = []; //declare an empty array
  $http.get("json/mock.json").success(function(response){ 
    $scope.users = response;  //ajax request to fetch data into $scope.data
  });
  
  $scope.sort = function(keyname){
    $scope.sortKey = keyname;   //set the sortKey to the param passed
    $scope.reverse = !$scope.reverse; //if true make it false and vice versa
  } 


  //uib-pagination 
   $scope.maxSize = 5;
   $scope.bigTotalItems = 175;
   $scope.bigCurrentPage = 1;
 });	

app.filter('offset', function() {
  return function(input, start) {
    start = parseInt(start);    
    return input.slice(start);
  };
});