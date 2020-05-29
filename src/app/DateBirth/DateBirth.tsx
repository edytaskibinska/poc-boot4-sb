import React, { FC } from 'react'
import "./dateBirthStyle.scss"



interface DateBirthInterface {
    date: string;

}

const DateBirth: FC<DateBirthInterface> = ({ date }) => {
    return (
        <sub  className="date-birth">{date}</sub>
    );
};
export default DateBirth
