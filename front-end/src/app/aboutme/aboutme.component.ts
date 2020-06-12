import { Component, OnInit } from '@angular/core';
import { isInViewport, getAboutStage, getStage, changeStageNS } from '../globals';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.checkVP();      
    }, 300)
  }

  private checkVP() {
    if(getStage()!=getAboutStage() && isInViewport(document.getElementById("about"))) {
      changeStageNS(getAboutStage());
    }
  }
}
