import { useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';

function AuthButton() {
    let navigate = useNavigate();
    let auth = useAuth();

    return auth.user ? (
        <p>
            Welcome!{""} { auth.user}
            <button onClick={() => { auth.signout(() => navigate('/')) }}>Sign out</button>
        </p>
    ) : (<p>You are not logged in.</p>);
};

export default AuthButton;