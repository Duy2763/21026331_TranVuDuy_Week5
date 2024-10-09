import { createContext, useContext, useState } from "react";


const AccountContext = createContext();

export function useAccount() {
    return useContext(AccountContext);
}

export function AccountProvider({ children }) {
    const [accounts, setAccounts] = useState([
        {userName: '1', email: '1', password: '1'}]);

    const addAccount = (account) => {
        setAccounts([...accounts, account])
    }

    const checkAccount = (email, password) => {
        return accounts.some(acc => acc.email === email && acc.password === password);
    }

    

    return (
        <AccountContext.Provider value={{accounts, addAccount, checkAccount}}>
            { children }
        </AccountContext.Provider>
    );
}