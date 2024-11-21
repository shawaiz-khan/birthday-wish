import Lottie from 'lottie-react'
import SpyAnimation from '../assets/Lotties/spy.json'
import { CgArrowRight } from 'react-icons/cg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Name() {
    const [name, setName] = useState('');
    const Navigate = useNavigate();

    const handleInput = () => {
        console.log(name);
        if (name.toLowerCase().trim() === 'admin') {
            Navigate('/welcome')
        } else {
            alert('Wrong Person')
        }
        setName('');
    }

    const onInputChange = (e) => {
        setName(e.target.value);
    }

    return (
        <main className='bg-secondary-light h-screen w-screen flex flex-col justify-center items-center px-4'>
            <Lottie animationData={SpyAnimation} loop={true} className='w-72 md:w-[350px]' />
            <div className='flex gap-3 justify-center flex-col w-full max-w-lg sm:gap-4 md:flex-row md:items-end items-center'>
                <input
                    type="text"
                    placeholder='Type your name'
                    className='bg-transparent border-b-2 border-primary w-full text-lg sm:text-2xl py-3 px-2 outline-none text-primary placeholder:text-neutral-600 focus:border-primary-light transition-all duration-300 md:w-[70%]'
                    name='name'
                    value={name}
                    onChange={onInputChange}
                    autoFocus
                />
                <button
                    onClick={handleInput}
                    className='bg-primary w-full sm:w-[80%] md:w-auto h-fit py-3 px-6 sm:py-4 sm:px-10 text-white rounded-md hover:bg-primary-light transition-all duration-300 ease-in focus:ring-2 focus:ring-primary-light flex justify-center items-center'
                >
                    <CgArrowRight />
                </button>
            </div>
        </main>
    )
}
