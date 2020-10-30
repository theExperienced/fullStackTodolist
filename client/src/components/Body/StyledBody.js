import styled from 'styled-components';

const StyledBody = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background:rgba(0,0,0,.03);
    grid-gap: 5rem;
    padding: 5.7rem 4rem 7rem 4rem;

    & img {
        display: block;
    }
`;

export default StyledBody;