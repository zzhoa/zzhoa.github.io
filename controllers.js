
// CONTROLLERS
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {
    
    $scope.city = cityService.city;
    
    $scope.$watch('city', function() {
       cityService.city = $scope.city; 
    });
    
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {
    
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || '2';
    
    $scope.weatherAPI = $resource("https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=7e180e4edb2eb7b5d57c279041d3e3f8", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
    
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });
    
    
    $scope.convertToFahrenheit = function(degK) {
        console.log("origin degree " + degK);
        return Math.round((1.8 * (degK - 273)) + 32);
        
    }
    
    $scope.convertToDate = function(dt) { 
        
        return new Date(dt);
        
    };

    
//    console.log($scope.weatherResult);
//    console.log($scope.weatherResult.$promise.then(function(obj){
//        console.log(obj.list.length);
//        for (let i = 0; i < obj.list.length; i++) {
//            console.log(obj.list[i]);
//        }
//        
//    }));
}]);