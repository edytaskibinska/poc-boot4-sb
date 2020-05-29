import React, { FC } from 'react'
import "./dateStyle.scss"



interface DateInterface {
    date: string;

}

const Date: FC<DateInterface> = ({ date }) => {
    return (
        <sub className="date">{date}</sub>
    );
};
export default Date
