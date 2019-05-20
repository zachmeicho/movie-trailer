console.log('OK');


//plyr
const player = new Plyr( '#player' , {
  
    controls : ['play' , 'progress' , 'fullscreen' , 'volume' , 'mute'],
    muted : true, 
    autoplay : true,
    
  } );


//Lettering.js
$('h1').lettering('lines');
