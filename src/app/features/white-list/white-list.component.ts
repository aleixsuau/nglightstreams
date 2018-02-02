import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'ls-white-list',
  templateUrl: './white-list.component.html',
  styleUrls: ['./white-list.component.scss']
})
export class WhiteListComponent implements OnInit {
  form: FormGroup;
  subscriberRef;

  get clauses() {
    return this.form.controls.subscriber['controls'].clauses.controls;
  }

  constructor(
    private formBuilder: FormBuilder,
    private fireDatabase: AngularFireDatabase,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      subscriber: this.formBuilder.group({
        firstName: [ '', [ Validators.required ]],
        lastName: [ '', [ Validators.required ]],
        email: [ '', [ Validators.required, Validators.email ]],
        ethereum: [ '', [ Validators.required, Validators.minLength(40), Validators.maxLength(42), ]],
        clauses: this.formBuilder.group({
          one: [ '', [ Validators.requiredTrue ]],
          two: [ '', [ Validators.requiredTrue ]],
          three: [ '', [ Validators.requiredTrue ]],
          four: [ '', [ Validators.requiredTrue ]],
          five: [ '', [ Validators.requiredTrue ]],
          six: [ '', [ Validators.requiredTrue ]],
          seven: [ '', [ Validators.requiredTrue ]],
          eight: [ '', [ Validators.requiredTrue ]],
        }),
      }),
      confirmation_identity: [ '', [ Validators.required ]],
      contribution_details: [ '', [ Validators.required ]],
    });
  }

  allClausesChecked() {
    let allClausesChecked = true;
    const clauses = Object.keys(this.clauses);

    clauses.forEach(clause => {
      if (!this.clauses[clause].value) { allClausesChecked = false; }
    });

    return allClausesChecked;
  }

  checkAllClauses() {
    const clauses = Object.keys(this.clauses);
    clauses.forEach(clause => {
      this.clauses[clause].setValue(true);
    });
  }

  saveSubscriber(subscription) {
    this.fireDatabase
          .list('subscribers')
          .push(subscription.subscriber)
          .then(subscriberRef => {
            this.subscriberRef = subscriberRef;
          });
  }
}
