# This project

    Проект личного информационного агрегатора из Вк и Телеграмма

    Vue 3.2 | vue-router | vuex
    sass | element-plus
    typescript | eslint | stylelint

## Project setup and command

    yarn install
    yarn serve
    yarn build
    yarn test:unit
    yarn lint


## Servises Windows

hosts 127.65.43.21 des-star.ru
netsh
interface portproxy add v4tov4 listenport=80 listenaddress=127.65.43.21 connectport=4545 connectaddress=127.0.0.1
interface portproxy show v4tov4
