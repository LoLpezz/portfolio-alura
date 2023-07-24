const form = document.querySelector("[data-form]")
const nome = document.querySelector("[data-nome]")
const email = document.querySelector("[data-email]")
const assunto = document.querySelector("[data-assunto]")
const mensagem = document.querySelector("[data-mensagem]")

const btn = document.querySelector("[data-btn]")

const input = document.querySelectorAll("[data-input]")
const erro = document.querySelectorAll("[data-erro]")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(input[0].value === ""){
        console.log("Por favor, preencha seu nome.")
        setError(0)
        return
    }else{
        removerErro(0)
    }

    if(input[1].value === "" || !validarEmail(email)){
        console.log("Por favor, preencha seu email.")
        setError(1)
        return
    }else{
        removerErro(1)
    }

    if(input[2].value === ""){
        console.log("Por favor, diga o assunto.")
        setError(2)
        return
    }else{
        removerErro(2)
    }

    if(input[3].value === ""){
        console.log("Por favor, escreva uma mensagem.")
        setError(3)
        return
    }else{
        removerErro(3)
    }

    form.submit();
})

// Função que valida e-mail
function validarEmail(email){
    // criar uma regex para validar email
    const emailRegex = new RegExp(
        //usuario12@host.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )

    if(emailRegex.test(email)){
        return true;
    }

    return false;
    
}

function setError(index){
    input[index].style.border = "1px solid #e63636"
    erro[index].style.display = "block"
    
}

function removerErro(index){
    input[index].style.border = ""
    erro[index].style.display = "none"
}