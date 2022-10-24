import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
	templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  count = 0;

  increment() {
    this.count++;
  }

	resetCounter(){
		this.count = 0
	}
}
