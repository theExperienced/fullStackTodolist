import styled from 'styled-components';

const StyledHeader = styled.div`
    align-items: center;
    background-color: rgba(224, 48, 255);
    background-image: linear-gradient(150deg, rgba(33, 255, 159, .87), transparent 50%);
    text-align: center;
    padding-top: 3.2rem;
    box-shadow: inset 0 -47px 0 -3px rgba(255,255,255, .7065641521);

    & > .headerContainer {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        margin: auto;
        width: 40%;

        & > h1 {
            text-transform: uppercase;
            color: rgba(255,255,255,.4575);
            font-weight: 900;
            line-height: 1;
            font-size: 4.15rem;
            font-family: 'Abril Fatface', cursive;

            &:first-child {
                margin-bottom: .252rem;
                align-self: flex-start;
                color: transparent;
                -webkit-background-clip: text;
                background-image: linear-gradient(130deg, rgba(255,255,255,.57) 35%, transparent);
            }
            
            &:last-child {
                align-self: flex-end;
                text-align:left;
                color: transparent;
                -webkit-background-clip: text;
                background-image: linear-gradient(-50deg, rgba(255,255,255,.7) 45%, transparent);
            }
        }
    }
`;

export default StyledHeader;
