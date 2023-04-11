import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angulartut';
  yt = '';
  // getDisplay() {
  //   return this.yt;
  // }
  // data = {
  //   name: 'Sarika',
  //   course: 'angular',
  // };
  // currentUrl = window.location.href;

  // getValue(val: any) {
  //   this.yt = val;
  //   console.log(val);
  // }
  // getClick() {
  //   alert('Button clicked');
  // }
  success = 'success';
  error = 'danger';
  underline = 'underline';
  bold = 'bold';
  hasError = false;
  multiclass = ['success', 'underline', 'bold'];
  conditionMulticlass = {
    success: this.hasError,
    error: this.hasError,
  };
  textcolor = 'magenta';
  multiselection = {
    color: 'purple',
    fontSize: '25px',
    textDecoration: 'underline',
    fontWeight: 'bold',
  };
  hasError1 = 'false';
}
