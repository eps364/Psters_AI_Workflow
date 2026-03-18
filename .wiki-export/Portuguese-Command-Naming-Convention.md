> Source: `docs/portuguese/command-naming-convention.md`

# Convencao de Nomes de Comandos

Este workflow usa prefixos explicitos para comandos ligados a uma tecnologia, provider ou framework especifico.

## Regra

- Comandos especificos de tecnologia DEVEM usar prefixo de tecnologia/provider.
- Comandos genericos continuam genericos e nao devem receber prefixo desnecessario.

## Formato

- Formato preferido: `/provider-tecnologia-acao`
- Exemplo: `/pwf-aws-lambda-deploy`

## Por que isso importa

- Deixa o escopo do comando claro na primeira leitura.
- Evita nomes genericos ambiguos para operacoes que sao especificas de provider.
- Melhora descobribilidade em listas de comandos e documentacao.

## Exemplos

- `/pwf-aws-lambda-deploy` (somente AWS Lambda)
- `/stripe-webhook-sync` (operacao especifica de Stripe)
- `/angular-component-audit` (operacao especifica de Angular)

## Anti-exemplos

- `/deploy-lambda` (sem prefixo explicito de provider)
- `/deploy` (generico demais para um fluxo especifico de provider)

## Aplicacao neste workflow

- O comando de deploy de Lambda foi padronizado como `/pwf-aws-lambda-deploy`.
- Qualquer novo comando especifico de tecnologia deve seguir a mesma convencao.
