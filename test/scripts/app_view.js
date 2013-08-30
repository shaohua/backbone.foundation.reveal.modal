TestModal.Views.AppView = Backbone.View.extend({
  el: $('#app'),

  initialize: function () {
    // body...
  },

  render: function(){
    this.$el.html('test');
    return this;
  }
});