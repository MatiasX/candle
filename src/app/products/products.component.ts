import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Itt átirányíthatjuk a látogatót a fejlesztés alatt oldalra
    this.router.navigate(['/fejlesztes-alatt']);
  }
}
