var selected;

var form = document.getElementById('form')

var howManySelect = document.getElementById('howManySelect')

var submited = document.getElementById('submited')


const submit = () => {

    if(selected === undefined) {
        alert("Choose your rating")
        return
    }
    else {
        form.style.display = "none"

        howManySelect.innerText = "You selected " + selected + ' out of 5'

        submited.style.display = "block"
    }
}

const select = (selectedButton) => {
    for(let i=0;i<5;i++) {
        let button = document.getElementsByTagName('button')[i]
        button.classList.remove('chosen')
    }
    selectedButton.classList.add('chosen')


    selected = selectedButton.textContent;
}

document.getElementById("submit").addEventListener('click', submit)
