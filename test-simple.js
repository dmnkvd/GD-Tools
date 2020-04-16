const selection = {
    type: [
        {
            Publication: [
                "Publication statement one.",
                "Publication statement two.",
                "Publication three!",
            ],
        },
        {
            Magazine: ["Magazine one.", "Magazine two."],
        },
    ],
    format: [
        {
            A3: ["A3 one.", "A3 two.", "A3 three!"],
        },
        {
            A4: ["A4 one.", "A4 two."],
        },
    ],
};

function randomWord() {
    for (let i in selection) {
        if (Object.prototype.hasOwnProperty.call(selection, i)) {
            const categoryName = i;
            console.log(`Category: ${categoryName}`);
            const randomItem = Math.floor(Math.random() * selection[i].length);
            console.log(`Random item = ${randomItem}`);

            for (let j in selection[i][randomItem]) {
                console.log(j);
                document.querySelectorAll(`.${categoryName}`).forEach((result) => {
                    result.innerHTML = j;
                });

                for (let k in selection[i][j]) {
                    for (let l in selection[i][j][k]) {
                        const statement = selection[i][j][k][l];
                        // console.log(`Statement: ${statement}`);
                    }
                }
            }
        }
    }
}
