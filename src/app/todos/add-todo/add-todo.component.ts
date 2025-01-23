import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'ako-add-todo',
    templateUrl: './add-todo.component.html',
    styleUrls: ['./add-todo.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class AddTodoComponent {
  addForm = new FormGroup({
    description: new FormControl('', Validators.required),
  });

  @Output() added = new EventEmitter<string>();

  add(): void {
    const description = this.addForm.get('description')?.value;
    if (description) {
      this.added.emit(description);
      this.reset();
    }
  }


  reset(): void {
    this.addForm.reset({ description: '' });
  }
}
