const sentence = "hello there from lighthouse labs";

let newSentence = sentence + '\n';

let delay = 0;
for (const char of newSentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay += 50);
}

