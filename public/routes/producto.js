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
                templateUrl: 'producto/views/app.html'
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
                controller: 'EditarProductoCreditoController'
            })
            .state('producto.app.editarProductoCredito.resumen', {
                url: '/resumen',
                templateUrl: 'producto/views/producto/form-resumen-producto-credito.html',
                controller: 'ProductoCreditoResumenController'
            })
            .state('producto.app.editarProductoCredito.datosPrincipales', {
                url: '/datosPrincipales',
                templateUrl: 'producto/views/producto/form-editar-producto-credito-datosPrincipales.html',
                controller: 'ProductoCreditoDatosPrincipalesController'
            });
    }
]);
