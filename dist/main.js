"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var args_service_1 = require("./service/args.service");
var backend_service_1 = require("./service/backend.service");
var log = console.log;
var Main = /** @class */ (function () {
    function Main(val) {
        this.argsService = new args_service_1.ArgsService();
        this.backendService = new backend_service_1.BackendService();
        log(chalk_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["{blue ", " arguments received}"], ["{blue ", " arguments received}"])), val.length));
        this.backendService.calculateCO2(this.argsService.getArgsMap(val));
    }
    return Main;
}());
(function () {
    console.log('hit!!!');
    // @ts-ignore
    var x = new Main(JSON.parse(process.env.npm_config_argv)['original'].slice(2));
})();
exports.test = function () {
    console.log(process.argv.slice(2));
    // Combine styled and normal strings
    log(chalk_1.default.blue('Hello') + ' World' + chalk_1.default.red('!'));
    // Compose multiple styles using the chainable API
    log(chalk_1.default.blue.bgRed.bold('Hello world!'));
    // Pass in multiple arguments
    log(chalk_1.default.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
    // Nest styles
    log(chalk_1.default.red('Hello', chalk_1.default.underline.bgBlue('world') + '!'));
    // Nest styles of the same type even (color, underline, background)
    log(chalk_1.default.green('I am a green line ' +
        chalk_1.default.blue.underline.bold('with a blue substring') +
        ' that becomes green again!'));
    // ES2015 template literal
    log("\nCPU: " + chalk_1.default.red('90%') + "\nRAM: " + chalk_1.default.green('40%') + "\nDISK: " + chalk_1.default.yellow('70%') + "\n");
    // ES2015 tagged template literal
    log(chalk_1.default(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\nCPU: {red 80%}\nRAM: {green ", "%}\nDISK: {rgb(255,131,0) ", "%}\n"], ["\nCPU: {red 80%}\nRAM: {green ", "%}\nDISK: {rgb(255,131,0) ", "%}\n"])), (128 / 256) * 100, (1 / 10) * 100));
    // Use RGB colors in terminal emulators that support it.
    log(chalk_1.default.keyword('orange')('Yay for orange colored text!'));
    log(chalk_1.default.rgb(123, 45, 67).underline('Underlined reddish color'));
    log(chalk_1.default.hex('#DEADED').bold('Bold gray!'));
};
var templateObject_1, templateObject_2;
//# sourceMappingURL=main.js.map