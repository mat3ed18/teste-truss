namespace tarefas {
    export class Usuario {
        private _id: number; 
        private _nome: string;
        private _tarefas: Tarefa[] = [];

        constructor (id: number, nome: string) {
            this._id = id;
            this._nome = nome;
        }

        get id () {
            return this._id;
        }

        set id (id: number) {
            this._id = id;
        }
        
        get nome () {
            return this._nome;
        }

        set nome (nome: string) {
            this._nome = nome;
        }
        
        get tarefas () {
            return this._tarefas;
        }

        set tarefas (tarefas: Tarefa[]) {
            this._tarefas = tarefas;
        }

        public adicionarTarefa(tarefa: Tarefa): void {
            this._tarefas.push(tarefa);
            document.body.innerHTML += "<br><i>A tarefa foi adicionada com sucesso</i>";
        }

        public estadoTarefa(idTarefa: number, estadoTarefa: TarefaEstado) {
            for (let i = 0; i < this._tarefas.length; i++) {
                if (this._tarefas[i].id == idTarefa) {
                    this._tarefas[i].estado = estadoTarefa;
                }
            }
        }

        public removerTarefa(idTarefa: number) {
            for (let i = 0; i < this._tarefas.length; i++) {
                if (this._tarefas[i].id == idTarefa) {
                    delete this._tarefas[i];
                }
            }
        }
    }
}