'use strict';

/* jshint -W098 */
angular.module('mean.producto').controller('ProductoController', ['$scope', 'Global', 'Producto',
    function($scope, Global, Producto) {
        $scope.global = Global;
        $scope.package = {
            name: 'producto'
        };
    }
]);

angular.module('mean.producto').config(function(sgProductoProvider) {
    sgProductoProvider.restUrl = 'https://someweb';
});

angular.module('mean.producto').config(function(sgPersonaProvider) {
    sgPersonaProvider.restUrl = 'https://someweb';
});