var itunes = {
    getMusicByArtist: function(artist, cb) {
      
      var url = '//bcw-getter.herokuapp.com/?url=';
      var url2 = 'https://itunes.apple.com/search?term=' + artist;
      var apiUrl = url + encodeURIComponent(url2);
      
      $('#get-music-button').text('LOADING....');
      
      return $.getJSON(apiUrl).then(function(response){
        var songList = response.results.map(function (song) {
                  return {
                      title: song.trackName,
                      albumArt: song.artworkUrl60,
                      artist: song.artistName,
                      collection: song.collectionName,
                      price: song.collectionPrice,
                      preview: song.previewUrl
                    };
                })
        $('#get-music-button').text('GET MUSIC');
        return songList;
      })
    }
}
//Do Not Modify the getMusic function
function getMusic(){
  var artist = document.getElementById('artist').value;
  itunes.getMusicByArtist(artist).then(drawSongs);
}



function drawSongs(songList){
  // This Clears Previous List
  document.getElementById('songs-list').innerHTML= ' '
  // This makes New List 
    for (var i = 0; i < songList.length; i++) {
    song=songList[i]
    elem=document.getElementById('songs-list')
    // This displays list contents
    console.log(song.title+' by '+song.artist)
    elem.innerHTML+='<li class="list-group-item text-center" >'+'<img style="float:left;" src="'+song.albumArt+'">'+song.title+' by '+song.artist+'<br>'+ song.collection+' for $'+song.price+'</li>'  }
  
}