// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  
//note to selves this is bs code from libentryview!!!!!
  tagName: 'tr',
  
  template: _.template('<div class="song"> \
                          </div> \
                          <span class="title"><%- title %></span> \
                          <span class="name">(<%- name %>)</span> \
                        </div>'),

  initialize: function() {
    this.on('change', this.render());
  },

  events: {
    'click button': 'handleClick'
  },

   render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  }



});
