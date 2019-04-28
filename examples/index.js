var { tpanorama } = require('../lib/index.js');
var opt, tp;
window.onload = function () {
  opt = {
    container: 'panoramaConianer',//容器
    url: 'img/p3.png',
    lables: [
      { position: { lon: -72.00, lat: 9.00 }, logoUrl: '', text: '蓝窗户' },
      { position: { lon: 114.12, lat: 69.48 }, logoUrl: '', text: '一片云彩' },
      { position: { lon: 132.48, lat: -12.24 }, logoUrl: '', text: '大海' }
    ],
    widthSegments: 60,//水平切段数
    heightSegments: 40,//垂直切段数（值小粗糙速度快，值大精细速度慢）
    pRadius: 1000,//全景球的半径，推荐使用默认值
    minFocalLength: 6,//镜头最a小拉近距离
    maxFocalLength: 100,//镜头最大拉近距离
    showlable: 'show' // show,click
  }
  tp = new tpanorama(opt);
}

function changeImg(name) {
  opt.lables = [];
  if (name == "p1") {
    opt.lables = [{ position: { lon: 178.56, lat: -15.84 }, text: '神像' }]
  }
  if (name == "p2") {
    opt.lables = [{ position: { lon: -80.64, lat: -16.92 }, text: '蓝色' }, { position: { lon: 46.80, lat: 10.44 }, text: '绿色' }]
  }
  if (name == "p4") {
    opt.lables = [{ position: { lon: 48.96, lat: -20.16 }, text: '樱花' }]
  }
  opt.url = 'img/' + name + '.png';
  tp.render(opt);
}
