describe('SongQueue', function() {
  var playSpy, songData1, songData2;

  beforeEach(function() {
    playSpy = sinon.spy(SongQueue.prototype, 'playFirst');
    songData1 = {
      artist: 'data',
      url: '/test/testsong.mp3',
      title: 'test song'
    };
    songData2 = {
      artist: 'data',
      url: '/test/testsong2.mp3',
      title: 'test song 2'
    };
  });

  afterEach(function() {
    SongQueue.prototype.playFirst.restore();
  });

  describe('when a song is added', function() {
    it('plays it if it is the only song in the song queue', function() {
      var songQueue = new SongQueue();
      console.log(songQueue)
      songQueue.add(songData1);
      expect(playSpy).to.have.been.called;
    });

    it('does nothing if it is not the only song in the song queue', function() {
      var songQueue = new SongQueue(songData1);
      songQueue.add(songData2);

      expect(playSpy).to.have.not.been.called;
    });
  });

  describe('when a song ends', function() {
    it('removes the song from the queue', function() {
      var songQueue = new SongQueue([songData1, songData2]);

      song2 = songQueue.at(1);
      expect(songQueue.length).to.equal(2);
      songQueue.at(0).trigger('ended');
      expect(songQueue.length).to.equal(1);
      expect(songQueue.at(0)).to.equal(song2);
    });

    it('plays the first song in the queue if there are any songs left', function() {
      var songQueue = new SongQueue([songData1, songData2]);
      songQueue.at(0).ended();
      expect(playSpy).to.have.been.called;
    });

    it('does nothing if there are no songs left in the queue', function() {
      var songQueue = new SongQueue(songData1);
      songQueue.at(0).ended();
      expect(playSpy).to.have.not.been.called;
    });
  });

  describe('when a song is dequeued', function() {
    it('removes the song', function() {
      removeSpy = sinon.spy(SongQueue.prototype, 'remove');
      var songQueue = new SongQueue(songData1);
      songQueue.at(0).dequeue();
      expect(removeSpy).to.have.been.called;
      SongQueue.prototype.remove.restore();
    });
  });

  describe('playFirst', function() {
    xit('plays the first song in the queue', function() {
      sinon.spy(SongModel.prototype, 'play');
      var songQueue = new SongQueue(songData1);
      songQueue.playFirst();
      expect(songQueue.at(0).play).to.have.been.called;
      SongModel.prototype.play.restore();
    });
  });
});
