import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import OnboardingPage from './pages/OnboardingPage';
import Detail from './pages/Detail';
import OrderRequest from './pages/OrderRequest';
import WellcomePage from './pages/WellcomePage';
import ByePage from './pages/ByePage';
import ContactPage from './pages/ContactPage';
import ProviderContext from './components/context/provider';


const Router = () => (
    <BrowserRouter>
        <ProviderContext>
            <Routes>
                <Route index element={<WellcomePage />} />
                <Route path="/login/" element={<LoginPage />} />
                <Route path="/onboarding/" element={<OnboardingPage />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/order-request/" element={<OrderRequest />} />
                <Route path="/bye/" element={<ByePage />} />
                <Route path='/contact/' element={<ContactPage />} />
            </Routes>
        </ProviderContext>
    </BrowserRouter>
);

export default Router;

