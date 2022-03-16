const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  console.log(`${answer} Wow that's a cool name! `);

  rl.question('What\'s an activity you like doing? ', (answer) => {
    console.log(`${answer} I did that too until I got an arrow in the knee! `);

    rl.question('What do you listen to while doing that? ', (answer) => {
      console.log(`${answer} Wow me too! `);

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        console.log(`${answer} Wow that's mine too! `);

        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          console.log(`${answer} Wow that's disgusting! `);

          rl.question('Which sport is your absolute favourite? ', (answer) => {
            console.log(`${answer} I hate that sport! `);

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              console.log(`${answer} boring!! `);
              
              rl.close();
            });
          });
        });
      });
    });
  });
});