### 1. Introdução

Nesse projeto, eu converti um site feito com HTML e CSS puro para uma aplicação em **React.js**. A ideia foi sair de uma estrutura estática e transformar o código em algo mais organizado, reutilizável e fácil de manter. A principal melhoria com o uso do React foi justamente essa: dividir tudo em **componentes**, o que deixou o código mais limpo e escalável.

### 2. Passo a Passo da Conversão

#### Inicializando o Projeto

Para começar, criei o projeto com o **Vite**, que é uma ferramenta super rápida para iniciar projetos com React. Os comandos foram simples:

npm create vite@latest nome-do-projeto -- --template react
cd nome-do-projeto
npm install
npm run dev

Com isso, já tinha um ambiente React rodando e pronto pra começar a conversão.

#### Criando os Componentes

Separei o site em partes menores, transformando cada uma em um componente React. Por exemplo:

- `Header` ficou com o menu e o título da página;
- `ProductCard` representa um produto individual;
- `ProductList` mostra todos os produtos de forma dinâmica;
- E o `Footer` ficou com as infos do rodapé.

Isso ajudou bastante a deixar o código mais organizado e fácil de mexer depois.

#### Estilização

A parte visual foi reaproveitada do CSS que eu já tinha. Adaptei os estilos para funcionarem dentro dos componentes, e em alguns casos deixei os arquivos CSS separados e importados direto onde eram usados.

#### Lista de Produtos

Antes, os produtos estavam fixos no HTML. Agora, criei um array de objetos com os dados dos produtos, e usei o `.map()` no React pra gerar a lista de forma dinâmica. Isso facilitou muito caso eu queira adicionar ou remover produtos depois — é só mexer no array, sem precisar tocar no HTML.

#### Testes e Ajustes Finais

Depois que tudo estava montado, fui testando os componentes na tela, ajustando os estilos e conferindo se tudo estava funcionando como esperado, principalmente em diferentes tamanhos de tela.

---

### 3. Como Rodar o Projeto

1. Clonar o repositório:

git clone https://github.com/seu-usuario/seu-repositorio.git
cd nome-do-projeto


2. Instalar as dependências:

npm install

3. Rodar o servidor de desenvolvimento:

npm run dev

4. E acessar no navegador:

http://localhost:5173

### 4. Reflexão Final

Essa conversão foi mais do que só reescrever código — foi uma oportunidade de repensar a estrutura do projeto. Trabalhar com React me mostrou o quanto faz diferença separar as coisas em componentes e deixar o código mais limpo e reaproveitável.

No fim, ficou claro que, apesar da curva de aprendizado, usar React traz mais organização e flexibilidade pro desenvolvimento. Com certeza, é uma tecnologia que vou continuar explorando.