import chalk from "chalk";
import {ArgsService} from "./service/args.service";
import {BackendService} from "./service/backend.service";

const log = console.log;

class Main {

    private argsService: ArgsService = new  ArgsService();
    private backendService: BackendService = new BackendService();

    constructor(val: string[]) {
        log(chalk`{blue ${val.length} arguments received}`);
        this.backendService.calculateCO2(this.argsService.getArgsMap(val));
    }

}

(function(){
    console.log('hit!');
    let x = new Main(process.argv.splice(2));
})()

exports.test = function() {

    console.log(process.argv.slice(2));
// Combine styled and normal strings
    log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
    log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
    log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
    log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
    log(chalk.green(
        'I am a green line ' +
        chalk.blue.underline.bold('with a blue substring') +
        ' that becomes green again!'
    ));

// ES2015 template literal
    log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

// ES2015 tagged template literal
    log(chalk`
CPU: {red 80%}
RAM: {green ${(128 / 256) * 100}%}
DISK: {rgb(255,131,0) ${(1 / 10) * 100}%}
`);

// Use RGB colors in terminal emulators that support it.
    log(chalk.keyword('orange')('Yay for orange colored text!'));
    log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
    log(chalk.hex('#DEADED').bold('Bold gray!'));
}
