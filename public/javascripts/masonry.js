window.onload = e => {
  const macyInstance = Macy({
    container: '.masonry',
    trueOrder: false,
    waitForImages: true,
    margin: 0,
    columns: 4,
    breakAt: {
      1200: 3,
      940: 2,
      750: 1
    }
  });
};

macyInstance.runOnImageLoad(function() {
  console.log('Every time an image loads I get fired');
  macyInstance.recalculate(true);
}, true);
