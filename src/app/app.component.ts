import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title = 'slack-error-log';

  throwError(){
    throw new Error('test');
  }
}
