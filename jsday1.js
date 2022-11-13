/**
 * @param book
 * @param discount
 * @param tax
 */

 function bookPurchasing(book, discount, tax)
 {
     let result = 0;
     if(book && book.price)
     {
         const prc = book.price;
         const totDisc = prc *(discount/100);
         const prcDisc = prc - totDisc;
         const Tax = prcDisc * (tax/100);
         const prcTax = prcDisc - Tax;
 
         console.group();
         console.log('Price : RP.', prc);
         console.log('Discount', discount,'%');
         console.log('Tax', tax,'%');
         console.log('Price After Discount : Rp.', prcDisc);
         console.log('tax deductible price : RP.', prcTax);
         console.log('Total : Rp.', prcTax);
         console.groupEnd();
 
     }
     return result;
 }
 bookPurchasing({title : 'Rindu', price: 10000, printing_status: true}, 10, 10);