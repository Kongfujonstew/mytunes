// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  // length: 2,

  initialize: function() {
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function() {
      this.dequeue();
    })


  },



  playFirst: function() {

  },

  dequeue: function (song) {
    this.shift();
    if (this.length >= 1) {
      this.playFirst()
    }
  },

  // remove: function(song) {

  // }

});