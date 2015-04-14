'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Producto = new Module('producto');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Producto.register(function(app, auth, database) {

    //We enable routing. By default the Package Object is passed to the routes
    Producto.routes(app, auth, database);

    //We are adding a link to the main menu for all authenticated users
    Producto.menus.add({
        title: 'Producto',
        link: 'producto.app',
        roles: ['all'],
        menu: 'main'
    });

    Producto.aggregateAsset('css', 'producto.css');

    //sidebar dependences
    Producto.aggregateAsset('js', '../lib/angular-recursion/angular-recursion.js');
    Producto.aggregateAsset('js', '../lib/sg-sidebar-dropdown/src/sg-sidebar-dropdown.js');

    //ui-grid
    Producto.aggregateAsset('js', '../lib/angular-ui-grid/ui-grid.js');
    Producto.aggregateAsset('css', '../lib/angular-ui-grid/ui-grid.css');

    //ui-select
    Producto.aggregateAsset('js', '../lib/angular-ui-select/dist/select.js');
    Producto.aggregateAsset('css', '../lib/angular-ui-select/dist/select.css');

    //ui-select
    Producto.aggregateAsset('js', '../lib/angular-ui-select/dist/select.js');
    Producto.aggregateAsset('css', '../lib/angular-ui-select/dist/select.css');

    //restangular
    Producto.aggregateAsset('js', '../lib/underscore/underscore.js');
    Producto.aggregateAsset('js', '../lib/restangular/dist/restangular.js');

    //restangular
    Producto.aggregateAsset('js', '../lib/underscore/underscore.js');
    Producto.aggregateAsset('js', '../lib/restangular/dist/restangular.js');

    //sg-producto
    Producto.aggregateAsset('js', '../lib/sg-producto/dist/sg-producto.js');

    //module dependencies
    Producto.angularDependencies([
        'sgSidebarDropdown',
        'ui.grid',
        'ui.grid.edit',
        'ui.grid.selection',
        'ui.select',
        'restangular',
        'sg-persona',
        'sg-producto'
    ]);

    return Producto;
});
