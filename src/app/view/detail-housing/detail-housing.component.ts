import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/service/housing/housing.service';
import { Housinglocation } from 'src/app/interface/housinglocation';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-detail-housing',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './detail-housing.component.html',
  styleUrls: ['./detail-housing.component.css']
})
export class DetailHousingComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: Housinglocation | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private snackBar: MatSnackBar) {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingService.getHousingLocationById(housingLocationId).then((housingLocation) => {
      this.housingLocation = housingLocation;
    });
  }

  getEmailErrorMessage() {
    const emailControl = this.applyForm.get('email');
    if (emailControl?.hasError('required')) {
      return 'You must enter a value';
    }
    return emailControl?.hasError('email') ? 'Not a valid email' : '';
  }
   
  submitApplication() {
    this.snackBar.open('Đăng kí thành công!', 'Đóng', {
      duration: 3000, // 3 giây
      horizontalPosition: 'right',
      verticalPosition: 'top',
      
      panelClass: ['custom-snackbar']
    });
  }
}
