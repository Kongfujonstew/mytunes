//f?
var Songs = Backbone.Collection.extend({

  url: 'http://parse.CAMPUS.hackreactor.com/mytunes/classes/songs',

  parse: function(response) {
    return response.results;
  },

  initialize: function() {
    this.fetch({
      data: { limit: 10 }
    });
  },
  
  model: SongModel

});