process.stdout.write('prompt > ');
const ls = require('./ls.js')

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  ls(cmd)
  // process.stdout.write('You typed: ' + cmd);
  // process.stdout.write('\nprompt > ');
})

