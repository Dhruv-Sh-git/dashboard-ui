"use client"

import Image from "next/image"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'JAN',
    income: 4000,
    expense: 2400,
  },
  {
    name: 'FEB',
    income: 3000,
    expense: 1398,
    
  },
  {
    name: 'MAR',
    income: 2000,
    expense: 9800,
    
  },
  {
    name: 'APR',
    income: 2780,
    expense: 3908,
    
  },
  {
    name: 'MAY',
    income: 1890,
    expense: 4800,
    
  },
  {
    name: 'JUN',
    income: 2390,
    expense: 3800,
    
  },
  {
    name: 'JULY',
    income: 3490,
    expense: 4300,
    
  },
  {
    name: 'AUG',
    income: 3490,
    expense: 4300,
    
  },
  {
    name: 'SEP',
    income: 3490,
    expense: 4300,
    
  },
  {
    name: 'OCT',
    income: 3490,
    expense: 4300,
    
  },
  {
    name: 'NOV',
    income: 3490,
    expense: 4300,
    
  },
  {
    name: 'DEC',
    income: 3490,
    expense: 4300,
    
  },
];
const FinanceChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
          <div className='flex justify-between items-center mb-4'>
            <h1 className='text-lg font-semibold text-gray-700'>Finance</h1>
            <Image src='/moreDark.png' alt='More' width={20} height={20} />
          </div>
           <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd"/>
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}
          tickMargin={10}/>
          <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}
          tickMargin={20}/>
          <Tooltip />
          <Legend align="center" verticalAlign='top' wrapperStyle={{paddingTop: "10px", paddingBottom: "30px"}}/>
          <Line type="monotone" dataKey="income" stroke="#C3EBFA" strokeWidth={5}/>
          <Line type="monotone" dataKey="expense" stroke="#CFCEFF" strokeWidth={5}/>
        </LineChart>
      </ResponsiveContainer>
        </div>
  );
};

export default FinanceChart;