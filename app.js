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

    //Producto.aggregateAsset('css', 'producto.css');

    return Producto;
});
