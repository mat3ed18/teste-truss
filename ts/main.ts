namespace tarefas {

    // botões superiores

    $(document).on("click", ".addTask", function(){
        const usuarios = JSON.parse(localStorage.getItem("usuarios"));

        $("#usuarioTarefa").html("<option value=\"\" selected>Selecione um autor</option>");

        for (let i = 0; i < usuarios.length; i++) {
            $("#usuarioTarefa").append("<option value=\"" + usuarios[i]._id + "\">" + usuarios[i]._nome + "</option>");
        }
        $(".adicionar_tarefa").modal("show");
    });
    
    $(document).on("click", ".addUser", function(){
        $(".adicionar_usuario").modal("show");
    });

    // atualizar tarefas

    function main_tasks() {
        const usuarios = JSON.parse(localStorage.getItem("usuarios"));let html_task = "";

        $(".main_tasks").html("");

        if (localStorage.getItem("usuarios") != null) {
            for (let i = 0; i < usuarios.length; i++) {
                for (let j = 0; j < usuarios[i]._tarefas.length; j++) {
                    if (usuarios[i]._tarefas[j] != null) {
                        switch (usuarios[i]._tarefas[j]._prioridade) {
                            case "ALTA":
                            default:
                                html_task += "<div class=\"card text-dark bg-danger mb-3\" style=\"max-width: 18rem;\">";
                            break;
                            case "MEDIA":
                                html_task += "<div class=\"card text-dark bg-light mb-3\" style=\"max-width: 18rem;\">";
                            break;
                            case "BAIXA":
                                html_task += "<div class=\"card text-dark bg-success mb-3\" style=\"max-width: 18rem;\">";
                            break;
                        }

                        switch (usuarios[i]._tarefas[j]._prioridade) {
                            case "ALTA":
                                html_task += "<div class=\"card-header font-weight-bold text-white\">Tarefa #" + usuarios[i]._tarefas[j]._id + "</div>";
                                    html_task += "<div class=\"card-body\">";
                                        html_task += "<p class=\"card-text text-white\">" + usuarios[i]._tarefas[j]._descricao + "</p>";
                                        html_task += "<a id-task=\"" + usuarios[i]._tarefas[j]._id + "\" class=\"btn btn-secondary btnUpdateAlta\"><i class=\"bi bi-clock\"></i></a>";
                                        html_task += "&nbsp<a id-task=\"" + usuarios[i]._tarefas[j]._id + "\" class=\"btn btn-primary btnUpdateMedia\"><i class=\"bi bi-check2\"></i></a>";
                                        html_task += "&nbsp<a id-task=\"" + usuarios[i]._tarefas[j]._id + "\" class=\"btn btn-outline-dark btnUpdateBaixa\"><i class=\"bi bi-check2-all\"></i></a>";
                                        html_task += "&nbsp<a id-task=\"" + usuarios[i]._tarefas[j]._id + "\" class=\"btn btn-outline-dark btnDeleteTask\"><i class=\"bi bi-trash\"></i></a>";
                                    html_task += "</div>";
                                html_task += "</div>&nbsp&nbsp&nbsp";
                            break;
                            case "MEDIA":
                                html_task += "<div class=\"card-header font-weight-bold\">Tarefa #" + usuarios[i]._tarefas[j]._id + "</div>";
                                    html_task += "<div class=\"card-body\">";
                                        html_task += "<p class=\"card-text\">" + usuarios[i]._tarefas[j]._descricao + "</p>";
                                        html_task += "<a id-task=\"" + usuarios[i]._tarefas[j]._id + "\" class=\"btn btn-secondary btnUpdateAlta\"><i class=\"bi bi-clock\"></i></a>";
                                        html_task += "&nbsp<a id-task=\"" + usuarios[i]._tarefas[j]._id + "\" class=\"btn btn-primary btnUpdateMedia\"><i class=\"bi bi-check2\"></i></a>";
                                        html_task += "&nbsp<a id-task=\"" + usuarios[i]._tarefas[j]._id + "\" class=\"btn btn-outline-dark btnUpdateBaixa\"><i class=\"bi bi-check2-all\"></i></a>";
                                        html_task += "&nbsp<a id-task=\"" + usuarios[i]._tarefas[j]._id + "\" class=\"btn btn-danger btnDeleteTask\"><i class=\"bi bi-trash\"></i></a>";
                                    html_task += "</div>";
                                html_task += "</div>&nbsp&nbsp&nbsp";
                            break;
                            case "BAIXA":
                                html_task += "<div class=\"card-header font-weight-bold text-white\">Tarefa #" + usuarios[i]._tarefas[j]._id + "</div>";
                                    html_task += "<div class=\"card-body\">";
                                        html_task += "<p class=\"card-text text-white\">" + usuarios[i]._tarefas[j]._descricao + "</p>";
                                        html_task += "<a id-task=\"" + usuarios[i]._tarefas[j]._id + "\" class=\"btn btn-secondary btnUpdateAlta\"><i class=\"bi bi-clock\"></i></a>";
                                        html_task += "&nbsp<a id-task=\"" + usuarios[i]._tarefas[j]._id + "\" class=\"btn btn-primary btnUpdateMedia\"><i class=\"bi bi-check2\"></i></a>";
                                        html_task += "&nbsp<a id-task=\"" + usuarios[i]._tarefas[j]._id + "\" class=\"btn btn-outline-dark btnUpdateBaixa\"><i class=\"bi bi-check2-all\"></i></a>";
                                        html_task += "&nbsp<a id-task=\"" + usuarios[i]._tarefas[j]._id + "\" class=\"btn btn-danger btnDeleteTask\"><i class=\"bi bi-trash\"></i></a>";
                                    html_task += "</div>";
                                html_task += "</div>&nbsp&nbsp&nbsp";
                            break;
                        }
                    }
                }
            }
            $(".main_tasks").html(html_task);
        } else {
            $(".main_tasks").html("Você não tem nenhuma tarefa");
        }
        
    }

    // atualizar tarefas na página principal

    $(document).ready(function(){
        main_tasks();
    });

    // atualizar eventos dos botões das tarefas

    function events_tasks () {
        $(document).on("click", ".card .btnUpdateAlta", function(){
            const usuarios = JSON.parse(localStorage.getItem("usuarios"));
            for (let i = 0; i < usuarios.length; i++) {
                for (let j = 0; j < usuarios[i]._tarefas.length; j++) {
                    if (usuarios[i]._tarefas[j] != null) {
                        if (usuarios[i]._tarefas[j]._id == parseInt($(this).attr("id-task"))) {
                            usuarios[i]._tarefas[j]._prioridade = TarefaEstado.ALTA;
                        }
                    }
                }
            }
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            main_tasks();
        });

        $(document).on("click", ".card .btnUpdateMedia", function(){
            const usuarios = JSON.parse(localStorage.getItem("usuarios"));
            for (let i = 0; i < usuarios.length; i++) {
                for (let j = 0; j < usuarios[i]._tarefas.length; j++) {
                    if (usuarios[i]._tarefas[j] != null) {
                        if (usuarios[i]._tarefas[j]._id == parseInt($(this).attr("id-task"))) {
                            usuarios[i]._tarefas[j]._prioridade = TarefaEstado.MEDIA;
                        }
                    }
                }
            }
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            main_tasks();
        });

        $(document).on("click", ".card .btnUpdateBaixa", function(){
            const usuarios = JSON.parse(localStorage.getItem("usuarios"));
            for (let i = 0; i < usuarios.length; i++) {
                for (let j = 0; j < usuarios[i]._tarefas.length; j++) {
                    if (usuarios[i]._tarefas[j] != null) {
                        if (usuarios[i]._tarefas[j]._id == parseInt($(this).attr("id-task"))) {
                            usuarios[i]._tarefas[j]._prioridade = TarefaEstado.BAIXA;
                        }
                    }
                }
            }
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            main_tasks();
        });

        $(document).on("click", ".card .btnDeleteTask", function(){
            const usuarios = JSON.parse(localStorage.getItem("usuarios"));
            for (let i = 0; i < usuarios.length; i++) {
                for (let j = 0; j < usuarios[i]._tarefas.length; j++) {
                    if (usuarios[i]._tarefas[j] != null) {
                        if (usuarios[i]._tarefas[j]._id == parseInt($(this).attr("id-task"))) {
                            delete usuarios[i]._tarefas[j];
                        }
                    }
                }
            }
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            main_tasks();
        });
    }

    // atualizar eventos dos botões das tarefas na página principal

    events_tasks();

    // adicionar usuários e tarefas

    $(document).on("click", ".adicionar_usuario .btn-outline-success", function(){
        if (localStorage.getItem("usuarios") != null) {
            const usuarios = JSON.parse(localStorage.getItem("usuarios"));
            const random_id = Math.floor(Math.random() * 10000) + 1;
            usuarios.push(new Usuario(random_id, $("#nameUser").val().toString()));
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
        } else {
            const usuarios = [];
            const random_id = Math.floor(Math.random() * 10000) + 1;
            usuarios.push( new Usuario(random_id, $("#nameUser").val().toString()) );
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
        }

        $(".adicionar_usuario").modal("hide");
        $("#alertMsg").html("O usuário foi cadastrado com sucesso");
        $("#nameUser").val(null);
        $(".alert").modal("show");
    });
    
    $(document).on("click", ".adicionar_tarefa .btn-outline-success", function(){
        if (localStorage.getItem("usuarios") != null) {
            const usuarios = JSON.parse(localStorage.getItem("usuarios"));

            for (let i = 0; i < usuarios.length; i++) {
                if (usuarios[i]._id == $("#usuarioTarefa").val()) {
                    const random_id = Math.floor(Math.random() * 10000) + 1;

                    switch ($("#prioridadeTarefa").val()) {
                        case "ALTA":
                            usuarios[i]._tarefas.push(new Tarefa(random_id, $("#descricao").val().toString(), TarefaEstado.ALTA, $("#conclusao").val().toString(), $("#imagem").val().toString()));
                        break;
                        case "MEDIA":
                            usuarios[i]._tarefas.push(new Tarefa(random_id, $("#descricao").val().toString(), TarefaEstado.MEDIA, $("#conclusao").val().toString(), $("#imagem").val().toString()));
                        break;
                        case "BAIXA":
                            usuarios[i]._tarefas.push(new Tarefa(random_id, $("#descricao").val().toString(), TarefaEstado.BAIXA, $("#conclusao").val().toString(), $("#imagem").val().toString()));
                        break;
                    }
                }
            }

            localStorage.setItem("usuarios", JSON.stringify(usuarios));

            $(".adicionar_tarefa").modal("hide");
            $("#alertMsg").html("A tarefa foi cadastrada com sucesso");
            
            $("#descricao").val(null);
            $("#usuarioTarefa").html("<option value=\"\" selected>Selecione um autor</option>");
            $("#estadoTarefa").html("<option value=\"\" selected>Selecione um estado</option><option value=\"ALTA\">ALTA</option><option value=\"MEDIA\">MÉDIA</option><option value=\"BAIXA\">BAIXA</option>");

            $(".alert").modal("show");
            main_tasks();
        } else {
            $(".adicionar_tarefa").modal("hide");
            $("#alertMsg").html("<small>Adicione um usuário ou faça seu cadastro para adicionar tarefas</small>");
            $("#nameUser").val(null);
            $(".alert").modal("show");
        }
        events_tasks();
    });

}