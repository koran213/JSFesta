
// キャンバス要素を取得
const canvas = document.getElementById('canvas'); 
// キャンパスに描画するコンテキストを取得
const ctx = canvas.getContext('2d');
// キャンバスサイズをwindowサイズに
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//定期的に処理を実行させる
window.requestAnimationFrame =
window.requestAnimationFrame ||
window.mozRequestAnimationFrame ||
window.weblitRequestAnimationFrame ||
window.msRequestAnimationFrame ||
function (cb) {setTimeout(cb, 17); };

//  円をランダムに増やす
const NUM = 100; //表示数
const particles = [];

// classへの変換
class Particle {
  constructor(x, y, radius, directionX, directionY, index) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.directionX = directionX;
    this.directionY = directionY;
    this.index = index;
  }

  render() {
    if(this.index % 3 === 0) {
      ctx.fillStyle = "#ffc0ad";
      ctx.fill();
    } else if (this. index % 3 ===1) {
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 1;
      ctx.stroke();
    } else {
      ctx.globalAlpha = 0.8;
      ctx.fillStyle = "#c3f0ca";
      ctx.fill();
    } 
    //円を描く
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
  }
  
  update() {
    this.x += this.directionX;
    if(this.x > canvas.width + this.radius) {
      this.x = -this.radius;
    }
    this.render();
  }
}

init();
render();

function init() {
  for(let i = 0; i < NUM; i++) {
    //paraticles
    const x = Math.random() * canvas.width;
    const y = Math.floor(Math.random() * canvas.height);
    const radius = Math.floor(Math.random() * 20);
    const directionX = Math.random() * 2;
    const directionY = Math.random() * 2 - 1;
    const particle = new Particle(x, y, radius, directionX, directionY, i);particles.push(particle);
  } 
}

function render(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for(let i = 0; i < particles.length; i++) {
    particles[i].update();
  }
  requestAnimationFrame(render);
}

//タイトル文字変更
const title = document.querySelector('.title');

$(title).hover(function () {
   title.textContent = 'ENTER'

  }, function () {
    title.textContent = 'Koran\'s JS Gallery';
  }
);

  
//カウントダウンタイマー     	
$('#timerLab13').yycountdown({
  endDateTime   : '2022/10/18 00:00:00'
});

//コンテンツのふわっと表示
ScrollReveal().reveal('.dish', { 
  duration: 1200, // アニメーションの完了にかかる時間
  viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
  reset: true   // 何回もアニメーション表示するか
});

//モーダルウィンドウ
$(document).ready(function(){
  $(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:360, maxWidth:"90%", maxHeight:"90%"});
});

$(document).ready(function(){
  $(".iframe").colorbox({iframe:true, width:"80%", height:"80%"});
});