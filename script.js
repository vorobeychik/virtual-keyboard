let keyCode = ["Backquote",
    "Digit1",
    "Digit2",
    "Digit3",
    "Digit4",
    "Digit5",
    "Digit6",
    "Digit7",
    "Digit8",
    "Digit9",
    "Digit0",
    "Minus",
    "Equal",
    "Backspace",
    "Tab",
    "KeyQ",
    "KeyW",
    "KeyE",
    "KeyR",
    "KeyT",
    "KeyY",
    "KeyU",
    "KeyI",
    "KeyO",
    "KeyP",
    "BracketLeft",
    "BracketRight",
    "Backslash",
    "Delete",
    "CapsLock",
    "KeyA",
    "KeyS",
    "KeyD",
    "KeyF",
    "KeyG",
    "KeyH",
    "KeyJ",
    "KeyK",
    "KeyL",
    "Semicolon",
    "Quote",
    "Enter",
    "ShiftLeft",
    "Backslash",
    "KeyZ",
    "KeyX",
    "KeyC",
    "KeyV",
    "KeyB",
    "KeyN",
    "KeyM",
    "Comma",
    "Period",
    "Slash",
    "ArrowUp",
    "ShiftRight",
    "ControlLeft",
    "MetaLeft",
    "AltLeft",
    "Space",
    "AltRight",
    "ControlRight",
    "ArrowLeft",
    "ArrowDown",
    "ArrowRight"];

let keysRu = [
    'ё',
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    '-',
    '=',
    'Backspace',
    'Tab',
    'й',
    'ц',
    'у',
    'к',
    'е',
    'н',
    'г',
    'ш',
    'щ',
    'з',
    'х',
    'ъ',
    '\\',
    'del',
    'Caps Lock',
    'ф',
    'ы',
    'в',
    'а',
    'п',
    'р',
    'о',
    'л',
    'д',
    'ж',
    'э',
    'ENTER',
    'Shift',
    '\\',
    'я',
    'ч',
    'с',
    'м',
    'и',
    'т',
    'ь',
    'б',
    'ю',
    '/',
    '↑',
    'Shift',
    'Ctrl',
    'Win',
    'Alt',
    ' ',
    'Alt',
    'Ctrl',
    '←',
    '↓',
    '→',
];
let keysRuCaps = [
    'Ё',
    '!',
    '"',
    '№',
    ';',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '_',
    '+',
    'Backspace',
    'Tab',
    'Й',
    'Ц',
    'У',
    'К',
    'Е',
    'Н',
    'Г',
    'Ш',
    'Щ',
    'З',
    'Х',
    'Ъ',
    '/',
    'del',
    'Caps Lock',
    'Ф',
    'Ы',
    'В',
    'А',
    'П',
    'Р',
    'О',
    'Л',
    'Д',
    'Ж',
    'Э',
    'ENTER',
    'Shift',
    '\\',
    'Я',
    'Ч',
    'С',
    'М',
    'И',
    'Т',
    'Ь',
    'Б',
    'Ю',
    '/',
    '↑',
    'Shift',
    'Ctrl',
    'Win',
    'Alt',
    ' ',
    'Alt',
    'Ctrl',
    '←',
    '↓',
    '→',
];

