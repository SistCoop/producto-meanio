'use strict';

/* jshint -W098 */
angular.module('mean.producto').controller('CrearProductoCreditoController', ['$scope', '$state', 'SGProductoCredito', 'SGTipoPersona', 'SGCurrency', 'Notification',
    function($scope, $state, SGProductoCredito, SGTipoPersona, SGCurrency, Notification) {

        $scope.view = {
            producto: SGProductoCredito.$build()
        };

        $scope.combo = {
            tipoPersona: undefined,
            moneda: undefined
        };
        $scope.combo.selected = {
            tipoPersona: undefined,
            moneda: undefined
        };

        $scope.loadCombo = function(){
            $scope.combo.tipoPersona = SGTipoPersona.$search().$object;
            $scope.combo.moneda = SGCurrency.$search().$object;
        };
        $scope.loadCombo();

        $scope.submit = function(){
            if($scope.form.$valid){

                $scope.view.producto.$save().then(
                    function(response){
                        Notification.success('Producto creado');
                        $state.go('^.editarProductoCredito.resumen', {id: response.id});
                    },
                    function error(err){
                        Notification.error(err.data ? err.data.message : 'No se pudo verificar la conexion al sistema.');
                    }
                );

            }
        };
    }
]);