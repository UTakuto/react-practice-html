// const titleList = articles.map((article) => {
//     return article.title;
// });

// console.log(titleList);

const articles = [
    {
        title: "aaa",
        cat: "html",
    },

    {
        title: "bbb",
        cat: "css",
    },

    {
        title: "ccc",
        cat: "html",
    },

    {
        title: "ddd",
        cat: "js",
    },
];

//filterは条件に一致する(true)のものを配列にして返す
const htmlArticles = articles.filter((article) => {
    return article.cat === "html";
});
console.log(htmlArticles);

//findは条件に一致する(true)の最初のものを返す(複数あっても最初の一つだけ取ってくる)
const htmlArticle = articles.find((article) => {
    return article.cat === "html";
});

console.log(htmlArticle);

//someは条件に一致するかどうかを返す
const htmlFlg = articles.some((article) => {
    return article.cat === "html";
});

console.log(htmlFlg);

//everyは配列の中で全ての要素が条件に一致するかどうかを返す
//例：catが全てhtmlかどうか
const htmlFlgs = articles.every((article) => {
    return article.cat === "html";
});

console.log(htmlFlgs);

//includesはオブジェクトが要素になっている配列には使えない
const arr = ["html", "css", "js"];
const result = arr.includes("html");
console.log(result);

//mapは処理結果を配列にして返す
const titleList = articles.map((article) => {
    return article.title;
});

console.log(titleList);

//forEachは繰り返し実行する(何も返さない)
const titles = articles.forEach((article) => {
    console.log(article.title);
});

const counts = articles.reduce((acc, article) => {
    const cat = article.cat;
    if (cat[cat] === undefined) {
        acc[cat] = 1;
    } else {
        acc[cat]++;
    }
    return acc;
}, {});

console.log(counts);
