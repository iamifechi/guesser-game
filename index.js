/* Random Guess App by @iam_ifechi */

const GuessApp = (
    function App() {
  
      let range = 2;
      let score = 0;
      let username;
  
      //getting random number
      const getRandom = range => {
        let result = Math.ceil(Math.random() * range);
        return result
      }
  
      //getting guess frm user
      const getGuess = range => {
        let guess = prompt(`Guess a number between 1 and ${range} `)
        return guess
      }
  
      //comparing random number and user guess
      const compare = range => {
        let random = getRandom(range)
        let guess =
          parseInt(getGuess(range));
  
        console.log(`You guessed ${guess} and the correct answer is ${random} `)
  
        return random === guess ? true : false;
      }
  
      //Initialize App
      const start = () => {
  
        if (!username) {
          username = prompt('Please enter username:');
        }
        
  
        while (compare(range)) {
          range += 1
          score += 10;
          console.log('\n')
          console.log(`Weldone ${username}! Your score: ${score} `)
          console.log("Stage: ", range - 1)
  
          // compare(range)
        }
        //else{
        console.log("Game over! ")
        console.log("Score: ", score)
        reset()
  
      }
  
      //Reset game when user tries again
      const reset = () => {
        range = 2;
        score = 0;
        console.log('\n')
        console.log(`Menu: \n 1: Retry\n 0: Exit`)
        let retry = parseInt(prompt("Enter choice: "));
  
        return retry === 1 ? start() : null
      }
  
      return {
        play: start,
        reset,
      }
  
    }
  
  )()
  
  //Now lets play
  GuessApp.play()