import { CommonModule, Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-ingredients',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ingredients.component.html',
})
export class IngredientsComponent implements OnInit {
  drink: any = {};
  loading: boolean = true;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly http: HttpClient,
    private readonly location: Location
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loading = true;
      this.http
        .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .subscribe((res: any) => {
          this.drink = res.drinks?.[0];
          this.loading = false;
        });
    }
  }

  get ingredients(): { name: string; measure: string }[] {
    if (!this.drink) return [];

    const ingredients: { name: string; measure: string }[] = [];

    for (let i = 1; i <= 15; i++) {
      const name = this.drink[`strIngredient${i}`]?.trim();
      if (name) {
        const measure = this.drink[`strMeasure${i}`]?.trim() || '';
        ingredients.push({ name, measure });
      }
    }

    return ingredients;
  }

  goBack() {
    this.location.back();
  }
}
