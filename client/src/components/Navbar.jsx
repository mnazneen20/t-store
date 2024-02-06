import { ShoppingCartSimple, UserCircle } from '@phosphor-icons/react'
import React from 'react'

const Navbar = () => {
    const navlinks = [
        {
            id: 1,
            text: 'New',
            link: '/new',
        },
        {
            id: 2,
            text: 'Women',
            link: '/women',
        },
        {
            id: 3,
            text: 'Men',
            link: '/men',
        },
    ]
    const activeClass = 'bg-black text-neon'
    return (
        <div className='flex justify-between border-b-[1px] border-black'>
            <h1 className='bg-neon font-medium px-16 py-5'>
                <a href="/">T STORE</a>
            </h1>
            <div className='flex'>
                <ul className='flex'>
                    {
                        navlinks.map((l) => (
                            <li key={l.id} className={`border-r-[1px] border-black  px-8 py-5`}>
                                <a href={l.link}>{l.text}</a>
                            </li>))
                    }
                </ul>
                <div className='flex items-center px-10 gap-10'>
                    <button className='flex items-center'>
                        <UserCircle size={24} weight='fill' />
                        <span>Log In</span>
                    </button>
                    <button className='flex items-center'>
                        <ShoppingCartSimple size={24} weight='fill' />
                        <span>1</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar