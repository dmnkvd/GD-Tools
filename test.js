const selection = {
    type:[
        {
          'Publication':'A printed work produced as a serial.'
          },
        {
          'Poster':'A single printed work, containing a statement.'
          },
        {
          'Zine':'An informal, typically photographic entry.'
          },
        {
          'Book':'An informal, typically photographic entry.'
          },
        {
          'Brochure':'An informal, typically photographic entry.'
          },
        ],

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
    ],
}

for (key in selection) {
    var num = Math.floor(Math.random() * key.length)
    var element = selection[key];
    for (i = 0; i < (element.length); i++) {
        console.log(element[i]);
    }
}