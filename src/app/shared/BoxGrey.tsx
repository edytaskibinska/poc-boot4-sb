import React, { FC, ReactNode } from 'react'
import "./BoxGreyStyle.scss"



interface BoxGreyInterface {
    children: ReactNode;

}

const BoxGrey: FC<BoxGreyInterface> = ({ children }) => {
    return (
        <div className="box-grey">{children}</div>
    );
};
export default BoxGrey
