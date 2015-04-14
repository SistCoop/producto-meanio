'use strict';

/* jshint -W098 */
angular.module('mean.producto').controller('EditarProductoCreditoController', ['$scope', '$state', 'productoCredito', 'SGProductoCredito', 'SGTipoPersona', 'Notification',
    function($scope, $state, productoCredito, SGProductoCredito, SGTipoPersona, Notification) {

        $scope.view = {
            producto: productoCredito,
            productoDB: angular.copy(productoCredito)
        };

        $scope.submit = function(){
            if($scope.form.$valid){

                $scope.view.producto.$save().then(
                    function(response){
                        Notification.success('Producto actualizado');
                    },
                    function error(err){
                        Notification.error(err.data.message);
                    }
                );

            }
        };

        $scope.desactivar = function(){
            $scope.view.producto.$desactivar().then(
                function(response){
                    Notification.success('Producto desactivado');
                },
                function error(err){
                    Notification.error(err.data.message);
                }
            );
        };

    }
]);