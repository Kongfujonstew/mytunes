// LibraryView.js - Defines a backbone view class for the music library.
//f
var LibraryView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {

    this.render();
    this.collection.on('sync', this.render, this);

  },

  render: function() {

    this.$el.children().detach();

    this.$el.html('<th>Library</th>').append(
      this.collection.map(function(song) {
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
