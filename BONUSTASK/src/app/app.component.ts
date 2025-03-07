import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Система управления задачами</h1>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    h1 {
      text-align: center;
      color: #333;
      margin-bottom: 30px;
    }
  `],
  standalone: false
})
export class AppComponent { }
