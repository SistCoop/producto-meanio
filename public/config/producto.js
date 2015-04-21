'use strict';

/* jshint -W098 */

angular.module('mean.producto').config(function(sgProductoProvider) {
    sgProductoProvider.restUrl = 'http://localhost:8080/producto/rest';
});

angular.module('mean.producto').config(function(sgPersonaProvider) {
    sgPersonaProvider.restUrl = 'http://localhost:8080/persona/rest';
});