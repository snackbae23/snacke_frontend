import React, { useEffect, useState } from 'react'
import { useSnackBae } from '../context/SnackBae';


//components
import Comment from './Comment';

//image
import commentImage from '../assets/commentImage.png';
import notliked from '../assets/notliked.png'
import good from '../assets/good.png'
import musttry from '../assets/musttry.png';

//icons
import { IoIosCloseCircleOutline } from "react-icons/io";

const Menucomment = () => {

    const { commentVisible, setCommentVisible } = useSnackBae();
    const [newone, setNewone] = useState(false);
    const [notlikedone, setNotliked] = useState(false);
    const [goodone, setGood] = useState(false);
    const [musttryone, setMustTry] = useState(false);
    const [comment, setComment] = useState('');

    const commentHandler = (e) => {
        setComment(e.target.value);
    }

    const submitHandler = (e) => {
        console.log(comment);
    }
    //input range
    const [value, setValue] = useState(0);

    const handleInputChange = (event) => {
        setValue(parseInt(event.target.value));
    };
    const submitInputHandler =()=>{
        console.log(value);
    }

    useEffect(()=>{
        submitInputHandler();
    },[value]);

    const handleClick = () => {
        setSliderColor('#FFD628');
    };

    const getEmoji = () => {
        if (value <= 2) {
            return <img src={notliked} alt="notliked"  className='w-[30px] aspect-square'/>; // Bad
        } else if (value <= 4) {
            return <img src={good} alt="good" className='w-[30px] aspect-square'/>; // Good
        } else {
            return <img src={musttry} alt="musttry" className='w-[30px] aspect-square' />; // Must Try
        }
    };


    return (
        <div className=' relative w-full h-0 '>
            <div
                className={` border-2 rounded-t-3xl fixed bottom-0 left-[50%] translate-x-[-50%] max-w-[400px] h-[90vh] overflow-scroll hideScroller w-full comment ${commentVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                <div className='relative'>
                    <IoIosCloseCircleOutline
                        onClick={() => {
                            setCommentVisible(!commentVisible);
                        }}
                        className='text-[2rem] cursor-pointer fixed right-[1rem] top-[1rem] text-[#426CFF]' />
                </div>
                <img src={commentImage} alt="commentImage" className='w-full aspect-auto object-contain' />

                <p className='font-Roboto font-[500] sm:text-[1.2rem] my-[.5rem] text-center'>Crispy chicken Burger</p>

                <div className='flex gap-[1rem] items-center my-[.5rem] px-[20px]'>
                    <div className='p-[.5rem] rounded-md flex items-center justify-start w-fit h-fit border-2  bg-white'>
                        <div className='bg-[#ED4F4F] rounded-full w-[10px] aspect-square'></div>
                    </div>
                    <p className='text-[#0F172AB2] font-Roboto font-[500]'>Category</p>
                </div>

                <p className='font-inter font-[400] text-[.9rem] text-[#64748B] text-center px-[20px]'>Analytics delivers actionable, industry-ready initiatives each time a business complete their full account.</p>

                {/* input slider */}
                <div className="flex flex-col items-center mb-[1rem]">
                    <div className="flex items-center justify-center mt-4">
                        <div
                            className=" flex items-center justify-center rounded-full border-2 border-yellow-300">
                            {getEmoji()}
                        </div>
                    </div>
                    <div className="mt-2">
                        {value <= 2 && <span>Not Liked</span>}
                        {value > 2 && value <= 4 && <span>Good</span>}
                        {value > 4 && <span>Must Try</span>}
                    </div>

                    <input
                        type="range"
                        min="2"
                        max="6"
                        step="2"
                        value={value}
                        onChange={handleInputChange}
                        className="w-64 h-[10px] mt-[1rem]  bg-[#00000069] appearance-auto accent-[#FFD601] cursor-pointer"
                    />


                </div>

                {/* comment */}
                <div className='relative w-[90%] mx-auto h-fit shadow-md rounded-lg'>
                    <textarea
                        className='w-full h-[10rem] focus:outline-none p-[1rem]'
                        placeholder='Write your thoughts....'
                        value={comment}
                        onChange={commentHandler} />
                    <button
                        onClick={submitHandler}
                        className=' bg-[#FFD628] px-[1.4rem] py-[.5rem] rounded-md font-[500] text-[1rem] leading-[1.15rem] absolute right-[1rem] bottom-[1rem]'>Submit</button>
                </div>

                <div className='w-full sticky top-0 bg-white z-[100] pb-[.5rem] border-b-2'>
                    {/* notlike,good,musttry */}
                    <div className='w-full flex justify-evenly mt-[1rem] '>
                        <div className='flex flex-col items-center px-[2rem] py-[1rem] border-r-2'>
                            <p className='font-inter font-[500] text-[.9rem] sm:text-[1rem] mb-[.5rem]'>200</p>
                            <img src={notliked} alt="notliked" />
                            <p className='font-inter font-[400] text-[.6rem] sm:text-[.9rem] text-center mt-[.5rem]'>Not Liked</p>
                        </div>
                        <div className='flex flex-col items-center px-[2rem]  py-[1rem]'>
                            <p className='font-inter font-[500]  text-[.9rem] sm:text-[1rem] mb-[.5rem]'>200</p>
                            <img src={good} alt="good" />
                            <p className='font-inter font-[400] text-[.6rem] sm:text-[.9rem] text-center mt-[.5rem]'>Good</p>
                        </div>
                        <div className='flex flex-col items-center px-[2rem] py-[1rem] border-l-2'>
                            <p className='font-inter font-[500]  text-[.9rem] sm:text-[1rem] mb-[.5rem]'>200</p>
                            <img src={musttry} alt="musttry" />
                            <p className='font-inter font-[400] text-[.6rem] sm:text-[.9rem] text-center mt-[.5rem]'>Must try</p>
                        </div>
                    </div>


                    <div className='flex justify-evenly items-center my-[1rem]'>
                        <button
                            onClick={() => {
                                setGood(false);
                                setNewone(!newone);
                                setNotliked(false);
                                setMustTry(false);
                            }}
                            className=' bg-[#FFD628] px-[1.2rem] py-[.5rem] rounded-md font-[500] text-[1rem] leading-[1.15rem]'>New</button>
                        <button
                            onClick={() => {
                                setGood(false);
                                setNewone(false);
                                setNotliked(!notlikedone);
                                setMustTry(false);
                            }}
                            className=' bg-[#FFD628] px-[1.2rem] py-[.5rem] rounded-md font-[500] text-[1rem] leading-[1.15rem]'>Not Liked</button>
                        <button
                            onClick={() => {
                                setGood(!goodone);
                                setNewone(false);
                                setNotliked(false);
                                setMustTry(false);
                            }}
                            className=' bg-[#FFD628] px-[1.2rem] py-[.5rem] rounded-md font-[500] text-[1rem] leading-[1.15rem]'>Good</button>
                        <button
                            onClick={() => {
                                setGood(false);
                                setNewone(false);
                                setNotliked(false);
                                setMustTry(!musttryone);
                            }}
                            className=' bg-[#FFD628] px-[1.2rem] py-[.5rem] rounded-md font-[500] text-[1rem] leading-[1.15rem]'>Must try</button>
                    </div>
                </div>


                <Comment />
                <Comment />
                <Comment />
                <Comment />

            </div>
        </div>
    )
}

export default Menucomment