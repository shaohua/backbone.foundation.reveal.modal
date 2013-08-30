TestModal.Views.AppView = Backbone.View.extend({
  el: $('#app'),

  events: {
    'click .standard_modal': 'open_standard_modal',
    'click .standard_modal_text_changed': 'open_standard_modal_text_changed',
    'click .slim_modal': 'open_slim_modal'
  },

  initialize: function () {
    // body...
  },

  open_standard_modal: function(){
    var modal = new Backbone.FoundationModal({
            title: "this is the modal title",
            content: 'this is the modal content',
            okText: 'OK'
          });

    modal.open();
  },

  open_standard_modal_text_changed: function(){
    var modal = new Backbone.FoundationModal({
            title: "Another title",
            content: 'Another content',
            okText: 'Close',
            cancelText: 'Never Mind'
          });

    modal.open();
  },

  open_slim_modal: function(){
    var modal = new Backbone.FoundationModal({
            title: false,
            content: 'this is the modal content',
            footer: false
          });

    modal.open();
  },

  render: function(){
    this.$el.find('.test').html('Refer to the doc for more options.');
    return this;
  }
});