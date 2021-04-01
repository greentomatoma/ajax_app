const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
  <div class="post">
    <div class="post-data">
      投稿日時:${item.created_at}
    </div>
    <div calss="post-content">
      ${item.content}
    </div>
  </div>`;
  return html
}

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
    XHR.onload = () => {
      // HTTPステータスによる条件分岐
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      }
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
      formText.value = "";
    };
  });
}

window.addEventListener('load', post)