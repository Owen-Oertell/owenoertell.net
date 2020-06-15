import { Component, OnInit } from '@angular/core';
import { getStage, getUpToStage, isInViewport, changeStageNS } from '../globals';

@Component({
  selector: 'app-working-on',
  templateUrl: './working-on.component.html',
  styleUrls: ['./working-on.component.scss']
})
export class WorkingOnComponent implements OnInit {

  constructor() { }

  async ngOnInit() {
    setInterval(() => {
      this.checkVP();      
    }, 300)

    let response = await fetch('http://localhost:8000');
    let responseText = await this.getTextFromStream(response.body);
    

  }

  private checkVP() {
    if(getStage()!=getUpToStage() && isInViewport(document.getElementById("whatamIupto"))) {
      changeStageNS(getUpToStage());
    }
  }

  private async getTextFromStream(readableStream) {
    let reader = readableStream.getReader();
    let utf8Decoder = new TextDecoder();
    let nextChunk;
    
    let resultStr = '';
    
    while (!(nextChunk = await reader.read()).done) {
        let partialData = nextChunk.value;
        resultStr += utf8Decoder.decode(partialData);
    }
    
    return resultStr;
}

}
