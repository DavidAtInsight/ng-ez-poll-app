import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, AbstractFormGroupDirective, AbstractControl } from '@angular/forms'
import { User } from 'src/app/models/auth/user.model';

import { Poll } from 'src/app/models/poll/poll.model';

@Component({
  selector: 'app-poll-form',
  templateUrl: './poll-form.component.html',
  styleUrls: ['./poll-form.component.css']
})
export class PollFormComponent implements OnInit, OnChanges {
    createPollForm: FormGroup;
    newPoll?: Poll;
    userId?: string;

    @Input() appUser?: User;

    constructor(private formBuilder: FormBuilder) {
        this.createPollForm = this.formBuilder.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        isOpen: false,
        isPublic: false,
        questions: this.formBuilder.array([])
        })
        this.addQuestion(0);
    }

    ngOnInit(): void {
        this.userId = this.appUser?.userId;
        console.log(this.userId)
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.userId = this.appUser?.userId;
        console.log(this.userId)
    }

    questions(): FormArray {
        return this.createPollForm?.get('questions') as FormArray;
    }

    newQuestion(): FormGroup {
        return this.formBuilder.group({
        text: ['', Validators.required],
        options: this.formBuilder.array([])
        });
    }

    addQuestion(questionIndex: number): void {
        this.questions().push(this.newQuestion());
        this.addQuestionOption(questionIndex);
    }

    removeQuestion(questionIndex: number): void {
        this.questions().removeAt(questionIndex);
    }

    questionOptions(questionIndex: number): FormArray {
        return this.questions().at(questionIndex).get("options") as FormArray;
    }

    newOption(): FormGroup {
        return this.formBuilder.group({
        text: ['', Validators.required]
        });
    }

    addQuestionOption(questionIndex: number): void {
        this.questionOptions(questionIndex).push(this.newOption());
    }

    removeQuestionOption(questionIndex: number, optionIndex: number): void {
        this.questionOptions(questionIndex).removeAt(optionIndex);
    }

    onSubmit() {
        this.buildPollModel(this.createPollForm.value);
    }

    buildPollModel(pollFormData: AbstractControl) {
        console.log(pollFormData);
        console.log(this.appUser);

        if (this.userId)
        {
            this.newPoll = {
                id: '',
                userId: this.userId,
                name: pollFormData.get('name')?.value,
                description: pollFormData.get('description')?.value,
                isOpen: true,
                isPublic: true,
                questions: [
                    {
                        id: '332f06ed-acca-4fc0-aed5-60657ad78501',
                        pollId: 'd01ddcd6-10bd-4215-99c4-90ed3a11e4a1trings',
                        text: 'What is 2 + 2?',
                        options: [
                            {
                                questionId: '332f06ed-acca-4fc0-aed5-60657ad78501',
                                text: '1',
                                value: 1
                            },
                            {
                                questionId: '332f06ed-acca-4fc0-aed5-60657ad78501',
                                text: '2',
                                value: 3
                            },
                            {
                                questionId: '332f06ed-acca-4fc0-aed5-60657ad78501',
                                text: '3',
                                value: 3
                            },
                            {
                                questionId: '332f06ed-acca-4fc0-aed5-60657ad78501',
                                text: '4',
                                value: 4
                            }
                        ],
                        responses: [
                            {
                                questionId: '332f06ed-acca-4fc0-aed5-60657ad78501',
                                selectedValue: 4
                            }
                        ]
                    }
                ]
            }
        }

        console.log(this.newPoll);
    }


}
