import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-poll-form',
  templateUrl: './poll-form.component.html',
  styleUrls: ['./poll-form.component.css']
})
export class PollFormComponent implements OnInit {
  createPollForm?: FormGroup;
  defaultOptionValue = 1;

  constructor(private formBuilder: FormBuilder) {
    this.createPollForm = this.formBuilder.group({
      name: '',
      description: '',
      isOpen: false,
      isPublic: false,
      questions: this.formBuilder.array([])
    })
    this.addQuestion();
    this.addQuestionOption(0);
  }

  ngOnInit(): void {
  }

  questions(): FormArray {
    return this.createPollForm?.get('questions') as FormArray;
  }

  newQuestion(): FormGroup {
    return this.formBuilder.group({
      text: '',
      options: this.formBuilder.array([])
    });
  }

  addQuestion(): void {
    this.questions().push(this.newQuestion());
  }

  removeQuestion(questionIndex: number): void {
    this.questions().removeAt(questionIndex);
  }

  questionOptions(questionIndex: number): FormArray {
    return this.questions().at(questionIndex).get("options") as FormArray;
  }

  newOption(): FormGroup {
    return this.formBuilder.group({
      text: '',
      value: this.defaultOptionValue
    });
  }

  addQuestionOption(questionIndex: number): void {
    this.questionOptions(questionIndex).push(this.newOption());
  }

  removeQuestionOption(questionIndex: number, optionIndex: number): void {
    this.questionOptions(questionIndex).removeAt(optionIndex);
  }

  onSubmit() {
    if (this.createPollForm) {
      console.log(this.createPollForm.value);
    }
    else {
      console.log('Something did not work');
    }
    
  }

}
