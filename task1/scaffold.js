function Hangman(word) {
  let state = {
    guessed: [],
    wrongCharacters: [],
    attempts: 6
  };
  return {
    guess(char) {
      !word.includes(char) && state.wrongCharacters.push(char);
      if (word.includes(char) && state.attempts > 0) {
        Array.from(word).map((letter, index) => {
          if (letter.includes(char)) {
            state.guessed[index] = char;
          } else {
            state.guessed.length < word.length && state.guessed.push('_');
          }
        });
      } else {
        state.attempts -= 1;
      }
      return word.includes(char)
        ? `${state.guessed
            .toString()
            .replace(/,+/g, '')}${!state.guessed.includes('_') && ' | You win'}`
        : `wrong letter, errors left ${state.attempts} | ${state.wrongCharacters}`;
    },

    getGuessedString() {
      return state.guessed.toString().replace(/,+/g, '');
    },

    getErrorsLeft() {
      return state.attempts;
    },

    getWrongSymbols() {
      return state.wrongCharacters;
    },

    getStatus() {
      return `${state.guessed.toString().replace(/,+/g, '')} | errors left ${
        state.attempts
      }`;
    },

    startAgain() {
      return (state = {
        guessed: [],
        wrongCharacters: [],
        attempts: 6
      });
    }
  };
}
const hang = new Hangman('радиоэлектрокардиографический');
console.log(hang.guess('q'));
console.log(hang.getWrongSymbols());
console.log(hang.guess('и'));
console.log(hang.guess('а'));
console.log(hang.guess('о'));
console.log(hang.guess('э'));
console.log(hang.guess('n'));
console.log(hang.guess('л'));
console.log(hang.guess('е'));
console.log(hang.guess('к'));
console.log(hang.guess('т'));
console.log(hang.guess('й'));
console.log(hang.guess('д'));
console.log(hang.guess('ч'));
console.log(hang.guess('с'));
console.log(hang.guess('г'));
console.log(hang.getStatus());
console.log(hang.guess('б'));
console.log(hang.guess('к'));
console.log(hang.guess('у'));
console.log(hang.guess('р'));
console.log(hang.guess('ф'));
console.log(hang.getWrongSymbols());
