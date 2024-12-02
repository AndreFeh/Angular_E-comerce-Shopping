# TIRANDO A IDEIA DO PAPEL

## Projeto Angular E-commerce Touch Techn 
Tirando o site do papel e criando uma interface visual para ele.

Futuramente teremos uma interface juntado API Spring 

Com comunicação com Front em Angular TS 17+

### Sobre RESPONSIVIDADE

https://developer.mozilla.org/pt-BR/docs/Web/Guide/CSS/CSS_Media_queries

### Sobre Moedas e Nacionalidades

const number = 12345.6789;

// Formato brasileiro:
console.log(new Intl.NumberFormat('pt-BR').format(number)); // "12.345,68"

// Formato americano:
console.log(new Intl.NumberFormat('en-US').format(number)); // "12,345.68"

Para conseguir implementar isso, necessario criar um SERVICE (ng generate service services/formatBrl)
    Dentro dele, inserir o que esta dentro de VALUES.SERCICE.TS

Dentro da classe, importar esse service e dentro do construtor 
>> constructor(public formatBrl:ValuesService){}

