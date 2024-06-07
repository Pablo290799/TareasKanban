import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit {

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  boards: any[] = [];
  user = this.auth.currentUser;

  constructor(
    private auth: AuthService,
    private dataService: DataService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.boards = await this.dataService.getBoards();
    console.log('this.boards: ', this.boards);
  }
  async startBoard() {
    await this.dataService.startBoard();
    this.boards = await this.dataService.getBoards();

    if (this.boards.length > 0) {
      const newBoard = this.boards.pop();

      if (newBoard.boards) {
        this.router.navigateByUrl(`home/workspace/${newBoard.boards.id}`);
      }
    }
  }

  signOut() {
    this.auth.logout();
  }
}
