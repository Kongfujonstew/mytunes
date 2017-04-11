// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',
 
  initialize: function() {
    this.on('change', this.render());

  },

  render: function() {

    this.$el.empty();
    this.collection.forEach(this.renderSong, this);
  },

  renderSong: function(song) {
    var songView = new SongQueueEntryView({model: song});
    this.$el.append(songView.render());
  }

});

