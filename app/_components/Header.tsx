
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const MenuOptions = [
    {
        name: 'Pricing',
        link: '/pricing'
    },
    {
        name: 'Contact us',
        link: '/contact-us'
    }
]

function Header() {
  return (
    <div className='flex justify-between items-center p-4 shadow'>
        {/* Logo x */}
        <div className='flex items-center gap-2'>
            <Image src={'/logo.svg'} alt='logo' width={35} height={35} />
            <h2>AI Website Generator</h2>
        </div>
        {/* Menu Options */}
        <div className='flex items-center gap-8'>
            {MenuOptions.map((item, index) => (
                <Button key={index} variant='ghost'>{item.name}</Button>
            ))}
        </div>

        {/* Get Started Button */}
        <Button>Get Started</Button>
    </div>
  )
}

export default Header