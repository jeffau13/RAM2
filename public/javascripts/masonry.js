window.onload = e => {
  const macyInstance = Macy({
    container: '.flex-grid',
    trueOrder: false,
    waitForImages: false,
    margin: 0,
    columns: 4,
    breakAt: {
      1200: 3,
      940: 2,
      750: 1
    }
  });
};
