import PropTypes from "prop-types";
import Card from "../../Shared/Card";
import { CgClose } from "react-icons/cg";
import {useState} from "react";
import {logDOM} from "@testing-library/react";

const FeedbackItem = ({item, handleDelete }) => {

    // const handleClick = () => {
    //     setCount(prev => {
    //         return prev + 1;
    //     });
    // }


    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button className={'close'} onClick={() => handleDelete(item.id)}>
                <CgClose />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem