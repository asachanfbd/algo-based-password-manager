import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Checkbox, Grid, Typography } from '@mui/material';

class PasswordGeneratorView extends React.Component {
  render() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={5}>
                <div style={{ textAlign: 'left' }}>
                    <Typography variant="h4" gutterBottom>Algo-Based Password Generator</Typography>
                    <Typography variant="body1" gutterBottom>A regular password generator with a twist. We enable to keep a unique, safe and secure password for different accounts across different websites. You can put an identifier like - username@domain.name (you can try any type of pattern here) & a fixed password which you can remember easily to generate a unique passowrd. Every time you input the same input you will get the same password.</Typography>
                    <Typography variant="h6" gutterBottom>Benefits of using algo-based password generator</Typography>
                    <ul>
                        <li>Our mind can remember a limited number of passwords and keeping common passwords for different website is not a good idea, as 1 leak will make our login info to other accounts using same password vulnerable to attacks.</li>
                        <li>You can generate unlimited number of unique password which you will never forget using Algorithm based password generator.</li>
                        <li>No need of storing passwords in password managers, your password manager available everywhere, without login.</li>
                        <li>We don't store your passwords.</li>
                    </ul>
                </div>
            </Grid>
            <Grid item xs={7}>
                <Card>
                    <CardContent>
                        <FormControl fullWidth margin="normal">
                        <TextField
                            label="Enter the website for which you are generating the password."
                            variant="outlined"
                            value={this.props.websiteName}
                            onChange={this.props.onWebsiteNameChange}
                            error={!this.props.websiteNameValid}
                            helperText={!this.props.websiteNameValid && "Please provide a valid domain name."}
                        />
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                        <TextField
                            label="Enter your single password."
                            type="password"
                            variant="outlined"
                            onChange={this.props.onFixedSecretChange}
                        />
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                        <TextField
                            label="Desired Password Length"
                            type="number"
                            variant="outlined"
                            value={this.props.passwordLength}
                            onChange={this.props.onPasswordLengthChange}
                        />
                        </FormControl>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <FormControlLabel
                            control={<Checkbox checked={this.props.includeSpecialChars} onChange={this.props.onToggleSpecialChars} />}
                            label="Include Special Characters"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={this.props.includeNumbers} onChange={this.props.onToggleNumbers} />}
                            label="Include Numbers"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={this.props.includeLowercase} onChange={this.props.onToggleLowercase} />}
                            label="Include Lowercase Letters"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={this.props.includeUppercase} onChange={this.props.onToggleUppercase} />}
                            label="Include Uppercase Letters"
                        />
                        </div>
                        <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={this.props.onGeneratePassword}
                        style={{ marginTop: 10, width: '100%' }}
                        >
                        Generate Password
                        </Button>
                        <FormControl fullWidth margin="normal">
                        <TextField
                            label="Generated Password"
                            type={this.props.showPassword ? 'text' : 'password'}
                            variant="outlined"
                            value={this.props.generatedPassword}
                            InputProps={{
                            readOnly: true,
                            endAdornment: (
                                <InputAdornment position="end">
                                <IconButton
                                    onClick={this.props.onTogglePasswordVisibility}
                                    edge="end"
                                >
                                    {this.props.showPassword ? <Button variant="outlined">HIDE PASSWORD</Button> : <Button variant="contained">SHOW PASSWORD</Button>}
                                </IconButton>
                                <IconButton
                                    onClick={this.props.onCopyPassword}
                                    edge="end"
                                >
                                    <Button variant="contained" >{this.props.copyButtonText}</Button>
                                </IconButton>
                                </InputAdornment>
                            ),
                            }}
                        />
                        </FormControl>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
  }
}

export default PasswordGeneratorView;
