import React from 'react';
import TodoForm from '../TodoForm';

import StyledHeader from './StyledHeader';


const Header = () => {
    return (
        <StyledHeader>
            <div className='headerContainer'>
                <h1>todo</h1><TodoForm /><h1>list</h1>
            </div>
        </StyledHeader>
    );
}

export default Header;