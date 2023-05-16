import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveEnd } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css', './content.component.responsive.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  gitHubPages: string = '';
  gitHubRepo: string = '';
  show:boolean = false;
  private id: string | null = "0";

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    );

    this.setValueToComponent(this.id);
  }

  setValueToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0];

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photoCover;

    if(result.gitHubPages == ""){
      this.show = false;
    }else{
      this.show = true;
      this.gitHubPages = result.gitHubPages;
    }
    this.gitHubRepo = result.gitHubRepo;
  }


}
