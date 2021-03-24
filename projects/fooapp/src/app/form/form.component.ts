import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ItemService} from '../services/item.service';

@Component({
  selector: 'labs-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.scss'],
})
export class FormComponent {
  formGroup: FormGroup;

  constructor(formBuilder: FormBuilder, private itemService: ItemService, private router: Router) {
    this.formGroup = formBuilder.group({
      title: ['', Validators.required],
    });
  }

  async save(): Promise<void> {
    const {title} = this.formGroup.value;
    this.itemService.items.push(title);
    await this.router.navigateByUrl('/home');
  }

  async back(): Promise<void> {
    await this.router.navigateByUrl('/home');
  }
}
