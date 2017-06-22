var testApp = angular.module('testApp', []);

testApp.controller('TestCtrl', ['$scope', function ($scope) {
    $scope.users = [
        {
            "name": "Paul Carrillo",
            "id": 0,
        },
        {
            "name": "Prince Dejesus",
            "id": 1,

        },
        {
            "name": "Carey Bates",
            "id": 2,

        },
        {
            "name": "Moses Ballard",
            "id": 3,

        },
        {
            "name": "Rowe Bolton",
            "id": 4,

        },
        {
            "name": "Beck Atkinson",
            "id": 5,

        },
        {
            "name": "Rose Travis",
            "id": 6,

        },
        {
            "name": "Monica Goff",
            "id": 7,

        },
        {
            "name": "Mcfadden Nelson",
            "id": 8,

        },
        {
            "name": "Luann Carney",
            "id": 9,

        },
        {
            "name": "Cheri Buck",
            "id": 10,

        },
        {
            "name": "Hartman Potts",
            "id": 11,

        },
        {
            "name": "Farley Austin",
            "id": 12,

        },
        {
            "name": "Jerri Richardson",
            "id": 13,

        },
        {
            "name": "Burnett Sharp",
            "id": 14,

        },
        {
            "name": "Katy Madden",
            "id": 15,

        },
        {
            "name": "Kristine Payne",
            "id": 16,

        },
        {
            "name": "Ashlee Wilson",
            "id": 17,

        },
        {
            "name": "Jan Pugh",
            "id": 18,

        },
        {
            "name": "Michael King",
            "id": 19,

        },
        {
            "name": "Patty Rivas",
            "id": 20,

        },
        {
            "name": "Bridges Oneil",
            "id": 21,

        },
        {
            "name": "Walters Vazquez",
            "id": 22,

        },
        {
            "name": "English Andrews",
            "id": 23,

        },
        {
            "name": "Woodard Cardenas",
            "id": 24,

        },
        {
            "name": "Mercado Chan",
            "id": 25,

        },
        {
            "name": "Guerra Lawson",
            "id": 26,

        },
        {
            "name": "Riley Gray",
            "id": 27,

        },
        {
            "name": "Romero Sampson",
            "id": 28,

        },
        {
            "name": "Reva Carroll",
            "id": 29,

        },
        {
            "name": "Carey Mckenzie",
            "id": 30,

        },
        {
            "name": "Miles Raymond",
            "id": 31,

        },
        {
            "name": "Ray Underwood",
            "id": 32,

        },
        {
            "name": "Maude Norris",
            "id": 33,

        },
        {
            "name": "Brigitte Kirkland",
            "id": 34,

        },
        {
            "name": "Graham Russell",
            "id": 35,

        },
        {
            "name": "Sonia Holcomb",
            "id": 36,

        },
        {
            "name": "Hopper Garrison",
            "id": 37,

        },
        {
            "name": "Butler Harrison",
            "id": 38,

        },
        {
            "name": "Grant Wheeler",
            "id": 39,

        },
        {
            "name": "Stout Barker",
            "id": 40,

        },
        {
            "name": "Merritt Kelley",
            "id": 41,

        },
        {
            "name": "Kari Holman",
            "id": 42,

        }
    ];
    $scope.savedId = '';
    $scope.savedName = '';
    $scope.addToTable = function () {
        $scope.users.push({
            'name': $scope.savedName,
            'id':$scope.savedId
        });
        console.log($scope.savedId);
        console.log($scope.savedName);
    }
}]);