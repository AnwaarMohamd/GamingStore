import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '@/features/auth/authSlice';
import { AppDispatch } from '@/app/store/store';
import { useNavigate, Link } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';

const Register: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Mock registration
        dispatch(loginSuccess({ user: { id: '2', name, email }, token: 'mock-token' }));
        navigate('/');
    };

    return (
        <Layout>
            <div className="container mx-auto py-20 max-w-md">
                <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="p-3 rounded bg-secondary text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
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
                    <button
                        type="submit"
                        className="bg-accent hover:bg-indigo-600 px-6 py-3 rounded-lg transition-colors "
                    >
                        Register
                    </button>
                </form>
                <p className="mt-6 text-gray-400 text-center ">
                    Already have an account? <Link to="/login" className="text-accent underline">Login</Link>
                </p>
            </div>
        </Layout>
    );
};

export default Register;