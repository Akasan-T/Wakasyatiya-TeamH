const pagetopBtnudon = document.querySelector(".button_udon");
const pagetopBtnothers = document.querySelector(".button_others"); 
const pagetopBtnset = document.querySelector(".button_set");
const pagetopBtndon = document.querySelector(".button_don");
const pagetopBtnone = document.querySelector(".button_one");
const pagetopBtnchild = document.querySelector(".button_child");
const pagetopBtntopping = document.querySelector(".button_topping");

const box_udon = document.querySelector(".menu_udon");
const box_others = document.querySelector(".menu_others");
const box_set = document.querySelector(".menu_set");
const box_don = document.querySelector(".menu_don");
const box_one = document.querySelector(".menu_one");
const box_child = document.querySelector(".menu_child");
const box_topping = document.querySelector(".menu_topping");

// 「うどん」ボタンをクリックしたらうどんのエリアを表示しスクロールを初期化
pagetopBtnudon.addEventListener("click", (e) => {
    e.preventDefault(); // デフォルトのリンク動作を無効化
    box_udon.style.display = "block";
    box_others.style.display = "none";
	box_set.style.display = "none";
	box_don.style.display = "none";
	box_one.style.display = "none";
	box_child.style.display = "none";
	box_topping.style.display = "none";
    box_udon.scrollTop = 0; // スクロール位置を初期化
});

// 「その他」ボタンをクリックしたらその他のエリアを表示しスクロールを初期化
pagetopBtnothers.addEventListener("click", (e) => {
    e.preventDefault(); // デフォルトのリンク動作を無効化
    box_others.style.display = "block";
    box_udon.style.display = "none";
	box_set.style.display = "none";
	box_don.style.display = "none";
	box_one.style.display = "none";
	box_child.style.display = "none";
	box_topping.style.display = "none";
    box_others.scrollTop = 0; // スクロール位置を初期化
});

// 「セット」ボタンをクリックしたらセットのエリアを表示しスクロールを初期化
pagetopBtnset.addEventListener("click", (e) => {
    e.preventDefault(); // デフォルトのリンク動作を無効化
    box_set.style.display = "block";
    box_udon.style.display = "none";
	box_others.style.display = "none";
	box_don.style.display = "none";
	box_one.style.display = "none";
	box_child.style.display = "none";
	box_topping.style.display = "none";
    box_set.scrollTop = 0; // スクロール位置を初期化
});

// 「丼」ボタンをクリックしたら丼のエリアを表示しスクロールを初期化
pagetopBtndon.addEventListener("click", (e) => {
    e.preventDefault(); // デフォルトのリンク動作を無効化
    box_don.style.display = "block";
    box_udon.style.display = "none";
	box_others.style.display = "none";
	box_set.style.display = "none";
	box_one.style.display = "none";
	box_child.style.display = "none";
	box_topping.style.display = "none";
    box_don.scrollTop = 0; // スクロール位置を初期化
});

// 「一品」ボタンをクリックしたら一品のエリアを表示しスクロールを初期化
pagetopBtnone.addEventListener("click", (e) => {
    e.preventDefault(); // デフォルトのリンク動作を無効化
    box_one.style.display = "block";
    box_udon.style.display = "none";
	box_others.style.display = "none";
	box_set.style.display = "none";
	box_don.style.display = "none";
	box_child.style.display = "none";
	box_topping.style.display = "none";
    box_one.scrollTop = 0; // スクロール位置を初期化
});

// 「子供」ボタンをクリックしたら子供のエリアを表示しスクロールを初期化
pagetopBtnchild.addEventListener("click", (e) => {
    e.preventDefault(); // デフォルトのリンク動作を無効化
    box_child.style.display = "block";
    box_udon.style.display = "none";
	box_others.style.display = "none";
	box_set.style.display = "none";
	box_don.style.display = "none";
	box_one.style.display = "none";
	box_topping.style.display = "none";
    box_child.scrollTop = 0; // スクロール位置を初期化
});

// 「トッピング」ボタンをクリックしたらトッピングのエリアを表示しスクロールを初期化
pagetopBtntopping.addEventListener("click", (e) => {
    e.preventDefault(); // デフォルトのリンク動作を無効化
    box_topping.style.display = "block";
    box_udon.style.display = "none";
	box_others.style.display = "none";
	box_set.style.display = "none";
	box_don.style.display = "none";
	box_one.style.display = "none";
	box_child.style.display = "none";
    box_topping.scrollTop = 0; // スクロール位置を初期化
});