app.controller('ngtableCtrl',['$scope', '$http', '$filter', 'ngTableParams' , function ($scope, $http, $filter, ngTableParams) {
 
  // $scope.users = [{"id":1,"first_name":"Philip","last_name":"Kim","email":"pkim0@mediafire.com","country":"Indonesia","ip_address":"29.107.35.8"},
                        // {"id":2,"first_name":"Judith","last_name":"Austin","email":"jaustin1@mapquest.com","country":"China","ip_address":"173.65.94.30"},
                        // {"id":3,"first_name":"Julie","last_name":"Wells","email":"jwells2@illinois.edu","country":"Finland","ip_address":"9.100.80.145"},
                        // {"id":4,"first_name":"Gloria","last_name":"Greene","email":"ggreene3@blogs.com","country":"Indonesia","ip_address":"69.115.85.157"}
     // ] 
 
    var tableData = []
  var tableData1 = []
    //Table configuration
    $scope.tableParams = new ngTableParams({
        page: 1, // show first page
        count: 5 // count per page
    },{
  filterDelay: 0,
        counts: [5, 10, 20, 50],
        total:tableData.length,
        //Returns the data for rendering
        getData : function($defer,params){
   //debugger;
            $http.get('json/data.json').then(function(response) {
                tableData = response.data.person;
    tableData = params.sorting() ? $filter('orderBy')(tableData, params.orderBy()) : tableData;
    tableData = params.filter() ? $filter('filter')(tableData, params.filter()) : tableData;
                $defer.resolve(tableData.slice((params.page() - 1) , params.count(), params.page() , params.count()));
                params.total(tableData.length);
            });
   
        }
    }); 
 
 
$scope.usersTable = new ngTableParams({
                page: 1,
                count: 5,
    sorting: { id: "asc" } 
            }, {
      filterDelay: 0,
               counts: [5, 10, 20, 50,100],
                total: tableData1.length, 
                getData: function ($defer, params) {
     
    $http.get('json/data1.json').then(function(response) {
    tableData1 = response.data; 
    $scope.data = params.sorting() ? $filter('orderBy')(tableData1, params.orderBy()) : tableData1;
    $scope.data = params.filter() ? $filter('filter')($scope.data, params.filter()) : $scope.data;
    $scope.data = $scope.data.slice((params.page() - 1) , params.count(), params.page() , params.count());
    $defer.resolve($scope.data);
    params.total(tableData1.length);
    });
    
                }
            }); 
 
 //fake data | ngRepeat over a huge dataset
    count = 2000;
    var data = [];  
    while(count) {
      data[count] = count--;
    } 
    $scope.dammydata = data;
  
    $scope.currentPage = 0;
    $scope.pageSize = 20;
  
  
    $scope.numberOfPages=function(){
        return Math.floor($scope.dammydata.length/$scope.pageSize);                
    };
 
}]);

app.filter('startFrom', function() {
    return function(input, start) {
        start = +start; 
        return input.slice(start);
    };
});