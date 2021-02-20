import React, {useState} from "react";
import {Rating, RatingValueType} from "./Rating";

export default {
    title: 'Rating',
    component: Rating
}
export const Ratings = () => <Rating value={1} onClick={x => x}/>;
export const Rating2 = () => <Rating value={2} onClick={x => x}/>;
export const Rating3 = () => <Rating value={3} onClick={x => x}/>;
export const Rating4 = () => <Rating value={4} onClick={x => x}/>;
export const Rating5 = () => <Rating value={5} onClick={x => x}/>;

const RatingMemo=React.memo(Rating)

export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingValueType>(3)
    return <RatingMemo value={rating} onClick={setRating}/>
}