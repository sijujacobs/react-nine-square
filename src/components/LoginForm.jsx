import { useRef, useEffect, forwardRef } from "react";
// import { forwardRef } from "react";
const LoginForm = forwardRef((props, ref) => {
    // const [fruits, setFruits] = ['Apple', 'Orange', 'Grapes', 'Banana'];

    const loginClickHandler = () => {
        console.log('LoginForm ::  loginClickHandler');
    }
    const userNameRef = useRef(null);
    useEffect(() => {
        userNameRef.current.focus();
    }, []);
    // const setFruits = () => {
    //     console.log('fruitOptions ----> ');
    //     return fruits.map((f) => <option value={f}>{f}</option>);
    // }
    // let coloursList = Object.keys(colours).map((k) => {
    // 	return (
    // 		<option key={k} value={k}>{colours[k]}</option>
    // 	)
    // }, this);

    return (
        <div id="loginForm">
            <input type="text" id="userName" ref={userNameRef}></input>
            <input type="text" id="password" ref={ref}></input>
            <button onClick={loginClickHandler}> Login</button>
        </div>
    )
})

export default LoginForm;