import Card from "../Shared/Card";
import {useState} from "react";
import Button from "../Shared/Button";

const FeedBackForm = () => {
    const [text, setText] = useState('');
    const handleTextChange = (e) => {
        setText(e.target.value);
    }
    return (
        <Card>
            <form>
                <h2>How would you rate your services with us ?</h2>
                <div className={'input-group'}>
                    <input
                        placeholder={'Write a review'}
                        onChange={handleTextChange}
                        value={text}
                        type={'text'}
                    />
                    <Button>Send</Button>
                </div>
            </form>
        </Card>
    )
}

export default FeedBackForm