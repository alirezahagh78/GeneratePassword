import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  password: string = '';
  length: number = 0;
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;

  constructor(){}

  getPassword() {
    return this.password;
  }
  // checkbox
  onChangeLetters() {
    this.includeLetters = !this.includeLetters;
  }
  onChangeNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

// length input value
  onChangeLength(value: string) {
    const parsedValue = parseInt(value);
    if(!isNaN(parsedValue)) {
      this.length = parseInt(value);
    }
  }

  // button
  onChangeButton(){
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '~!@#$%^&*()_+.';
    let validChar = '';

    if(this.includeLetters){
      validChar+=letters;
    }
    if(this.includeNumbers){
      validChar+=numbers;
    }
    if(this.includeSymbols){
      validChar+=symbols;
    }

    let generatedPassword = '';
    for(let index=0; index < this.length ; index++){
      let index = Math.floor(Math.random() * validChar.length);
      generatedPassword+=validChar[index]; 
    }
    this.password = generatedPassword; 
  }
}
