angular.module('devmtnTravel')
 .controller('locationsCtrl', function($scope, mainServ) {
$scope.getTravelData = function() {
  $scope.travelInfo = mainServ.getTravelData;
  };
 $scope.getTravelData();

 });
