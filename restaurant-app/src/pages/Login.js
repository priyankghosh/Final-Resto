import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../context/AuthProvider";
import { createAPIEndpoint, ENDPIONTS } from "../api/";
import axios from 'axios';
import OrderForm from '../components/Order/OrderForm';
import { useNavigate } from "react-router-dom";

const LOGIN_URL = 'http://localhost:53688/api/Admin';


const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [admin, setAdmin] = useState('');
    const auth = AuthContext();

    const [uid, setUid] = useState('');
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const resetdata=()=>{ window.location.reload(); }

    useEffect(() => {
        createAPIEndpoint(ENDPIONTS.ADMIN).fetchById(uid)
            .then(res => {
                let adminList = res.data.map(item => ({
                    uid: item.adminId,
                    user: item.adminUsername,
                    pwd: item.adminPass
                }));
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [uid, user, pwd])

    const nav = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ adminId: uid, adminUsername: user, adminPass: pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            //console.log(response)
            console.log(JSON.stringify(response?.data));
            // setAuth({ uid, user, pwd});
            setUid(uid);
            setUser(user);
            setPwd(pwd);
            setSuccess(true);


            nav("/Order")

        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section className='section'>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="/OrderForm">Go to Home</a>
                    </p>
                </section>
            ) : (
                <section className='section'>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

                    <form className='form' onSubmit={handleSubmit}>
                        <h2>Log In</h2>

                        <div className='form-row'>
                            <label htmlFor="username" className='form-label'>User ID:</label>
                            <input
                                className='form-input'
                                type="text"
                                id="uid"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUid(e.target.value)}
                                value={uid}
                                required
                            />
                        </div>

                        <div className='form-row'>
                            <label htmlFor="username" className='form-label'>Username:</label>
                            <input
                                className='form-input'
                                type="text"
                                id="username"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                required
                            />
                        </div>

                        <div className='form-row'>
                            <label htmlFor="password" className='form-label'>Password:</label>
                            <input
                                className='form-input'
                                type="password"
                                id="password"
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required
                            />
                        </div>

                        <button className='btn mx-5'>Sign In</button>

                        <button className='btn ml-2' onClick={() => resetdata()}>Reset</button>

                    </form>
                    {/* <p>
                        Need an Account?<br />
                        <span className="line">
                            // { {put router link here} }
                            <a href="#">Sign Up</a>
                        </span>
                    </p> */}
                </section>
            )}
        </>
    )
}

export default Login
