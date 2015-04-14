'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Producto, app, auth, database) {

  app.get('/producto/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/producto/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/producto/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/producto/example/render', function(req, res, next) {
    Producto.render('index', {
      package: 'producto'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
