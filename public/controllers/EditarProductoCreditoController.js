'use strict';

/* jshint -W098 */
angular.module('mean.producto').controller('EditarProductoCreditoController', ['$scope', '$state', 'productoCredito', 'toastr',
    function($scope, $state, productoCredito, toastr) {

        $scope.view = {
            producto: productoCredito,
            productoDB: angular.copy(productoCredito)
        };

        $scope.submit = function(){
            if($scope.form.$valid){

                $scope.view.producto.$save().then(
                    function(response){
                        toastr.success('Producto actualizado', 'Success');
                    },
                    function error(err){
                        toastr.error(err.data.message, 'Error');
                    }
                );

            }
        };

        $scope.desactivar = function(){
            $scope.view.producto.$desactivar().then(
                function(response){
                    toastr.success('Producto desactivado', 'Success');
                },
                function error(err){
                    toastr.error(err.data.message, 'Error');
                }
            );
        };

    }
]);