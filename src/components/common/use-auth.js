import { useContext } from "react";
import { AppContext } from "../context/provider";

export const useAuth = () => {
    const [state, setState] = useContext(AppContext);
    const isAuthenticated = state.name && state.email && state.age >= 18;
    const onAuthChange = () => {
        if (isAuthenticated) {
            setState({ ...state, user: state.email })
        }
    };

    return { onAuthChange, isAuthenticated };
}