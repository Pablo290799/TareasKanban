import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from '../../../services/supabase.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: []
})
export class UserFormComponent {
  user = { email: '' };

  constructor(private SupabaseService: SupabaseService, private router: Router) {}

  async saveUser() {
    try {
      await this.SupabaseService.createUser(this.user);
      this.router.navigate(['/home/users']);
    } catch (error) {
      console.error('Error creating user:', error);
      alert('Failed to save user.');
    }
  }
}