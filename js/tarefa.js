"use strict";
var tarefas;
(function (tarefas) {
    var Tarefa = /** @class */ (function () {
        function Tarefa(id, descricao, estado) {
            this._id = id;
            this._descricao = descricao;
            this._estado = estado;
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
        Object.defineProperty(Tarefa.prototype, "estado", {
            get: function () {
                return this._estado;
            },
            set: function (estado) {
                this._estado = estado;
            },
            enumerable: false,
            configurable: true
        });
        return Tarefa;
    }());
    tarefas.Tarefa = Tarefa;
})(tarefas || (tarefas = {}));
