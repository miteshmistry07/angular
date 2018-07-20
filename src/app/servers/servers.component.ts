import { Component, OnInit } from '@angular/core';

@Component({
  //by attribute selector: '[app-servers]', 
  //by class selector: '.app-servers',
  selector: 'app-servers',
  template: `
    <app-server></app-server>
    <app-server></app-server>`,  
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
