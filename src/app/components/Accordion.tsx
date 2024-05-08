"use client"; 
import React, {useState} from "react"; 

interface AccordionProps {
    title: string; 
    answer: string; 
}


const Accordion: React.FC<AccordionProps>= ({title, answer}) => {
    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
        <div className="w-[1040px] h-[55px] rounded-md border border-white text-white pl-3 pb-3 py-3 hover:bg-slate-900">
            <button
                onClick={() => setAccordionOpen(!accordionOpen)} // Toggle accordionOpen state on button click
            >
                <span className="text=white"> {title} </span>
                {accordionOpen ? <span>-</span> : <span>+</span>}{/* Show '-' if accordion is open, '+' otherwise */}
            </button>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}>
                <div className="text-white">{answer}</div>
            </div>
        </div>
    );
};

export default Accordion;


// const Accordion = () => {
//     const [accordionOpen, setAccordionOpen] = useState(false); 

//     return (
//     <div className="py-2">
//         <button className="flex justify-between w-full">
//             <span>
//                 This is the title
//             </span>
//             <span>+</span>
//         </button>
//         <div className= {"grid overflow-hidden transition-all duration-300 ease-in-out ${
//             accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
//         }"}>
//             <div>
//                 This is the answer
//             </div>
//         </div>

//     </div>
//     ); 
// }

// export default Accordion; 