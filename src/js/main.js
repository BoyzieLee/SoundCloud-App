import $ from 'jquery';
import audioBar from './audiobar';
import nowPlaying from './nowplaying';
import searchResults from './searchresults';


var token ='3f4f6e443227c34b2391dcf6a71ba46a' ;
var url = 'https://api.soundcloud.com/tracks?client_id=' + token +
'&limit=50';

$.getJSON(url).then(function (res){
  // res.forEach(function (feature){
  //
  //   var htmlBlock = featuredTrack(feature);
  //   $('.nowPlayingPic').append(htmlBlock);
  //   console.log(res);
  // }
  console.log(res);
});

function trackTemplate (feature) {
  return `
    <div class="nowPlayingPic"><img> src="${artwork_url}"></div>
    <div class="playBack1"><p>${title}></p></div>
  `;
}
