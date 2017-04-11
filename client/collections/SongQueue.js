// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,


  initialize: function() {
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function() {
      this.dequeue();
    })

    this.on('dequeue', function() {
      this.dequeue();
    });

    this.on('enqueue', function() {
      console.log('enqueue fired');
    })

  },



  playFirst: function() {
    this.at(0).play();
  },

  playNext: function() {

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



  // remove: function() {
  //   console.log('other remove called')
  // }

});