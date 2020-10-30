import styled from 'styled-components';

const StyledForm = styled.div`
    flex: 2;
    padding: .47rem 0;
    border-top: 3px solid rgba(255,255,255,.16);
    border-bottom: 3px solid rgba(255,255,255,.2);

    & > form {
        display: flex;
    }

    & input {
        ${'' /* display: block; */}
        flex: 1;
        border-radius: 5px 0 0 5px;
        font-size: 1.2rem;
        padding: 0 .85rem;
        ${'' /* font-weight: 100; */}
        ${'' /* letter-spacing: 1px; */}
        color: rgba(0,0,0,.25);
        line-height: 4.7;
        box-shadow: 0 0 5px rgba(255,255,255,.5);
        transition: .25s;

        &:focus {
            color: rgba(0,0,0,.8);
            box-shadow: 0 0 3px 1px rgba(224, 48, 255,.85), 0 0 2px rgba(255,255,255,.45), 0 0 5px rgba(255,255,255,.45), 0 0 15px rgba(255,255,255,.65);
        }
    }

    & button {
        border-radius: 0 5px 5px 0;
        background: rgba(0,0,0,.7);
        color: rgba(255,255,255,.93);
        font-weight: 700;
        font-size: 1.4rem;
        padding: 0 1.75rem;
        text-transform: capitalize;
        transition: .2s;

        &:hover {
            background: rgba(33, 255, 159,.25);
        }
    }
`;

export default StyledForm;
