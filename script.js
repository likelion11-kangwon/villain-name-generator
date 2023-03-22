const prefixes = [
    '인문대',
    '경영대',
    '의대',
    '농생대',
    '공대',
    'IT대',
    '약대',
    '자대',
    '문예대',
    '산림대',
    '동생대',
    '사과대',
    '법대'
];

const suffixes = [
    '고양이사료약탈자',
    '학식두번받기빌런',
    '곰두리추종자',
    '아싸호소인',
    '12학번석유',
    '조커',
    '탈모동아리회원',
    '백록관새치기장인',
    '여신',
    '존잘남',
    '이두희남친',
    '화장실휴지도둑',
    '변기물안내리는',
    '우주최강귀요미',
    '민트초코애초가',
    '요플레뚜껑안핥고버리는',
    '10년차아이돌',
    '자전거도둑',
    '네이버해커',
    '진순파',
    '배민진상리뷰어'
];

/**
 * @type {HTMLInputElement}
 */
let prefixInput;
/**
 * @type {HTMLInputElement}
 */
let nameInput;
/**
 * @type {HTMLDivElement}
 */
let outputBox;
/**
 * @type {HTMLDivElement}
 */
let outputText;

window.addEventListener('DOMContentLoaded', () => {
    console.log('loaded');
    prefixInput = document.getElementById('prefix-input');
    nameInput = document.getElementById('name-input');
    outputBox = document.getElementById('output-box');
    outputText = document.getElementById('output-text');
});

function choose(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getRandom(name, prefix) {
    return `${prefix ?? choose(prefixes)} ${choose(suffixes)} ${name}`;
}

function generateName() {
    outputBox.classList.add('enabled');
    const prefix = prefixInput.value.trim();
    outputText.textContent = getRandom(nameInput.value, prefix.length > 0 ? prefix : undefined);
}