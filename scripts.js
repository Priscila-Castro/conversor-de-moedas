// Cotacao de moedas do dia
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

//Obtendo os elementos dos formulario
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById ("result")

//Manipulando o input amount para receber somente numeros.
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
}) 

// Capturando o evento de submit do formulario
form.onsubmit = (event) => { 
    event.preventDefault()

    switch (currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break      
    }

}

//Função para converter a moeda.
function convertCurrency(amount, price, symbol){
    try {
        //Exibindo a cotacao da moeda
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        // Calcula os valores
        let total = amount * price

        if(isNaN(total)){
            return alert("Por favor, digite um valor valido")
        }
        //Formata o total
        total = formatCurrencyBRL(total)

        //Exibe o resultado
        result.textContent = `${total}`

        // Aplica a classe que exibe o footer para mostrar o resultado
        footer.classList.add("show-result")
        
    } catch (error) {
        
        //Remove a classe do footer e remove ele da tela
        footer.classList.remove("show-result")
        
        console.log(error)
        alert("Não foi possível converter. Tente novamente mais tarde")
        
    }
}
//Formata a moeda em real brasileiro
function formatCurrencyBRL(value){
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
}
 