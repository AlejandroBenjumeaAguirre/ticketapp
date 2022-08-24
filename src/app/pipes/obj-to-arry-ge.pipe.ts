import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objToArryGE'
})
export class ObjToArryGEPipe implements PipeTransform {

  transform(object: any): any {
    if(object){

      let result: any = [];

      let keys = Object.keys(object);

      keys.forEach((key) => {
          result.push(object[key]);
      });

      let resultatado = result;

      if(resultatado[0]){

        return Object.values(resultatado[0]);

      }else {

        return [];

      }
    }
  }

}
