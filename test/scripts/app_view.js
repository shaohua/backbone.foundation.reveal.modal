TestModal.Views.AppView = Backbone.View.extend({
  el: $('#app'),

  events: {
    'click .first_modal': 'open_first_modal',
    'click .second_modal': 'open_second_modal'
  },

  initialize: function () {
    // body...
  },

  open_first_modal: function(){
    var modal = Backbone.FoundationModal({
            title: "this is the modal title",
            content: 'this is the modal content',
            okText: 'OK'
          });

    modal.open();
  },

  open_second_modal: function(){
    var modal = Backbone.FoundationModal({
            title: "this is the modal title",
            content: 'this is the modal content',
            okText: 'OK'
          });

    modal.open();
  },

  render: function(){
    this.$el.find('.test').html('test');
    return this;
  }
});