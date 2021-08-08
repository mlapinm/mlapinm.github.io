

//
var player = null;
//
var options =
    {
        width: 352,              //AngularJS($scope.sizes)width
        height: 230,             //AngularJS($scope.sizes)height
        videoId: "xzmkBQAHp5Q",  //AngularJSID($scope.movies)ID
        playerVars: {
            autoplay: 1,
            controls: 1,
            autohide: 1,
            html5: 1
        },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    };

var count = 0
var current = 0

//iframe api 
//iframe api onYouTubeIframeAPIReady  Player
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//iframe api
//Youtube Player
function onYouTubeIframeAPIReady() {
    count = items.length
    // items[1]['en']
    $('.log1').text(count)

    player = new YT.Player( 'player', options );
    
}

//Youtube Player()
function onPlayerReady(event) {
    //event.target.playVideo();
    player.playVideo();
}

//IDID
function onPlayerStateChange(event) {
  console.log(555)
    
    if(event.data == YT.PlayerState.ENDED) {
  
    }          
}

$('#previousBtn').click(()=>{
  if(current > 0){
     current -= 1
  }else{
     current = count - 1
  }

  $('.log1').text(''+ current + ' ' + items[current]['en'])
  $('.log2').text(items[current]['ru'])
  
        player.loadVideoById(
       {'videoId': options.videoId,
               'startSeconds': parseInt(items[current]['time'][0]),
               'endSeconds': parseInt(items[current]['time'][1]),
               'suggestedQuality': 'large'})
    $('#transcript').text('')
  

})

$('#repeatBtn').click(()=>{
  
  $('.log1').text(''+ current + ' ' + items[current]['en'])
  $('.log2').text(items[current]['ru'])
  
        player.loadVideoById(
       {'videoId': options.videoId,
               'startSeconds': parseInt(items[current]['time'][0]),
               'endSeconds': parseInt(items[current]['time'][1]),
               'suggestedQuality': 'large'})
     $('#transcript').text('')
 

})

$('#forwardBtn').click(()=>{

  if(current < count - 1){
     current += 1
  }else{
     current = 0
  }

  $('.log1').text(''+ current + ' ' + items[current]['en'])
  $('.log2').text(items[current]['ru'])
  
        player.loadVideoById(
       {'videoId': options.videoId,
               'startSeconds': parseInt(items[current]['time'][0]),
               'endSeconds': parseInt(items[current]['time'][1]),
               'suggestedQuality': 'large'})
      $('#transcript').text('')

 

})


