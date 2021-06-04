import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initialscreen',
  templateUrl: './initialscreen.page.html',
  styleUrls: ['./initialscreen.page.scss'],
})
export class InitialscreenPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  sendToSnacks() {
    this.router.navigate(['snacks']);
  }
  sendToDrinks() {
    this.router.navigate(['drinks']);
  }
  sendToCake() {
    this.router.navigate(['cake']);
  }
  sendToFoodplate() {
    this.router.navigate(['meal']);
  }
}
