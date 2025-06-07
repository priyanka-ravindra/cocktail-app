import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private readonly router: Router) {}

  title = 'cocktail-project';

  goHome() {
    this.router.navigate(['/']);
  }
}
