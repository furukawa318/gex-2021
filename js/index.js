const EMOTIONAL_LIST = [
    'たのしい',
    'こわい',
    'かなしい',
    'おこる',
    '好き',
];

const SHAPE_NAME_LIST = [
    "circle",
    "triangle",
    "star",
    "cross",
    "rectangle",
    "hexagon",
];

const EMOTIONAL_ID = Math.floor(Math.random() * EMOTIONAL_LIST.length);
const EMOTIONAL_LABEL = EMOTIONAL_LIST[EMOTIONAL_ID];

const initilize = function() {
    // const questionLabel = document.querySelector('#js-question-label');
    const buttonList = document.querySelectorAll('.js-button');

    // questionLabel.textContent = EMOTIONAL_LABEL;
    
    buttonList.forEach(function(button, i) {
        button.addEventListener('click', function (e) {
            gtag("event", "select_content", {
                // 感情名をcontent_typeとする
                content_type: `かたち_${EMOTIONAL_LABEL}_${SHAPE_NAME_LIST[i]}`,
                // ボタンのインデックス（何番目のボタンか）の数値を選択したIDとする
                item_id: `${SHAPE_NAME_LIST[i]}`,
            });
        });
    });
};

if (document.readyState !== 'loading') {
    // HTML が最後まで読み込まれていれば初期化する
    initilize();
} else {
    // HTML が最後まで読み込まれていなければ、
    // 読み込みの終了(DOMContentLoaded)を検知して初期化する
    document.addEventListener('DOMContentLoaded', function () {
        initilize();
    });
}