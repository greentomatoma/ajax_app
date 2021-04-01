function post() {
  // 投稿ボタンの要素を取得
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    // フォームの要素を取得
    const form = document.getElementById("form")
    // フォームに入力された値を取得
    const formData = new FormData(form)
    // サーバーサイドにリクエストを送信
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
  });
}

window.addEventListener('load', post)