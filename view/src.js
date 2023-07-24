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

    fetch(baseUrl, {
        method: 'POST',
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: usernameInput.value,
            password: passwordInput.value
            })
        })
        .then(response => response.json()).then(data => {
            console.log(data)
            document.getElementById("response").textContent += data.authorization;
        });
    // if(res.status === 200){
    //     document.getElementById("response").textContent += res;
    //     console.log(res);
    //     // location.href = "/landingPage";

    // } else{
    //     alert('Invalid Credentials');
    //     return ;
    // }
}