import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsHouse, BsBook, BsSearch} from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md';
// import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../context/ContextProvider';

const NavButton = ({title, customFunc, icon, color, dotColor}) => (
  <div content={title} 
  position="BottomCenter">
    <button 
    type="button"
    onClick={customFunc}
    style={{color}}
    className="relative text-xl rounded-full p-3 hover:bg-light-gray">

      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
        
      {icon}
    </button>
  </div>
);

const Navbar = () => {
  const { activeMenu, setactiveMenu, isClicked, handleClick, screenSize, setScreenSize, currentColor} = useStateContext();

  useEffect(() => {
    const handleResize = () => 
      setScreenSize(window.innerWidth);

      window.addEventListener('resize', handleResize);

      handleResize();

      return () => window.removeEventListener('resize', handleResize);

  },[])

  useEffect(() => {
    if(screenSize <= 900) {
      setactiveMenu(false);
    } else {
      setactiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setactiveMenu(!activeMenu);

  return (

    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative"> 

      <NavButton title="Menu" customFunc={handleActiveMenu}
      color={currentColor}
      icon={<AiOutlineMenu/>}/>

      <div className="flex">

      <NavButton 
      title="Cart" 
      customFunc={() => handleClick('cart')} 
      color={currentColor}
      icon={<BsHouse />} />

      <NavButton 
      title="Chat" 
      dotColor="#03C9D7" 
      customFunc={() => handleClick('chat')} 
      color={currentColor}
      icon={<BsBook />} />

      <NavButton 
      title="Notification" 
      dotColor="rgb(254, 201, 15)" 
      customFunc={() => handleClick('notification')}  
      color={currentColor}
      icon={<BsSearch />} />


      <div content="Profile"
      position="BottomCenter">
        <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
        onClick={() => handleClick('userprofile')}>
          <img src={'https://avatars.githubusercontent.com/u/108163041?v=4'} alt="avatar" className="w-8 h-8 rounded-full"/>
          <p>
            <span className="text-gray-500 text-14" >Hi, </span> {' '}
            <span className="text-gray-400 font-bold ml-1 text-14">Dereck</span>
          </p>

          <MdKeyboardArrowDown className="text-gray-500 text-14"/>

        </div>
      </div>

      {isClicked.cart && (<Cart />)}
      {isClicked.chat && (<Chat />)}
      {isClicked.notification && (<Notification />)}
      {isClicked.userProfile && (<UserProfile />)}

      </div>
    </div>
  )
}

export default Navbar