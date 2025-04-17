import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LayoutComponent } from './layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,MatSnackBarModule,LayoutComponent,HttpClientModule],
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
