import Lottie from 'lottie-react'
import CatAnimation from '../assets/Lotties/cat.json'

export default function Welcome() {
    return (
        <main className='bg-primary-lighter h-screen flex flex-col justify-start items-center'>
            <Lottie animationData={CatAnimation} loop={true} className='w-96' />
            <h1 className='text-4xl font-medium'>Look 👀 the Princess is Here!!</h1>
        </main>
    )
}
