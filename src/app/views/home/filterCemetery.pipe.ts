import { Pipe, PipeTransform } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';

@Pipe({
  name: 'filter'
})
export class FilterCemeteryPipeComponent implements PipeTransform {
//	grave: any [];
transform(items: any[], searchCem: string): any[] {
if (!items || !searchCem) {  
	return items;  
}else { 
var searchCem = searchCem.toLowerCase().slice(0);
return items.filter(function(items){
	if(items.cemeteryid.toLowerCase().slice(0).indexOf(searchCem) !== -1 || items.createddate.toLowerCase().slice(0).indexOf(searchCem) !== -1 || items.location.toLowerCase().slice(0).indexOf(searchCem) !== -1 || 
	items.name.toLowerCase().slice(0).indexOf(searchCem) !== -1 ){
		return items;
	}
});
}
}   
}