const keysEn = [
    '`',
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    '-',
    '=',
    'Backspace',
    'Tab',
    'q',
    'w',
    'e',
    'r',
    't',
    'y',
    'u',
    'i',
    'o',
    'p',
    '[',
    ']',
    '\\',
    'del',
    'Caps Lock',
    'a',
    's',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    ';',
    '\'',
    'ENTER',
    'Shift',
    '\\',
    'z',
    'x',
    'c',
    'v',
    'b',
    'n',
    'm',
    '.',
    ',',
    '/',
    '↑',
    'Shift',
    'Ctrl',
    'Win',
    'Alt',
    ' ',
    'Alt',
    'Ctrl',
    '←',
    '↓',
    '→',

];
const keysEnCaps = [
    '~',
    '!',
    '@',
    '#',
    '$',
    '%',
    ':',
    '?',
    '*',
    '(',
    ')',
    '_',
    '+',
    'Backspace',
    'Tab',
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    '[',
    ']',
    '/',
    'del',
    'Caps Lock',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    ';',
    '\'',
    'ENTER',
    'Shift',
    '\\',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    '.',
    ',',
    '/',
    '↑',
    'Shift',
    'Ctrl',
    'Win',
    'Alt',
    ' ',
    'Alt',
    'Ctrl',
    '←',
    '↓',
    '→',

];
let language = 'Ru';


language = localStorage.getItem('language');


document.body.onload = () =>{
   if (language === 'Ru'){keyBord(keysRu);}else{keyBord(keysEn)}
};


function LanguageCaps() {
    if(language === 'Ru'){keyBord(keysRuCaps)}else{keyBord(keysEnCaps)}
}
function Language() {
    if(language === 'Ru'){keyBord(keysRu)}else{keyBord(keysEn)}
}
const INPUT = document.createElement('textarea');
const MAIN = document.createElement('div');
let active = [];
function keyBord(Lang) {
    MAIN.querySelectorAll('div').forEach( (e,i) =>{
        if (e.classList[1] === "active"){
            active.push(i)
        }
        e.remove();

    });

    MAIN.className = 'main';
    INPUT.className = 'input';
    document.body.append(INPUT);
    document.body.append(MAIN);

    Lang.forEach((e,i) => {

        let button = document.createElement('div');
        let keyText = document.createElement('p');
         let little = document.createElement('p');

         keyText.className = 'txt';
         keyText.innerText = `${e}`;



        button.className = 'buttons';
        if(active.indexOf(i) !== -1){
            button.classList.add('active')
        }
        button.setAttribute( 'data-code',`${keyCode[i]}`);

        switch (e) {
            case 'Backspace':
                button.style.width = '75px';
                break;
            case 'ENTER':
                button.style.width = '80px';
                break;
            case 'Caps Lock':
                button.style.width = '70px';
                break;
            case 'Shift':
                if(i === 42){
                    button.style.width = '75px'
                }
                break;
            case  ' ':
                button.style.width = '245px';
                break;
            case  'Ctrl':
                button.style.width = '50px';
                break;
        }
        button.append(keyText);
        MAIN.append(button);

    })
    active = []






};

MAIN.addEventListener('click',event => {
    INPUT.value += event.target.textContent
});

buttons(
    () => {


        LanguageCaps()
    },
    "ShiftLeft",

);

buttons(
    () => {
        if(language === 'Ru'){
            language = 'En'
            keyBord(keysEn)
        }else if(language === 'En'){
            language = "Ru"
            keyBord(keysRu)
        }
        localStorage.setItem('language', language);
    },
    "ControlLeft",
    "AltLeft"
);
function buttons(func, ...codes) {
    let pressed = new Set();

    document.addEventListener('keydown', function(event) {
        console.log(event.code);
        pressed.add(event.code);
        MAIN.querySelectorAll('div').forEach(e =>{
            if(event.code === e.attributes["data-code"].value){
                e.classList.add('active')
            }
        });

        for (let code of codes) {
            if (!pressed.has(code)) {
                return;
            }
        }
        pressed.clear();

        func();

    });

    document.addEventListener('keyup', function(event) {

        if(pressed.has("ShiftLeft")){console.log(pressed.has("ShiftLeft")) }else{
            console.log(pressed.has("ShiftLeft"))
            if(language === 'Ru'){keyBord(keysRu)}else{keyBord(keysEn)} }
        pressed.delete(event.code);

        MAIN.querySelectorAll('div').forEach(e =>{
            if(event.code == e.attributes["data-code"].value){
                e.classList.remove('active')
            }
        });
    });

}