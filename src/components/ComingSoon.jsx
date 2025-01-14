import React from 'react'

import { FaInstagram } from 'react-icons/fa';

export default function ComingSoon() {
  return (
    <div className='comingSoon'>
      <div>
        <h2 className='comingSub'>GDSC BPDC Hackathon 2023</h2>
        <h1 className='comingAnimate'>Coming Soon</h1>
        <div className='comingCta'>
          <h1 className='comingMini'>More Informations Follow</h1>
          <a href='https://www.instagram.com/gdsc_bpdc/' className='comingFlex'>
            <FaInstagram className='text-[22px]'/>
            <h1 className='leading-none'>gdscbitspilanidubai</h1>
          </a>
        </div>
      </div>
    </div>
  )
}
