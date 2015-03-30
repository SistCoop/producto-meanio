'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Pkproducto = new Module('pkproducto');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Pkproducto.register(function(app, auth, database) {

    //We enable routing. By default the Package Object is passed to the routes
    Pkproducto.routes(app, auth, database);

    //We are adding a link to the main menu for all authenticated users
    Pkproducto.menus.add({
        title: 'Producto',
        link: 'pkproducto.app',
        roles: ['all'],
        menu: 'main'
    });

    Pkproducto.aggregateAsset('css', 'pkproducto.css');

    //sidebar dependences
    Pkproducto.aggregateAsset('js', '../lib/angular-recursion/angular-recursion.js');
    Pkproducto.aggregateAsset('js', '../lib/sg-sidebar-dropdown/src/sg-sidebar-dropdown.js');

    //ui-grid
    Pkproducto.aggregateAsset('js', '../lib/angular-ui-grid/ui-grid.js');
    Pkproducto.aggregateAsset('css', '../lib/angular-ui-grid/ui-grid.css');

    //ui-select
    Pkproducto.aggregateAsset('js', '../lib/angular-ui-select/dist/select.js');
    Pkproducto.aggregateAsset('css', '../lib/angular-ui-select/dist/select.css');

    //ui-select
    Pkproducto.aggregateAsset('js', '../lib/angular-ui-select/dist/select.js');
    Pkproducto.aggregateAsset('css', '../lib/angular-ui-select/dist/select.css');

    //restangular
    Pkproducto.aggregateAsset('js', '../lib/underscore/underscore.js');
    Pkproducto.aggregateAsset('js', '../lib/restangular/dist/restangular.js');

    //sg-producto
    Pkproducto.aggregateAsset('js', '../lib/sg-producto/dist/sg-producto.js');

    Pkproducto.angularDependencies([
        'sgSidebarDropdown',
        'ui.grid',
        'ui.grid.edit',
        'ui.grid.selection',
        'ui.select',
        'restangular',
        'sg-producto'
    ]);

    return Pkproducto;
});
