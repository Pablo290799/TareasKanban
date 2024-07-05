import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SupabaseService } from '../../../services/supabase.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: []
})
export class UserDetailComponent implements OnInit {
  user: any = { name: '', email: '' };
  userId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private SupabaseService: SupabaseService
  ) {
    this.userId = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.loadUser();
  }

  async loadUser() {
    try {
      const users = await this.SupabaseService.getUsers();
      this.user = users.find(user => user.id === this.userId);
    } catch (error) {
      console.error('Error loading user:', error);
    }
  }

  async saveUser() {
    try {
      await this.SupabaseService.updateUser(this.userId, this.user);
      this.router.navigate(['/users']);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  }
}