import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../../../services/supabase.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: []
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private SupabaseService: SupabaseService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  async loadUsers() {
    try {
      this.users = await this.SupabaseService.getUsers();
    } catch (error) {
      console.error('Error loading users:', error);
    }
  }

  async deleteUser(userId: number) {
    try {
      await this.SupabaseService.deleteUser(userId);
      this.loadUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }
}