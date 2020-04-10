// Selection is an object with one key-value. The value of the key is an array of 3 objects. Each object has a key value pair. The value is an array of different lengths.
// I would like to match 'Publication' with the HTML value pressed on the click of generate.
// I would like to put the statements from the array in an unordered list in the according column.

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
    for (cat in selection) {
        category = selection[cat]
        for (type in cat) {
            item = cat[type]
            console.log(item)
        } 
        }
      }

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