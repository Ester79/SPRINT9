import { useAuth } from './use-auth';

const PrivateRoute = ({ component: Component }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated && <Component />;
};

export default PrivateRoute;