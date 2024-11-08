/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from 'react-router-dom'
import HeartAnimation from '../assets/Lotties/heart.json'
import Lottie from 'lottie-react'

export default function Message() {
    const Navigate = useNavigate();

    const handleClick = () => {
        Navigate('/fireworks')
    }

    return (
        <main className='bg-secondary-light h-screen flex justify-center items-center px-4'>
            <div className='flex justify-center items-center w-full sm:w-1/2 -ml-24'>
                <Lottie animationData={HeartAnimation} loop={true} className='w-96 md:w-[400px] sm:w-[300px]' />
            </div>

            <div className='flex flex-col justify-center items-start sm:w-full md:w-1/2 px-4'>
                <h1 className='text-4xl font-extrabold text-left sm:text-2xl md:text-3xl text-primary'>
                    A Small Message for You!
                </h1>
                <p className='text-lg text-left text-neutral-700 sm:text-base md:text-xl mt-5 leading-relaxed'>
                    Happy Birthday to my incredible best friend and crime partner! Today, we celebrate you and all the joy you bring into my life. You are my secret keeper, my confidant, and the one who makes every day feel like an adventure. I cherish our moments together—the laughter, the late-night talks, and all the little things that make our bond so special.

                    <br /><br />

                    On your special day, I want you to know just how much you mean to me. You light up my world with your kindness and love, and I am so grateful to have you by my side. Here’s to a birthday filled with all your favorite things—love, laughter, and wonderful memories. I hope this year brings you as much happiness as you bring to me. I love you more than words can say! Enjoy your day!

                    <br /><br />

                    ~ Shawaiz Khan
                </p>
                <button
                    onClick={handleClick}
                    className='bg-primary w-fit h-fit py-4 px-10 text-white text-lg font-semibold rounded-md hover:bg-primary-light transition-all duration-300 ease-in focus:ring-2 focus:ring-primary-light flex justify-center items-center sm:w-[80%] md:w-[auto] mt-5'>
                    Let's have some Fireworks 🎇
                </button>
            </div>
        </main>
    )
}