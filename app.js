window.onload = function () {                      // ① ページが「読み込み完了」になったら実行する処理を登録
  document.getElementById("setNum").onchange = setNum; // ② id="setNum" の要素の「値が変わったとき」に setNum 関数を呼ぶ
};                                                  // ③ onload に登録した関数の終わり

function setNum(e) {                                // ④ 値変更イベントで呼ばれる関数。e はイベント（Event）オブジェクト
  let num = parseInt(e.target.value);               // ⑤ 入力された文字列 e.target.value を整数に変換して num に入れる
  let v0 = num;                                     // ⑥ v0 はそのまま num（入力値そのもの）
  let v1 = 0.5 * num;                               // ⑦ v1 は num の半分（0.5 倍）
  let v2 = 100 * num;                               // ⑧ v2 は num の100倍
  document.getElementById("i0").textContent = v0;   // ⑨ id="i0" の要素内テキストを v0 に置き換える
  document.getElementById("i1").textContent = v1;   // ⑩ id="i1" の要素内テキストを v1 に置き換える
  document.getElementById("i2").textContent = v2;   // ⑪ id="i2" の要素内テキストを v2 に置き換える
  document.getElementById("num").textContent = num; // ⑫ id="num" の要素内テキストを num に置き換える（確認用の表示）
}                                                   // ⑬ setNum 関数の終わり
