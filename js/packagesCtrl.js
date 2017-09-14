angular.module('devmtnTravel')
 .controller('packagesCtrl', function($scope, mainServ) {
$scope.getPackageData = function() {
  $scope.packageInfo = mainServ.getPackageData;
  };
 $scope.getPackageData();

 });
