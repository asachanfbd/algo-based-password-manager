class PasswordGeneratorModel {
    constructor() {
      this.passwordLength = 15;
      // Define default and specific character sets
      this.defaultChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      this.specialChars = "!@#$%^&*()_+{}:\"<>?|[];',./`~";
      this.numbers = '0123456789';
      this.lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
      this.uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
  
    setPasswordLength(length) {
      this.passwordLength = length;
    }
  
    getPasswordLength() {
      return this.passwordLength;
    }
  
    async generatePassword(websiteName, fixedSecret, options) {
      let characters = '';
      if (options.includeSpecialChars) characters += this.specialChars;
      if (options.includeNumbers) characters += this.numbers;
      if (options.includeLowercase) characters += this.lowercaseLetters;
      if (options.includeUppercase) characters += this.uppercaseLetters;
  
      // If no character types are selected, use the default character set
      if (characters.length === 0) {
        characters = this.defaultChars;
      }
  
      const hashedInput = await this.hashInput(websiteName + fixedSecret);
      return this.createPasswordFromHash(hashedInput, characters);
    }
  
    async hashInput(input) {
      const hashBuffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(input));
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      return hashHex;
    }
  
    createPasswordFromHash(hash, characters) {
      let password = '';
      for (let i = 0; i < this.passwordLength; i++) {
        const charIndex = parseInt(hash.substr(i * 2, 2), 16) % characters.length;
        password += characters[charIndex];
      }
      return password;
    }
  }
  
  export default PasswordGeneratorModel;
  