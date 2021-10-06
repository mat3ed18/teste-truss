"use strict";
var tarefas;
(function (tarefas) {
    var Tarefa = /** @class */ (function () {
        function Tarefa(id, descricao, estado, dtConclusao, imagem) {
            this._id = id;
            this._descricao = descricao;
            this._prioridade = estado;
            this.dtConclusao = dtConclusao;
            this._imagem = imagem;
        }
        Object.defineProperty(Tarefa.prototype, "id", {
            get: function () {
                return this._id;
            },
            set: function (id) {
                this._id = id;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Tarefa.prototype, "descricao", {
            get: function () {
                return this._descricao;
            },
            set: function (descricao) {
                this._descricao = descricao;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Tarefa.prototype, "prioridade", {
            get: function () {
                return this._prioridade;
            },
            set: function (prioridade) {
                this._prioridade = prioridade;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Tarefa.prototype, "dtConclusao", {
            get: function () {
                return this._dtConclusao;
            },
            set: function (dtConclusao) {
                this._dtConclusao = dtConclusao;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Tarefa.prototype, "imagem", {
            get: function () {
                return this._imagem;
            },
            set: function (imagem) {
                this._imagem = imagem;
            },
            enumerable: false,
            configurable: true
        });
        return Tarefa;
    }());
    tarefas.Tarefa = Tarefa;
})(tarefas || (tarefas = {}));
