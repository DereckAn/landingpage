import React, { useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import './App.css';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommers, Order, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';

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
            {/*Dashdoard*/}
            <Route path='/' element={<Ecommers/>}/>
            <Route path='/ecommerce' element={<Ecommers/>}/>


            {/*Pages*/}
            <Route path='/orders' element={<Order/>}/>
            <Route path='/employees' element={<Employees/>}/>
            <Route path='/customers' element={<Customers/>}/>

            {/*Pages*/}
            <Route path='/kanban' element={<Kanban/>}/>
            <Route path='/editor' element={<Editor/>}/>
            <Route path='/calendar' element={<Calendar/>}/>
            <Route path='/color-picker' element={<ColorPicker/>}/>



            
            </Routes>
          </div>
        </div>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
