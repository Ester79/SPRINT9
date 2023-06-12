import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/common/PrivateRoute';
import { useAuth } from './components/common/use-auth';
import ByePage from './pages/ByePage';
import ContactPage from './pages/ContactPage';
import Detail from './pages/Detail';
import LoginPage from './pages/LoginPage';
import OnboardingPage from './pages/OnboardingPage';
import OrderRequest from './pages/OrderRequest';
import WellcomePage from './pages/WellcomePage';


const Router = () => {
    const { onAuthChange, isAuthenticated } = useAuth();
    useEffect(() => {
        onAuthChange();
    }, [isAuthenticated]);

    return (
        <BrowserRouter>

            <Routes>
                <Route index element={<WellcomePage />} />
                <Route path="/login/" element={<LoginPage />} />


                <Route path="/onboarding/" element={<PrivateRoute component={OnboardingPage} />} />
                <Route path="/detail/:id" element={<PrivateRoute component={Detail} />} />
                <Route path="/order-request/" element={<PrivateRoute component={OrderRequest} />} />
                <Route path="/bye/" element={<ByePage />} />
                <Route path='/contact/' element={<PrivateRoute component={ContactPage} />} />
            </Routes>

        </BrowserRouter>
    )
};

export default Router;

