import { styles } from '@/public/styles/appStyles'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
      <div className='flex max-md:flex-col flex-wrap 
      justify-betweengap-5 py-10'>
        <div className="flex flex-col justify-start items-start
        gap-6">
            <Image src="/logo.svg" alt="logo" width={118} height={18}
            className='object-contain'/>
            <p className='text-base text-gray-700'>
                FleetGo 2023 <br/>
                All rights reserved &copy;</p>
        </div>
        <div className={styles.footerLinks}>
            
        </div>
      </div>
    </footer>
  )
}

export default Footer