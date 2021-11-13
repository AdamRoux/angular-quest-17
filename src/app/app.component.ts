import { Component } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quest17';

  constructor(private logService: LogService){
    this.logService.getData().subscribe()
  }
}
