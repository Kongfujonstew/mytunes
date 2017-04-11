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

    // this.on('remove', function() {
    //   this.dequeue();
    // })

  },



  playFirst: function() {
    this.at(0).play();
  },

  dequeue: function () {
    this.remove(this.at(0))
    if (this.length >= 1) {
      this.playFirst();
    }
  },

  // remove: function() {
  //   console.log('other remove called')
  // }

});