import React, { createContext, useState } from 'react';

const ProviderContext = (props) => {
    const [state, setState] = useState({});

    return (
        <>
            <AppContext.Provider value={[state, setState]}>
                {props.children}
            </AppContext.Provider>
        </>
    );
}

export default ProviderContext;
export const AppContext = createContext();