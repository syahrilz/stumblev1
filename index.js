const fetch = require('node-fetch');
const moment = require('moment');
const chalk = require('chalk');
const rs = require('readline-sync');
const delay = require('delay')

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const GoStumble = (auth) => new Promise((resolve, reject) => {

  fetch('http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/3', {
    method: 'GET',
    headers: {
      'authorization': auth
    }
  })
    .then(res => res.text())
    .then(data => {
      resolve(data);
    })
    .catch(err => {
      reject(err);
    });

});

(async () => {
	console.log('');
	console.log(chalk.magentaBright('   Ambil Token :  https://cararegistrasi.com/nLOj '));
	console.log('');
	const bla = rs.question(chalk.cyanBright('   Input Token : '))
	if (bla=='subscribe syahril uwwu 18jshwi8'){
		await sleep(2500)
		
		console.clear('')

  console.log('');
  console.log(' Loading. . .');
  await sleep(10000)
  console.log(chalk.greenBright('Succes ✓ '));
  console.log('');
  console.log('');
  console.log(chalk.bold('By : Syahril ')); 
  console.log('');


  const auth = rs.question(chalk.yellowBright('[+] Enter Authentication Code! : '));
  console.log('');
  const time = rs.question(chalk.yellowBright('[+] Enter Interval Delay : '));
  console.log('');

  while (true) {


    const result = await GoStumble(auth);
    if (!result) {

    } else if (result.includes('User')) {

      const data = JSON.parse(result);
      const username = data.User.Username;
      const country = data.User.Country;
      const trophy = data.User.SkillRating;
      const crown = data.User.Crowns;

console.log(chalk.bgBlack(`\r
[ ${moment().format('HH:mm:ss')} ]
 ${chalk.red('- USER ')} : ${chalk.green(`${username}`)} 
 ${chalk.red('- TROPY')} : ${chalk.green(`${trophy}`)} 
 ${chalk.red('- CROWN')} : ${chalk.green(`${crown}`)}`));
 await delay (time); 
     
      
    } else if (result == 'BANNED') {
      console.log(chalk.bgRed(`BANNED !!`));
     break;
    
    
    
  }
  }
}  

})();
