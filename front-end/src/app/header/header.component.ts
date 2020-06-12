import { Component, OnInit } from '@angular/core';
import { changeStage } from '../globals';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public goTo(stage) {
    changeStage(stage);
  }
}
