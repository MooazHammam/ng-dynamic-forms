import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import {
    DynamicCheckboxModel,
    DynamicFormControlCustomEvent,
    DynamicFormLayout,
    DynamicFormLayoutService,
    DynamicFormValidationService,
    DynamicFormValueControlComponent,
} from "@ng-dynamic-forms/core";

@Component({
    selector: "dynamic-ng-bootstrap-checkbox",
    templateUrl: "./dynamic-ng-bootstrap-checkbox.component.html"
})
export class DynamicNGBootstrapCheckboxComponent extends DynamicFormValueControlComponent {

    @Input() bindId: boolean = true;
    @Input() group: FormGroup;
    @Input() layout: DynamicFormLayout;
    @Input() model: DynamicCheckboxModel;

    @Output() blur: EventEmitter<any> = new EventEmitter();
    @Output() change: EventEmitter<any> = new EventEmitter();
    @Output() focus: EventEmitter<any> = new EventEmitter();

    constructor(protected layoutService: DynamicFormLayoutService,
                protected validationService: DynamicFormValidationService) {

        super(layoutService, validationService);
    }
}