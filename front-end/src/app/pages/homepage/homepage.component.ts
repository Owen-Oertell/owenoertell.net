import { Component, OnInit } from '@angular/core';
import { getStage, getIntroStage, isInViewport, changeStageNS } from 'src/app/globals';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  
  age = new Date().getFullYear() - 2004;
  private keywords: string[] = ['scalable', 'innovative', 'passionate'];

  word: string = this.keywords[0];
  currentIdx: number = 0;
  x = 7;
  
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.rotateWords()
    }, this.x * 1000)
    setInterval(() => {
      this.checkVP();      
    }, 300)
  }
  
  private checkVP() {
    if(getStage()!=getIntroStage() && isInViewport(document.getElementById("intro"))) {
      changeStageNS(getIntroStage());
    }
  }


  rotateWords() {

    if (this.currentIdx >= this.keywords.length) {
      this.currentIdx = 0;
    }

    this.word = this.keywords[this.currentIdx];
    this.currentIdx++
  }
}
