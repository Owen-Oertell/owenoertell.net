import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ngOnInit() {
    setInterval(() => {
      this.rotateWords()
    }, this.x * 1000)
  }
  age = new Date().getFullYear() - 2004;
  private keywords: string[] = ['scalable', 'innovative', 'passionate'];

  word: string = this.keywords[0];
  currentIdx: number = 0;
  x = 7;



  rotateWords() {

    if (this.currentIdx >= this.keywords.length) {
      this.currentIdx = 0;
    }

    this.word = this.keywords[this.currentIdx];
    this.currentIdx++
  }
}
