import React from 'react';
import PasswordGeneratorModel from './PasswordGeneratorModel';
import PasswordGeneratorView from './PasswordGeneratorView';

class PasswordGeneratorController extends React.Component {
  constructor(props) {
    super(props);
    this.model = new PasswordGeneratorModel();
    this.state = {
      websiteName: '',
      fixedSecret: '',
      generatedPassword: '',
      showPassword: false,
      websiteNameValid: true,
      passwordLength: this.model.getPasswordLength(),
      includeSpecialChars: true,
      includeNumbers: true,
      includeLowercase: true,
      includeUppercase: true,
      copyButtonText: 'Copy',
    };
  }

  handleWebsiteNameChange = (event) => {
    const websiteName = event.target.value;
    this.setState({ 
      websiteName, 
      websiteNameValid: true 
    });
  }

  handleFixedSecretChange = (event) => {
    this.setState({ fixedSecret: event.target.value });
  }

  handlePasswordLengthChange = (event) => {
    this.model.setPasswordLength(parseInt(event.target.value, 10));
    this.setState({ passwordLength: parseInt(event.target.value, 10) });
  }

  handleGeneratePassword = async () => {
    const password = await this.model.generatePassword(this.state.websiteName, this.state.fixedSecret, {
      includeSpecialChars: this.state.includeSpecialChars,
      includeNumbers: this.state.includeNumbers,
      includeLowercase: this.state.includeLowercase,
      includeUppercase: this.state.includeUppercase
    });
    this.setState({ generatedPassword: password });
  }

  handleCopyPassword = () => {
    navigator.clipboard.writeText(this.state.generatedPassword);
    this.setState({ copyButtonText: 'Copied!' });

    setTimeout(() => {
      this.setState({ copyButtonText: 'Copy' });
    }, 2000);
  }

  handleTogglePasswordVisibility = () => {
    this.setState(prevState => ({ showPassword: !prevState.showPassword }));
  }

  // New toggle handlers for character options
  handleToggleSpecialChars = () => {
    this.setState(prevState => ({ includeSpecialChars: !prevState.includeSpecialChars }));
  }

  handleToggleNumbers = () => {
    this.setState(prevState => ({ includeNumbers: !prevState.includeNumbers }));
  }

  handleToggleLowercase = () => {
    this.setState(prevState => ({ includeLowercase: !prevState.includeLowercase }));
  }

  handleToggleUppercase = () => {
    this.setState(prevState => ({ includeUppercase: !prevState.includeUppercase }));
  }

  render() {
    return (
      <PasswordGeneratorView
        onWebsiteNameChange={this.handleWebsiteNameChange}
        onFixedSecretChange={this.handleFixedSecretChange}
        onPasswordLengthChange={this.handlePasswordLengthChange}
        onGeneratePassword={this.handleGeneratePassword}
        onCopyPassword={this.handleCopyPassword}
        onTogglePasswordVisibility={this.handleTogglePasswordVisibility}
        onToggleSpecialChars={this.handleToggleSpecialChars}
        onToggleNumbers={this.handleToggleNumbers}
        onToggleLowercase={this.handleToggleLowercase}
        onToggleUppercase={this.handleToggleUppercase}
        websiteNameValid={this.state.websiteNameValid}
        passwordLength={this.state.passwordLength}
        generatedPassword={this.state.generatedPassword}
        showPassword={this.state.showPassword}
        includeSpecialChars={this.state.includeSpecialChars}
        includeNumbers={this.state.includeNumbers}
        includeLowercase={this.state.includeLowercase}
        includeUppercase={this.state.includeUppercase}
        copyButtonText={this.state.copyButtonText}
      />
    );
  }
}

export default PasswordGeneratorController;
