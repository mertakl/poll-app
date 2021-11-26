import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngxs/store";
import * as uuid from 'uuid';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {SetPoll} from "../../_actions/poll.action";

@Component({
  selector: 'app-poll-create-form',
  templateUrl: './poll-create-form.component.html',
  styleUrls: ['./poll-create-form.component.css']
})
export class PollCreateFormComponent implements OnInit, AfterViewInit, OnDestroy {

  pollForm!: FormGroup;

  formChangesSubscription: any;

  constructor(private store: Store,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.pollForm = this.formBuilder.group({
      question: [''],
      choices: this.formBuilder.array([this.createChoice()])
    });
  }

  createChoice(): FormGroup {
    return this.formBuilder.group({
      id: [uuid.v4()],
      text: ['']
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

  ngOnDestroy() {
    this.formChangesSubscription.unsubscribe();
  }
}
