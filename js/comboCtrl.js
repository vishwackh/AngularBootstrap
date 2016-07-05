app.controller('comboCtrl',function($scope,$http){

$http.get('json/country.json').success(function(data) {
    $scope.country = data;
});


    $scope.optionsGroup = [
        { "country" : "India" , "city" : "Chennai"}, 
        { "country" : "India" , "city" : "Mumbai"},
        { "country" : "India" , "city" : "Delhi"},
        { "country" : "India" , "city" : "Calcutta"},
        { "country" : "Singapore" , "city" : "Singapore"},
		{ "country" : "Singapore" , "city" : "Lion City"}
    ];	

$scope.states = ['AP','KA','TN','KER'];		

$scope.countries=[{
	        id:1,
            name:'India',
            continent:'Asia'			
	              },
				  {id:2,
            name:'Srilanka',
            continent:'Asia'			
	              },
				  {id:3,
            name:'UK',
            continent:'Europe'			
	              },
				  {id:1,
            name:'Italy',
            continent:'Europe'			
	              }				  
];	

});	