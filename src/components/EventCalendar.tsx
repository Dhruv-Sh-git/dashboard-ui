"use client"
import 'react-calendar/dist/Calendar.css';
import {useState} from 'react';
import Calendar from 'react-calendar';
import { Description } from '@mui/icons-material';
import Image from 'next/image';
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
//fetch events from database
const events=[
  {
    id:1,
    title:"lorem ipsum",
    time:"10:00 AM",
    description: "lorem ipsum dolor sit amet",
  },
  {
    id:2,
    title:"lorem ipsum",
    time:"10:00 AM - 11:00 AM",
    description: "lorem ipsum dolor sit amet",
  },
  {
    id:3,
    title:"lorem ipsum",
    time:"12:00 AM",
    description: "lorem ipsum dolor sit amet",
  }
];

const EventCalendar = () => {
  const [value,onChange] = useState<Value>(new Date());
  return (
    <div className='bg-white text-gray-700 p-4 rounded-md'>
      <Calendar onChange={onChange} value={value} />
      <div className='flex items-centre justify-between'>
        <h1 className='text-xl font-semibold my-4'>Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className='flex flex-col gap-4'>
        {events.map(event=>
          <div className='p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-blue-200 even:border-t-purple-300' key={event.id} >
            <div className='flex items-center justify-between'>
              <h1 className='font-semibold text-gray-600'>{event.title}</h1>
                <span className='text-gray-300 text-xs'>{event.time}</span>
                
              </div>
              <p className='mt-2 text-gray-400 text-sm'>{event.description}</p>
            </div>
        )}
      </div>
      </div>
  )
}

export default EventCalendar