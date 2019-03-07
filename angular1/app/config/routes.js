angular.module('primeiraApp').config([
    /*injetando  dependencias*/
    '$stateProvider',/*presente do ui router*/
    '$urlRouterProvider',/*presente do ui router*/
    function($stateProvider,$urlRouterProvider){
    $stateProvider.state('dashboard',{
        url:"/dashboard",
        templateUrl:"dashboard/dashboard.html"
    }).state('billingCycle',{
        url:"/billingCycles",
        templateUrl:"billingCycle/tabs.html"
    })

    /* se nao encontrar o estado*/
    $urlRouterProvider.otherwise('/dashboard')

    }

])