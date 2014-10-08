angular.module('myApp.controller.calendarMenuCtrl', [])
  .controller('CalendarMenuCtrl',
  function ($scope, $rootScope, $cookies, $timeout, Calendar, Favorite) {

    $scope.toggleCalendar = function (index) {
      console.log('checkInverse');
      $scope.calendars[index].selected = !$scope.calendars[index].selected;
      $rootScope.$broadcast('eventSourceIsChanged');
    };

    $scope.toggleAllDay = function () {
      console.log('toggleAllDay');
      $rootScope.calendarConfig.allDaySlot = !$rootScope.calendarConfig.allDaySlot;
      $cookies.showAllDaySlot = $rootScope.calendarConfig.allDaySlot;
    };

    $scope.toggleLegend = function () {
      console.log('toggleLegend');
      $rootScope.calendarConfig.showLegend = !$rootScope.calendarConfig.showLegend;
      $cookies.showLegend = $rootScope.calendarConfig.showLegend;

      $timeout(function () {
        $rootScope.$broadcast('RefreshCalendarHeight');
      }, 100);
    };


    // 以下作りなおす予定

    $scope.isOnlyFavorite = false;

    $scope.showOnlyFavorite = function () {
      $scope.isOnlyFavorite = !$scope.isOnlyFavorite;
    };

    $scope.$watch('isOnlyFavorite', function (value) {
      if (value) {
        Favorite.getEvents()
          .then(function (results) {
            $rootScope.favEvents = results;
            $rootScope.$broadcast('eventSourceIsChanged');
          });

        $scope.calendars.forEach(function (e) {
          e.selected = false;
        });

      } else {
        $rootScope.favEvents = [];

        $scope.calendars.forEach(function (e) {
          e.selected = true;
        });

        $rootScope.$broadcast('eventSourceIsChanged');
      }
    });
  });