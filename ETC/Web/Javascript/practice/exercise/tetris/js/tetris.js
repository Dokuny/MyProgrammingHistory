// DOM
const playground = document.querySelector(".playground > ul");


// Setting
const GAME_ROWS = 20;
const GAME_COLS = 10;

// variables
let score = 0;
let duration = 500;
let downInterval;
let tempMovingItem;

const BLOCKS = {
    tree: [
        [[1, 0], [0, 1], [1, 1], [2, 1]],
        [],
        [],
        [],
    ]
}

const movingItem = {
    type: "tree",
    direction: 0,
    top: 2,
    left: 3,
}
init();

// functions
function init() {
    tempMovingItem = {...movingItem};
    for (let i = 0; i < GAME_ROWS; i++) {
        prependNewLine();
    }
    renderBlocks();
}

function prependNewLine() {
    const li = document.createElement('li');
    const ul = document.createElement('ul');
    for (let j = 0; j < GAME_COLS; j++) {
        const matrix = document.createElement("li");
        ul.prepend(matrix);
    }
    li.prepend(ul);
    playground.prepend(li);
}

function renderBlocks() {
    const {type, direction, top, left} = tempMovingItem;
    const movingBlocks = document.querySelectorAll(".moving");
    movingBlocks.forEach((moving)=>{
        moving.classList.remove(type,"moving");
    })
    BLOCKS[type][direction].forEach(block => {
        const x = block[0] + left;
        const y = block[1] + top;
        const target = playground.childNodes[y].childNodes[0].childNodes[x];
        target.classList.add(type,"moving");
    })
}

function moveBlock(moveType, amount) {
    tempMovingItem[moveType] += amount;
    renderBlocks();
}

// event handling
document.addEventListener("keydown", e => {
    switch (e.keyCode) {
        case 39:
            moveBlock("left", 1);
            break;
        case 37:
            moveBlock("left", -1);
            break;
        case 40:
            moveBlock("top",1);
            break;
        default:
            break;
    }
})

