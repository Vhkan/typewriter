let sentence = "hello there from lighthouse labs".split("");

const interval = setInterval(() => {
  process.stdout.write(sentence[0] + '\n');
  sentence = sentence.slice(1);
  if (!sentence.length) {
    clearInterval(interval);
  }  
}, 500);
