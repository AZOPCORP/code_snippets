var spinn = $("<span />");

var spin = [
  '|','/','-','\\',
    
    ];
var i =0;    
    setInterval(function() {
if(i<spin.length){
  spinn.html('computing ... ' + spin[i]);
  i++;
  
}else{
  i =0;
}      
        

    },50);
    
    
$("#some_div_id").html(spinn);
