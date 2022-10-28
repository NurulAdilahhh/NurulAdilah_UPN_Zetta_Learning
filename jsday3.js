function bookPurchasing(book, disc, tax, stock, order) {
    let result = 0;
    let price = 0;
    let AmountDisc;
    let AmountTax;
    let Tot;

    for (let i = 0; i < order; i++) {
        if (book && book.price && book.title && i < stock) {
            const prc = book.price;
            const totDisc = prc * (disc/100);
            const prcDisc = prc - totDisc;
            const Tax = prcDisc * (tax/100);
            const prcTax = prcDisc - tax;
            const prcTot = order * prcTax;
            result += prcTot;

            price = prc;
            AmountDisc = prcDisc;
            AmountTax = prcTax;
            Tot = prcTot;


        }
        else {
            console.log('Stock Buku', book.title, 'Kosong');
            break;
        }
    }

    console.group();
    console.log('Title Book             :', book.title);
    console.log('Price                  :', price);
    console.log('Discoun                :', disc, '%');
    console.log('Tax                    :', tax,'%');
    console.log('Price After Discount   : RP.', AmountDisc);
    console.log('price at withholding tax : Rp.', AmountTax);
    console.log('Total                     : Rp.', order);
    console.log('Price total            :Rp.', Tot);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.groupEnd();

    return result;
}   

function Crediting(result, installment)
{
    creditOfMonth = result/installment;
    CreditPayments = [];
    for(let i = 0; i < installment; i++)
    {
        CreditPayments.push(
            {
                installment: i+1,
                price:  creditOfMonth
            }
        )
    }
    return CreditPayments;
}

console.log(Crediting(bookPurchasing({title: "Aku Kamu dan Kita", price:10000, printing_status: true},10,10,6,1),1));