// PlayerView.js - Defines a backbone view class for the music player.

//f
var PlayerView = Backbone.View.extend({

  el: '<audio controls autoplay />',

  initialize: function() {
    this.$el.on('ended', () => {
      this.model.ended();
    });

  },

  setSong: function(song) {

    this.model = song;
    if (!this.model) {
      this.el.pause();
    }
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
