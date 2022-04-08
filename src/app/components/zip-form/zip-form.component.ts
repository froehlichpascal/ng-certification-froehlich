import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-zip-form',
    templateUrl: './zip-form.component.html',
    styleUrls: ['./zip-form.component.css']
})
export class ZipFormComponent implements OnInit {

    @Output() zipAdded = new EventEmitter<number>();
    public zipForm: FormGroup = new FormGroup({});

    constructor(private formBuilder: FormBuilder) {
        this.zipForm = formBuilder.group({
            newZip: ["",
                [
                    Validators.required,
                    Validators.pattern("[0-9]+")
                ]
            ],
        });
    }

    ngOnInit(): void {
    }

    addZip() {
        if (this.zipForm.valid) {
            this.zipAdded.emit(Number(this.zipForm.get("newZip")?.value));
            this.zipForm.reset();
        }
    }

}
