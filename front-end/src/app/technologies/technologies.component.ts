import { Component, OnInit } from '@angular/core';
import { getStage, getTechStage, isInViewport, changeStageNS } from '../globals';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.checkVP();      
    }, 300)
  }

  private checkVP() {
    if(getStage()!=getTechStage() && isInViewport(document.getElementById("tech"))) {
      changeStageNS(getTechStage());
    }
  }

}
