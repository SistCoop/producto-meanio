'use strict';

/* jshint -W098 */
angular.module('mean.pkproducto').controller('BuscarProductoCreditoController', ['$scope', '$state', 'SGProductoCredito', 'SGTipoPersona',
    function($scope, $state, SGProductoCredito, SGTipoPersona) {

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

        $scope.nuevo = function(){
            $state.go('^.crearProductoCredito');
        };

        $scope.filterOptions = {
            filterText: undefined,
            firstResult: 0,
            maxResults: 10
        };

        $scope.gridOptions = {
            data: [],
            enableRowSelection: true,
            enableRowHeaderSelection: false,
            multiSelect: false,
            columnDefs: [
                {field: 'codigo', displayName: 'Codigo'},
                {field: 'denominacion', displayName: 'Denominacion'},
                {field: 'tipoPersona', displayName: 'tipoPersona'},
                {field: 'monedas', displayName: 'monedas'},
                {field: 'montoMinimo', displayName: 'Minimo', cellFilter: 'currency: ""'},
                {field: 'montoMaximo', displayName: 'Maximo', cellFilter: 'currency: ""'},
                {field: 'estado', displayName: 'Estado'},
                {
                    name: 'edit',
                    displayName: 'Edit',
                    cellTemplate: '<div style="text-align: center; padding-top: 5px;"><button type="button" ng-click="grid.appScope.gridActions.edit(row.entity)" class="btn btn-info btn-xs"><span class="glyphicon glyphicon-edit"></span>Editar</button></div>'
                }
            ]
        };

        $scope.gridActions = {
            edit: function(row){
                $state.go('^.crearProductoCredito.resumen', {id: row.id});
            }
        };

        $scope.search = function(){
            $scope.gridOptions.data = SGProductoCredito.$search($scope.filterOptions).$object;
        };

    }
]);
