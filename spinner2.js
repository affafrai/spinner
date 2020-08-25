
const sentence = '|/-\\|/-\\|/-\\|/-\\|\n' ;
time = 500;
for (const char of sentence) {
  
  setTimeout(() => {
    process.stdout.write('\r' + char + "   ");
  }, time += 200) //<= 1s delay to make it noticeable. Can dial it down later.


}