/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from 'react-router-dom'
import GiftAnimation from '../assets/Lotties/gift.json'
import Lottie from 'lottie-react'

export default function Gift() {
    const Navigate = useNavigate();

    const handleClick = () => {
        Navigate('/wish')
    }

    return (
        <main className='bg-secondary-light h-screen flex flex-col justify-center items-center px-4'>
            <Lottie animationData={GiftAnimation} loop={true} className='w-96 md:w-[400px] sm:w-[300px] -mt-16' />
            <h1 className='text-4xl font-bold text-center sm:text-2xl md:text-3xl text-primary mt-6'>
                Hey Queen 👑!
            </h1>
            <p className='text-lg text-center text-neutral-700 sm:text-base md:text-xl mt-2'>
                It's your special day! We’ve got a surprise waiting for you. 🎉
            </p>
            <button
                onClick={handleClick}
                className='bg-primary w-fit h-fit py-4 px-10 text-white text-lg font-semibold rounded-md hover:bg-primary-light transition-all duration-300 ease-in focus:ring-2 focus:ring-primary-light flex justify-center items-center sm:w-[80%] md:w-[auto] mt-10'>
                Let's open the Gift 🎁
            </button>
        </main>
    )
}
