import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatVerticalStepper } from '@angular/material';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'ls-white-list',
  templateUrl: './white-list.component.html',
  styleUrls: ['./white-list.component.scss'],
})
export class WhiteListComponent implements OnInit {
  form: FormGroup;
  subscribed;
  showSpinner = false;

  get clauses() {
    return this.form.controls.clauses['controls'];
  }

  @ViewChild(MatVerticalStepper)
  stepper: MatVerticalStepper;
  @ViewChild('contributionInput')
  contributionInput: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private fireDatabase: AngularFireDatabase,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      subscriber: this.formBuilder.group({
        first_name: [ '', [ Validators.required ]],
        last_name: [ '', [ Validators.required ]],
        email: [ '', [ Validators.required, Validators.email ]],
        ethereum: [ '', [ Validators.required, Validators.minLength(40), Validators.maxLength(42), ]],
      }),
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
      contribution_details: [ '', [ Validators.required ]],
    });

    this.form.get('subscriber')
                .valueChanges
                .subscribe(changes => {
                  if (this.form.get('subscriber').valid) {
                    this.showSpinner = true;
                    setTimeout(() => {
                      this.stepper.next();
                      this.showSpinner = false;
                    }, 900);
                  }
                });

    this.form.get('clauses')
                .valueChanges
                .subscribe(changes => {
                  if (this.form.get('clauses').valid) {
                    this.showSpinner = true;
                    setTimeout(() => {
                      this.stepper.next();
                      this.showSpinner = false;
                      setTimeout(() => {
                        this.contributionInput.nativeElement.focus();
                      }, 100);
                    }, 700);
                  }
                });
  }

  checkAllClauses() {
    const clauses = Object.keys(this.clauses);
    clauses.forEach(clause => {
      this.clauses[clause].setValue(true);
    });
  }

  saveSubscriber(subscription) {
    this.showSpinner = true;

    const subscriptionToSend = {
      ...subscription.subscriber,
      clauses: subscription.clauses,
      contribution_details: subscription.contribution_details
    };

    this.fireDatabase
          .list('subscribers')
          .push(subscriptionToSend)
          .then(subscriberRef => {
            this.subscribed = true;
            this.showSpinner = false;
          });
  }
}
