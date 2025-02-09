import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'ako-root',
    template: `<ako-todos></ako-todos>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class AppComponent {}
