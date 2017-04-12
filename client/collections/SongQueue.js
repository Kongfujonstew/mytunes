// SongQueue.js - Defines a backbone model class for the song queue.
//f
var SongQueue = Backbone.Collection.extend({

  model: SongModel,


  initialize: function() {
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function() {
      this.playNext();
    }, this)

    this.on('dequeue', function() {
      this.dequeue();
    }, this);

    this.on('enqueue', function() {
      console.log('enqueue fired');
    }, this)

  },



  playFirst: function() {
    this.at(0).play();
  },

  playNext: function() {
    this.shift();
    if (this.length >= 1) {
      this.playFirst();
    } else {
      this.trigger('stop');
    }
  },

  dequeue: function () {
    this.remove(this.at(0))
    if (this.length >= 1) {
      this.playFirst();
    }
  },

  enqueue: function (song) {
    this.add(song);
    playFirst();
  }

});