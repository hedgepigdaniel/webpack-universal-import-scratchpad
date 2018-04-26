console.log('step2: importing step 1');
import('./step1.js').then((step1) => {
  console.log('step2: imported step 1', Object.keys(step1));
});
