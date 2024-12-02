//ex1

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("guessForm");
    const result = document.getElementById("result");
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const userGuess = parseInt(document.getElementById("guess").value, 10);

        if (userGuess === randomNumber) {
            result.textContent = " Parabéns, você acertou!";
            result.style.color = "green";
        } else {
            result.textContent = " Tente novamente!";
            result.style.color = "red";
        }
    });
});

//ex2

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("bissextoForm");
    const result = document.getElementById("result");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 
        const year = parseInt(document.getElementById("year").value, 10);

      
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            result.textContent = ` O ano ${year} é bissexto!`;
            result.style.color = "green";
        } else {
            result.textContent = ` O ano ${year} não é bissexto.`;
            result.style.color = "red";
        }
    });
});

//ex3
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("mediaForm");
    const result = document.getElementById("result");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        
        const nota1 = parseFloat(document.getElementById("nota1").value);
        const nota2 = parseFloat(document.getElementById("nota2").value);
        const nota3 = parseFloat(document.getElementById("nota3").value);
        const nota4 = parseFloat(document.getElementById("nota4").value);

        
        const media = (nota1 + nota2 + nota3 + nota4) / 4;

        
        if (media >= 7) {
            result.textContent = ` Aprovado! Sua média é ${media.toFixed(2)}.`;
            result.style.color = "verde";
        } else if (media >= 5) {
            result.textContent = ` Recuperação! Sua média é ${media.toFixed(2)}.`;
            result.style.color = "laranja";
        } else {
            result.textContent = ` Reprovado! Sua média é ${media.toFixed(2)}.`;
            result.style.color = "vermelho";
        }
    });
});

//ex4

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("gorjetaForm");
    const result = document.getElementById("result");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const valorConta = parseFloat(document.getElementById("valorConta").value);
        const satisfacao = parseFloat(document.getElementById("satisfacao").value);

        if (isNaN(valorConta) || isNaN(satisfacao)) {
            result.textContent = "Por favor, preencha todos os campos corretamente.";
            result.style.color = "red";
            return;
        }

      
        const gorjeta = valorConta * satisfacao;
        const total = valorConta + gorjeta;

      
        result.textContent = ` O valor da gorjeta é de: R$ ${gorjeta.toFixed(2)} e o Total: R$ ${total.toFixed(2)}`;
        result.style.color = "black";
    });
});


//ex5

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("saudacaoBtn");
    const result = document.getElementById("result");

    button.addEventListener("click", () => {
        const now = new Date();
        const hour = now.getHours();
        let saudacao;

       
        if (hour >= 6 && hour < 12) {
            saudacao = " Bom dia!";
        } else if (hour >= 12 && hour < 18) {
            saudacao = " Boa tarde!";
        } else {
            saudacao = " Boa noite!";
        }

      
        result.textContent = saudacao;
        result.style.color = "black";
        result.style.fontFamily = "verdana";
    });
});

