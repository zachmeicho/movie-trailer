console.log('OK');

const player = new Plyr( '#player' , {
  
    controls : ['play' , 'progress' , 'fullscreen' , 'volume' , 'mute'],
    muted : true, 
    autoplay : true
    
    
  } );


  $('item1').hover( function(){
  
    $('item1').addClass( 'item1:hover' );
    console.log('OK');
    
  } );