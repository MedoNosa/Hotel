import React from 'react'
import { assets } from '../assets/assets';
export default function Testss({room}) {
   const [tilt, setTilt] = React.useState({ x: 0, y: 0 });

    // Adjust the threshold value to control the tilt effect
    const threshold = 12;

    const handleMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setTilt({ x: y * -threshold, y: x * threshold });
    };

    return (
        <div  key={room} className="rounded-xl shadow-xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer max-w-96 bg-white"
            onMouseMove={handleMove}
            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
            style={{ transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
        >
            <img src="../src/assets/roomImg1.png"
                alt="City skyline" className="w-full h-52 object-cover"
            />
            <div className='flex items-center justify-between'>
                        <p className='font-playfair txet-xl font-medium text-gray-800'>utlization</p>
                        <div className='flex items-center gap-1'>
                            <img src={assets.starIconFilled} alt='star-icon'/>4.5
                        </div>
                    </div>
            <div className='flex items-center gap-1 text-sm'>
                        <img src={assets.locationIcon} alt='location-icon'/>
                        <span>Mina &dsf</span>
                    </div>
           
            <div className='flex item-center justify-between mt-4'>
            <p><span className='text-xl text-gray-800'>$150</span>/night</p>
            <button className='px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer'>Book Now</button>
        </div>
        </div>

    );
}
