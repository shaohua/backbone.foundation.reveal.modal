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