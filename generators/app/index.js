'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the awesome ' + chalk.red('generator-react-beginner-kit') + ' generator!'
    ));

    const prompts = [{
      type: 'input',
      name: 'name',
      message: 'Please enter your project name',
      default: 'react-beginner-kit'
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath(`${this.props.name}/package.json`), {
        name: this.props.name
      }
    );
    //Copy babelrc
    this.fs.copyTpl(
      this.templatePath('.babelrc'),
      this.destinationPath(`${this.props.name}/.babelrc`)
    );
    //Copy editor config
    this.fs.copyTpl(
      this.templatePath('.editorconfig'),
      this.destinationPath(`${this.props.name}/.editorconfig`)
    );
    //Copy env
    this.fs.copyTpl(
      this.templatePath('.env'),
      this.destinationPath(`${this.props.name}/.env`)
    );
    //Copy eslintrc
    this.fs.copyTpl(
      this.templatePath('.eslintrc'),
      this.destinationPath(`${this.props.name}/.eslintrc`)
    );
    //Copy git ignore
    this.fs.copyTpl(
      this.templatePath('.gitignore'),
      this.destinationPath(`${this.props.name}/.gitignore`)
    );
    //Copy mocha test files
    this.fs.copyTpl(
      this.templatePath('mocha.opts'),
      this.destinationPath(`${this.props.name}/mocha.opts`)
    );
   //Copy read me file
    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath(`${this.props.name}/README.md`)
    );
    //Copy test folder
    this.fs.copyTpl(
      this.templatePath('test'),
      this.destinationPath(`${this.props.name}/test`)
    );
    //Copy tools folder
    this.fs.copyTpl(
      this.templatePath('tools'),
      this.destinationPath(`${this.props.name}/tools`)
    )

    //Copy src folder
    this.fs.copyTpl(
      this.templatePath('src'),
      this.destinationPath(`${this.props.name}/src`)
    )
  }

  install() {
    this.installDependencies({
      bower: false,
      npm: true
    });
  }
};
