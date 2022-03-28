const FeedBackStat = ({feedBack}) => {
    //Count Rating
    let avarege = feedBack.reduce((acc, cur) => {
        return acc + cur.rating

    }, 0) / feedBack.length
    return <div className={'feedback-stats'}>
        <h4>{feedBack.length} Reviews</h4>
        <h4>Average Rating: {isNaN(avarege)? 0: avarege.toFixed(1)}</h4>
    </div>
}

export default FeedBackStat;