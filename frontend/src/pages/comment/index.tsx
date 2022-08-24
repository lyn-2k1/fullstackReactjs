import {Card } from 'antd';
import { useRouter} from 'next/router';
import React, {useEffect, useRef, useState} from 'react';
import InputComment from './InputComment';
import ListComment from './ListComment';

const comment: React.FC = () => {
    const router = useRouter();
    const scrollTargetElementRef = useRef<HTMLDivElement | null>();
    const handleClick = () => {
        if(!router.query.commentId) {
            router.push(`?commentId=${123}&&userId=${3}`);
        }
        console.log(scrollTargetElementRef.current?.offsetTop);
        scrollTargetElementRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // useEffect(()=> {
    //     scrollTargetElementRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // }, [])
    return (
    <div className='flex '>
    <Card style={{ width: 800 }}>
        <ListComment scroll={scrollTargetElementRef}></ListComment>
        <InputComment></InputComment>
    </Card>
    <div>
        <button onClick={()=> handleClick()} >
            notification
        </button>
    </div>
    </div>
    
);}

export default comment;