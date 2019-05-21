import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  /**
   * Clona um objeto.
   * @param obj O objeto para clonar
   * @see https://stackoverflow.com/questions/728360/how-do-i-correctly-clone-a-javascript-object
   */
  clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
  }
}
