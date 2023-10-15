import { useState } from 'react';
import Logo from '../assets/images/logo.png';
import chevron from '../assets/images/chevron.png';
import profile from '../assets/images/profile.png';
import search from '../assets/images/search.png';
import menu from '../assets/images/menu.png'
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { menuLinks, menuLinks2, menuLinks3 } from '../utils/data';
import MenuLink from '../components/menuLink';

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

    // const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);


  return (
    <div className='flex'>
        {/* SIDEBAR */}
      <section className='lg:w-60 bg-[#FAFAFA] px-6 pt-8 fixed h-screen hidden lg:block'>
        <img src={Logo} alt="logo" />
        <div className='sigflow-chevron'>            
            <p className=''>SigFlow</p>
            <img src={chevron} alt="chevron" className='h-[18px] w-[12px]'/>
        </div>
        <MenuLink links={menuLinks} />
        <div className='pb-6 border-b-2'></div>
        <MenuLink links={menuLinks2}/>
        <div className='mb-[100px]'></div>
        <MenuLink links={menuLinks3} />
      </section>

      <section className='md:p-7 p-3 flex-1 h-screen lg:ml-60'>

        {/* HEADER */}
        <div className="border-b-2 flex justify-between lg:justify-end items-center gap-1 py-2">
            <img src={Logo} alt="logo" className='lg:hidden'/>
            <img src={profile} alt="profile picture" className='h-[40px] w-[38px] lg:block hidden' />
            <div className='lg:block hidden'>
                <p className='font-semibold'>SigFlow</p>
                <p className='text-[#828282] '>Emmanuel Chima</p>
            </div>
            <button className='menu-button lg:hidden' onClick={toggleMenu}>
               { isOpen ? ( " " ) : ( <BiMenuAltRight color='#32D583' size='24px'/>)} 
            </button>

             {/* MOBILE SIDEBAR */}
            {isOpen && (
                <section className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} w-50 bg-[#FAFAFA] px-6 pt-8 fixed top-0 left-0 h-[100vh] lg:hidden transform transition-transform ease-in-out duration-300 z-50`}>
                    <div className='flex justify-between'>
                        <img src={Logo} alt="logo" />
                        <button className='menu-button lg:hidden' onClick={toggleMenu}>
                            <AiOutlineClose color='#32D583' size='24px'/> 
                        </button>
                    </div>
                    <div className='sigflow-chevron'>            
                        <p className=''>SigFlow</p>
                        <img src={chevron} alt="chevron" className='h-[18px] w-[12px]'/>
                    </div>
                    <MenuLink links={menuLinks} />
                    <div className='pb-6 border-b-2'></div>
                    <MenuLink links={menuLinks2}/>
                    <div className='mb-[30px]'></div>
                    <MenuLink links={menuLinks3} />
                </section>
            )}
        </div>

        <div className='flex justify-between mt-8 items-center'>
            <p className='font-semibold md:text-xl text-sm'>Transformations</p>
            <div className='flex justify-end lg:gap-4 gap-2'>
                <button className='primary-btn'>Create a new Transformation</button>
                <button className='primary-btn'>Filters</button>
            </div>
        </div>

        <div className='flex md:justify-end mt-5 items-center justify-center'>
            <input type="text" placeholder='Search' className='text-[#828282] border-2 rounded-lg py-1 px-2 md:py-2 md:px-3 md:w-[340px] w-[250px]'/>
            <img src={search} alt="" className='w-5 h-5 -translate-x-7' />
        </div>

        <div className="mt-10 border-2 rounded-lg border-solid w-full mx-auto min-h-[450px] flex flex-col justify-between pb-4">
            <table className="w-full">
                <thead className='w-full text-[#828282]'>
                    <tr className='w-full'>
                    <th className="table-header">Name</th>
                    <th className="table-header">Creation Date</th>
                    <th className="table-header">Status</th>
                    </tr>
                </thead>
                <tbody className='w-full text-[34373F]'>
                    <tr className='border-b-2 pb-2 pt-4'>
                    <td className="table-name">Gotham Asylum</td>
                    <td className="table-date">10th Aug, 2023</td>
                    <td className="table-status flex justify-between items-center">
                        <p className='paused-status'>Paused</p>
                        <button>
                            <img
                             src={menu} 
                             alt="" 
                             className='sub-menu-btn'
                            />
                        </button>
                    </td>
                    </tr>
                    <tr className='border-b-2 pb-2 pt-4'>
                    <td className="table-name">Gotham Asylum</td>
                    <td className="table-date">10th Aug, 2023</td>
                    <td className="table-status flex justify-between items-center">
                        <p className='archived-status'>Archived</p>
                        <button>
                            <img
                             src={menu} 
                             alt="" 
                             className='sub-menu-btn'
                            />
                        </button>
                    </td>
                    </tr>
                    <tr className='border-b-2 pb-2 pt-4'>
                    <td className="table-name">Gotham Asylum</td>
                    <td className="table-date">10th Aug, 2023</td>
                    <td className="table-status flex justify-between items-center">
                        <p className='paused-status'>Paused</p>
                        <button>
                            <img
                             src={menu}
                             alt="" 
                             className='sub-menu-btn'
                            />
                        </button>
                    </td>
                    </tr>
                    <tr className='border-b-2 pb-2 pt-4'>
                    <td className="table-name">Gotham Asylum</td>
                    <td className="table-date">10th Aug, 2023</td>
                    <td className="table-status flex justify-between items-center relative">
                        <p className='archived-status'>Archived</p>
                        <button>
                            <img
                             src={menu}
                             alt="" 
                             className='sub-menu-btn'
                            />
                        </button>
                    </td>
                    </tr>
                </tbody>
            </table>
            <div className="flex gap-2 pl-4">
                <button className='text-xs md:text-sm rounded-lg bg-[#32D583] text-white md:w-9 md:h-9 w-8 h-8'>5</button>
                <button className='pagination'>10</button>
                <button className='pagination'>15</button>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
