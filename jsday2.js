function bookPurchasing(book, discount, tax, stock, order)
{
    let result = 0;
    for(let i = 0; i < order; i++)
    {
        if(book && book.price && book.title && (i < stock))
        {
            const prc = book.price;
            const totDisc = prc *(discount/100);
            const prcDisc = prc - totDisc;
            const Tax = prcDisc * (tax/100);
            const prcTax = prcDisc - Tax;
            const prcTot = order * prcTax;

            price = prc;
            amntDisc = prcDisc;
            amntTax = prcTax;
            Tot = prcTot;


        }
        else {
            console.log('Stok Buku', book.title, 'Kosong');
            break
        }
    }

    console.group();
    console.log('Book Title           :', book.title);
    console.log('Price                : RP.', prc);
    console.log('Discount             :', discount,'%');
    console.log('Tax                  :', tax,'%');
    console.log('Price After Discount : Rp.', prcDisc);
    console.log('tax deductible price : RP.', prcTax);
    console.log('totPem              : Rp.', order);
    console.log('prcTot               : Rp.', total);
    console.groupEnd();
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.groupEnd();

    return result;

}

bookPurchasing({judul: 'Rindu', harga: 10000, printing_status: true},10, 10, 5, 4);
 bookPurchasing({judul: 'KNN Desa Penari', harga: 80000, printing_status: true},10, 10, 5, 3);
 bookPurchasing({judul: 'Doraemon', harga: 95000, printing_status: true},10, 10, 5, 5);
 bookPurchasing({judul: 'Semua Akan Mati', harga: 18000, printing_status: true},10, 10, 5, 2);
 bookPurchasing({judul: 'Thank you for Salma', harga: 50000, printing_status: true},10, 10, 5, 1);
 bookPurchasing({judul: 'Harry Potter', harga: 100000, printing_status: true},10, 10, 5, 10);
 bookPurchasing({judul: 'Sayap sayap patah', harga: 120000, printing_status: true},10, 10, 5, 8);
 bookPurchasing({judul: 'Bathman', harga: 97000, printing_status: true}, 10, 10, 5, 2);