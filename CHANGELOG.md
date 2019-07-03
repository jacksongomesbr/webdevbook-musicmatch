# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.0.0](https://github.com/jacksongomesbr/webdevbook-musicmatch/compare/v1.5.0...v2.0.0) (2019-07-03)


### Bug Fixes

* **app:** corrige estrutura do módulo App (principal) ([39759c3](https://github.com/jacksongomesbr/webdevbook-musicmatch/commit/39759c3))
* **app:** remove estruturas de models desnecessárias (já que os serviços não precisam mais ser tipados) ([b7a7c27](https://github.com/jacksongomesbr/webdevbook-musicmatch/commit/b7a7c27))
* **shared:** corrige importação do AuthService ([46ec94e](https://github.com/jacksongomesbr/webdevbook-musicmatch/commit/46ec94e))
* **shared:** corrige o nome do servico ValidacaoFormUtil ([d9a62c5](https://github.com/jacksongomesbr/webdevbook-musicmatch/commit/d9a62c5)), closes [#23](https://github.com/jacksongomesbr/webdevbook-musicmatch/issues/23)


### Features

* **admin:** cria o módulo Admin e sua estrutura de componentes ([552ca00](https://github.com/jacksongomesbr/webdevbook-musicmatch/commit/552ca00)), closes [#22](https://github.com/jacksongomesbr/webdevbook-musicmatch/issues/22) [#21](https://github.com/jacksongomesbr/webdevbook-musicmatch/issues/21) [#20](https://github.com/jacksongomesbr/webdevbook-musicmatch/issues/20) [#19](https://github.com/jacksongomesbr/webdevbook-musicmatch/issues/19) [#18](https://github.com/jacksongomesbr/webdevbook-musicmatch/issues/18)
* **publico:** cria o módulo Publico e sua estrutura de componentes ([336c930](https://github.com/jacksongomesbr/webdevbook-musicmatch/commit/336c930))


### BREAKING CHANGES

* **admin:** nova estrutura do app, com módulo publico e admin protegido por senha para tarefas administrativas



## [1.5.0](https://github.com/jacksongomesbr/webdevbook-musicmatch/compare/v1.4.0...v1.5.0) (2019-06-19)


### Features

* (componentes) adiciona botão para acessar a tela de cadastrar artista ([b40c45c](https://github.com/jacksongomesbr/webdevbook-musicmatch/commit/b40c45c))



## [1.4.0](https://github.com/jacksongomesbr/webdevbook-musicmatch/compare/v1.3.0...v1.4.0) (2019-06-10)


### Features

* modificações em componentes para usar/declarar novos serviços ([282714f](https://github.com/jacksongomesbr/webdevbook-musicmatch/commit/282714f))
* removidos arquivos JSON ([4290202](https://github.com/jacksongomesbr/webdevbook-musicmatch/commit/4290202)), closes [#17](https://github.com/jacksongomesbr/webdevbook-musicmatch/issues/17)
* **auth:** adiciona o interceptador AuthInterceptor ([044ec9c](https://github.com/jacksongomesbr/webdevbook-musicmatch/commit/044ec9c)), closes [#14](https://github.com/jacksongomesbr/webdevbook-musicmatch/issues/14)
* **components:** melhorias nos componentes para usar as atualizações dos serviços ([09cf74d](https://github.com/jacksongomesbr/webdevbook-musicmatch/commit/09cf74d))
* **form:** adiciona o componente ValicacaoFormUtilService ([4b51b67](https://github.com/jacksongomesbr/webdevbook-musicmatch/commit/4b51b67)), closes [#12](https://github.com/jacksongomesbr/webdevbook-musicmatch/issues/12)
* **service:** adicionado serviço LoginService ([ad8b0fd](https://github.com/jacksongomesbr/webdevbook-musicmatch/commit/ad8b0fd)), closes [#16](https://github.com/jacksongomesbr/webdevbook-musicmatch/issues/16)
* **service:** melhorado o serviço GenerosService ([364fc94](https://github.com/jacksongomesbr/webdevbook-musicmatch/commit/364fc94)), closes [#9](https://github.com/jacksongomesbr/webdevbook-musicmatch/issues/9)
* **service:** melhorado o serviço MusicasService ([5add562](https://github.com/jacksongomesbr/webdevbook-musicmatch/commit/5add562)), closes [#10](https://github.com/jacksongomesbr/webdevbook-musicmatch/issues/10)
* **services:** adiciona o serviço AuthService ([ddef786](https://github.com/jacksongomesbr/webdevbook-musicmatch/commit/ddef786)), closes [#15](https://github.com/jacksongomesbr/webdevbook-musicmatch/issues/15)
* **services:** melhorado serviço ArtistasService ([370341c](https://github.com/jacksongomesbr/webdevbook-musicmatch/commit/370341c)), closes [#8](https://github.com/jacksongomesbr/webdevbook-musicmatch/issues/8)
* **services:** melhoria no serviço PesquisaService ([c59f84c](https://github.com/jacksongomesbr/webdevbook-musicmatch/commit/c59f84c)), closes [#11](https://github.com/jacksongomesbr/webdevbook-musicmatch/issues/11)



## [1.3.0](https://github.com/jacksongomesbr/webdevbook-musicmatch/compare/v1.2.0...v1.3.0) (2019-06-03)


### Bug Fixes

* remove recursos desnecessários ([95da38a](https://github.com/jacksongomesbr/webdevbook-musicmatch/commit/95da38a))


### Features

* **componentes:** melhora o componente Artista para usar os novos serviços ([976e471](https://github.com/jacksongomesbr/webdevbook-musicmatch/commit/976e471))
* **componentes:** melhora o componente Genero para usar os novos serviços ([589c936](https://github.com/jacksongomesbr/webdevbook-musicmatch/commit/589c936))
* **componentes:** melhora o componente Home para usar os novos serviços ([74c9caa](https://github.com/jacksongomesbr/webdevbook-musicmatch/commit/74c9caa)), closes [#5](https://github.com/jacksongomesbr/webdevbook-musicmatch/issues/5)
* **componentes:** melhora o componente Musica para usar os novos serviços ([4a4bebe](https://github.com/jacksongomesbr/webdevbook-musicmatch/commit/4a4bebe))
* **componentes:** melhora o componente Musicas para usar os novos serviços ([bc22a01](https://github.com/jacksongomesbr/webdevbook-musicmatch/commit/bc22a01))
* **componentes:** melhora o componente Pesquisa para usar os novos serviços ([63cf3e3](https://github.com/jacksongomesbr/webdevbook-musicmatch/commit/63cf3e3))
* adiciona o componente ListaDeMusicas ([ce52515](https://github.com/jacksongomesbr/webdevbook-musicmatch/commit/ce52515)), closes [#6](https://github.com/jacksongomesbr/webdevbook-musicmatch/issues/6)
* adiciona o serviço Artistas ([8f574e7](https://github.com/jacksongomesbr/webdevbook-musicmatch/commit/8f574e7))
* adiciona o serviço DadosBase ([4394625](https://github.com/jacksongomesbr/webdevbook-musicmatch/commit/4394625))
* adiciona o serviço Musicas ([6fefda5](https://github.com/jacksongomesbr/webdevbook-musicmatch/commit/6fefda5)), closes [#4](https://github.com/jacksongomesbr/webdevbook-musicmatch/issues/4)
* adiciona o serviço Pesquisa ([dc3c43d](https://github.com/jacksongomesbr/webdevbook-musicmatch/commit/dc3c43d)), closes [#7](https://github.com/jacksongomesbr/webdevbook-musicmatch/issues/7)
* **dados:** cria arquivos JSON para representar os dados ([cc69ad8](https://github.com/jacksongomesbr/webdevbook-musicmatch/commit/cc69ad8)), closes [#1](https://github.com/jacksongomesbr/webdevbook-musicmatch/issues/1)
* **model:** adiciona classes que representam o model (musica, genero, artista) ([7b6e1a8](https://github.com/jacksongomesbr/webdevbook-musicmatch/commit/7b6e1a8))
* **servicos:** adiciona o serviço Generos ([1d1c908](https://github.com/jacksongomesbr/webdevbook-musicmatch/commit/1d1c908)), closes [#2](https://github.com/jacksongomesbr/webdevbook-musicmatch/issues/2)
* **ui:** adiciona um rodapé à interface ([f91ef56](https://github.com/jacksongomesbr/webdevbook-musicmatch/commit/f91ef56))



## [1.2.0](https://github.com/jacksongomesbr/webdevbook-musicmatch/compare/v1.1.0...v1.2.0) (2019-05-30)


### Features

* adiciona dependência do compodoc ([daf216e](https://github.com/jacksongomesbr/webdevbook-musicmatch/commit/daf216e))



## 1.1.0 (2019-05-30)


### Features

* adiciona o standard-version como dependência e configura o script release ([77abcfd](https://github.com/jacksongomesbr/webdevbook-musicmatch/commit/77abcfd))
* componente para apresentar a música em listas ([021d964](https://github.com/jacksongomesbr/webdevbook-musicmatch/commit/021d964))
* Utilizando o componente MusicaItem ([2665d82](https://github.com/jacksongomesbr/webdevbook-musicmatch/commit/2665d82))



# 1.0.0 (2019-05-30)
