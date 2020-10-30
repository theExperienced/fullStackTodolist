import styled from 'styled-components';

const StyledHeader = styled.div`
    ${'' /* display: flex; */}
    align-items: center;
    background-color: rgba(224, 48, 255);
    background-image: linear-gradient(150deg, rgba(33, 255, 159, .87), transparent 50%);
    ${'' /* background-image: linear-gradient(70deg, rgba(216, 125, 232, .3) 50%,rgba(82, 39, 89, .85)); */}
    text-align: center;
    padding-top: 3.2rem;
    ${'' /* padding: 6.5rem 4.3rem 2rem 4.3rem; */}
    ${'' /* box-shadow: inset 0 -30px 15px -20px rgba(255,255,255,.851), inset 0 -25px 5px -20px rgba(255,255,255,.831); */}
    box-shadow: inset 0 -47px 0 -3px rgba(255,255,255, .7065641521);
    ${'' /* border-bottom: 2px solid rgba(150, 150, 150, 1); */}

    & > .headerContainer {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        margin: auto;
        width: 40%;

        & > h1 {
            ${'' /* flex: 1; */}
            ${'' /* display: flex;
            justify-content: space-between; */}
            text-transform: uppercase;
            color: rgba(255,255,255,.4575);
            font-weight: 900;
            ${'' /* letter-spacing: 1px; */}
            ${'' /* transform: skew(-14deg, -1deg); */}
            ${'' /* text-shadow: 0 0 11px rgba(255,255,255,.14), 0 0 30px rgba(255,255,255,.04); */}
            line-height: 1;
            font-size: 4.15rem;
            ${'' /* font-family: 'Grenze Gotisch', cursive; */}
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
