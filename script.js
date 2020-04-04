
let keysRu = [
    'ё',
    ['!',1],
    ['"',2],
    ['№',3],
    [';',4],
    ['%',5],
    ['^',6],
    ['&',7],
    ['*',8],
    ['(',9],
    [')',0],
    ['_','-'],
    ['+','='],
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
    ['/','\\'],
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

const keysEn = [
    ['~','`'],
    ['!',1],
    ['@',2],
    ['#',3],
    ['$',4],
    ['%',5],
    [':',6],
    ['?',7],
    ['*',8],
    ['(',9],
    [')',0],
    ['_','-'],
    ['+','='],
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
    ['/','\\'],
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

const INPUT = document.createElement('input');
const MAIN = document.createElement('div');
let count = 0;

function keyBord(Lang) {

    MAIN.className = 'main';
    INPUT.className = 'input';
    document.body.append(INPUT);
    document.body.append(MAIN);

    Lang.forEach((e,i) => {
        let button = document.createElement('div');
        let keyText = document.createElement('p');
        let little = document.createElement('p');
        if(typeof e !== "object"){
            keyText.className = 'txt';
            keyText.innerText = `${e}`;
        }else{
            keyText.className = 'txt';
            keyText.innerText = `${e[1]}`;
            little.className = 'little';
            little.innerText = `${e[0]}`;
            button.append(little)
        }
        button.className = 'buttons';
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





};

MAIN.addEventListener('click',event => {
    INPUT.value += event.target.lastChild.textContent
})
document.body.onload = keyBord(keysRu);
button(
    () => {
        if(MAIN.querySelectorAll('div')[0].textContent === 'ё'){
            MAIN.querySelectorAll('div').forEach( e =>{
                e.remove();
            });
            keyBord(keysEn)
        }else if(MAIN.querySelectorAll('div')[0].textContent ==="~`"){
            MAIN.querySelectorAll('div').forEach( e =>{
                e.remove();
            });
            keyBord(keysRu)
        }





    },
    "ShiftLeft",
    'AltLeft'
);
button(
    () => {







    },
    "ShiftLeft",
);
function button(func, ...codes) {
    let pressed = new Set();

    document.addEventListener('keydown', function(event) {
        console.log(event.code)
        pressed.add(event.code);

        for (let code of codes) {
            if (!pressed.has(code)) {
                return;
            }
        }
        pressed.clear();

        func();

    });

    document.addEventListener('keyup', function(event) {
        pressed.delete(event.code);
    });

}