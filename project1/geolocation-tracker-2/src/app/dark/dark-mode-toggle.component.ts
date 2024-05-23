import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { HomeService } from '../home.service';
import { Observable, Subscription } from 'rxjs';
import { AfterViewInit, Input, Output, EventEmitter, OnDestroy, } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';

@Component({
    selector: 'app-dark-mode-toggle',
    templateUrl: './dark-mode-toggle.component.html',
    styleUrls: ['./dark-mode-toggle.component.css'],
  })
  export class DarkModeToggle {
    darkMode$: Observable<boolean> = this.darkModeService.darkMode$;
  
    constructor(private darkModeService: DarkModeService) {}
  
    onToggle(): void {
      this.darkModeService.toggle();
    }
  }