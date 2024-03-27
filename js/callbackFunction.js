//構文
//
//

// function 高階関数(コールバック関数) {
//     //処理
//     //コールバック関数();
// }

//
//
//普通の書き方
//
//

function bring(food) {
    // if(/* 手洗いを終えたら */){
    //     //食材を持ってきてもらう処理
    // }
}

function peer(food) {
    // if(/* 手洗いを終えたら */){
    //     //食材の皮を剥く処理
    // }
}

function cut(food) {
    // if(/* 手洗いを終えたら */){
    //     //食材を切ってもらう処理
    // }
}

//
//
//高階関数の場合
//
//

//fn は functionの略
function washed(fn) {
    // if(/* 手洗いを終えたら */){
    //     fn(); //コールバック関数の処理
    // }
}

function bring(food) {
    //食材を持ってきてもらう処理
}

function peer(food) {
    //食材の皮を剥く処理
}

function cut(food) {
    //食材を切ってもらう処理
}

washed(bring);

//高階関数では処理条件を増やす時に普通の書き方よりも簡単に書ける
//処理変更するところが一箇所で済む
//第二引数も追加できる

//
//
//
//コールバック関数の実践文
//
//
//

//フォロー削除のコールバック関数
// const unfollow = function () {
//     console.log("フォローを外しました");
// };

// const cancelTweet = function () {
//     console.log("ツイートをキャンセルしました");
// };

// function confirmed(fn) {
//     if (window.confirm("実行しますか？")) {
//         fn();
//     }
// }

// confirmed(function () {
//     console.log("フォローを外しました");
// });

//
//
//githubのリポジトリを削除するコールバック関数
//
//

// function confirmed(fn) {
//     const input = window.prompt("実行しますか？");
//     if (input === "実行") {
//         fn(input);
//     }
// }

// confirmed(function (input) {
//     if (input === "実行") {
//         console.log("リポジトリを削除");
//     }
// });

//btn click event

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    console.log("フォローを外しました");
});

console.log(btn);

//forEachのコールバック関数
const foods = ["にんじん", "じゃがいも", "玉ねぎ"];

foods.forEach(function (food) {
    console.log(food);
});
