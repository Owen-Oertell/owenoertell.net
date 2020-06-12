import { Component, OnInit } from '@angular/core';
import { getStage, getFooterStage, isInViewport, changeStageNS } from '../globals';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.checkVP();      
    }, 300)
  }

  private checkVP() {
    if(getStage()!=getFooterStage() && isInViewport(document.getElementById("footer"))) {
      changeStageNS(getFooterStage());
    }
  }

}
