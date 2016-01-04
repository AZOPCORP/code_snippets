var output=document.getElementById('canvas');
var outctx=output.getContext('2d');
var W=100;
var H=100;
output.width=W;
output.height=H;

var url="https://i.imgur.com/yQRWS1W.jpg";

loadimagandtrigger(url,W,H,function(i,w,h){
outctx.drawImage(i,0,0,w,h);

});


function loadimagandtrigger(url,W,H,callback){
var img = new Image();
img.crossOrigin = "Anonymous";

img.onload = function() {
img.width=W;
img.height=H; 

   callback(img,W,H);
   
}
img.src = url;

}
