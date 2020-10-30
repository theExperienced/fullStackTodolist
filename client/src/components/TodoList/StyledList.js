import styled from 'styled-components';

const StyledList = styled.div`
    flex: 1;
    background-color: rgba(255,255,255,.995);
    padding: 3.2rem 2.8rem 4.3rem 2.8rem;
    box-shadow: 0 1rem 13px -.5rem rgba(0,0,0, .05), 0 1rem 2.7rem -.5rem rgba(0,0,0,.05);

    & > .todoList {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
        grid-auto-rows: minmax(10rem, auto);
        grid-gap: 1.7rem;
    }

    & > h2 {
        text-transform: uppercase;
        font-weight: 900;
        font-size: 1.95rem;
        margin-bottom: 3rem;
        color: rgba(0,0,0,.45647);
        line-height: 2;
        padding: 0 3.5rem;
        background-color: rgba(224, 48, 255, .152345);
        width: fit-content;
        border-radius: 0 8px 8px 8px;
        border-bottom: 2px solid hsla(291, 100%, 30%, .247);
    }
`;

export default StyledList;
