import React, { FC } from 'react'
import DateStyled from "./DateStyle"



interface DateInterface {
    date: string;

}

const Date: FC<DateInterface> = ({ date }) => {
    return (
        <DateStyled className="date">{date}</DateStyled>
    );
};
export default Date
