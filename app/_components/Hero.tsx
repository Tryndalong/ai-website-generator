'use client'
import { Button } from '@/components/ui/button'
import { ArrowUp, HomeIcon, ImagePlus, Key, LayoutDashboard, User } from 'lucide-react'
import React from 'react'

const Suggestions = [
    {
        label: 'Dashboard',
        prompt: 'Create a dashboard layout with charts and stats',
        icon: LayoutDashboard
    },
    {
        label: 'SignUp Form',
        prompt: 'Design a user signup form with validation',
        icon: Key
    },
    {
        label: 'Hero',
        prompt: 'Create a pricing page with different subscription tiers',
        icon: HomeIcon
    },
    {
        label: 'User Profile Card',
        prompt: 'Design a user profile card with avatar and details',
        icon: User
    }
]

function Hero() {

    const [userInput, setUserInput] = React.useState('')

  return (
    <div className='flex flex-col items-center justify-center h-[80vh]'>
        {/* Header & description */}
        <h2 className='font-bold text-6xl'>What should we design?</h2>
        <p className='text-lg text-muted-foreground'>Generate, edit and explore designs with AI. Export to code.</p>

        {/* Input box */}
        <div className='w-full max-w-2xl p-5 border mt-5 rounded-2xl'>
            <textarea 
                placeholder='Describe your page design'
                className='w-full h-24 focus:outline-none focus:ring-0 resize-none'
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
            ></textarea>
            <div className='flex justify-between gap-2'>
                <Button variant={'ghost'}><ImagePlus /></Button>
                <Button> <ArrowUp /> </Button>
            </div>
        </div>
        {/* Suggestion list */}
        <div className='flex mt-4 gap-3'>
            {Suggestions.map((item, index) => (
                <Button key={index} variant={'outline'}
                onClick={() => setUserInput(item.prompt)}>
                    <item.icon />
                    {item.label}
                </Button>
            ))}
        </div>
    </div>
  )
}

export default Hero