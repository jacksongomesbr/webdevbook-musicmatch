import { Injectable } from '@angular/core';
import { isNumber, isString, isObject } from 'util';

@Injectable({
  providedIn: 'root'
})
export class DiscoService {
  generos = [];
  artistas = [];
  musicas = [];

  constructor() {
    this.adicionarGenero('Samba de Raiz');
    this.adicionarGenero('Pop Brasil');
    this.adicionarGenero('Sucessos Gospel');
    this.adicionarGenero('Bossa Nova');

    this.adicionarMusica('O Show Tem Que Continuar', ['Beth Carvalho'], 'Samba de Raiz');
    this.adicionarMusica('Foi Um Rio Que Passou Em Minha Vida', ['Paulinho da Viola'], 'Samba de Raiz');
    this.adicionarMusica('Canta Canta, Minha Gente', ['Martinho Da Vila'], 'Samba de Raiz');
    this.adicionarMusica('Deixa A Vida Me Levar', ['Zeca Pagodinho'], 'Samba de Raiz');
    this.adicionarMusica('Brisa', ['IZA'], 'Pop Brasil');
    this.adicionarMusica('Onda diferente (feat. Papatinho)', ['Anitta', 'Ludmilla', 'Snoop Dogg', 'Papatinho'], 'Pop Brasil');
    this.adicionarMusica('Pior Que Possa Imaginar', ['Luísa Sonza'], 'Pop Brasil');
    this.adicionarMusica('Hoje Lembrei Do Teu Amor', ['Tiago Iorc'], 'Pop Brasil');
    this.adicionarMusica('Ousado Amor', ['Isaias Saad'], 'Sucessos Gospel');
    this.adicionarMusica('Tua Graça Me Basta', ['Davi Sacer', 'Preto no Branco'], 'Sucessos Gospel');
    this.adicionarMusica('Ele Vem - Ao Vivo', ['Gabriel Guedes de Almeida', 'Gabriela Rocha'], 'Sucessos Gospel');
    this.adicionarMusica('Autor da Vida', ['Aline Barros'], 'Sucessos Gospel');
    this.adicionarMusica('Chega de Saudade', ['João Gilberto'], 'Bossa Nova');
    this.adicionarMusica('Samba Da Benção', ['Vinícius de Moraes'], 'Bossa Nova');
    this.adicionarMusica('Desafinado', ['João Gilberto'], 'Bossa Nova');
    this.adicionarMusica('Fotografia', ['Elis Regina', 'Antônio Carlos Jobim'], 'Bossa Nova');
    this.adicionarMusica('Pela luz dos olhos teus', ['Antônio Carlos Jobim', 'Miúcha'], 'Bossa Nova');

  }

  /**
   * Encontra e retorna um gênero na lista de gêneros com base no nome.
   * 
   * @param nome Nome do gênero
   */
  encontrarGeneroPorNome(nome: string) {
    return this.generos.find(genero => genero.nome == nome);
  }

  /**
   * Encontra e retorna um gênero da lista de gêneros.
   * 
   * @param {number|string} genero Nome ou identificador do gênero
   */
  encontrarGenero(genero: (number|string)) {
    if (isNumber(genero)) {
      return this.generos.find(g => g.id == genero);
    } else {
      return this.generos.find(g => g.nome == genero);
    }
  }

  /**
   * Adiciona um gênero na lista de gêneros.
   * 
   * @param nome O nome do gênero
   * @param generoPai O nome ou identificador do gênero pai
   */
  adicionarGenero(nome: string) {
    let genero = this.encontrarGenero(nome);
    if (genero) {
      return genero;
    }
    genero = {
      id: this.generos.length + 1,
      nome
    };
    this.generos.push(genero);
    return genero;
  }

  /**
   * Adicionar um artista na lista de artistas.
   * 
   * @param nome Nome do artista
   */
  adicionarArtista(nome: string) {
    let artista = this.encontrarArtista(nome);
    if (artista) {
      return artista;
    }
    artista = {
      id: this.artistas.length + 1,
      nome
    };
    this.artistas.push(artista);
    return artista;
  }

