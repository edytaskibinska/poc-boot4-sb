import React, { FC, ReactNode } from 'react'

import { BoxStyled } from "./BoxStyle"


interface BoxInterface {
    children: ReactNode;
    color: string;

}

const Box: FC<BoxInterface> = ({ children, color }) => {
    return (
        <BoxStyled className={`${color}`}>{children}</BoxStyled>
    );
};
export default Box
