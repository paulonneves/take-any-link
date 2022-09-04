# take-any-link

Recebe uma lista com todos os links de um site e retorna apenas os links de rede social 

const array_test = [
    'http://www.acessoainformacao.gov.br/',
    'https://www.gov.br/pt-br/participacao-social/',
    'http://www.casacivil.gov.br/',
    'https://www.instagram.com/ufoboficial/?hl=pt-br',
    'https://www.facebook.com/ufoboficial'
]

-->

[
  {
    socialMedia: 'instagram',
    link: 'https://www.instagram.com/ufoboficial/?hl=pt-br',
    userName: 'ufoboficial'
  },
  {
    socialMedia: 'facebook',
    link: 'https://www.facebook.com/ufoboficial',
    userName: 'ufoboficial'
  }
]

### Executar

> node index.js
