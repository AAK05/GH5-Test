import React from 'react'
import Accordion from "./Accordion"
import { useState } from 'react';

const FAQs = () => {

    return (
        <main className="w-full h-[1312px]">
            <h1 className="text-white text-center font-pptelegraf pt-8">
                Got Questions? We've Got Answers! 
            </h1>
            <h2 className="text-white text-center text-3xl font-bold">
                Your Guide to Navigating 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 via-purple-500 to-gray-100"> Garuda Hacks 5.0</span>
            </h2> 


            <div className="flex w-10/12 lg:w-[1040px] mx-auto mt-3 pl-3 pb-3 py-3 rounded-md border border-white  hover:bg-slate-900">
                <Accordion title="What is a hackathon?" answer="A hackathon is a programming competition in which competitors use technology to build innovative projects within 36 hours. There will be opportunities to win cool prizes, learn from our key-note speakers, and network with our sponsors."/> 
            </div>

            <div className="flex w-10/12 lg:w-[1040px] mx-auto mt-3 pl-3 pb-3 py-3 rounded-md border border-white  hover:bg-slate-900">
                <Accordion title="Where will it be hosted?" answer="Universitas Multimedia Nusantara (UMN) Indonesia"/> 
            </div>

            <div className="flex justify-center my-5">
            <div className="w-[1040px] h-[55px] rounded-md border border-white text-white pl-3 pb-3 py-3 hover:bg-slate-900">
                Who can participate?
            </div>
            </div>
            <div className="flex justify-center my-5">
            <div className="w-[1040px] h-[55px] rounded-md border border-white text-white pl-3 pb-3 py-3 hover:bg-slate-900">
                Do I have to know code?
            </div>
            </div>
            <div className="flex justify-center my-5">
            <div className="w-[1040px] h-[55px] rounded-md border border-white text-white pl-3 pb-3 py-3 hover:bg-slate-900">
                How much does it cost?
            </div>
            </div>
            <div className="flex justify-center my-5">
            <div className="w-[1040px] h-[55px] rounded-md border border-white text-white pl-3 pb-3 py-3 hover:bg-slate-900">
                What is a hackathon?                         
            </div>
            </div>
            <div className="flex justify-center my-5">
            <div className="w-[1040px] h-[55px] rounded-md border border-white text-white pl-3 pb-3 py-3 hover:bg-slate-900">
                How do I apply?
            </div>
            </div>
            <div className="flex justify-center my-5">
            <div className="w-[1040px] h-[55px] rounded-md border border-white text-white pl-3 pb-3 py-3 hover:bg-slate-900">
                What can I make?
            </div>
            </div>
            <div className="flex justify-center my-5">
            <div className="w-[1040px] h-[55px] rounded-md border border-white text-white pl-3 pb-3 py-3 hover:bg-slate-900">
                How will projects be judged?
            </div>
            </div>
        </main>
    )
}

export default FAQs 