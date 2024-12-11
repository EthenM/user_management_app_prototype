import { AuthProvider } from "../_authorization/auth-context";
import SideBar from "../_components/sidebar";

export default function ApplicationLayout({ children }) {
    return (
        <SideBar>
            {children}
        </SideBar>
    )
}
