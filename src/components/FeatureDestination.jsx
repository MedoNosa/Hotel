import { roomsDummyData } from '../../public/assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

export default function FeatureDestination() {
  const navigate=useNavigate();
  return (
    <div className='flex flex-col items-center px-6 md:px-16  lg:px-21 bg-slate-50'>
    <Title title='Featured Destination' subTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sit ab possimus minima. Iure, rerum! Repellendus pariatur recusandae iure, dicta veniam, exercitationem saepe debitis consequatur aut voluptatem explicabo beatae impedit.' />
      <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
        {roomsDummyData.slice(0,4).map((room,index)=>(
             <HotelCard key={room._id} room={room} index={index}></HotelCard>
        ))}
        
      </div>
      <button 
      onClick={()=>{
        navigate('/rooms'); scrollTo(0,0)
      }}
      className=' my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer'>
          View All Destination
        </button>
    </div>
  )
}
