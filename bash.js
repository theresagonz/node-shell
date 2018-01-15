const commands = require('./commands');

process.stdout.write('prompt > ');
process.stdin.on('data', function(data) {
   var cmd = data.toString().trim().trim()
   process.stdout.write('You typed: ' + cmd);
   cmd = cmd.split(' ');
   process.stdout.write('\n' + commands.command(cmd));

   process.stdout.write('\n prompt > ')
});


// // console.log(process);
// //console.log(Object.keys(process));

// // Output a prompt
// process.stdout.write('prompt > ');

// // The stdin 'data' event fires after a user types in a line
// process.stdin.on('data', function (data) {
//   var cmd = data.toString().trim(); // remove the newline
//   process.stdout.write('You typed: ' + cmd);
//   process.stdout.write('\n' + command(comm))
//   process.stdout.write('\n prompt > ');
// });

// function command(comm) {
//     if (comm === 'pwd') {
//         return process.env.PWD.toString();
//     }
//     if (comm === 'date') {
//         return Date(Date.now());
//     }
// }