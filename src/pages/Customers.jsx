import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Toolbar, Inject, Edit, Filter, Sort, Selection } from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg'>
    <Header 
    title='Orar' 
    category="Basic"/>


    <GridComponent 
    dataSource={customersData}
    allowPaging
    allowSorting
    toolbar={['Delete']}
    width="auto"
    editSettings={{
      allowEditing: true, 
      allowDeleting: true, 
      }}

    >
      <ColumnsDirective>
      {customersGrid.map((item, index) => 
        <ColumnDirective key={index} {...item}/>
      )}
      </ColumnsDirective>
      <Inject services={[Page, Edit, Toolbar, Filter, Sort, Selection]}/>

    </GridComponent>


  </div>
  )
}

export default Customers