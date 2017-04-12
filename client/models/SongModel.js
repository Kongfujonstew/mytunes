//f
var SongModel = Backbone.Model.extend({

  play: function() {
    this.trigger('play', this);
  },

  enqueue: function() {
  	this.trigger('enqueue', this);
    console.log('SongModel enqueue triggered')
  },

  dequeue: function() {
  	this.trigger('dequeue', this);
  },

  ended: function() {
  	this.trigger('ended', this);
  }

});
