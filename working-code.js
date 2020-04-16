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

function randomWord() {
    for (key in selection) {
        var num = Math.floor(Math.random() * key.length)
        document.querySelectorAll(`.${key}`).forEach((result) => {
            result.innerHTML = selection[key][num];
        })
    }
};