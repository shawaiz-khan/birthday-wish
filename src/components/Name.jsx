import Lottie from 'lottie-react'
import SpyAnimation from '../assets/Lotties/spy.json'
import { CgArrowRight } from 'react-icons/cg';
import { useState } from 'react';

export default function Name() {

    const [name, setName] = useState('');

    const handleInput = () => {
        console.log(name);
        if (name.toLowerCase() === 'iqra') {
            createAlert();
        }
        setName('');
    }

    const onInputChange = (e) => {
        setName(e.target.value);
    }

    const createAlert = () => {
        alert(`Welcome ${name} 🎀`);
    }

    return (
        <main className='bg-secondary-light h-screen flex flex-col justify-center items-center'>
            <Lottie animationData={SpyAnimation} loop={true} className='w-96 md:w-[350px] sm:w-[250px]' />
            <div className='flex gap-3 justify-center sm:flex-col sm:gap-4 md:flex-row items-end'>
                <input
                    type="text"
                    placeholder='Type your name'
                    className='bg-transparent border-b-2 border-primary w-96 text-2xl py-4 px-2 outline-none text-primary placeholder:text-neutral-600 focus:border-primary-light transition-all duration-300 sm:w-[80%] md:w-[70%]'
                    name='name'
                    value={name}
                    onChange={onInputChange}
                    autoFocus
                />
                <button
                    onClick={handleInput}
                    className='bg-primary w-fit h-fit py-4 px-10 text-white rounded-md hover:bg-primary-light transition-all duration-300 ease-in focus:ring-2 focus:ring-primary-light flex justify-center items-center sm:w-[80%] md:w-[auto]'
                >
                    <CgArrowRight />
                </button>
            </div>
        </main>
    )
}