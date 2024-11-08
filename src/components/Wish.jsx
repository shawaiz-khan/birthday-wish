/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from 'react-router-dom'
import HBDAnimation from '../assets/Lotties/hbd.json'
import Lottie from 'lottie-react'

export default function Wish() {
    const Navigate = useNavigate();

    const handleClick = () => {
        Navigate('/message')
    }

    return (
        <main className='bg-secondary-light h-screen flex flex-col justify-center items-center px-4'>
            {/* Lottie animation with Happy Birthday theme */}
            <Lottie animationData={HBDAnimation} loop={true} className='w-96 md:w-[400px] sm:w-[300px] -mt-16 -mb-10' />
            <h1 className='text-4xl font-extrabold text-center sm:text-2xl md:text-3xl text-primary mt-6'>
                🎉 Happy Birthday, Princess! 👑
            </h1>
            <p className='text-lg text-center text-neutral-700 sm:text-base md:text-xl mt-2'>
                It's your day to shine! Get ready for love, laughter, and surprises at every turn. 🥳
            </p>
            <button
                onClick={handleClick}
                className='bg-primary w-fit h-fit py-4 px-10 text-white text-lg font-semibold rounded-md hover:bg-primary-light transition-all duration-300 ease-in focus:ring-2 focus:ring-primary-light flex justify-center items-center sm:w-[80%] md:w-[auto] mt-10'>
                Unwrap Your Gift, Princess 🎁
            </button>
        </main>
    )
}