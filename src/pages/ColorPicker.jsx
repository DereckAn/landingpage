import React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';

import { Header } from '../components';


const ColorPicker = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl '>
    <Header 
    title='Color picker' 
    category="Page"/>

    
  </div>
  )
}

export default ColorPicker