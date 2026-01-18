"use client";

import React from 'react'
  import { styles } from '@/public/styles/appStyles';
import CustomButton from '@/components/CustomButton';


  const Hero = () => {
    const handleScroll = () => {
    
    };
  
    return (
      <div className={styles.hero}>
        <div className="flex-1 pt-36 sm:px-16 px-6">
          <h1 className={styles.heroTitle}>
            Find, book, or rent a car — quickly and easily!
            
          </h1>
  
          <p className={styles.heroSubtitle}>
            Streamline your car rental experience with our effortless booking
            process.
          </p>
  
          <CustomButton
            title="Explore Cars"
            containerStyles="bg-[#2B59FF] text-white rounded-full mt-10"
            handleClick={handleScroll}
          />
        </div>
      </div>
    );
  };

  export default Hero