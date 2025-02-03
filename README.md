
# 📌Imersão Front-end Alura

Este repositório apresenta o projeto desenvolvido durante a **Imersão Front-end** da [Alura](https://www.alura.com.br/), aplicando conceitos essenciais de **HTML, CSS e JavaScript** para construção de interfaces modernas, responsivas e acessíveis.

## 🛠 Tecnologias e conceitos aplicados

- **HTML5** → Estruturação semântica e acessibilidade  
- **CSS3** → Estilização responsiva e boas práticas de UI  
- **JavaScript** → Interatividade, manipulação do DOM e consumo de APIs  
- **JSON & API** → Criação de servidor interno e integração de dados dinâmicos  
- **Git & GitHub** → Versionamento e colaboração  
- **Responsividade** → Adaptação para diferentes dispositivos  

## 📡 Observação Sobre a API  
Este projeto tem fins didáticos para praticar o consumo de APIs. A API não está hospedada online, portanto, a busca não retornará resultados automaticamente na página sem o servidor local rodando.  
O projeto consome uma API armazenada em um **servidor local** (`json-server`). Isso significa que:  
✅ O código está estruturado para realizar requisições à API.  
❌ A busca na página do projeto **não retornará resultados online**, pois o servidor precisa estar rodando localmente.  


### 🛠 Como rodar o servidor localmente

Caso queira testar a funcionalidade completa e visualizar a busca funcionando em tempo real, siga os passos abaixo:

1. Instale o `json-server` caso ainda não tenha:
  npm install -g json-server

2. Navegue até a pasta do projeto e inicie o servidor:
  json-server --watch artists.json --port 3000

3. Acesse a API em:
  http://localhost:3000/artists

4.Agora, a busca na página do projeto exibirá os resultados corretamente.
