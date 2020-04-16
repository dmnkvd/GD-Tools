const selection = {
    format: [
        'A4',
        'Letter',
        'A3',
        'A2',
        'A5',
        'B6'
    ],

    focus: [
        'Contrast',
        'Letter Spacing',
        'Whitespace',
        'Kerning',
    ],

    print: [
        'Inkjet',
        'Risoprint',
        'Silkscreen',
        'Sublimation Print',
        'UV Print',
        'Xerox',
    ]
}

var currentKey = 0
var randNum = 0
function randomWord() {
    for (key in selection) {
        currentKey = key
        let num = Math.floor(Math.random() * key.length)
        document.querySelectorAll(`.${key}`).forEach((result) => {
            result.innerHTML = selection[key][num];
        })
    }

    document.querySelectorAll(`.${key}-statements`).forEach((result) => {
        result.innerHTML = ;
};