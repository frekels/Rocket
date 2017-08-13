import { trigger, animate, transition, state, style, query } from '@angular/animations';

export const fade =

    trigger('dropdown', [
    transition(':enter', [   // :enter is alias to 'void => *'
    style({height:'0',overflow: 'hidden'}),
    animate('500ms ease-in-out', style({height:'*'}))
    ]),
    transition(':leave', [   // :leave is alias to '* => void'
    style({height:'*'}),
    animate('500ms ease-in-out', style({height:0}))
    ])
]);