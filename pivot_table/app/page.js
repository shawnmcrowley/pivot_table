'use client';
import dynamic from 'next/dynamic';
const PivotTableUI = dynamic(() => import('react-pivottable/PivotTableUI'), {
    ssr: false,
});
import React, { useState} from 'react';
import 'react-pivottable/pivottable.css';


const PivotTableComponent = () => {

    const pivotData = [
        { 'In_Stock': 42, 'Sold': 80, 'Amount': 2460, 'Country': 'Germany', 'Product_Categories': 'Accessories', 'Products': 'Hydration Packs', 'Order_Source': 'Retail Outlets', 'Year': 'FY 2015', 'Quarter': 'Q1' },
        { 'In_Stock': 19, 'Sold': 16, 'Amount': 184, 'Country': 'Germany', 'Product_Categories': 'Accessories', 'Products': 'Fenders', 'Order_Source': 'Retail Outlets', 'Year': 'FY 2015', 'Quarter': 'Q1' },
        { 'In_Stock': 36, 'Sold': 25, 'Amount': 188, 'Country': 'Germany', 'Product_Categories': 'Accessories', 'Products': 'Bottles and Cages', 'Order_Source': 'Retail Outlets', 'Year': 'FY 2015', 'Quarter': 'Q1' },
        { 'In_Stock': 6, 'Sold': 51, 'Amount': 229.5, 'Country': 'Germany', 'Product_Categories': 'Accessories', 'Products': 'Cleaners', 'Order_Source': 'Retail Outlets', 'Year': 'FY 2015', 'Quarter': 'Q1' },
        { 'In_Stock': 47, 'Sold': 337, 'Amount': 1110, 'Country': 'Germany', 'Product_Categories': 'Clothing', 'Products': 'Vests', 'Order_Source': 'App Store', 'Year': 'FY 2017', 'Quarter': 'Q4' },
        { 'In_Stock': 14, 'Sold': 535, 'Amount': 10165, 'Country': 'United States', 'Product_Categories': 'Accessories', 'Products': 'Tires and Tubes', 'Order_Source': 'App Store', 'Year': 'FY 2017', 'Quarter': 'Q4' },
        { 'In_Stock': 47, 'Sold': 405, 'Amount': 3037.5, 'Country': 'United States', 'Product_Categories': 'Accessories', 'Products': 'Bottles and Cages', 'Order_Source': 'App Store', 'Year': 'FY 2017', 'Quarter': 'Q4' },
        { 'In_Stock': 14, 'Sold': 385, 'Amount': 11646.25, 'Country': 'United States', 'Product_Categories': 'Accessories', 'Products': 'Hydration Packs', 'Order_Source': 'App Store', 'Year': 'FY 2017', 'Quarter': 'Q4' },
        { 'In_Stock': 11, 'Sold': 426, 'Amount': 1704, 'Country': 'United States', 'Product_Categories': 'Accessories', 'Products': 'Cleaners', 'Order_Source': 'App Store', 'Year': 'FY 2017', 'Quarter': 'Q4' },
        { 'In_Stock': 13, 'Sold': 392, 'Amount': 5989.76, 'Country': 'United States', 'Product_Categories': 'Accessories', 'Products': 'Helmets', 'Order_Source': 'App Store', 'Year': 'FY 2017', 'Quarter': 'Q4' },
        { 'In_Stock': 9, 'Sold': 426, 'Amount': 4686, 'Country': 'United States', 'Product_Categories': 'Accessories', 'Products': 'Fenders', 'Order_Source': 'App Store', 'Year': 'FY 2017', 'Quarter': 'Q4' }
    ];

    const [state, setState] = useState();

    return (
      <div align="center"><h2>Pivot Table</h2>
      <PivotTableUI
        data={pivotData}
        onChange={(s) => setState(s)}
        {...state}
      />
      </div>
    )
}
export default PivotTableComponent;