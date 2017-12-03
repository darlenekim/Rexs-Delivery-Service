var app = angular.module("rexDelivers", ["ui.router"])

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./views/home.html",
      controller: "indexcontroller"
    })    
    .state("gifts", {
      url: "/gifts",
      templateUrl: "./views/gifts.html",
      controller: "giftsController"
    })
     .state("cart", {
      url: "/cart",
      templateUrl: "./views/cart.html",
      controller: "cartController"
    })
    
// Create a gifts controller, inject line 3 from indexcontroller in my new gifts controller
// Make a gifts.html, add ng-repeat, repeat all of the info found in $scope.gifts

})
