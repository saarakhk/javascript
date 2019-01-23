const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');

let randomNumber = Math.floor(Math.random() * 100) + 1;

let guessCount = 1;

const checkGuess = () => {
    let userGuess = Number(guessField.value);

    if (guessCount === 1) {
        guesses.textContent = 'Eelnevad pakkumised: ';
    };

    guesses.textContent += `${userGuess} `;

    if (userGuess === randomNumber) {
        // siia kood, kui kasutaja arvab õigesti
        lastResult.textContent = 'Palju õnne! Sa võitsid!';
        lastResult.style.backgroundColor = 'green';
        lowOrHigh.textContent = '';

    } else if (guessCount === 10) {
        //kui kasutaja paneb 10 korda mööda
        lastResult.textContent = 'Mäng läbi!';
        lowOrHigh.textContent = '';
    } else {
        lastResult.textContent = 'Vale vastus!';
        lastResult.style.backgroundColor = 'red';

        let lowOrHighText = 'Viimane pakkumine oli ';

        if (userGuess < randomNumber) {
            // liiga madal
            lowOrHigh.textContent = lowOrHighText + 'liiga madal'
            lowOrHigh.style.backgroundColor = 'yellow';
        } else if (userGuess > randomNumber) {
            // liiga kõrge
            lowOrHigh.textContent = lowOrHighText + 'liiga kõrge'
            lowOrHigh.style.backgroundColor = 'yellow';
        } else () {

        };
    };

    if (userGuess === userGuess) {
        lowOrHigh.textContent = 'Vali uus number!'
    };



// sama tulemus: guessCount++
    guessCount = guessCount + 1;
    guessField.value = '';
    guessField.focus();
};

guessSubmit.addEventListener('click', checkGuess);
console.log(guessSubmit);
console.log(randomNumber);

// tee kaks funktsionaalsust ise juurde!
// nt kui mäng saab läbi peaks olema võimalik alustada mängu uuesti!
// nt ei saa sama numbrit panna
