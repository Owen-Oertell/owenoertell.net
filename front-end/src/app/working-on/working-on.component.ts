import { Component, OnInit } from '@angular/core';
import { getStage, getUpToStage, isInViewport, changeStageNS } from '../globals';

@Component({
  selector: 'app-working-on',
  templateUrl: './working-on.component.html',
  styleUrls: ['./working-on.component.scss']
})
export class WorkingOnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.checkVP();      
    }, 300)
  }

  private checkVP() {
    if(getStage()!=getUpToStage() && isInViewport(document.getElementById("whatamIupto"))) {
      changeStageNS(getUpToStage());
    }
  }

}
