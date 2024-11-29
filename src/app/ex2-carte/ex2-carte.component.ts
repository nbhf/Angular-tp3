import { Component } from '@angular/core';

@Component({
  selector: 'app-ex2-carte',
  templateUrl: './ex2-carte.component.html',
  styleUrls: ['./ex2-carte.component.css']
})
export class Ex2CarteComponent {

  // Model to hold the data for the business card
  cardData = {
    name: '',
    profession: '',
    quote: '',
    motto: '',
    jobDescription: '',
    followers: 0,
    following: 0,
    projects: 0,
    facebook: '',
    google: '',
    twitter: ''
  };
}
