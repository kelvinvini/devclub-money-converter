const convertbutton = document.querySelector(".convert-button")
const currencyselect = document.querySelector(".currency-select")


function convertValues() {
    const inputcurrencyvalue = document.querySelector(".input-currency").value
    const currencyvaluetoconvert = document.querySelector(".currency-value-to-convert")
    const currencyvalueconverted = document.querySelector(".currency-value")

    const realtoday = 1
    const dolartoday = 5.2
    const eurotoday = 6.2
    const libratoday = 7.24
    const bittoday = 130000

    if (currencyselect.value == "dolar") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "USD"
        }).format(inputcurrencyvalue / dolartoday)

    }

    if (currencyselect.value == "euro") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputcurrencyvalue / eurotoday)

    }

    if (currencyselect.value == "libra") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputcurrencyvalue / libratoday)
    }

    if (currencyselect.value == "bitcoin") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputcurrencyvalue / bittoday)
    }

    if (currencyselect.value == "real") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(inputcurrencyvalue / realtoday)
    }


    currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputcurrencyvalue )

}
function changecurrency() {
    const currencyname = document.getElementById("currency-name")
    const currencyimg = document.querySelector(".currency-img")

    if (currencyselect.value == "dolar") {
        currencyname.innerHTML = "Dólar americano"
        currencyimg.src = "./assets/dolar.png"
    }


    if (currencyselect.value == "euro") {
        currencyname.innerHTML = "Euro"
        currencyimg.src = "./assets/euro.png"
    }

    if (currencyselect.value == "libra") {
        currencyname.innerHTML = "Libra"
        currencyimg.src = "./assets/libra 1.png"
    }

    if (currencyselect.value == "bitcoin") {
        currencyname.innerHTML = "Bitcoin"
        currencyimg.src = "./assets/bitcoin 1.png"
    }


    convertValues()
}

currencyselect.addEventListener("change", changecurrency)
convertbutton.addEventListener("click", convertValues)
