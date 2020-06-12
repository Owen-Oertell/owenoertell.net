import { Component, OnInit } from '@angular/core';
import { changeStage, getStage, getListSize } from '../globals';
import { CssSelector } from '@angular/compiler';

@Component({
  selector: 'app-scrollhelp',
  templateUrl: './scrollhelp.component.html',
  styleUrls: ['./scrollhelp.component.scss']
})
export class ScrollhelpComponent implements OnInit {
  public currentStage;
  public stageSize;

  constructor() { }

  private sc() {
    this.currentStage = (getStage()+1);
  }

  ngOnInit(): void {
    this.currentStage = getStage()+1;
    this.stageSize = getListSize();
    setInterval(() => {
      this.sc();      
    }, 300)
  }

  

  public changeToWhiteUp() {
    (<HTMLImageElement>document.getElementById('up')).src="../../assets/arrowwhite.svg";
  }
  public changeToWhiteDown() {
    (<HTMLImageElement>document.getElementById('down')).src="../../assets/arrowwhite.svg";
  }
  
  public changeToUp() {
    (<HTMLImageElement>document.getElementById('up')).src="../../assets/arrow.svg";
  }
  public changeToDown() {
    (<HTMLImageElement>document.getElementById('down')).src="../../assets/arrow.svg";
  }

  public upClick() {
    changeStage(getStage()-1);
    this.currentStage=(getStage()+1)
  }
  public downClick() {
    changeStage(getStage()+1);
    this.currentStage=(getStage()+1)
  } 
}
