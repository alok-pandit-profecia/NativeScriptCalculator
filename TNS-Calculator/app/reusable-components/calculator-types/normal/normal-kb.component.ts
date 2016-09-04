import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {setTimeout} from 'timer';
import {View} from "ui/core/view";

@Component({
    selector: 'normal-keyboard',
    templateUrl: 'reusable-components/calculator-types/normal/normal-kb.component.html',
    styleUrls: ['reusable-components/calculator-types/normal/normal-kb.css']
})

export class NormalKeyboardComponent {
    @Input() private _result: string;
    @Output() numbertap = new EventEmitter();
    private _isClicked: boolean[] = [];

    clickBehaviour(index) {
        this._isClicked[index] = false;
        this._isClicked[index] = true;
        setTimeout(() => {
            this._isClicked[index] = false;
        }, 200);
    }

    onTap(val) {
        if (this._result == '0') {
            this._result = val;
        }
        else {
            this._result += val;
        }
        this.clickBehaviour(parseInt(val));
        this.numbertap.emit({ value: this._result });
    }

    bkSpc(index) {
        this.clickBehaviour(parseInt(index));
        if (index == 11 && this._result != 'Divide by zero Error') {
            if (this._result != '0') {
                this._result = this._result.slice(0, this._result.length - 1);
                if (this._result.length == 0) {
                    this._result = '0';
                }
                this.numbertap.emit({ value: this._result });
            }
        }
        else if (index == 12 || this._result == 'Divide by zero Error') {
            this._result = '0';
            this.numbertap.emit({ value: this._result });
        }
    }

    doCalculations() {
        if (this._result.indexOf('+') != -1) {
            let temp = this._result.split('+');
            if (!isNaN(parseInt(temp[0])) && !isNaN(parseInt(temp[1]))) {
                let temp2 = parseFloat(temp[0]) + parseFloat(temp[1]);
                this._result = temp2.toString();
                this.numbertap.emit({ value: this._result });
            }
        }
        if (this._result.indexOf('-') != -1) {
            let temp = this._result.split('-');
            if (!isNaN(parseInt(temp[0])) && !isNaN(parseInt(temp[1]))) {
                let temp2 = parseFloat(temp[0]) - parseFloat(temp[1]);
                this._result = temp2.toString();
                this.numbertap.emit({ value: this._result });
            }
        }
        if (this._result.indexOf('/') != -1) {
            let temp = this._result.split('/');
            if (!isNaN(parseInt(temp[0])) && !isNaN(parseInt(temp[1]))) {
                let temp2 = parseFloat(temp[0]) / parseFloat(temp[1]);
                this._result = temp2.toString();
                if (parseInt(temp[1]) == 0) {
                    this._result = 'Divide by zero Error';
                }
                this.numbertap.emit({ value: this._result });
            }
        }
        if (this._result.indexOf('%') != -1) {
            let temp = this._result.split('%');
            if (!isNaN(parseInt(temp[0])) && !isNaN(parseInt(temp[1]))) {
                let temp2 = parseFloat(temp[0]) % parseFloat(temp[1]);
                this._result = temp2.toString();
                this.numbertap.emit({ value: this._result });
            }
        }
        if (this._result.indexOf('*') != -1) {
            let temp = this._result.split('*');
            if (!isNaN(parseInt(temp[0])) && !isNaN(parseInt(temp[1]))) {
                let temp2 = parseFloat(temp[0]) * parseFloat(temp[1]);
                this._result = temp2.toString();
                this.numbertap.emit({ value: this._result });
            }
        }
    }

    operatorTap(index, operator) {
        this.clickBehaviour(parseInt(index));
        
        if(parseInt(index) == 18) {
            if(this._result.indexOf('.') != -1) {
                return;
            }
        }

        if (parseInt(index) != 19) {
            if ((this._result.indexOf('+') == -1) && (this._result.indexOf('-') == -1) && (this._result.indexOf('/') == -1) && (this._result.indexOf('%') == -1) && (this._result.indexOf('*') == -1)) {
                this._result += operator;
                this.numbertap.emit({ value: this._result });
            }
        }

        else if (parseInt(index) == 19) {
            if ((this._result.indexOf('+') == -1) || (this._result.indexOf('-') == -1) || (this._result.indexOf('/') == -1) || (this._result.indexOf('%') == -1) || (this._result.indexOf('*') == -1)) {
                this.doCalculations();
            }
        }
    }

}