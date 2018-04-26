console.log('step1: Importing step2');
import('./step2.js').then((anon) => {
  console.log('step1: imported step2', Object.keys(anon));
});
