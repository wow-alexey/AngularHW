var taskApp = angular.module('taskApp', []);

taskApp.run(function ($rootScope) {
    $rootScope._ = window._;
});

taskApp.controller('baseCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $scope.allTask = [];
        $scope.currentDate = +new Date();
        $scope.allSortedTask = {};
        $scope.activeTab = 'activeTask';
        $scope.allActiveTask = {}; //тут должны быть все таски которые имеют статус undone

        $scope.baseAppBgColor = localStorage.appBgColor || '#00a2f4';
        $scope.colorPalitra = ['#ff5201','#ffbb00','#7cbb00', '#00a2f4', '#a25cf4', '#000'];
        
        
        function successHttpGetTask(res) {
            $scope.allTask = _.sortBy(res.data, ['date']);
            $scope.allActiveTask = _.filter(res.data, {'status': 'undone'});

            for(var i=0, len = $scope.allTask.length; i < len; i++ ){
                $scope.allTask[i].dateInMs = Date.parse($scope.allTask[i].date);

                if($scope.allSortedTask[$scope.allTask[i].date]){
                    $scope.allSortedTask[$scope.allTask[i].date].push($scope.allTask[i]);

                } else {
                    $scope.allSortedTask[$scope.allTask[i].date] = [];
                    $scope.allSortedTask[$scope.allTask[i].date].push($scope.allTask[i]);
                }
            }

            console.log($scope.allSortedTask);
            console.log($scope.allActiveTask);
        }

        function errorHttpGetTask(error) {

        }

        $http({
            method: 'POST',
            url: 'http://localhost:8080/allTasks'
        }).then(successHttpGetTask, errorHttpGetTask);
        
        $scope.changeColor = function (color) {
            $scope.baseAppBgColor = color;
            localStorage.appBgColor = color;
            console.log($scope.baseAppBgColor );
        };

        $scope.logout = function () {
            localStorage.removeItem('taskToken');
            localStorage.removeItem('appBgColor');
            window.location = '/login';
        };

    }]);