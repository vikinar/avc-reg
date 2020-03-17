const makeRequest  = (e) => {
    e.preventDefault()
    let firstName = document.querySelector('#firstName').target.value
    let lastName = document.querySelector('#lastName').target.value
    let email = document.querySelector('#email').target.value
    let password = document.querySelector('#password').target.value
    let l = document.querySelector('#lang')
    let lang = e.options[e.selectedIndex].value;
    let c = document.querySelector('#country')
    let country = e.options[e.selectedIndex].value;
    let a = document.querySelector('#age')
    let age = e.options[e.selectedIndex].value;
    fetch('https://www.avc-agbu.org/edu/login/index.php', {
        //	mode: 'no-cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
                    },
                    body: `firstname=${firstName}&lastname=${lastName}&email${email}&password=${password}&lang=${lang}&country=${country}&age=${age}`
                    }).then(() => {x
                      console.log('Logged in to moodle');
                    })
}

const form = document.querySelector('#form')
form.addEventListener('submit', () => makeRequest)
