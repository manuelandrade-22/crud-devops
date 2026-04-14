Este projeto sera evoluido com a metodologia Site Reliability Engineering (SRE)

O projeto consiste em umsistema crud, para cadastro de usuarios
react 
Node
Mariadb

### atualizar o pacote do SO ubunto WSL

sudo apt update && sudo apt upgrade -y

### Instalar ferramentas básicas

sudo apt install -y git curl build-essential

### istalar o node da melhor forma

curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs

### estrutura de pastas

mkdir ~/projetos
cd ~/projetos
mkdir crud-devops
cd crud-devops

### estrutura e criação do meu back-end dentro da pasta cd ~/projetos

mkdir backend
cd backend
npm init -y
npm install express cors dotenv
npm install nodemon --save-dev

### estrutura inicial


### acessar o projeto no VS code
Dentro do VS Code:

👉 Ctrl + Shift + P
👉 digita: WSL: Open Folder in WSL

