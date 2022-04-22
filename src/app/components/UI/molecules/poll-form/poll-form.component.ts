import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, AbstractFormGroupDirective, AbstractControl } from '@angular/forms'
import { Store } from '@ngrx/store';

import { Poll } from 'src/app/models/poll/poll.model';
import { Question } from 'src/app/models/poll/question.model';
import { PollService } from 'src/app/services/poll/poll.service';
import { loadUser } from 'src/app/state/user/user.actions';
import { selectUser } from 'src/app/state/user/user.selectors';
import { AppState } from 'src/app/state/app.state';

@Component({
    selector: 'app-poll-form',
    templateUrl: './poll-form.component.html',
    styleUrls: ['./poll-form.component.css']
})
export class PollFormComponent implements OnInit {
        currentUser$ = this.store.select(selectUser);
        createPollForm: FormGroup;
        private newPoll?: Poll;
        private newPollQuestions: Question[] = [];
        private userId: string = '';

        @Output() closeModal = new EventEmitter();

        constructor(private formBuilder: FormBuilder, private store: Store<AppState>, private pollService: PollService) {
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
            this.store.dispatch(loadUser());
            this.currentUser$.subscribe(user => this.userId = user.userId);
        }

        //FormBuilder Helper Methods
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


        //Methods to handle saving new poll to database
        onSubmit(): void {
            this.buildPollModel(this.createPollForm);
            this.pollService.createNewPoll(this.newPoll);
            this.closeModal.emit();
        }
        
        buildPollModel(completedPollForm: FormGroup): void {
            if (this.userId && completedPollForm)
            {

                completedPollForm.get('questions')?.value
                    .forEach((question: Question, index: number) => {
                        let newQuestion: Question = {
                            id: index,
                            text: question.text,
                            options: question.options,
                            responses: []
                        }

                        this.newPollQuestions.push(newQuestion);
                    })

                this.newPoll = {
                    userId: this.userId,
                    name: completedPollForm.get('name')?.value,
                    description: completedPollForm.get('description')?.value,
                    isOpen: completedPollForm.get('isOpen')?.value,
                    isPublic: completedPollForm.get('isPublic')?.value,
                    questions: this.newPollQuestions
                }
            } else {
                this.newPoll = undefined;
            }
        }


}
