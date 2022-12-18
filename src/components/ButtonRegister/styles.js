import styled, {css}  from 'styled-components';

export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 22px;
    position: relative;
    color: #FFFFFF;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;
    
    ${({variant}) => variant !== "primary" && css`
        min-width: 167px;
        height: 40px;
        background: rgb(86, 86, 86);
        cursor: point;
        transition:  background-color 1s;
       
        color: rgb(255, 255, 255);
        &::after {
            content: '';
            position: absolute;
            border: 1px solid rgb(86, 86, 86);
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 25px;
            
        }
        &:hover,focus {
            background-color: rgb(134, 71, 173);
            box-shadow:0 0 50px rgb(134, 71, 173);

        }
    `}

`