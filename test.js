const selection = {
    type: [
      {
        'Publication':
          [
            'A printed work produced as a serial.',
            'This and that statement.',
            'Pay attention to the grey space!'
          ]
      },
      {
        'Poster':
          [
            'A single printed work, containing a statement.',
            'This and that statement.',
            'Pay attention to the grey space!'
          ]
      },
      {
        'Zine':
          [
            'A single printed work, containing a statement.',
            'This and that statement.',
            'Pay attention to the grey space!'
          ]
      },
          ],
  }

  function randomWord() {
    for (key in selection) {
      var subGenre = selection[key];
      console.log(key.length)
      }
    }

    var num = Math.floor(Math.random() * key.length)

randomWord()


// Iterative function to loop through the Data Object
// const iterate = (obj) => {
//     Object.keys(obj).forEach(key => {
//         console.log(`key: ${key}, value: ${obj[key]}`)
//         if (typeof obj[key] === 'object') {
//             iterate(obj[key])
//         }
//     })
// }
// iterate(selection)