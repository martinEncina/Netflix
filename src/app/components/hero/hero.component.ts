import { Component, Input } from '@angular/core';
import { allFilmsI } from 'src/app/models/interface';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  @Input() public Top10! : allFilmsI

  
}


