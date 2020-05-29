import React, { FC, ReactNode } from 'react'
import "./boxStyle.scss"



interface BoxInterface {
    children: ReactNode;
    color: string;

}

const Box: FC<BoxInterface> = ({ children, color }) => {
    return (
        <div className={`box ${color}`}>{children}</div>
    );
};
export default Box
