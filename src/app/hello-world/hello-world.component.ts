import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
 num = 0;
 isVisible = false;
 enableRed = true;
 enableBig = true;
 status = 'error';
 color = 'purple';
}
