import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor( private route:Router) { }

  ngOnInit(): void {
  }
  clickme(){
 this.route.navigate(['/reactive']);
  }
}
