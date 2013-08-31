window.TestModal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    console.log('Start from main.js');

    var app_model = new this.Models.AppModel();
    var app_view = new this.Views.AppView({
      model: app_model
    });
    app_view.render();

    var appRouter = new TestModal.Routers.AppRouter();

    Backbone.history.start({
      pushState: false,
      root: '/',
      silent: true
    });
    Backbone.history.loadUrl();
  }
};

$(document).ready(function(){
  TestModal.init();
  $(document).foundation();
});