import { Component, VERSION } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
'./app-info-dialog/app-info-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  qrResultString: string;
  ngVersion = VERSION.full;

  clearResult(): void {
    this.qrResultString = null;
  }

  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
  }
}
