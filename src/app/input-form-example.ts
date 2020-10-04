import {Component, Input, OnChanges} from '@angular/core';

/**
 * @title Inputs in a form
 */
@Component({
  selector: 'input-form-example',
  templateUrl: 'input-form-example.html',
  styleUrls: ['input-form-example.css'],
})
export class InputFormExample {
  content = "600 Amphitheatre Pkwy";
  address = "chennai";
  pincode = "600001"
  Roles = [{name: 'john', description:'chennai'},
          {name: 'marry', description:'mumbai'},
          {name: 'peter', description:'delhi'}]

  contentarr = [{content:"1"},{content:"2"},{content:"3"}]
    log(obj:any) {
     obj.content=2;
     //console.log(obj);
  }
log1(obj:any) {
     obj.content=4;
     //console.log(obj);
  }
 

}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */