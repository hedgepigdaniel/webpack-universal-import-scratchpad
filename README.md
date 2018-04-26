## Test of circular imports with universal-import ##

This is just me fiddling, confirming that when using
[babel-plugin-universal-import](https://github.com/faceyspacey/babel-plugin-universal-import),
even "synchronous" imports on the server created via
`import('./file')`
which do not create separate chunks
are still asynchronous in the sense that the imported module is not
executed synchronously when creating the promise.

This means that using an `import()` promise is still an effective
import cycles causing imported values to be undefined.


### Try it ###
```
yarn
yarn run build
yarn run run
```

#### Expected output ####
```
step1: Importing step2
[UNIVERSAL-IMPORT] no css chunks hash found at "window.__CSS_CHUNKS__". Make sure you are using: https://www.npmjs.com/package/extract-css-chunks-webpack-plugin . If you are not serving CSS, disregard this message.
step2: importing step 1
[UNIVERSAL-IMPORT] no css chunks hash found at "window.__CSS_CHUNKS__". Make sure you are using: https://www.npmjs.com/package/extract-css-chunks-webpack-plugin . If you are not serving CSS, disregard this message.
step1: imported step2 []
step2: imported step 1 []
```
