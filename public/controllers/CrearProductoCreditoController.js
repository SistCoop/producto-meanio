'use strict';

/* jshint -W098 */
angular.module('mean.pkproducto').controller('CrearProductoCreditoController', ['$scope', '$state', 'SGProductoCredito', 'SGTipoPersona',
    function($scope, $state, SGProductoCredito, SGTipoPersona) {

        $scope.view = {
            producto:   SGTipoPersona.$build()
        };

        $scope.combo = {
            tipoPersona: undefined
        };
        $scope.combo.selected = {
            tipoPersona: undefined
        };

        $scope.loadCombo = function(){
            $scope.combo.tipoPersona = SGTipoPersona.$search().$object;
        };
        $scope.loadCombo();

    }
]);
