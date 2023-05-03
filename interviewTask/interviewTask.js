import { LightningElement, wire} from 'lwc';
import fetchAccounts from '@salesforce/apex/fetchRecentAccRecords.fetchAcc';
COLS = [{ label:'Name', fieldName:'Name'},
        { label:'Type', fieldName:'Type'},
        { label:'AnnualRevenue', fieldName:'AnnualRevenue'},
        { label:'Phone', fieldName:'Phone'}  
      ];
export default class InterviewTask extends LightningElement {
   dataList
   columnsList
   
   connectedCallback() {
       this.columnsList = COLS;
   }

   @wire(fetchAccounts)
   accountData({error, data}){
       if(data){
          console.log('Wire Response'+data);
          this.dataList = data;
       }
       if(error){
           console.error(error);
       }
   }

   
}