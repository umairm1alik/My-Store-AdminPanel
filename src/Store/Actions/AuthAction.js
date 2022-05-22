import { auth } from "../../Config/Firebase";

export const doLogin = (user) => async (dispatch) => {


    try {
        const userCredential = await auth.signInWithEmailAndPassword(
            user.email,
            user.password
        );
        var userData = userCredential.user;

        if (userData) {
            dispatch({
                type: "LOGIN",
                payload: userData,
            });
        }

    } catch (error) {
        alert(error)
    }
}

export const doLogout = () => async (dispatch) => {
    try {
        
        await auth.signOut();
        dispatch({
            type: "LOGOUT",
        });
    } catch (error) {

        alert(error)
    }
};