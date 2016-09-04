import {Component, OnInit} from "@angular/core";
import {Page} from "ui/page";
import {DisplayScreenComponent} from './reusable-components/display-screen/display-screen.component';

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
    directives: [DisplayScreenComponent]
})
export class AppComponent implements OnInit {

    constructor(private page: Page) {}

    ngOnInit() {
      this.page.backgroundImage = "res://background";
    }

}
