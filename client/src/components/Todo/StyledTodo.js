import styled from 'styled-components';

const StyledTodo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: rgba(255,255,255,.74);
    border-radius: 4px;
    border: 3px solid rgba(224, 48, 255,.1623186);
    padding: 1.4rem 1.2rem .7rem 1.2rem;
    box-shadow: 0 0px 0 0px rgba(0,0,0,.4);
    transition: .15s;

    &:hover {
        box-shadow: 5px 6px 5px -3px rgba(0,0,0,.3146);
        background-color: rgba(224, 48, 33,.0681);
        border: 3px solid rgba(224, 48, 255,.3858);

        &  > .buttons > button {
            border: 2px solid rgba(216, 125, 232, .5);
            color: rgba(0,0,0,.5);
        }
    }

    & > .content {
        margin-bottom: 1.5rem;
        text-transform: capitalize;
        font-weight: 700;
        text-align: justify;
        color: rgba(0,0,0,.5);
    }

    & > .buttons {
        margin-left: auto;
        width: fit-content;

        & > button {
            transition: .15s;
            border-radius: 5px;
            border: 2px solid transparent;
            font-weight: 700;
            text-transform: uppercase;
            color: rgba(0,0,0,.15);
            padding: .34rem .5rem;
            transition: .65s, background .2s;


            &:hover {
                background: rgba(216, 125, 232, .5);
            }

            &:first-child {
                margin-right: .4rem;
            }
        }
    }
`;

export default StyledTodo;
