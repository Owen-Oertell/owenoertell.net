import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

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
