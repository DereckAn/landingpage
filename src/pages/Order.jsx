import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, ordersGrid } from '../data/dummy';
import { Header } from '../components';

const Order = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg'>
      <Header 
      title='Alfabet' 
      category="Basic"/>


      <GridComponent 
      id='gridcomp'
      dataSource={ordersData}
      allowPaging
      allowSorting
      
      >
        <ColumnsDirective>
        {ordersGrid.map((item, index) => 
          <ColumnDirective key={index} {...item}/>
        )}
        </ColumnsDirective>
        <Inject services={[Page, Sort, Resize, ContextMenu, Filter, ExcelExport, PdfExport, Edit]}/>

      </GridComponent>


    </div>
  )
}

export default Order