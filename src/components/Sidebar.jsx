import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import { useStateContext } from '../context/ContextProvider';


const Sidebar = () => {
  const { activeMenu, setactiveMenu, screenSize } = useStateContext();

  const handleClose = () => {
    if(activeMenu && screenSize <= 900) {
      setactiveMenu(false);
    }
  };
  const activeLink = "frelx item-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 text-md dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
        <div className='flex justify-between items-center'>
          <Link to='/'
          onClick = {handleClose}
          className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
            <SiShopware /> Auxiliiioooooo!!!!
          </Link>

          <div content="Menu"
          position="BottomCenter">
            <button
                type="button"
                onClick={() => setactiveMenu((prev) => !prev)}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block"
              >
                <MdOutlineCancel  />
              </button>
          </div>
        </div>

        <div className='mt-10'>
          {links.map((link) => (
            <div key={link.title}>
              <p className='text-gray-400 m-3 mt-4 uppercase' >
                {link.title}
              </p>
              {link.links.map((sublink) => (
                <NavLink to={`/${sublink.name}`}
                key={sublink.name}
                onClick={handleClose}
                className={({isActive})=> isActive ? activeLink : normalLink}>
                  {sublink.icon}
                  <span className="capitalize ">
                    {sublink.name}
                  </span>

                </NavLink>
              ))}
            </div>
          ))}
        </div>
        </>
      )}
    </div>
  )
}

export default Sidebar