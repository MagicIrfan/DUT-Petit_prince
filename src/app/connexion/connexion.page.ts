import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  ionicForm: FormGroup;
  validation_messages: any 

  constructor() 
  { 

  }

  ngOnInit() 
  {
    this.ionicForm = new FormGroup({
      login: new FormControl('', Validators.required),
      mdp: new FormControl('', Validators.required),
    });
    this.validation_messages =
    {
      'login': [
        { type: 'required', message: 'Le login est requis !' },
      ],
      'mdp': [
        { type: 'required', message: 'Le mot de passe est requis !' }
    ]};
  }

  connexion()
  {
    console.log(this.ionicForm.get('login').value);
  }

}
