document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        init()
    }
}

function init() {
    let decimal = document.querySelectorAll('input')[0]
    let roman = document.querySelectorAll('input')[1]

    decimal.onkeyup = () => {
        calcula()
    }
    decimal.onchange = () => {
        calcula()
    }


    function calcula() {
        let finalNum = []
        let dezena
        let unidade
        let centena
        let milhar
        let key = decimal.value

        unidade = (key % 10)

        dezena = Math.floor((key % 100) / 10)

        centena = Math.floor((key % 1000) / 100)

        milhar = Math.floor((key % 10000) / 1000)

        if (Number(key) < 4000) {

            switch (milhar) {
                case 1:
                    finalNum.push('M')
                    break;
                case 2:
                    finalNum.push('MM')
                    break;
                case 3:
                    finalNum.push('MMM')
                    break;
            }

            switch (centena) {
                case 1:
                    finalNum.push('C')
                    break;
                case 2:
                    finalNum.push('CC')
                    break;
                case 3:
                    finalNum.push('CCC')
                    break;
                case 4:
                    finalNum.push('CD')
                    break;
                case 5:
                    finalNum.push('D')
                    break;
                case 6:
                    finalNum.push('DC')
                    break;
                case 7:
                    finalNum.push('DCC')
                    break;
                case 8:
                    finalNum.push('DCCC')
                    break;
                case 9:
                    finalNum.push('CM')
                    break;
            }

            switch (dezena) {
                case 1:
                    finalNum.push('X')
                    break;
                case 2:
                    finalNum.push('XX')
                    break;
                case 3:
                    finalNum.push('XXX')
                    break;
                case 4:
                    finalNum.push('XL')
                    break;
                case 5:
                    finalNum.push('L')
                    break;
                case 6:
                    finalNum.push('LX')
                    break;
                case 7:
                    finalNum.push('LXX')
                    break;
                case 8:
                    finalNum.push('LXXX')
                    break;
                case 9:
                    finalNum.push('XC')
                    break;
            }

            switch (unidade) {
                case 1:
                    finalNum.push('I')
                    break;
                case 2:
                    finalNum.push('II')
                    break;
                case 3:
                    finalNum.push('III')
                    break;
                case 4:
                    finalNum.push('IV')
                    break;
                case 5:
                    finalNum.push('V')
                    break;
                case 6:
                    finalNum.push('VI')
                    break;
                case 7:
                    finalNum.push('VII')
                    break;
                case 8:
                    finalNum.push('VIII')
                    break;
                case 9:
                    finalNum.push('IX')
                    break;
            }


            document.getElementById('msg').innerText = ''
            console.log(milhar, centena, dezena, unidade)
            finalNum = finalNum.join('')
            roman.value = finalNum
        }
        else {
            document.getElementById('msg').innerText = "O Valor é muito grande escolha algo entre (0 - 3999)"
            roman.value = "ERRO (0 - 3999)"
        }
    }
}


/*
 I II III IV V VI VII VIII IX X

i x c na frente soma atras atras subtrai
*/