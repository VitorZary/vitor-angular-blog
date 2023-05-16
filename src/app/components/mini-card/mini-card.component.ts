import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.css', './mini-card.component.responsive.css']
})
export class MiniCardComponent implements OnInit {

  @Input()
  photoCover: string = "";

  @Input()
  cardTitle: string = "";

  @Input()
  Id:string = "0";

  @Input()
  description = "";
  constructor() { }

  ngOnInit(): void {
  }

}
