import React, {useState} from "react";

const FeedbackItem = () => {
    // const [] = useState();
    const [rating, setCount] = useState(2);
    const [text, setText] = useState('This is Example of FeedBack item...');

    // const handleClick = () => {
    //     setCount(prev => {
    //         return prev + 1;
    //     });
    // }

    return (
        <div className={'card'}>
            <div className="num-display">{rating}</div>
            <div className="text-display">{text}</div>
        </div>
    )
}

export default FeedbackItem