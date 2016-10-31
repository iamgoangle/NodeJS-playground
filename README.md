# NodeJS-playground

```javascript
/**
 * Playing with child process
 * @author	Teerapong Singthong
 * @date	10/31/2016
 */
const spawn = require('child_process').spawn;

/* Chrome web browser */
const chrome = spawn('chrome.exe', ['google.com']);
chrome.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

chrome.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

chrome.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
```
