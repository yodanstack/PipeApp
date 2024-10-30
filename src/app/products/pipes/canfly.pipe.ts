import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appanfly',

})
export class CanflyPipeHero implements PipeTransform {

  transform(age:boolean):'vuela ' | 'No vuela' {
    return age ? 'vuela ': 'No vuela'
  }

}
