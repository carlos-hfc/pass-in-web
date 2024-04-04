<p align="center">
  <img src="https://img.shields.io/github/license/carlos-hfc/pass-in-server" />
  <img src="https://img.shields.io/badge/node-v20.11-339933?style=flat&logo=nodedotjs&logoColor=%23339933" />
  <img src="https://img.shields.io/badge/npm-v10.2.4-CB3837?style=flat&logo=npm" />
  <img src="https://img.shields.io/badge/feito_por-Carlos_Faustino-black" />
</p>

<br/>

# :bulb: Sobre

O pass.in é uma aplicação de **gestão de participantes em eventos presenciais**.

A ferramenta permite que o organizador cadastre um evento e abra uma página pública de inscrição.

Os participantes inscritos podem emitir uma credencial para check-in no dia do evento.

O sistema fará um scan da credencial do participante para permitir a entrada no evento.


## :page_with_curl: Pré-requisitos

1. Antes de começar, certifique-se de ter o Node.js instalado em sua máquina. 
    <a href="https://nodejs.org">
      <img width="30" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js"/>
    </a>

## :gear: Configuração

1. Clone o repositório para sua máquina local:

```bash
git clone https://github.com/carlos-hfc/pass-in-web
```

2. Acesse o diretório do projeto:

```bash
cd pass-in-web
```

3. Instale as dependências:

```bash
npm install
```

4. Rode a aplicação

```bash
npm run dev
```

## :computer_mouse: Uso da aplicação

1. Abra o navegador e acesse [http://localhost:3000](http://localhost:3000)
1. Veja a listagem de participantes de um evento
1. Filtre os participantes por nome


## :computer: Tecnologias utilizadas

<p float="left">
  <a href="https://react.dev">
    <img width="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React"/>
  </a>
  <a href="https://www.typescriptlang.org">
    <img width="50" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="TypeScript" title="TypeScript"/>
  </a>
  <a href="https://tailwindcss.com">    
    <img width="50" src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png" alt="TailwindCSS" title="TailwindCSS"/>
  </a>
  <a href="https://vitejs.dev">
    <img width="50" src="https://github-production-user-asset-6210df.s3.amazonaws.com/62091613/261395532-b40892ef-efb8-4b0e-a6b5-d1cfc2f3fc35.png" alt="Vite" title="Vite"/>
  </a>
</p>

## :page_facing_up: Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).