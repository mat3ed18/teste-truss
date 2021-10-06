namespace tarefas {
    export class Tarefa {
        private _id: number;
        private _descricao: string;
        private _prioridade: TarefaEstado;
        private _dtConclusao: string;
        private _imagem: string;

        constructor (id: number, descricao: string, estado: TarefaEstado, dtConclusao: string, imagem: string) {
            this._id = id;
            this._descricao = descricao;
            this._prioridade = estado;
            this.dtConclusao = dtConclusao;
            this._imagem = imagem;
        }

        get id () {
            return this._id;
        }

        set id (id: number) {
            this._id = id;
        }
        
        get descricao () {
            return this._descricao;
        }

        set descricao (descricao: string) {
            this._descricao = descricao;
        }
        
        get prioridade () {
            return this._prioridade;
        }

        set prioridade (prioridade: TarefaEstado) {
            this._prioridade = prioridade;
        }
        
        get dtConclusao () {
            return this._dtConclusao;
        }

        set dtConclusao (dtConclusao: string) {
            this._dtConclusao = dtConclusao;
        }

        get imagem () {
            return this._imagem;
        }

        set imagem (imagem: string) {
            this._imagem = imagem;
        }
    }
}