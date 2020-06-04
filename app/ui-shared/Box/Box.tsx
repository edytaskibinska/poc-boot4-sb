/** @flow */

/**
 * Computes the difference between two array references. 
 * @name Box 
 * @example
 * import React from 'react';
 * import Box from '@bit/upsideodev-ui.juliette-business.box';
 *
 * export default (
 *	<Box color="red">Happy box</Box>
 *)
 */

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
