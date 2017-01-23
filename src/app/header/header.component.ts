import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';

import { User } from '../types/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'ac-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: User;
  @Input() loading: boolean;
  @Output() refresh = new EventEmitter();

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUser()
      .then((currentUser: User) => {
        this.user = currentUser;
      });
  }

  onRefresh() {
    this.refresh.emit();
  }
}
