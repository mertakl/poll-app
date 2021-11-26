import {Component, OnInit} from '@angular/core';
import {Store} from "@ngxs/store";
import * as uuid from 'uuid';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-poll-create-form',
  templateUrl: './poll-create-form.component.html',
  styleUrls: ['./poll-create-form.component.css']
})
export class PollCreateFormComponent implements OnInit {

  pollForm!: FormGroup;

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
      name: ['', Validators.maxLength(80)],
      value: [0]
    });
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
    this.store.reset([]);
    this.addNewChoice();
  }

  get f() {
    return this.pollForm.controls;
  }
}
