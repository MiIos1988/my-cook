import { createContext, useState } from "react"


const ContextRootState = createContext(null)
const ContextDispatch = createContext(null)

function RootStoreContext ({children}){
    const [rootStore, setRootStore] = useState({
        testValue: 'Home',
        test2 :'testing'
    })

    return(
        <ContextRootState.Provider value={rootStore} >
            <ContextDispatch.Provider value={setRootStore}>
                {children}
            </ContextDispatch.Provider>

        </ContextRootState.Provider>
    )

}

export {RootStoreContext, ContextRootState, ContextDispatch}