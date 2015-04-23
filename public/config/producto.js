'use strict';

/* jshint -W098 */

angular.module('mean.producto').config(function(sgProductoProvider) {
    sgProductoProvider.restUrl = 'http://localhost:8080/producto/rest';
});

angular.module('mean.producto').config(function(sgIso4217Provider) {
    sgIso4217Provider.restUrl = 'http://localhost:8080/iso4217/rest';
});

angular.module('mean.producto').config(function(sgPersonaProvider) {
    sgPersonaProvider.restUrl = 'http://localhost:8080/persona/rest';
});

angular.module('mean.producto').controller('ProductoSidebarController', ['$rootScope', '$menuItemsProducto',
    function($rootScope, $menuItemsProducto) {

        $rootScope.$menuItemsAngulr = $menuItemsProducto.prepareSidebarMenu().getAll();

    }
]);