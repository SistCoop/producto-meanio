'use strict';

/* jshint -W098 */

angular.module('mean.producto').controller('ProductoSidebarController', ['$scope', '$menuItemsProducto',
    function($scope, $menuItemsProducto) {

        $scope.menuItems = $menuItemsProducto.prepareSidebarMenu().getAll();

    }
]);