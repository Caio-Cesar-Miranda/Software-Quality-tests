const { soma } = require("./soma");



describe('Testes para validar a função somar', () => {
    test('somar corretamente inteiros positivos', () => {
        expect(soma(2,2)).toBe(4);     
    })

    test('Somar com números negativos', () => {
        expect(soma(2,-2)).toBe(0);
    })

    test('Somar com números reais', () => {
        expect(soma(2,-2.7)).toBe(-0.7);
    })

    test('Somar com letras', () => {
        expect(soma(2,'5')).toBe('Só é possível somar com números');
    })
});