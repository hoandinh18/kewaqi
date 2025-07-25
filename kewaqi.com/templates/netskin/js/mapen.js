//地图定位
  var map = new AMap.Map('container',{
    resizeEnable: true,
    zoom: 18,
    center: [121.470198,28.553877],
    lang: "en" 
  });
  var marker = new AMap.Marker({
    position: [121.470198,28.553877]
  });
  marker.setMap(map);

  ///liteToolbar.js
  if (typeof map !== 'undefined') {
    map.on('complete', function() {
      if (location.href.indexOf('guide=1') !== -1) {
        map.setStatus({
          scrollWheel: false
        });
        if (location.href.indexOf('litebar=0') === -1) {
          map.plugin(["AMap.ToolBar"], function() {
            var options = {
              liteStyle: true
            }
            if (location.href.indexOf('litebar=1') !== -1) {
              options.position = 'LT';
              options.offset = new AMap.Pixel(10, 40);
            } else if (location.href.indexOf('litebar=2') !== -1) {
              options.position = 'RT';
              options.offset = new AMap.Pixel(20, 40);
            } else if (location.href.indexOf('litebar=3') !== -1) {
              options.position = 'LB';
            } else if (location.href.indexOf('litebar=4') !== -1) {
              options.position = 'RB';
            }
            map.addControl(new AMap.ToolBar(options));
          });
        }
      }
    });
  }