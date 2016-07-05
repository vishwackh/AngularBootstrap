var app = angular.module('demoboostrap',['ngRoute','ngAnimate','ngTable','ui.router','ui.bootstrap','angularTreeview','angularUtils.directives.dirPagination','simpleGrid','ui.grid', 'ngSanitize','adaptv.adaptStrap','ui.grid.selection','trNgGrid','ncy-angular-breadcrumb','ngWizard']);

app.config(function($breadcrumbProvider) {
    $breadcrumbProvider.setOptions({
      prefixStateName: 'home',
      template: 'bootstrap3'
    });
  });
  
  
function repeat(arr, times) {
        var result = [], i = 0;
        function push(val) { result.push(angular.copy(val)); }
        for (i = 0; i < times; i += 1) {
            angular.forEach(arr, push);
        }
        return result;
    }





