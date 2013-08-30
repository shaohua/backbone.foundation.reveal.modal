TestModal.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'home'
  },

  home: function () {
    console.log('-router-home');
  }

});