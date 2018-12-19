import { Component } from '@angular/core';
import { SlackService } from './slack.service';

@Component({
  selector: 'app-root',
  template: '<button (click)="throwError()">Error</button>'
})
export class AppComponent {

  constructor(private slackService: SlackService) { }

  throwError() {
    this.slackService.postErrorOnSlack(new Error('Infinity Error'));
  }
}
