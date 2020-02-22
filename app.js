var  express  =  require ( 'express' ) ;
var  app  =  express ( ) ;

app . post ( '/' ,  function  ( req ,  res )  {
  res . send ( 'Hello world' ) ;
} ) ;

app . listen ( 3000 ,  function  ( )  {
  console . log ( 'App listening to port 3000' ) ;
} ) ;