'use strict';

angular.module('mean.producto').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider
            .state('producto', {
                abstract: true,
                url: '/producto',
                templateUrl: 'producto/views/tpls/layout/body.html'
            })
            .state('producto.home', {
                url: '/home',
                templateUrl: 'producto/views/index.html'
            })
            .state('producto.app', {
                url: '/app',
                template: '<ui-view></ui-view>'
            })
            .state('producto.app.buscarProductoCuentaPersonal', {
                url: '/buscar/cuentaPersonal',
                templateUrl: 'producto/views/producto/form-buscar-producto-cuentaPersonal.html',
                controller: 'BuscarProductoCuentaPersonalController'
            })

            .state('producto.app.buscarProductoCredito', {
                url: '/buscar/credito',
                templateUrl: 'producto/views/producto/form-buscar-producto-credito.html',
                controller: 'BuscarProductoCreditoController'
            })
            .state('producto.app.crearProductoCredito', {
                url: '/credito',
                templateUrl: 'producto/views/producto/form-crear-producto-credito.html',
                controller: 'CrearProductoCreditoController'
            })
            .state('producto.app.editarProductoCredito', {
                url: '/credito/{id:[0-9]{1,8}}',
                templateUrl: 'producto/views/producto/form-editar-producto-credito.html',
                resolve: {
                    productoCredito: function($state, $stateParams, SGProductoCredito) {
                        return SGProductoCredito.$find($stateParams.id);
                    }
                },
                controller: function($scope, $stateParams, productoCredito) {
                    $scope.params = {};
                    $scope.params.id = $stateParams.id;
                    $scope.params.object = productoCredito;
                }
            })
            .state('producto.app.editarProductoCredito.resumen', {
                url: '/resumen',
                templateUrl: 'producto/views/producto/form-resumen-producto-credito.html',
                controller: 'ProductoCreditoResumenCtrl'
            });
    }
]);
