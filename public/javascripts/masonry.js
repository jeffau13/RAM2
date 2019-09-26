document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelectorAll('.masonry');
  let macyInstances = [];
  list.forEach(div => {
    macyInstances.push(
      Macy({
        container: `#${div.id}`,
        trueOrder: false,
        waitForImages: false,
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
  macyInstances.forEach(instance => {
    instance.runOnImageLoad(function() {
      // Every time an image loads this gets fired
      instance.recalculate(true);
    }, true);
  });
});
