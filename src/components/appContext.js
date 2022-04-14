import React, { useEffect, useReducer } from 'react'
import '../@types/@contextTypes'

/** @type {React.Context<AppContextProvider>} */
export const Context = React.createContext({})


const AppContext = ({ children }) => 
{
    const reducer = (state, action) => 
    {
        switch (action.type) 
        {
            case 'setFile':
                return { ...state, file: action.content}

            default:
                return state
        }
    }
    
    /** @type {[state: AppContextData, dispatch: React.Dispatch<DispatchAction>]} */
    const [state, dispatch] = useReducer(reducer, {
        file: null,
        text: require('../text.json')
    })

    return (
        <Context.Provider value={{
                data: state,
                dispatch: {
                        setFile: (file) => dispatch({ type: 'setFile', content: file })
                    }
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default AppContext
