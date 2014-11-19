(function() {
  var app = angular.module('gui', ['ui.bootstrap']);
	 app.directive("menuBar", function() {
      return {
        restrict: 'E',
        templateUrl: "menu-bar.html"
      };
    });
	app.controller('ParallaxCtrl', function ParallaxCtrl ($scope) {
		$scope.animation = {};
		
		window.addEventListener('scroll', function (e) { 
			var miles = window.scrollY;	
			var space_X = window.innerWidth;
			if (miles *2.8< space_X){
				$scope.animation.speed1 = {'-webkit-transform': 'translate( '+miles*1.1+'px,' + miles +'px)'};		
				
				$scope.animation.speed2 = {'-webkit-transform': 'translate( 0,' + miles *2+'px)'};	
			}
			else{
				$scope.animation.speed1 = {'display':'none'};
				$scope.animation.speed2 = {'-webkit-transform': 'translate( 0,' + miles +'px)'};	
				}
			$scope.$digest('animation');
		})
	});
  app.controller('MenuController', function(){
	this.activeID = '1';
    this.items = options;

		this.isSet = function(valor){
			return this.activeID == valor;
		};
		this.set = function(valor){
			this.activeID = valor;
		};
  });
  app.controller('weatherController', function($scope,$http){
	
	var time= [];
	$scope.temp= {};
	$http.get('http://api.openweathermap.org/data/2.5/weather?q=Belo+Horizonte,BR').success(function(data){
		this.time=data;
		});
	$scope.temp = time.temp - 274;
	
	
  });
  
   app.controller('ModalDemoCtrl', function ($scope, $rootScope, $ngDialog) {
$scope.openPlain = function () {
				$rootScope.theme = 'ngdialog-theme-plain';
				ngDialog.open({
					template: 'firstDialogId',
					controller: 'InsideCtrl',
					className: 'ngdialog-theme-plain',
					closeByDocument: false
				});
			};
});

  app.controller('CarouselDemoCtrl',function CarouselDemoCtrl ($scope){
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'images/arduino.jpg',
	  text: "arduino.html"
    },
    {
      image: 'images/raspiberry_opt.png',
	  text: "raspberry.html"
    },
    {
      image: 'images/beagleboneblack.jpg',
	  text: "beagle.html"
    },
    {
      image: 'images/AngularJS.jpg',
	  text: "angular.html"
    }];
	});
  options=[{
  id:'1',
  name: 'Inicial',
  link: "#HOME"
  },
  {
  id:'2',
  name: 'Projetos',
  link: "#PROJETOS"
  },
  {
  id:'3',
  name: 'Curriculum',
  link: "#CURRICULUM"
  },
  {
  id:'4',
  name: 'Contato',
  link: "#CONTATO"
  }];
  
})(window);