  /**
   * Adiciona uma música na lista de músicas. 
   * 
   * Este método verifica os parâmetros para operar da forma correta:
   * 
   * * obtém o objeto correspondente ao parâmetro `genero`; se não existir, cadastra
   * * para cada item do array `artistas`, verifica se ele existe e, caso contrário, o adiciona na lista de artistas
   * 
   * Com base nisso, o método cria o objeto para ser adicionado corretamente na lista de músicas.
   * 
   * @param titulo O título da música
   * @param artistas Os artistas da música; pode ser array de string ou array de número (identificador)
   * @param genero O gênero da música; pode ser string ou identificador
   */
  adicionarMusica(titulo: string, artistas: [], genero: any) {
    let g = this.encontrarGenero(genero);
    if (!g) {
      g = this.adicionarGenero(genero);
    }
    const listaArtistas = [];
    for (const artista of artistas) {
      if (isString(artista)) {
        let a = this.encontrarArtista(artista);
        if (!a) {
          a = this.adicionarArtista(artista);
        }
        listaArtistas.push(a.id);
      } else {
        listaArtistas.push(artista);
      }
    }
    const musica = {
      id: this.musicas.length + 1,
      titulo,
      idGenero: g.id,
      artistas: listaArtistas,
      gostar: 0,
      naoGostar: 0
    };
    this.musicas.push(musica);
    return musica;
  }

  /**
   * Encontra e retorna um artista.
   * 
   * @param id Nome ou identificador do artista
   */
  encontrarArtista(artista: (number|string)) {
    if (isNumber(artista)) {
      return this.artistas.find(a => a.id == artista);
    } else {
      return this.artistas.find(a => a.nome == artista);
    }
  }

  /**
   * Encontra e retorna uma música.
   * 
   * @param musica Título ou identificador da música
   */
  encontrarMusica(musica: (number|string)) {
    if (isNumber(musica)) {
      return this.musicas.find(m => m.id == musica);
    } else {
      return this.musicas.find(m => m.titulo == musica);
    }
  }

  /**
   * Retorna a lista de gêneros, preenchidos com suas músicas
   */
  listaDeGeneros() {
    for (let genero of this.generos) {
      genero.musicas = this.musicas.filter(musica => musica.idGenero == genero.id);
      for (let musica of genero.musicas) {
        this.preencherObjetoMusica(musica);
      }
    }
    return this.generos;
  }

  /**
   * Retorna a lista das músicas, preenchendo os atributos `artistas`
   * e `genero` com os respectivos objetos.
   */
  listaDeMusicas() {
    for (let musica of this.musicas) {
      this.preencherObjetoMusica(musica);
    }
    return this.musicas;
  }

  /**
   * Encontra e retorna a lista de músicas do artista.
   * 
   * @param artista Identificador ou nome do artista
   */
  listaDeMusicasDoArtista(artista) {
    let a = artista;
    if (isNumber(a) || isString(a)) {
      a = this.encontrarArtista(artista);
    }
    let lista = this.musicas.filter(musica =>
      musica.artistas.indexOf(a.id) != -1 || musica.artistas.indexOf(a) != -1
    );
    for (let musica of lista) {
      this.preencherObjetoMusica(musica);
    }
    return lista;
  }

  /**
   * Preenche os atributos da música com objetos para artistas e gênero
   * 
   * @param musica A música
   */
  preencherObjetoMusica(musica) {
    let artistas = [];
    for (const artistaId of musica.artistas) {
      if (!isObject(artistaId)) {
        artistas.push(this.encontrarArtista(artistaId));
      } else {
        artistas.push(artistaId);
      }
    }
    musica.artistas = artistas;
    musica.genero = this.encontrarGenero(musica.idGenero);
  }

  /**
   * Preenche o objeto com a lista de músicas do artista.
   * 
   * @param artista O artista
   */
  preencherObjetoArtista(artista) {
    if (artista) {
      artista.musicas = this.listaDeMusicasDoArtista(artista);
    }
  }


  /**
   * Encontra e retorna a lista de músicas de um gênero musical.
   * 
   * @param genero O gênero musical para encontrar as músicas
   */
  listaDeMusicasDoGenero(genero) {
    if (isNumber(genero) || isString(genero)) {
      genero = this.encontrarGenero(genero);
    }
    let lista = this.musicas.filter(musica =>
      musica.idGenero == genero.id
    );
    for (let musica of lista) {
      this.preencherObjetoMusica(musica);
    }
    return lista;
  }

  /**
   * Preenche o objeto `genero` com a lista de músicas dele.
   * 
   * @param genero O gênero musical para ser preenchido
   */
  preencherObjetoGenero(genero) {
    if (genero) {
      genero.musicas = this.listaDeMusicasDoGenero(genero);
    }
  }

