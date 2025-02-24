import { PageData } from '@interfaces/global.interface';

export const CREATE_PAGE_DATA: PageData = {
  title: 'Crear',
  description: 'Un ejemplo básico de un contador usando interval de RxJS',
  fileName: 'basic-observables.component',
  code: {
    typescript: `import { Component, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
})
export class CreateComponent implements OnDestroy {
    hello: Observable<string>;
    subscription?: Subscription;
    
    constructor() {
        this.hello = new Observable((observer: Observer<string>) => {
            observer.next('Hello');
            observer.next('World');
            observer.complete();
        })
    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }
}
`,
  },
};
