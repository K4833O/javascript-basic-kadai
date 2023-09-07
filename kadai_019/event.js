// btnというidを持つHTML要素を取得し、定数に代入する
const Btn = document.getElementById('btn');
const element = document.getElementById('text')

// HTML要素がクリックされたときにイベント処理を実行する
Btn.addEventListener('click', () => {
  element.textContent = 'ボタンをクリックしました'
});