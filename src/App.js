import React, { useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import './App.css';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Order, Calendar, Employees, Customers, Kanban, Pie, ColorPicker, Editor, HomeButt, ParaTi, Construc } from './pages';
import { links } from './data/dummy';

import { useStateContext } from './context/ContextProvider';

const App = () => {
  const { activeMenu, sethemeSetter, themeSetter, currentColor, currentMode } = useStateContext();
  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
      <div className='flex relative dark:bg-main-dark-bg'>
        <div className='fixed right-4 bottom-4' style={{zIndex: '1000'}}>
          <TooltipComponent 
          content="Settings" 
          position="Top"> 
            <button type='button'
            className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray
            text-white' 
            onClick={() => sethemeSetter(true)}
            style={{background:currentColor, 
            borderRadius: '50%'}}>
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>


        {activeMenu ? (
          <div 
          className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
            <Sidebar />
          </div>
        ) : 
        (<div className='w-0 dark:bg-secondary-dark-bg '>
            <Sidebar />
          </div>)
        }


        <div className={
          `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full 
          ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
            <div 
            className='fixed md:static bg-main-bg dark:bg-main-dark-bg
            navbar w-full '>
              <Navbar/>
            </div>
        

        <div>

          {themeSetter && <ThemeSettings />}
          <Routes>
            {/* Dashdoard */}
            <Route path='/' element={<HomeButt/>}/>
            <Route path='/Para Ti' element={<ParaTi/>}/>


            {/*Pages*/}
            <Route path='/Alfabeto' element={<Order/>}/>
            <Route path='/Conocer a alguien' element={<Employees/>}/>
            <Route path='/Ofrecer una Oracion' element={<Customers/>}/>

            {/*Pages*/}
            <Route path='/kanban' element={<Kanban/>}/>
            <Route path='/editor' element={<Editor/>}/>
            <Route path='/Compartir una Escritura' element={<Calendar/>}/>
            <Route path='/color-picker' element={<ColorPicker/>}/>
            <Route path='/El Plan de Salvación' element={<Pie/>}/>

            {/* trabajo previo */}
            <Route path='/Construyendo relaciones genuinas' element={<Construc/>}/>





            
            </Routes>
          </div>
        </div>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
