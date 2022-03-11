import { Component } from "@angular/core";

@Component({
    selector:'not-found',
    template: `
        <div>
            404 Page not Found
            <div>
                <a routerLink="/" > Home </a>
            </div>
        </div>
    `
})

export class NotFoundComponent{}