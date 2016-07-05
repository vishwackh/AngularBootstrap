app.controller('carouselCtrl',function($scope,$http){
	
});	
app.controller('carouselCtrl1',function($scope,$http){

	
});	
app.controller('carouselCtrl2',function($scope){
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;
  
  $scope.addSlide = function() {

    slides.push({
      image: ['img/carousel/1.jpg','img/carousel/2.jpg','img/carousel/3.jpg','img/carousel/4.jpg'][slides.length % 4],
      text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
      id: currIndex++
    });
  };	
  
  for (var i = 0; i < 4; i++) {
    $scope.addSlide();
  } 
  
  
});	
