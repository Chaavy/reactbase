export const GetAuthorizationAction = (userName, password, dispatch) => {
    //TODO: call Authorization API

    if (userName ==='juan' && password === '123') {

        const data = true;
        dispatch(Authorization(data));
        return true;
    } 
    dispatch(Authorization(false));
    return false;
};

export const Authorization = data => {
    return {type: "AUTHORIZATION_VALID_TOKEN", value: data };
};