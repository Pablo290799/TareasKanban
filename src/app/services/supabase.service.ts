import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabaseUrl = environment.supabaseUrl;
  private supabaseKey = environment.supabaseKey;
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(this.supabaseUrl, this.supabaseKey);
  }

  async getUsers() {
    const { data, error } = await this.supabase.from('users').select('*');
    if (error) throw error;
    return data;
  }

  async createUser(user: any) {
    const { data, error } = await this.supabase.from('users').insert([user]);
    if (error) throw error;
    return data;
  }

  async updateUser(userId: number, user: any) {
    const { data, error } = await this.supabase.from('users').update(user).eq('id', userId);
    if (error) throw error;
    return data;
  }

  async deleteUser(userId: number) {
    const { data, error } = await this.supabase.from('users').delete().eq('id', userId);
    if (error) throw error;
    return data;
  }
}