import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/Services/token-storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router:Router, private tokenService:TokenStorageService) { }

  ngOnInit(): void {
    this.hasRole('ADMIN')
  }
  create(){
    this.router.navigate(['quiz','create'])
  }
  createExam(){
    this.router.navigate(['exam','create'])
  }
  categoryIndex(){
    this.router.navigate(['quiz','category-list'])
  }
  quizIndex(){
    this.router.navigate(['quiz','index'])
  }
  index(){
    this.router.navigate(['quiz','all'])
  }
  navigateHome(){
    this.router.navigate(['quiz','all'])
  }
  hasRole(name:any){
    return Object.keys(this.tokenService.getUser()).length > 0 ? this.tokenService.getUser().roles.includes(name) : false
  }
}
