import React, { useState } from 'react';

const TutorLogin = ({ onPageChange }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('');
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [forgotEmail, setForgotEmail] = useState('');
    const [forgotStatus, setForgotStatus] = useState('');

    const handleLogin = async () => {
        // Make API call to tutorprofile.php with email and password
        try {
            const response = await fetch('http://localhost/tutorprofile.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                const data = await response.json();
                setLoginStatus(data.message); // Assuming 'message' is returned from the backend
                if (data.success) {
                    // If login successful, navigate to Tutor.jsx
                    onPageChange('Tutor');
                }
            } else {
                throw new Error('Login failed');
            }
        } catch (error) {
            console.error('Error:', error);
            setLoginStatus('Login failed');
        }
    };

    const handleForgotPassword = async () => {
        // Make API call to forgotpassword.php to recover password via email
        try {
            const response = await fetch('http://localhost/forgotpassword.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: forgotEmail })
            });

            if (response.ok) {
                const data = await response.json();
                setForgotStatus(data.message); // Message from backend, e.g., "Recovery email sent"
            } else {
                throw new Error('Recovery failed');
            }
        } catch (error) {
            console.error('Error:', error);
            setForgotStatus('Failed to send recovery email');
        }
    };

    return (
        <div style={styles.loginContainer}>
            <h1 style={styles.header}>Tutor Login</h1>
            {isForgotPassword ? (
                <div>
                    <h3 style={styles.label}>Forgot Password</h3>
                    <input
                        type="email"
                        value={forgotEmail}
                        onChange={(e) => setForgotEmail(e.target.value)}
                        placeholder="Enter your email"
                        style={styles.input}
                    />
                    <button onClick={handleForgotPassword} style={styles.button}>
                        Send Recovery Email
                    </button>
                    {forgotStatus && <p style={styles.forgotStatus}>{forgotStatus}</p>}
                    <button onClick={() => setIsForgotPassword(false)} style={styles.secondaryButton}>
                        Back to Login
                    </button>
                </div>
            ) : (
                <div>
                    <div style={styles.inputContainer}>
                        <label style={styles.label}>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.inputContainer}>
                        <label style={styles.label}>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={styles.input}
                        />
                    </div>
                    <button onClick={handleLogin} style={styles.button}>Login</button>
                    {loginStatus && <p style={styles.loginStatus}>{loginStatus}</p>}
                    <p onClick={() => setIsForgotPassword(true)} style={styles.forgotPasswordLink}>
                        Forgot Password?
                    </p>
                </div>
            )}
        </div>
    );
};

const styles = {
    loginContainer: {
        width: '350px',
        height: 'auto',
        margin: '50px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
    },
    header: {
        marginBottom: '20px',
        textAlign: 'center',
    },
    inputContainer: {
        marginBottom: '15px',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
    },
    input: {
        width: 'calc(100% - 10px)',
        padding: '5px',
        border: '1px solid #ccc',
        borderRadius: '3px',
    },
    button: {
        display: 'block',
        width: '100%',
        padding: '8px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer',
        marginTop: '10px',
    },
    secondaryButton: {
        display: 'block',
        width: '100%',
        padding: '8px',
        backgroundColor: '#6c757d',
        color: '#fff',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer',
        marginTop: '10px',
    },
    loginStatus: {
        marginTop: '15px',
        color: '#900',
    },
    forgotPasswordLink: {
        marginTop: '10px',
        color: '#007bff',
        cursor: 'pointer',
        textAlign: 'center',
    },
    forgotStatus: {
        marginTop: '15px',
        color: '#007bff',
    },
};

export default TutorLogin;

