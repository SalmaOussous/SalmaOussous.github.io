import { Component, ElementRef, AfterViewInit, OnInit, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'legal-mentions',
  templateUrl: './legal-mentions.component.html',
  styleUrls: ['../../app/app.component.scss']
})
export class LegalMentionsComponent {
  title = 'SoPortfolio';
  author = 'Salma Oussous';
}
