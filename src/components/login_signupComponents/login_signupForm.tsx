import {useEffect, useState} from 'react';
import './loginStyles.css';
import supabase from '../../supabaseClient';
import { User } from '@supabase/supabase-js';

export default function LoginSignupForm() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [user, setUser] = useState<User | null>(null);
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);

const handleLogin = async () => {
    setError("");
    setLoading(true);
    const {data, error} = await supabase.auth.signInWithPassword({email, password})
    setLoading(false);

    if (error) return setError(error.message);

    setUser(data.user ?? null);
}

const handleSignUp = async () => {
    setError("");
    setLoading(true);
    const {data, error} = await supabase.auth.signUp({email, password})
    setLoading(false);

    if (error) return setError(error.message);

    setUser(data.user ?? null);
}

const handleLogOut= async ()=>{
    setError("");
    setLoading(true);
    const {error} = await supabase.auth.signOut();
    setLoading(false);
    if (error) return setError(error.message);
    setUser(null);
  }

useEffect(() => {

    const init = async () => {
      // 1. Get the current session from Supabase
      const { data: { session } } = await supabase.auth.getSession();
      // 2. If a user is logged in, setUser updates the state with user data, else null
      setUser(session?.user ?? null);
    };

    init();

    // 3. Listen to authentication state changes (login, logout, refresh)
    const { data: { subscription } } =
      supabase.auth.onAuthStateChange((_event, session) => {
        // 4. Update the user state whenever auth changes
        setUser(session?.user ?? null);
      });

    // 5. Cleanup: unsubscribe when component unmounts
    return () => subscription.unsubscribe();
  }, []);

    return (
        <div className="container">

            {!user ? (
                <div className="login-signup-card">
                    <h2>Prijava / Registracija</h2>
                    {error && <p className="error">{error}</p>}
                    {loading?"Molimo pričekajte ..":""}
                    <input 
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Lozinka"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <div className="button-group">
                        <button className="login"
                                onClick={handleLogin}
                                disabled={loading || !email || !password}
                                >
                                Prijavi se
                        </button>
                        <button className="signup" 
                                onClick={handleSignUp}
                                disabled={loading || !email || !password}
                                >
                                Kreiraj račun
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    <p>Dobrodošli, {user.email}!</p>
                    <button onClick={handleLogOut}>Odjavi se</button>
                </div>
            )}
        </div>
    );
}