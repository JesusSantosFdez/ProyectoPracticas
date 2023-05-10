import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-v2',
  templateUrl: './calculadora-v2.component.html',
  styleUrls: ['./calculadora-v2.component.css']
})
export class CalculadoraV2Component {
  operation = '';
  result = '';

  add(value: string): void {
    this.operation += value;
  }

  delete(): void {
    this.operation = this.operation.slice(0, -1);
  }

  clear(): void {
    this.operation = '';
    this.result = '';
  }

  calculate(): void {
    try {
      const evalResult = eval(this.operation);
      this.result = evalResult.toString();
    } catch (e) {
      this.result = 'Error';
    }
  }
}
