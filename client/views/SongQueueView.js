// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({




  initialize: function() {
  	this.on('add', this.render());
  },




  render: function() {
  	
    return this.$el;
  }

});
