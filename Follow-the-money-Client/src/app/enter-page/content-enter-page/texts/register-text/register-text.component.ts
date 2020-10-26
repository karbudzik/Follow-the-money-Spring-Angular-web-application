import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-text',
  templateUrl: './register-text.component.html',
  styleUrls: ['./register-text.component.css']
})
export class RegisterTextComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(page: string): void {
    this.router.navigate([page]);
  }
}
