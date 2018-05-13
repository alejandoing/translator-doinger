const expect = require('chai').expect
const doinger = require('..').default

describe('#doinger', function() {
    it('Si la palabra termina con "ar" se le quitan esas dos letras.', function () {
        const translation = doinger("Programar")
        expect(translation).to.equal("Program")
    })

    it('Si la palabra inicia con Z, se le añade "pe" al final.', function () {
        const translation = doinger("Zorro")
        const translation_two = doinger("Zarpar")
        
        expect(translation).to.equal("Zorrope")
        expect(translation_two).to.equal("Zarppe")
    })

    it('Si la palabra tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio.', function () {
        const translation = doinger("Abecedario")
        expect(translation).to.equal("Abece-dario")
    })

    it('Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pro intercalando mayúsculas y minúsculas.', function () {
        const translation = doinger("sometemos")
        expect(translation).to.equal("SoMeTeMoS")        
    })
})