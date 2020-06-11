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

  gotoTop() {
    let el = document.getElementById('about');
    el.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    changeStage(1);
  }
}
