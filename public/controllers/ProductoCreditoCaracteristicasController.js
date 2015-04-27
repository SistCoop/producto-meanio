'use strict';

/* jshint -W098 */
angular.module('mean.producto').controller('ProductoCreditoCaracteristicasController', ['$scope', 'productoCredito', 'toastr',
    function($scope, productoCredito, toastr) {

        $scope.view = {
            producto: productoCredito,
            caracteristica: {}
        };

        $scope.loadObjects = {
            caracteristicas: []
        };

        $scope.loadCaracteristicas = function(){
            $scope.loadObjects.caracteristicas = $scope.view.producto.$getCaracteristicas().$object;
        };
        $scope.loadCaracteristicas();

        $scope.addCaracteristica = function($event){
            if(!angular.isUndefined($event)) {
                $event.preventDefault();
            }

            if($scope.form.$valid){

                $scope.view.producto.$addCaracteristica($scope.view.caracteristica).then(
                    function(){
                        toastr.success('Caracteristica creada satisfactoriamente', 'Success');
                        $scope.view.caracteristica = {};
                        $scope.loadCaracteristicas();
                    },
                    function error(err){
                        toastr.error(err.data.message, 'Error');
                    }
                );

            }
        };

        $scope.saveCaracteristica = function(data, id) {
            alert('saved');
        };


        $scope.removeCaracteristica = function($index){
            alert('Eliminando');
        };


    }
]);