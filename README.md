# Translator Doinger

Doinger is a invented language for the purpose of putting knowledge into practice in javascript

## Description

- Si la palabra termina con "ar" se le quitan esas dos letras.
- Si la palabra inicia con Z, se le añade "pe" al final.
- Si la palabra tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio.
- Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pro intercalando mayúsculas y minúsculas.

## Instalation

```
npm install translator-doinger
```

# Usage

```
import doinger from 'doinger'

doinger("Programar")
doinger("Zorro")
doinger("Zarpar")
doinger("Abecedario")
doinger("Sometemos")
```

## Credits

- [Alejandro Uray](https://alejandrouray.com)

## Licence

[MIT](https://opensource.org/licenses/MIT)