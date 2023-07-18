const getBtn = document.getElementById('submit');
const usernameInput = document.getElementById('uname');
const passwordInput = document.getElementById('password');

const baseUrl = "http://localhost:8000/login"
getBtn.addEventListener('click', postInfo);

async function postInfo(e) {
    e.preventDefault()
    if(usernameInput.value === '' || passwordInput.value === ''){
    alert('username or password must be filled!')
    return ;  
    }

    const res = await fetch(baseUrl, {
        method: 'POST',
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: usernameInput.value,
            password: passwordInput.value
            })
        })
    if(res.redirected){
        location.href = res.url;

    } else{
        alert('Invalid Credentials');
        return ;
    }
}