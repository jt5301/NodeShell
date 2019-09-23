process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  // process.stdout.write('You typed: ' + cmd);
  // process.stdout.write('\nprompt > ');

  if (cmd === "pwd") {
    process.stdout.write('your current directory ' + process.cwd());
    process.stdout.write('\nprompt > ');
  }

})

