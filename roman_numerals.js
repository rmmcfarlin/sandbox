function solution(number) {
    // convert the number to a roman numeral

    values = number.toString().split('').reverse()

    let roman = []

    console.log(values)


    for (let i = values.length; i > 0; i--) {
        
    // thousands 
        if (values.length == 4) {

            for (let i = values[3]; i > 0; i--)
              if (i > 1 ) {
                roman.push('M')
              } else if (i == 1) {
                roman.push('M')
                values.pop()
              }

    // hundreds

        } else if (values.length == 3) {
            let hundreds = values[2]

            if (hundreds >= 5) {
                let hundredsRemainder = hundreds % 5
        
                if (hundredsRemainder == 4) {
                    roman.push('CM')
                    values.pop()
                } else {
                    roman.push('D')
                    for (let i = 0; i < hundredsRemainder; i++)
                        roman.push('C')
                        values.pop()
                }
            } else {
                if (hundreds == 4) {
                    roman.push('CD')
                    values.pop()
                } else {
                    for (let i = 0; i < hundreds; i++)
                        roman.push('C')
                        values.pop()
                }
            }
// tens
    }  else if (values.length == 2) {
        let tens = values[1]

        if (tens >= 5) {
            let tensRemainder = tens % 5
    
            if (tensRemainder == 4) {
                roman.push('XC')
                values.pop()
            } else {
                roman.push('L')
                for (let i = 0; i < tensRemainder; i++)
                    roman.push('X')
                    values.pop()
            }
        } else {
            if (tens == 4) {
                roman.push('XL')
                values.pop()
            } else {
                for (let i = 0; i < tens; i++)
                    roman.push('X')
                    values.pop()
            }
        }
// ones
    }  else if (values.length == 1) {
    let ones = values[0]

    if (ones >= 5) {
        let onesRemainder = ones % 5

        if (onesRemainder == 4) {
            roman.push('IX')
            values.pop()
        } else {
            roman.push('V')
            for (let i = 0; i < onesRemainder; i++)
                roman.push('I')
                values.pop()
        }
    } else {
        if (ones == 4) {
            roman.push('IV')
            values.pop()
        } else {
            for (let i = 0; i < ones; i++)
                roman.push('I')
                values.pop()
        }
    }
}
  }

let result = roman.join('')

return result
}