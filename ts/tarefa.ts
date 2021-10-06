namespace tarefas {
    export class Tarefa {
        private _id: number;
        private _descricao: string;
        private _estado: TarefaEstado;

        constructor (id: number, descricao: string, estado: TarefaEstado) {
            this._id = id;
            this._descricao = descricao;
            this._estado = estado;
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
        
        get estado () {
            return this._estado;
        }

        set estado (estado: TarefaEstado) {
            this._estado = estado;
        }                
    }
}