"use client";
import { CustomButtonProps } from '@/types';
import React from 'react'

const CustomButton = ({title,containerStyles,handleClick,btnType}:CustomButtonProps) => {
  return (
    <button
    disabled={false}
    type={btnType}
    onClick={handleClick}
    className={`custom-btn ${containerStyles}`}>
      <span className='flex-1'>
        {title}
      </span>
    </button>
  )
}

export default CustomButton