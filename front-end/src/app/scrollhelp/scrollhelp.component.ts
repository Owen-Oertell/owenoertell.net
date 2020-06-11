import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrollhelp',
  templateUrl: './scrollhelp.component.html',
  styleUrls: ['./scrollhelp.component.scss']
})
export class ScrollhelpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

}
