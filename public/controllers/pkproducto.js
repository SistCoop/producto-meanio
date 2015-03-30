'use strict';

/* jshint -W098 */
angular.module('mean.pkproducto').config(function(sgPersonaProvider) {

    sgPersonaProvider.restUrl = 'https://someweb';

}).config(function(sgProductoProvider){

    sgProductoProvider.restUrl = 'https://someweb';

}).controller('PkproductoSidebarController', ['$scope', '$menuItemsProducto',
    function($scope, $menuItemsProducto) {

        $scope.menuItems = $menuItemsProducto.prepareSidebarMenu().getAll();

    }
]).controller('PkproductoController', ['$scope', 'Global', 'Pkproducto',
  function($scope, Global, Pkproducto) {
    $scope.global = Global;
    $scope.package = {
      name: 'pkproducto'
    };
  }
]);
