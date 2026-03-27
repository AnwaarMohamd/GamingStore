import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/app/store/store';
import { hideToast } from '@/features/ui/uiSlice';

const Toast: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const message = useSelector((state: RootState) => state.ui.toastMessage);

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => dispatch(hideToast()), 3000);
            return () => clearTimeout(timer);
        }
    }, [message, dispatch]);

    if (!message) return null;

    return (
        <div className="fixed bottom-6 right-6 bg-accent text-white px-6 py-3 rounded-lg shadow-lg animate-slide-in">
            {message}
        </div>
    );
};

export default Toast;