import { createContext, useContext, useState } from "react"



const DashbordContext = createContext()


const DashbordContextProvider = ({children}) => {

    
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

    const ToggleSidebar = () => {
        sidebarIsOpen === true ? setSidebarIsOpen(false) : setSidebarIsOpen(true);
    }


    return (
        <DashbordContext.Provider value={{
            sidebarIsOpen,
            ToggleSidebar
        }}>
            {children}
        </DashbordContext.Provider>
    )


}

// custom hook for acsess to context
export const useDashbordContext = () => {
    return useContext(DashbordContext)
}

export default DashbordContextProvider