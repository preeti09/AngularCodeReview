import { Pipe, PipeTransform } from '@angular/core';
import { ShowCemeteryRoutingModule } from './show-cemetery-routing.module';

@Pipe({
  name: 'filter'
})
export class FilterPipeComponent implements PipeTransform {
//	grave: any [];
transform(items: any[], searchText: string): any[] {
if (!items || !searchText) {  
	return items;  
}else { 
var searchText = searchText.toLowerCase().slice(0);
return items.filter(function(items){ 
	if (items.plot_id.toLowerCase().slice(0).indexOf(searchText) !== -1 || items.first_name !== null && items.first_name.toLowerCase().slice(0).indexOf(searchText) !== -1 || items.surname !== null && items.surname.toLowerCase().slice(0).indexOf(searchText) !== -1 || items.dod !== null && items.dod.toLowerCase().slice(0).indexOf(searchText) !== -1 ){
		return items;
	}
});
}

}   
}
