angular.module('MyApp')
  .controller('AddCtrl', ['$scope', '$alert', 'Show', function($scope, $alert, Show) {
    $scope.addShow = function() {
      Show.save(
        { showName: $scope.show.name },
        function() {
          $alert({
            content: 'TV show has been added.',
            placement: 'top-right',
            type: 'success',
            duration: 3
          });
        },
        function(response) {
          $alert({
            content: response.data.message,
            placement: 'top-right',
            type: 'danger',
            duration: 3
          });
        });
      $scope.show.name = '';
      $scope.addForm.$setPristine();
    };
  }]);