  /**
   * Identifica e retorna a lista de músicas relacionadas com base na informação de a música
   * estar curtida ou não:
   * 
   * * se estiver sendo curtida: o atributo `gostar` tem valor `1`, então retorna todas as 
   * músicas do mesmo gênero e as músicas dos mesmos artistas da música de entrada; ou
   * * se a música não estiver sendo curtida: 
   * 
   * @param musica A música usada como entrada para encontrar as músicas relacioandas
   */
  listaDeMusicasRelacionadas(musica) {
    let lista = [];
    if (musica.gostar == 1) {
      // obtém as músicas do mesmo gênero da música atual
      lista = lista.concat(this.listaDeMusicasDoGenero(musica.genero).filter(m => m.id != musica.id));
      // obtém as músicas dos mesmos artistas da música atual
      for (const artista of musica.artistas) {
        // para cada música do artista...
        for (const m of this.listaDeMusicasDoArtista(artista).filter(m => m.id != musica.id)) {
          // adiciona a música na lista, se ela já não estiver
          if (lista.indexOf(m) == -1) {
            lista.push(m);
          }
        }
      }
    } else if (musica.naoGostar == 1) {
      // obtém as músicas que não sejam mesmo gênero da música atual
      lista = lista.concat(this.musicas.filter(m => m.idGenero != musica.idGenero));
      // obtém as músicas que não sejam dos mesmos artistas da música atual
      const artistas = [];
      // para cada artista cadastrado...
      for (const artista of this.artistas) {
        // se o artista não for um dos artistas da música...
        if (musica.artistas.indexOf(artista) != -1) {
          artistas.push(artista);
        }
      }
      for (const artista of artistas) {
        for (const m of this.listaDeMusicasDoArtista(artista).filter(m => m.id != musica.id)) {
          if (lista.indexOf(m) == -1) {
            lista.push(m);
          }
        }
      }
    }
    for (let musica of lista) {
      this.preencherObjetoMusica(musica);
    }
    return lista;
  }

  /**
   * Retorna a lista de artistas e preenche o artibuto `musicas` com a lista das
   * músicas dos respectivos artistas.
   */
  listaDeArtistas() {
    for (let artista of this.artistas) {
      this.preencherObjetoArtista(artista);
    }
    return this.artistas;
  }

  /**
   * Gostar de uma música.
   * 
   * @param musica A música que será curtida
   */
  gostar(musica) {
    musica.gostar = 1;
    musica.naoGostar = 0;
  }

  /**
   * Não gostar de uma música.
   * 
   * @param musica A música que não será curtida
   */
  naoGostar(musica) {
    musica.gostar = 0;
    musica.naoGostar = 1;
  }

  /**
   * Faz a pesquisa por músicas, gêneros musicais e artistas e retorna a lista dos resultados.
   * 
   * A pesquisa considera:
   * 
   * * parte do título da música
   * * parte do nome do gênero musical
   * * parte do nome do artista
   * 
   * A lista de resultados contém itens nesta ordem: músicas, gêneros musicais e artistas.
   * 
   * Ainda, o método adiciona, para cada item, conforme seu tipo, o atributo `tipo`:
   * 
   * * para músicas, contém o valor `música`
   * * para gêneros musicais, contém o valor `gênero`
   * * para artistas, contém o valor `artista`
   * 
   * Cada item é preenchido conforme seu tipo, usando [`preencherObjetoMusica()`]{@link DiscoService#preencherObjetoMusica},
   * [`preencherObjetoGenero()`]{@link DiscoService#preencherObjetoGenero} 
   * e [`preencherObjetoArtista()`]{@link DiscoService#preencherObjetoArtista}.
   * 
   * @param busca A string de busca
   * @returns Um array de objetos como resultado da pesquisa
   */
  pesquisar(busca: string): Array<any> {
    let lista = [];
    if (!busca) {
      return lista;
    }
    busca = busca.toLowerCase();

    // encontra as músicas
    let musicas = this.musicas.filter(musica => musica.titulo.toLowerCase().indexOf(busca) != -1);
    // preenche cada objeto e define o atributo `tipo`
    for (let musica of musicas) {
      this.preencherObjetoMusica(musica);
      musica.tipo = 'música';
    }

    // encontra os gêneros, preenche cada objeto e define o atributo `tipo`
    let generos = this.generos.filter(genero => genero.nome.toLowerCase().indexOf(busca) != -1);
    for (let genero of generos) {
      this.preencherObjetoGenero(genero);
      genero.tipo = 'gênero';
    }

    // encontra os artistas, preenche cada objeto e define o atributo `tipo`
    let artistas = this.artistas.filter(artista => artista.nome.toLowerCase().indexOf(busca) != -1);
    for (let artista of artistas) {
      this.preencherObjetoArtista(artista);
      artista.tipo = 'artista';
    }

    // concatena as listas em uma só para gerar o resultado
    return lista.concat(musicas, generos, artistas);
  }

}
