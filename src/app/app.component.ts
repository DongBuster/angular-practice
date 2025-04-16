import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LayoutComponent } from './layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,MatSnackBarModule,LayoutComponent],
  template: `
    <main>

     <app-layout></app-layout>
    </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homes';
}
