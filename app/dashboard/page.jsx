import React from 'react'
import Card from '../ui/dashboard/card/Card'
import Transactions from '../ui/dashboard/transactions/Transactions'
import Chart from '../ui/dashboard/chart/chart'
import Rightbar from '../ui/dashboard/rightbar/Rightbar'

const page = () => {
  return (
    <div className='flex'>
      <div>
      <div className='flex w-[80%] text-white m-12  gap-4 justify-between'>
        <Card />
        <Card />
        <Card />
      </div>
      <div className='m-12 text-white w-[80%]'>
        <Transactions />
      </div>
      <div>
        <Chart />
      </div>
    </div>
    <div className='w-[300px]'>
      <Rightbar />
    </div>
    </div>
  )
}

export default page