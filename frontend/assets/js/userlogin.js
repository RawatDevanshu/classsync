// window.location = "/view/";
const getCookie = (name) => {      // get cookie by name
    console.log("cookie Accessed");
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
const delete_cookie = () => {       // logout function
    fetch(`https://classsync-3ht1.onrender.com/user/logout`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getCookie('accessToken')}`
        },
    }).then(response => {
        if (!response.ok) {
            console.error(response);
            throw new Error('Error in logging out');
        }
        // window.location.href = '/login/';
        return response.json();
    }).then(() => {
        // remove after the process is done ( domain name is aquired)
        document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "role=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.reload();
    }).catch(error => {
        // window.location.href = '/login/';
        console.error('Error:', error);
    });
}
const validate_cookie = (refreshToken) => {
    // let butt = document.createElement("button");
    // butt.className = "ms-auto fw-bold h4 px-4 btn btn-lg btn-danger rounded-pill float-end";
    // butt.id = "logout_button";
    // butt.innerHTML = "Logout";
    // butt.addEventListener("click", delete_cookie);
    // document.getElementsByTagName('nav')[0].appendChild(butt);
    // return;

    //::::::::::::::::::::::: update after the process is done ( domain name is aquired):::::::::::::::::::::::

    if (document.cookie.includes("refreshToken")) {
        if (!document.cookie.includes("accessToken")) {
            fetch(`https://classsync-3ht1.onrender.com/user/refresh-token`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            }).then(response => {
                if (!response.ok) {
                    throw new Error('Error in fetching new access token');
                }
                return response.json();
            }).then(() => {
                let butt = document.createElement("button");
                butt.className = "ms-auto fw-bold h4 px-4 btn btn-lg btn-danger rounded-pill float-end";
                butt.id = "logout_button";
                butt.innerHTML = "Logout";
                butt.addEventListener("click", delete_cookie);
                document.getElementsByTagName('nav')[0].appendChild(butt);
            }).catch(error => {
                window.location.href = '/login/';
                display_error("Email or password is incorrect");
                console.error('Error:', error);
            });
        }
        else {
            let butt = document.createElement("button");
            butt.className = "ms-auto fw-bold h4 px-4 btn btn-lg btn-danger rounded-pill float-end";
            butt.id = "logout_button";
            butt.innerHTML = "Logout";
            butt.addEventListener("click", delete_cookie);
            document.getElementsByTagName('nav')[0].appendChild(butt);
        }
    }
    else{
        delete_cookie();
        window.location.href = '/login/';
    }
}
document.addEventListener('DOMContentLoaded', () => {
    validate_cookie();
});