//Animação carrinho
function cartAnimation() {
    const stylesheet = document.styleSheets[0];
    let elementRules;

    for (let i = 0; i < stylesheet.cssRules.length; i++) {
        if (stylesheet.cssRules[i].selectorText === '.cartPopUp') {
            elementRules = stylesheet.cssRules[i];
        }
    }

    if (elementRules.style.display === 'none') {
        elementRules.style.display = 'flex';
    }
    else {
        elementRules.style.display = 'none';
    }
}

//Mascara de numero
const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    return value
}

function changeClass() {
    const stylesheet = document.styleSheets[0];
    let elementRules;
    
    for (let i = 0; i < stylesheet.cssRules.length; i++) {
        if (stylesheet.cssRules[i].selectorText === '#oneMonthFilter') {
            elementRules = stylesheet.cssRules[i];
        }
    }

    if (elementRules.style.background === '#F3F5F8') {
        elementRules.style.background = 'black';
    }
    else {
        elementRules.style.background = '#F3F5F8';
    }
}

