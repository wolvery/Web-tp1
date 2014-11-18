(function() {
  var app = angular.module('gui', []);
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
				$scope.animation.speed1 = {' -webkit-transform': 'translate3d( '+miles*1.1+'px,' + miles +'px,0)'};			
				
			}
			else{
				$scope.animation.speed1 = {'display':'none'};			
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
  app.controller('FormController',function(){
	var form = {};
	
	
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
  
})();