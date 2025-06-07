import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private readonly router: Router) {}

  goToCocktail(name: string) {
    this.router.navigate(['/cocktails', name]);
  }
}
