import Card from "../Shared/Card";
import {useState} from "react";
import Button from "../Shared/Button";
import RatingSelect from "../components/RatingSelect/RatingSelect";
import {hasFormSubmit} from "@testing-library/user-event/dist/utils";

const FeedBackForm = () => {
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState(10);

    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true);
            setMessage(null);
        } else if (text !== '' && text.trim().length <= 10) {
            setMessage('Text must be at least 10 character');
            setBtnDisabled(true);
        } else {
            setMessage(null);
            setBtnDisabled(false);
        }
        setText(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log('hello')
    }

    return (
        <Card>
            <form onSubmit={handleSubmit} >
                <h2>How would you rate your services with us ?</h2>
                <RatingSelect select={rating => setRating(rating)} />
                <div className={'input-group'}>
                    <input
                        placeholder={'Write a review'}
                        onChange={handleTextChange}
                        value={text}
                        type={'text'}
                    />
                    <Button type={"submit"} isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className={'message'}> {message} </div>}
            </form>
        </Card>
    )
}

export default FeedBackForm