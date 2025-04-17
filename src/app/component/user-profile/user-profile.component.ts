import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  isDropdownOpen = false;
  username = '';
  avatarUrl = '';

  constructor(private router: Router, private elementRef: ElementRef) {}

  ngOnInit(){
    this.username = localStorage.getItem('userName') ??''
    this.avatarUrl = localStorage.getItem('imageUrl') ??''
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isDropdownOpen = false;
    }
  }

  toggleDropdown(event: Event) {
    event.stopPropagation();
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  logout() {
    localStorage.setItem('accsesToken','')
    localStorage.setItem('refreshToken','')
    localStorage.setItem('userId','')
    localStorage.setItem('userName','')
    localStorage.setItem('imageUrl','')
    localStorage.setItem('login','false')
    this.router.navigate(['/'])
  }
}
