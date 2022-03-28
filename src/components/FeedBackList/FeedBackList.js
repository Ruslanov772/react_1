import React from "react";
import FeedbackItem from "../FeedBackItem/FeedbackItem";
import PropTypes from "prop-types";

const FeedBackList = ({feedBack, handleDelete }) => {
    if (!feedBack || feedBack.length === 0) {
        return <p>No FeedBack Yet...</p>
    }
    return (
        <div className={'feedback-list'}>
            {feedBack.map(item => (
                <FeedbackItem key={item.id} item={item} handleDelete={item.id} />
            ))}
        </div>
    )
}

FeedBackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    )
}

export default FeedBackList