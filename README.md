
# Plano de Recuperação

## Objetivo do Teste
Garantir que o projeto hospedado no GitHub possa ser recuperado de forma completa, funcional e sem perda de dados, em caso de falhas ou perda dos arquivos locais.

## Ambiente de Teste
- **Sistema Operacional:** Windows 11
- **Ferramentas Utilizadas:**
  - Git 
  - GitHub
  - Visual Studio Code
  - Terminal
  - Navegador 


## Etapas de Backup
1. git init
2. git add .
3. git commit -m "novo projeto"
4. colar link github

## Simulação de Falha
Excluir completamente a pasta do projeto no computador local.

Opcional: simular falha de disco ou remoção acidental de arquivos importantes.

## Procedimento de Recuperação
Git clone 
Cd nome da pasta
Npm install
Npx next dev

## Critérios de Aceitação
Nenhum erro deve ocorrer durante a execução.

Todas as funcionalidades originais devem estar operacionais.

O tempo total de recuperação < 10 minutos.
