# NgxFuncPipe

NgxFuncPipe is a simple and lightweight Angular pipe that allows you to call a function directly from your Angular templates. This utility is particularly useful when you need to invoke a function with arguments in your Angular templates.

### Installation
You can install this library using npm or yarn:
npm install ngx-func-pipe
yarn add ngx-func-pipe

### Type-safe Template Usage
Since Angular's templates are now type-safe, the function and its argument types will be reflected in the template, giving you full IntelliSense support:  

```
import { Component } from '@angular/core';
import { NgxFuncPipe } from 'ngx-func-pipe';

@Component({
  selector: 'app-math',
  template: `
    <div>
      <!-- The type of foo and bar will be reflected in the template -->
      <p>Sum: {{ foo | ngxFunc: 5: 10 }}</p>
      @if ((bar | ngxFunc: 'str': 1); as result) {
        {{ result }}
      }
    </div>
  `,
  standalone: true,
  imports: [NgxFuncPipe]
})
export class MathComponent {
  foo(arg1: number, arg2: number): number {
    return arg1 + arg2;
  }

  bar(arg1: string, arg2: number): boolean {
    return arg1 && arg2;
  }
}
```  

### Features
- Standalone Pipe: The NgxFuncPipe is a standalone Angular pipe, meaning it can be used without being declared in an Angular module.
- Function Invocation in Templates: It allows you to invoke a function directly from your Angular templates with the required arguments.
- Type-safe Templates: Full support for Angular's type-safe templates, ensuring that function types and arguments are reflected in the template.
- Pure Pipe: The pipe is pure, meaning it only re-evaluates when its input values change, providing performance benefits.