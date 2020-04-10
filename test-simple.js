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
        'Banana':
          [
            'One.',
            'Two.',
            'Three.'
          ]
      },
          ],
  }

// For loop to access the statements
for (i in selection) {
    var categoryName = i
    // console.log(`Category: ${categoryName}`)
    var randomItem = Math.floor(Math.random() * selection[i].length)
    for (j in selection[i]) {
        var itemName = Object.keys(selection[i][j])
        // console.log(`Item: ${itemName}`)
        for (k in selection[i][j]) {
            for (l in selection[i][j][k]) {
                var statement = selection[i][j][k][l]
                // console.log(`Statement: ${statement}`)
            }
        }
    }
}

// TODO: 
// - Choose a random item, when the GENERATE button is pressed.
// - Assign itemName to the InnerHTML of all elements with matching class
// - output all statements within the object as list elements in an unordered list in the right column of the table.