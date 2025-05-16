"use client"
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import Image from 'next/image'

const data = [
  {
    name: 'Total',
    count: 106,
    fill: 'white',
  },
  {
    name: 'Girls',
    count: 53,
    fill: '#C3EBFA',
  },
  {
    name: 'Boys',
    count: 24,
    fill: '#FAE27C',
  },
]

const CountChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
      {/* TITLE */}
      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-lg font-semibold text-gray-700'>Students</h1>
        <Image src='/moreDark.png' alt='More' width={20} height={20} />
      </div>

      {/* CHART */}
      <div className='relative w-full h-[250px]'>
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx='50%'
            cy='50%'
            innerRadius='40%'
            outerRadius='100%'
            barSize={32}
            data={data}
          >
            <RadialBar
              
              background
              dataKey='count'
            />
            <Tooltip />
            
          </RadialBarChart>
        </ResponsiveContainer>
        <Image src="/maleFemale.png" alt="" width={50} height={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
      </div>

      {/* BOTTOM SUMMARY */}
      <div className='flex justify-center gap-16 mt-4'>
        <div className='flex flex-col gap-1 items-center'>
          <div className='w-5 h-5 bg-[#C3EBFA] rounded-full'></div>
          <h1 className='font-bold'>1,234</h1>
          <h2 className='text-xs text-gray-500'>Girls (50%)</h2>
        </div>
        <div className='flex flex-col gap-1 items-center'>
          <div className='w-5 h-5 bg-[#FAE27C] rounded-full'></div>
          <h1 className='font-bold'>1,234</h1>
          <h2 className='text-xs text-gray-500'>Boys (50%)</h2>
        </div>
      </div>
    </div>
  )
}

export default CountChart
