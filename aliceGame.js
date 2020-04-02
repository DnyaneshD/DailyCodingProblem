// Alice wants to join her school's Probability Student Club. Membership dues are computed via
// one of two simple probabilistic games.
// The first game: roll a die repeatedly. Stop rolling once you get a five followed by a six.
// Your number of rolls is the amount you pay, in dollars.
// The second game: same, except that the stopping condition is a five followed by a five.
// Which of the two games should Alice elect to play? Does it even matter? Write a program
// to simulate the two games and calculate their expected value.

function RollDiceTill_5_After_6() {
  let fees = 0;
  let lastRollValue = 0;
  let isRoleDice = true;

  while (isRoleDice) {
    const currentRollValue = Math.floor(Math.random() * 10) % 7;

    if (currentRollValue < 7 && currentRollValue !== 0) {
      fees = fees + 1;

      if (lastRollValue === 6 && currentRollValue === 5) {
        isRoleDice = false;
      }
    }

    if (fees === 100) {
      isRoleDice = false;
    }
  }

  console.log(`Alice will pay ${fees} with Game 1`);
}

function RollDiceTill_5_After_5() {
  let fees = 0;
  let lastRollValue = 0;
  let isRoleDice = true;

  while (isRoleDice) {
    const currentRollValue = Math.floor(Math.random() * 10) % 7;

    if (currentRollValue < 7 && currentRollValue !== 0) {
      fees = fees + 1;

      if (lastRollValue === 5 && currentRollValue === 5) {
        isRoleDice = false;
      }
    }

    if (fees === 100) {
      isRoleDice = false;
    }
  }

  console.log(`Alice will pay ${fees} with Game 2`);
}

console.log(RollDiceTill_5_After_5());
console.log(RollDiceTill_5_After_6());
