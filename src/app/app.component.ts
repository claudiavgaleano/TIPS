import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tips-proyect';
  public isCollapsed = false;
  public isCollapsedHome = true;
  public isCollapsedPage = true;
}
