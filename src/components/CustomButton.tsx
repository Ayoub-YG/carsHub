"use client";
import React from 'react'
import Image from 'next/image';
import "../app/globals.css"
import { CustomButtomProps } from '@/types';
export default function CustomButton({title,containerStyles,handleClick, btnType, textStyles, rightIcon }:CustomButtomProps) {
  return (
    <button
    disabled={false}
    type={btnType || "button"}
    className={`custom-btn  ${containerStyles}`}
    onClick={handleClick}
    >
        <span className={`flex-1 ${textStyles}`}>
             {title} 
        </span>
        {rightIcon && (
          <div className='relative w-6 h-6  '>
              <Image src={rightIcon} alt='right icon ' fill className='object-contain' />
          </div>
        )}
    </button>
  )
}
