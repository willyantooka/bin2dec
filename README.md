# bin2dec

Conversor de binário para decimal feito com HTML e JavaScript.

🔗 [Ver online](https://willyantooka.github.io/bin2dec/)

## O que faz
- Aceita dígitos binários (0 e 1) e mostra o equivalente decimal
- Avisa o usuário se digitar qualquer outro caractere
- Aceita número variável de dígitos

## Como foi feito
- Sem arrays: os dígitos são lidos direto da string com `charAt`
- Cada dígito é calculado com `Math.pow(2, posição)`
