angular.module('nodeNews', [])
  .controller('MainCtrl', [
    '$scope',
    function($scope) {
      $scope.test = 'Hello world';
    }]);