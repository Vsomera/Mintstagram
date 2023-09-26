const Register = () => {
    return (
        <>
            <div className="registration">
                <div className="register-container">

                    <div className="auth-title">
                        <h1>Registration</h1>
                    </div>

                    <div className="auth-container">
                        <div className="auth-input">
                            <input type="text" required />
                            <span>U s e r n a m e</span>
                        </div>

                        <div className="auth-input">
                            <input type="text" required />
                            <span>E m a i l</span>
                        </div>

                        <div className="auth-input" >
                            <input type="password" required />
                            <span>P a s s w o r d</span>
                        </div>
                        <div className="auth-input" >
                            <input type="password" required />
                            <span>C O N F I R M - P a s s w o r d</span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Register