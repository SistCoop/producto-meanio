'use strict';

angular.module('mean.pkproducto').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider
            .state('pkproducto', {
                abstract: true,
                url: '/producto',
                templateUrl: 'pkproducto/views/tpls/layout/body.html'
            })
            .state('pkproducto.home', {
                url: '/home',
                templateUrl: 'pkproducto/views/index.html'
            })
            .state('pkproducto.app', {
                url: '/app',
                template: '<ui-view></ui-view>'
            })
            .state('pkproducto.app.buscarProductoCuentaPersonal', {
                url: '/buscar/cuentaPersonal',
                templateUrl: 'pkproducto/views/producto/form-buscar-producto-cuentaPersonal.html',
                controller: 'BuscarProductoCuentaPersonalController'
            })

            .state('pkproducto.app.buscarProductoCredito', {
                url: '/buscar/credito',
                templateUrl: 'pkproducto/views/producto/form-buscar-producto-credito.html',
                controller: 'BuscarProductoCreditoController'
            })
            .state('pkproducto.app.crearProductoCredito', {
                url: '/credito',
                templateUrl: 'pkproducto/views/producto/form-crear-producto-credito.html',
                controller: 'CrearProductoCreditoController'
            })
            .state('pkproducto.app.editarProductoCredito', {
                url: '/credito/{id:[0-9]{1,8}}',
                templateUrl: 'pkproducto/views/producto/form-editar-producto-credito.html',
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
            .state('pkproducto.app.editarProductoCredito.resumen', {
                url: '/resumen',
                templateUrl: 'pkproducto/views/producto/form-resumen-producto-credito.html',
                controller: 'ProductoCreditoResumenCtrl'
            });
    }
]);