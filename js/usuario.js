"use strict";
var tarefas;
(function (tarefas_1) {
    var Usuario = /** @class */ (function () {
        function Usuario(id, nome) {
            this._tarefas = [];
            this._id = id;
            this._nome = nome;
        }
        Object.defineProperty(Usuario.prototype, "id", {
            get: function () {
                return this._id;
            },
            set: function (id) {
                this._id = id;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Usuario.prototype, "nome", {
            get: function () {
                return this._nome;
            },
            set: function (nome) {
                this._nome = nome;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Usuario.prototype, "tarefas", {
            get: function () {
                return this._tarefas;
            },
            set: function (tarefas) {
                this._tarefas = tarefas;
            },
            enumerable: false,
            configurable: true
        });
        Usuario.prototype.adicionarTarefa = function (tarefa) {
            this._tarefas.push(tarefa);
            document.body.innerHTML += "<br><i>A tarefa foi adicionada com sucesso</i>";
        };
        Usuario.prototype.estadoTarefa = function (idTarefa, estadoTarefa) {
            for (var i = 0; i < this._tarefas.length; i++) {
                if (this._tarefas[i].id == idTarefa) {
                    this._tarefas[i].prioridade = estadoTarefa;
                }
            }
        };
        Usuario.prototype.removerTarefa = function (idTarefa) {
            for (var i = 0; i < this._tarefas.length; i++) {
                if (this._tarefas[i].id == idTarefa) {
                    delete this._tarefas[i];
                }
            }
        };
        return Usuario;
    }());
    tarefas_1.Usuario = Usuario;
})(tarefas || (tarefas = {}));
