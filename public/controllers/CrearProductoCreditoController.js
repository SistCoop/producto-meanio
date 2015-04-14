'use strict';

/* jshint -W098 */
angular.module('mean.producto').controller('CrearProductoCreditoController', ['$scope', '$state', 'SGProductoCredito', 'SGTipoPersona', 'Notification',
    function($scope, $state, SGProductoCredito, SGTipoPersona, Notification) {

        $scope.view = {
            producto:   SGProductoCredito.$build()
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
                        Notification.error(err.data.message);
                    }
                );

            }
        };
    }
]);