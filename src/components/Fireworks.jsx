import Lottie from 'lottie-react';
import HBDAnimation from '../assets/Lotties/hbd.json';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { useNavigate } from 'react-router-dom';

const FireworksComponent = () => {
    const { width, height } = useWindowSize();
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    };

    return (
        <div className="relative w-full h-screen bg-secondary-light overflow-hidden">
            {/* Confetti */}
            <Confetti width={width} height={height} />

            {/* Lottie Animation */}
            <div className="absolute inset-0 flex justify-center items-center z-10">
                <Lottie
                    animationData={HBDAnimation}
                    loop={true}
                    className="w-[300px] sm:w-[250px] md:w-[350px]"
                />
            </div>

            <button
                onClick={handleBack}
                className="absolute z-50 bottom-4 left-4 bg-primary text-white py-2 px-4 rounded-md text-sm font-semibold shadow-md hover:bg-primary-dark transition-all focus:ring-2 focus:ring-primary-light">
                Back
            </button>
        </div>
    );
};

export default FireworksComponent;