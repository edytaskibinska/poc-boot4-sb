import styled from '@emotion/styled'
import vars from "../../globalStyles/variables"

export const BoxStyled = styled.div`
    padding: 20px;
    margin: 20px;
    border-radius: 5px;

    &.grey {
        background-color: ${vars.color.gray300};
    }
    &.red {
        background-color: ${vars.color.red};
    }
`