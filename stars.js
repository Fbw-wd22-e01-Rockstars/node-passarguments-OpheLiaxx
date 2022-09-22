/* 1. Inside your function, and using `console.log()`, print 3 lines of text;

   - **Line 1** - Should be a row of stars - the number of stars must equal the number received into the function
   - **Line 2** - The text
   - **Line 3** - Same as line 1

2. If no **number of stars** are passed to the function, the function should use **10** as the default number
3. If no **string** is passed into the function, the function should use **"hi"** as the default string
4. Export your function as **default export (esm)** */

function stars (numOfStars, string) {
  if (numOfStars === undefined) {
    numOfStars = 10
  }
  if (string === undefined) {
    string = "hi"
  }

  const starRow = "*".repeat(numOfStars)
  console.log(starRow)
  console.log(string)
  console.log(starRow)
}

export default stars