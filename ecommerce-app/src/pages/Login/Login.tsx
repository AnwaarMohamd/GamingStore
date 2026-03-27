import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '@/features/auth/authSlice';
import { AppDispatch, RootState } from '@/app/store/store';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';

const Login: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const location = useLocation();
    const { isLoading, error } = useSelector((state: RootState) => state.auth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const from = (location.state as any)?.from?.pathname || '/';

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(loginStart());

        // Mock login
        if (email === 'user@gaming.com' && password === 'password') {
            dispatch(loginSuccess({ user: { id: '1', name: 'Gamer', email }, token: 'mock-token' }));
            navigate(from, { replace: true });
        } else {
            dispatch(loginFailure('Invalid email or password'));
        }
    };

    return (
        <Layout>
            <div className="container mx-auto py-20 max-w-md">
                <h1 className="text-3xl font-bold mb-6">Login</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="p-3 rounded bg-secondary text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="p-3 rounded bg-secondary text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {error && <p className="text-danger">{error}</p>}
                    <button
                        type="submit"
                        className="bg-accent hover:bg-indigo-600 px-6 py-3 rounded-lg transition-colors"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
                <p className="mt-4 text-gray-400">
                    Don't have an account? <Link to="/register" className="text-accent underline">Register</Link>
                </p>
            </div>
        </Layout>
    );
};

export default Login;