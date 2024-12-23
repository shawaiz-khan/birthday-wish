/* eslint-disable react/no-unescaped-entities */
import Lottie from 'lottie-react'
import CatAnimation from '../assets/Lotties/cat.json'
import { useNavigate } from 'react-router-dom'

export default function Welcome() {
    const Navigate = useNavigate();

    const handleClick = () => {
        Navigate('/gift');
    }

    return (
        <main className='bg-secondary-light h-screen flex flex-col justify-center items-center px-4'>
            <Lottie animationData={CatAnimation} loop={true} className='w-96 md:w-[400px] sm:w-[300px] -mb-16 -mt-24' />
            <h1 className='text-4xl font-extrabold text-center sm:text-2xl md:text-3xl text-primary'>
                The Queen Has Arrived! 👑🎉
            </h1>
            <p className='text-xl text-center text-neutral-700 sm:text-base md:text-lg mt-3'>
                Get ready for some birthday magic! 🥳 It's time to celebrate YOU! 🎂
            </p>
            <button
                onClick={handleClick}
                className='bg-primary w-fit h-fit py-4 px-10 text-white text-lg font-semibold rounded-md hover:bg-primary-light transition-all duration-300 ease-in focus:ring-2 focus:ring-primary-light flex justify-center items-center sm:w-[80%] md:w-[auto] mt-10'>
                Let's Celebrate 🎁
            </button>
        </main>
    )
}