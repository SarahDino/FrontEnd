let main = new Splide( '#image-carousel', {
    type      : 'fade',
    rewind    : true,
    pagination: false,
    arrows    : false,
} );
let thumbnails = new Splide( '#thumbnail-carousel', {
    fixedWidth  : 100,
    fixedHeight : 110,
    gap         : 10,
    rewind      : true,
    pagination  : false,
    isNavigation: true,
    arrows    : false,
    breakpoints : {
        984:{
          gap         : 0,
          fixedWidth : 91,
          fixedHeight: 91,
        },
        818:{
          gap         : 10,
          fixedWidth : 70,
          fixedHeight: 80,
        },
        730:{
          gap         : 15,
          fixedWidth : 60,
          fixedHeight: 80,
        },
        650:{
          gap         : 10,
          fixedWidth : 50,
          fixedHeight: 80,
        },
        500: {
          gap         : 10,
          fixedWidth : 100,
          fixedHeight: 100,
        },},
} );
main.sync( thumbnails );
main.mount();
thumbnails.mount();