import React from 'react';

import { StoreProvider } from '../../store';
import StyledApp, { NormalizedStyle } from './StyledApp';

import Header from '../Header';
import Body from '../Body';


const App = () => {
    return (
        <StoreProvider>
            <NormalizedStyle />                     
            <StyledApp>
                <Header />
                <Body />
            </StyledApp>
        </StoreProvider>
    );
}

export default App;