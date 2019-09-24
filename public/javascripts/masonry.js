window.onload = e => {
  const list = document.querySelectorAll('.masonry');
  console.log(list);
  let MacyInstances = [];

  list.forEach(div => {
    console.log(div.id);
    MacyInstances.push(
      Macy({
        container: `#${div.id}`,
        trueOrder: false,
        waitForImages: true,
        margin: 0,
        columns: 4,
        breakAt: {
          1920: 3,
          1200: 2,
          750: 1
        }
      })
    );
  });
  MacyInstances.forEach(macyInstance => {
    macyInstance.runOnImageLoad(function() {
      console.log('Every time an image loads I get fired');
      macyInstance.recalculate(true);
    }, true);
  });

  // console.log(MacyInstances);
};
