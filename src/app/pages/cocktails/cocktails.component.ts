import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cocktails',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './cocktails.component.html',
})
export class CocktailsComponent implements OnInit {
  cocktails: any[] = [];
  filtered: any[] = [];
  filter: string = 'All';
  loading: boolean = true;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly http: HttpClient,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.http
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
      .subscribe((res: any) => {
        this.cocktails = res.drinks ?? [];
        this.filtered = [...this.cocktails];
        this.loading = false;
      });
  }

  applyFilter(type: string) {
    this.filter = type;
    if (type === 'All') {
      this.filtered = this.cocktails;
    } else {
      this.filtered = this.cocktails.filter(
        (drink) => drink.strAlcoholic === type
      );
    }
  }

  goToIngredients(id: string) {
    this.router.navigate(['/ingredient', id]);
  }
}
