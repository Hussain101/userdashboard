import Image from 'next/image'
import React from 'react'

const Transactions = () => {
  return (
    <div className='bg-slate-700 px-3 py-4'>
        <h2 className='my-3 text-xl '>Latest Trasactions</h2>
        <table className='w-full'>
            <thead>
                <tr className='my-2'>
                    <td>Name</td>
                    <td>Status</td>
                    <td>Date</td>
                    <td>Amount</td>
                </tr>
            </thead>
            <tbody>
                <tr className='my-2'>
                    <td className='my-2'>
                        <div className='flex items-center'>
                            <Image className='rounded-full my-2' src={"/noavatar.png"} alt='no' width={43} height={67}/>
                            <p>Hussain</p>
                        </div>
                    </td>
                    <td><span>Pending</span></td>
                    <td>11.11.11</td>
                    <td>$234</td>
                </tr>
                <tr className='my-2'>
                    <td className='my-2'>
                        <div className='flex items-center'>
                            <Image className='rounded-full my-2' src={"/noavatar.png"} alt='no' width={43} height={67}/>
                            <p>Hussain</p>
                        </div>
                    </td>
                    <td><span>Approved</span></td>
                    <td>11.11.11</td>
                    <td>$234</td>
                </tr>
                <tr className='my-2'>
                    <td >
                        <div className='flex items-center'>
                            <Image className='rounded-full my-2' src={"/noavatar.png"} alt='no' width={43} height={67}/>
                            <p>Hussain</p>
                        </div>
                    </td>
                    <td><span>Cancelled</span></td>
                    <td>11.11.11</td>
                    <td>$234</td>
                </tr>
            </tbody>
        </table>

    </div>
  )
}

export default Transactions