import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngxs/store";
import * as uuid from 'uuid';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ResetState, SetPoll} from "../../_actions/poll.action";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-poll-create-form',
  templateUrl: './poll-create-form.component.html',
  styleUrls: ['./poll-create-form.component.css']
})
export class PollCreateFormComponent implements OnInit, AfterViewInit, OnDestroy {

  pollForm!: FormGroup;

  formChangesSubscription: Subscription = new Subscription();

  constructor(private store: Store,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.pollForm = this.formBuilder.group({
      question: ['', Validators.maxLength(80)],
      choices: this.formBuilder.array([this.createChoice()])
    });
  }

  createChoice(): FormGroup {
    return this.formBuilder.group({
      id: [uuid.v4()],
      text: ['', Validators.maxLength(80)]
    });
  }

  ngAfterViewInit(): void {
    this.formChangesSubscription = this.pollForm.valueChanges.subscribe(form => {
      this.store.dispatch(new SetPoll(form));
    })
  }

  addNewChoice() {
    this.choices.push(this.createChoice());
  }

  removeChoice(i: number) {
    this.choices.removeAt(i);
  }

  get choices(): FormArray {
    return this.pollForm.get("choices") as FormArray
  }

  reset() {
    this.choices.clear();
    this.pollForm.reset();
    this.store.dispatch(new ResetState());
    this.addNewChoice();
  }

  get f() {
    return this.pollForm.controls;
  }

  ngOnDestroy() {
    this.formChangesSubscription.unsubscribe();
  }
}
