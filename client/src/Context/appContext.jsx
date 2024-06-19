import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(true);

    const changeTheme = () => setTheme(!theme)


    const appContext = {
        theme, changeTheme
    }

    return (
        <AppContext.Provider value={appContext}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;