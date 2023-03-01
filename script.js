const $coin = document.getElementById('coin');
const $result = document.getElementById('result');
const $btn = document.getElementById('btn');
//アニメーションの秒数指定
const animationTime = 800;

$btn.addEventListener( 'click', function() {
  //ボタン２度押しを防ぐ
  $btn.disabled = true;
  //前回の結果を非表示にするためにresultをアニメーションが終わるまで透明に
  $result.classList.add('result-hide');
  window.setTimeout( function()  {
    $result.classList.remove('result-hide');
  }, animationTime);

  //coinアニメーションを開始
  $coin.classList.add('coin-animation');
  //アニメーションをストップ
  window.setTimeout( function()  {
    $coin.classList.remove('coin-animation');
  }, animationTime);

  //裏か表かの画像を出す
  window.setTimeout( function()  {
    const imgList = [
      'coin-front.png',
      'coin-back.png'
    ];
  const selectNum = Math.floor(Math.random() * imgList.length);
  const resultImg = '<img src="' + imgList[selectNum] + '" >';

  $result.innerHTML = resultImg;
  //結果を表示したあとに再度ボタンを押せるようにする
  $btn.disabled = false;
  }, animationTime);
});

