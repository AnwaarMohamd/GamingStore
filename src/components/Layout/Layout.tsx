import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Toast from '@/components/UI/Toast';

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Toast />
        </div>
    );
};

export default Layout;