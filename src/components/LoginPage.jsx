import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/colors.scss';
import '../styles/index.css';

const LoginPage = () => {
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here
        console.log('Role:', role);
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[var(--sky-blue)] p-4">
            <motion.div
                className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-6 text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                    {/* Role Selection */}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Select Role</label>
                        <select
                            value={role}
                            onChange={handleRoleChange}
                            className="w-full p-2 border rounded"
                            required
                        >
                            <option value="" disabled>Select your role</option>
                            <option value="STUDENT">STUDENT</option>
                            <option value="ALUMNI">ALUMNI</option>
                        </select>
                    </div>

                    {/* Email ID */}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Registered Email ID</label>
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>

                    <div className='flex justify-center'>
                        <button
                            type="submit"
                            className="primary-btn"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default LoginPage;
