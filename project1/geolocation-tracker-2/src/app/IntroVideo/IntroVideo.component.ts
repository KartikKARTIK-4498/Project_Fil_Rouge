import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro-video',
  templateUrl: './IntroVideo.component.html',
  styleUrls: ['./IntroVideo.component.css']
})
export class IntroVideoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.router.navigate(['/login']);
    },5000)
  }
}
