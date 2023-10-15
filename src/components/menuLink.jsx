import React from 'react';
import { menuLinks } from '../utils/data';

const menuLink = ({ links }) => {
  return (
    <div>
        <ul className='flex flex-col gap-3 mt-6'>
            {links.map((link, index) => {
                if (index > -1) {
                    const { id, image, name } = link;
                    return (
                        <li key={id} className="flex gap-4 items-center cursor-pointer rounded-md hover:bg-[#ECFDF3] p-[3px]">
                            <img src={image} alt="" className='w-[15px] h-[16px] filter-invert-[#828282]'/>
                            <p className='text-[#828282] hover:text-[#32D583]'>{name}</p>
                        </li>
                    );
                }
                return null;
            })}
        </ul>
    </div>
  )
}

export default menuLink
