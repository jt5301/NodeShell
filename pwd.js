// function pwdFunc (cmd) {
//   if (cmd === "pwd") {
//     process.stdout.write('your current directory ' + process.cwd());
//     process.stdout.write('\nprompt > ');
//   }
// }

module.exports = function (cmd) {
  if (cmd === "pwd") {
    process.stdout.write('your current directory ' + process.cwd());
    process.stdout.write('\nprompt > ');
  }
}
