import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  textArray: any[] = [];
  text: string;
  array = ['Colorado', 'Wawa', 'Loud'];

  constructor() {
    // this.textArray = ['Colorado', 'Wawa', 'Loud'];
    this.text = this.array[0];
  }

  ngOnInit(): void {
    // this.getText();
    this.randomText();
  }

  // getText() {
  //   // setTimeout(function() {
  //   //   for (var i = 0; i < this.textArray.length; i++) {

  //   //   }
  //   // }, 2000);
  //   console.log('here');
  //   // this.textArray.map(item => {
  //   //   setTimeout(function() {
  //   //     this.text = item;
  //   //     console.log(this.text);
  //   //   }, 2000);
  //   // })
  //     for (var i = 0; i <= this.textArray.length; i++) {
  //       setTimeout(function() {
  //         this.text = this.textArray[i];
  //       }, 2000);
  //     }
  //     console.log(this.text);

  //   return this.text;
  // }

  randomText() {
    // var text = '';
    // var array = ['Colorado', 'Wawa', 'Loud'];
    for (var i = 0; i < this.array.length; i++) {
      this.text += this.array[i];
    }
    console.log(this.text);
    return this.text;
  }

}
