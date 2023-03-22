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

const guides = [
    '당신은 고양이 사료를 자주 훔쳐먹습니다. 고양이가 싫거나, 배고파서 거나, 이유는 당신이 정할 수 있습니다.',
    '당신은 하나의 교환권으로 학식을 두 번 받아 먹습니다.',
    '당신은 곰두리를 정말 좋아합니다. 곰두리에 미친 사람입니다.',
    '당신은 아싸 호소인입니다. 남들이 보기에는 인싸지만 자기는 아싸라고 강하게 주장합니다.',
    '당신은 12학번 석유입니다.',
    '당신은 조커입니다. 다른 사람이 무례하게 굴면 당신 안의 두 번째 인격이 튀어나옵니다.',
    '당신은 머리가 빠지는게 고민이라 정보 공유를 위해 강원대학교 탈모 동아리에 들어 갔습니다.',
    '당신은 백록관 새치기 고수입니다. 당신이 끼어들지 못하는 줄은 없습니다.',
    '당신은 과에서 제일 예쁜 사람으로 유명합니다.',
    '당신은 과에서 제일 잘생긴 사람으로 유명합니다.'
]

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
/**
 * @type {HTMLDivElement}
 */
let outputGuideText;

window.addEventListener('DOMContentLoaded', () => {
    console.log('loaded');
    prefixInput = document.getElementById('prefix-input');
    nameInput = document.getElementById('name-input');
    outputBox = document.getElementById('output-box');
    outputText = document.getElementById('output-text');
    outputGuideText = document.getElementById('output-guide-text');
});

function choose(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getRandom(name, prefix) {
    const suffixesWithGuide = suffixes.map((suffix, i) => [suffix, guides[i]])
    console.log(suffixesWithGuide);
    const [suffix, guide] = choose(suffixesWithGuide);
    return [
        `${prefix ?? choose(prefixes)} ${suffix} ${name}`,
        guide,
    ]
}

function generateName() {
    outputBox.classList.add('enabled');
    const prefix = prefixInput.value.trim();
    const [name, guide] = getRandom(nameInput.value, prefix.length > 0 ? prefix : undefined);
    outputText.textContent = name;
    outputGuideText.textContent = guide;
}