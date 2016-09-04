import {Component, OnInit, ElementRef, ViewChild, Input} from '@angular/core';
import {Page} from "ui/page";
import {Color} from "color";
import {View} from "ui/core/view";
import {NormalKeyboardComponent} from './../calculator-types/normal/normal-kb.component';

@Component({
    selector: 'dscreen',
    templateUrl: 'reusable-components/display-screen/display-screen.component.html',
    styleUrls: ['reusable-components/display-screen/display-screen.css'],
    directives: [NormalKeyboardComponent]
})

export class DisplayScreenComponent implements OnInit {
    private result: string = '0';
    @ViewChild("dscreen") dscreen: ElementRef;

    ngOnInit() {
      let container = <View>this.dscreen.nativeElement;
            container.backgroundColor = new Color('black');
    }

    numberTapped($event) {
        this.result = $event.value;
    }

}