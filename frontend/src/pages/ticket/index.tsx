import { Input, DatePicker, Button} from 'antd';
import React from 'react';
import { useState } from 'react';
import TableData from '@components/table';
const { RangePicker } = DatePicker;

const ListTicket: React.FC = ()=> {
     const [loadings, setLoadings] = useState<boolean[]>([]);

    const enterLoading = (index: number) => {
        setLoadings(prevLoadings => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = true;
        return newLoadings;
        });

        setTimeout(() => {
        setLoadings(prevLoadings => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = false;
            return newLoadings;
        });
        }, 6000);
    };
    return(
        <div className="m-2 bg-white max-w-full border-2 border-solid border-gray-700 p-4">
            <div className="mt-[10px] text-center justify-center text-xl">
               <h1>LIST TICKET</h1> 
            </div>
            <div>
                <div className="flex mt-[25px]">
                    <div className="flex w-2/6 ml-[35px] items-center">
                        <span className='mr-[10px]'>Search: </span>
                        <Input placeholder="Sreach" className='w-3/4 rounded-lg p-2' />
                    </div>
                    <div className="flex-1 w-1/6 items-center">
                        <span className='mr-[10px]'>Date: </span>
                          <RangePicker className='rounded-lg w-3/4 p-2'/>
                    </div>
                    <div className='flex-1 m-auto -ml-8'>
                        <Button className='rounded-lg px-6 text-center' type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
                            Apply
                        </Button>
                    </div>
                </div>
                <div className='mt-3'>
                     <TableData/>
                </div>
               
            </div>
        </div>
       
    )
}

export default ListTicket;
