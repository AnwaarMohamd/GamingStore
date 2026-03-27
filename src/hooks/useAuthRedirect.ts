import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';
import { useNavigate, useLocation } from 'react-router-dom';

export const useAuthRedirect = () => {
    const user = useSelector((state: RootState) => state.auth.user);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!user) {
            navigate('/login', { state: { from: location } });
        }
    }, [user, navigate, location]);
};