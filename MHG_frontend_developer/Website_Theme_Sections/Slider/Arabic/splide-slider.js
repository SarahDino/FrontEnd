Splide.defaults = {
rewind: true,
fixedWidth  : 200,
fixedHeight : 280,
pagination  : true,
arrows    : true,
perPage: 5,
pagination: 10,
direction : 'rtl',

breakpoints : {

   1155:{
    perPage: 3,
    pagination: 4,
  },
  720:{
    fixedWidth  : 170,
    fixedHeight : 230,
    perPage: 3,
    pagination: 5,
  },
  630:{
    fixedWidth  : 150,
    fixedHeight : 195,
    perPage: 3,
  },
  572:{
    fixedWidth  : 130,
    fixedHeight : 180,
    perPage: 2,
  },
  370:{
    fixedWidth  : 110,
    fixedHeight : 180,
    perPage: 2,
  },
  335:{
    fixedWidth  : 100,
    fixedHeight : 180,
    perPage: 2,
  },
  },}
  new Splide('.Related-Products').mount();