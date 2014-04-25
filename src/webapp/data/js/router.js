define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
  var AppRouter = Backbone.Router.extend({
    '*actions': 'defaultAction'
  });

  var initialize = function() {
    var app_router = new AppRouter;

    app_router.on('defaultAction', function(actions) {
      console.log('No route: ', actions);
    });

    Backbone.history.start();
  };

  return {
    initialize: initialize
  };
});
