// import React, { useEffect, useState } from "react";


// function TypingEffect() {
//   const [typedText, setTypedText] = useState("");

//   useEffect(() => {
//     const text = "COMING SOON";
//     let index = 0;

//     const interval = setInterval(() => {
//       if (index < text.length) {
//         setTypedText((prevText) => prevText + text[index]);
//         index++;
//       } else {
//         clearInterval(interval);
//       }
//     }, 100); // Adjust the typing speed by changing the interval duration

//     return () => clearInterval(interval);
//   }, []);

//   return <>{typedText}</>;
// }

// export default TypingEffect;