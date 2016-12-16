# CanvasBgMovie
* display video inside canvas on mobile web

## init
```
<div id="bgMovie"></div>
var backgroundMovie = new CanvasBgMovie( jQuery( '#bgMovie' ),{
  autoplay: true,
  poster: './poster.png',
  movieUrl: './10mb.mp4',
  movieWidth: 1920,
  movieHeight: 1080
});

//for android chrome
$( 'body' ).on( 'click', function( evt ){
	evt.stopPropagation();
	backgroundMovie.play();
});
```

#### options
|options|default|description|
| ------- |:-------------:| --------------------------:|
|fixedTop|false| fixed |
|autoplay|true| autoplay |
|poster|''|video poster image url|
|loop| true | loop  |
|movieUrl| '' | video url  |
|movieWidth |  | video width |
|movieHeight | | video height |
|endedCallback | function(){} | Fires when the current playlist is ended |

#### method
|method|return|description|
| ------- |:-------------:| --------------------------:|
|play()| '' | play |
|pause()| '' | pause|
|isIOS()| boolean| iOS|
|load()| ''| load |
|changeMovie( movie )| '' | change the source of the video |
|setLoop( boolean )| '' | loop |
