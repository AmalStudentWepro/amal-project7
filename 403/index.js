const form = document.forms.namedItem('register')
const req_labels = form.querySelectorAll('.required')
const input = document.querySelector('input')

const patterns = {
    name: /^[a-z а-я ,.'-]+$/i,
    surname: /^[a-z а-я ,.'-]+$/i,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    age: /^(?:1[01][0-9]|120|1[89]|[2-9][0-9]?)$/,
};

input.onkeyup = (e) => {
    let val = e.target.value;
    let parent = e.target.parentElement;
    let fieldName = e.target.getAttribute('name');

    if (patterns[fieldName].test(val)) {
        parent.classList.remove('error');
    } else {
        parent.classList.add('error');
    }
};
    


form.onsubmit = (e) => {
    e.preventDefault()
    let isError = false


    req_labels.forEach(lbl => {
        const inp = lbl.firstElementChild.nextElementSibling
        const warning_span = lbl.lastElementChild

        if(inp.value.length === 0){
            isError = true
            lbl.classList.add('error')
            warning_span.innerHTML = `Plase enter ${inp.name}`
        } else {
            lbl.classList.remove('error')
            warning_span.innerHTML = `Need to fill`
        }
    })

    if(!isError) {
        submit()
        return
    }

    alert('ERROR!')

}

function submit() {
    const user = {}

    const fm = new FormData(form)

    fm.forEach((val, key) => user[key] = val)

    console.log(user)
}
