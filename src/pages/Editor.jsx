import React from 'react';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

import { EditorData } from '../data/dummy';
import { Header } from '../components';

const Editor = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl '>
    <Header 
    title='Editor' 
    category="Page"/>

    <RichTextEditorComponent>
      <EditorData/>
      <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />

    </RichTextEditorComponent>
    
  </div>
  )
}

export default Editor