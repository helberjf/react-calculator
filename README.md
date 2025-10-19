<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# react-calculator
first react project
My Calculator
Uma calculadora simples feita com React, com operações básicas, suporte a ponto decimal, limpeza total (C), apagar último dígito (CE) e tratamento de divisão por zero.

Divide por zero exibe “Error”
Botão CE apaga apenas o último caractere
Botão C zera tudo
Histórico mostra o primeiro número e a operação selecionada
Stack
React + Hooks
styled-components
Vite (supondo, pois a entrada é main.jsx)
JavaScript (ES2020+)

Estrutura do projeto

src/
  App.jsx
  global.jsx
  styles.jsx
  main.jsx
  components/
    Input/
      index.jsx
      styles.jsx
    Button/
      index.jsx
      styles.jsx
Observações importantes sobre nomes:

No seu texto você citou “pasta input” e “pasta Buttons”, mas no código você importa “Input” e “Button”. Recomendo padronizar como mostrado acima: Input e Button (singular, com inicial maiúscula).
Você mencionou “Global.jsx”, mas o seu import é “./global”. Mantenha o arquivo como global.jsx (minúsculo) para bater com o import.
Como rodar
Pré-requisitos:

Node.js 18+ recomendado
npm, yarn ou pnpm
Com npm:

Instale as dependências:
npm install
Ambiente de desenvolvimento:
npm run dev
Build de produção:
npm run build
Preview do build:
npm run preview
Com yarn:

yarn
yarn dev
yarn build
yarn preview
Com pnpm:

pnpm install
pnpm dev
pnpm build
pnpm preview
Scripts comuns (Vite)
dev: sobe o servidor de desenvolvimento com HMR
build: gera os arquivos otimizados de produção
preview: serve localmente o build para inspeção
Funcionalidades
Operações: adição (+), subtração (-), multiplicação (x), divisão (/)
Entrada numérica 0–9
Decimal: ponto “.”
C: limpa tudo (estado e operação)
CE: apaga o último dígito do número atual
Erro: divisão por zero mostra “Error” e permite continuar usando
Como usar
Clique em um número para adicioná-lo ao “currentNumber”
Selecione a operação (+, -, x, /)
Digite o segundo número
Pressione “=” para ver o resultado
Use “.” para adicionar decimal (apenas um por número)
“C” zera toda a calculadora
“CE” apaga o último dígito do número atual
Lógica principal (resumo do App.jsx)
Estados:

currentNumber: string do número que você está digitando (ex.: "0", "42", "3.14", "Error")
firstNumber: primeiro operando armazenado quando você escolhe uma operação
operation: operação atual escolhida (+, -, x, /)
Principais handlers:

handleAddNumber(num): concatena dígitos ao número atual
handleAddDecimal(): adiciona ponto decimal (evita ponto duplicado)
handleClear(): limpa tudo (zera números e operação)
handledeleteNumber(): apaga o último dígito (mantém “0” quando esvazia)
handleSumNumbers(), handleMinusNumbers(), handleMultiplyNumbers(), handleDivideNumbers(): configuram operação ou calculam o resultado quando já há dois operandos
handleEqual(): executa a operação selecionada
Tratamento de erros:

Divisão por zero define currentNumber = "Error" e reseta firstNumber/operation

Roadmap
Teclado: suportar digitação via teclado (0–9, ., +, -, *, /, Enter, Backspace, Escape)
Alternar sinal (+/-)
Porcentagem (%)
Memória (M+, M-, MR, MC)
Testes automatizados (unitários e de integração)
Melhorias de acessibilidade (rótulos ARIA, foco de teclado, contraste)
Contribuição
Faça um fork
Crie uma branch: feature/minha-feature
Abra um Pull Request descrevendo a mudança
Licença
MIT
Agradecimentos
Feito com React, styled-components e Vite com o aprendizado no curso de React developer da DIO.
>>>>>>> 0ede1b42564a7e0e192722b784ccab88896687ab
