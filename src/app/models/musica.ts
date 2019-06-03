export class Musica {
    id: number;
    titulo: string;
    idGenero: number;
    genero: any;
    artistas: any[];
    gostar: number;
    naoGostar: number;

    curtir() {
        this.gostar = 1;
        this.naoGostar = 0;
    }

    naoCurtir() {
        this.gostar = 0;
        this.naoGostar = 1;
    }
}