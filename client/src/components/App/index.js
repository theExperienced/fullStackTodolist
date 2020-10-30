import React from 'react';
import { useQuery } from 'react-query';

// import { api, apiRoutes } from '../utils/api';

import { StoreProvider } from '../../store';
import StyledApp, { NormalizedStyle } from './StyledApp';

import Header from '../Header';
import Body from '../Body';



// const fetchMetadata = async purpose => {
//     console.log('inside fetch data for context provider', purpose)
//     return  api.get(`${apiRoutes.metadata.getMonthsAndYears}?purpose=${purpose}`).then(res => {
//         console.log('RESRESRESRES', res);
//         return res;
//     });
// }

// const useAllMetadata =  fetchMetadata => {
//     const lessonsMetadata = useQuery([sections.lessons], fetchMetadata);
//     const shiftsMetadata = useQuery([sections.shifts], fetchMetadata);
//     const expensesMetadata = useQuery([sections.expenses], fetchMetadata);

//     console.log('metadating')
//     const returnedMetadata = {
//         lessons: lessonsMetadata, 
//         shifts: shiftsMetadata, 
//         expenses: expensesMetadata
//     };
//     // console.log('INSIDE USE ALL QUERUIES', shouldShow[sections.lessons], shouldShow[sections.shifts], shouldShow[sections.expense])
//     return returnedMetadata;
// };



////////////




const App = () => {
    return (
        <StoreProvider>
            <NormalizedStyle />                                 {/*  /////THINK SO        */}
            <StyledApp>
                <Header />
                <Body />
            </StyledApp>
        </StoreProvider>
    );
}

export default App;