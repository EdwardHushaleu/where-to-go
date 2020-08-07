import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { UserService } from '@app/services'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() authOn = new EventEmitter<boolean>();

  constructor(
    public userService: UserService
  ) { }

  ngOnInit(): void {
  }

  onShowNav($event: Event) {
    const navMenu = document.querySelector('.b-nav');
    console.log(navMenu);
    navMenu.classList.add('_open');
  }

  onCloseNav($event) {
    const navMenu = document.querySelector('.b-nav');

    if($event.target.classList.contains('b-nav')){
        console.log($event.target)
        navMenu.classList.remove('_open');
      }
  }
  
  onBtnCloseNav($event): void {
    const navMenu = document.querySelector('.b-nav');
    navMenu.classList.remove('_open');
  }  
  

  onCreateEvent(event: Event) {
    if (!localStorage.getItem('userEmail')) {
      this.authOn.emit(true);
    }
  }

  OnAuthClick(event:Event) {
    this.authOn.emit(true);
  }

  onLogOut(event:Event) {
    this.userService.userData$.next(null);
    localStorage.removeItem('userEmail')
    console.log(this.userService.userData$.value);
  }
}


