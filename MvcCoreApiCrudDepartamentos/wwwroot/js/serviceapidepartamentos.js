var urlApi = "https://apicorecruddepartamentos2023xzx.azurewebsites.net/";

function getJsonDepartamentosAsync(callBack) {
    var request = "/api/departamentos";

    $.ajax({
        url: urlApi + request,
        method: "GET",        
        success: function (data) {
            callBack(data);
        }
    })
}

function eliminarDepartamentoAsync(id, callBack) {
    var request = "/api/departamentos/" + id;

    $.ajax({
        url: urlApi + request,
        type: "DELETE",
        success: function (data) {
            callBack(data);
        }
    })
}

function insertarDepartamentoAsync(num , nom, loc, callBack) {
    var objjson = convertDepartamentoJson(num, nom, loc);
    var request = "/api/departamentos";
    $.ajax({
        url: urlApi + request,
        type: "POST",
        data: objjson,
        contentType: "application/json",
        success: function () {
            callBack();
        }

    })
}

function actualizarDepartamentoAsync(num, nom, loc, callBack) {
    var objjson = convertDepartamentoJson(num, nom, loc);
    var request = "/api/departamentos";
    $.ajax({
        url: urlApi + request,
        type: "PUT",
        data: objjson,
        contentType: "application/json",
        success: function () {
            callBack();
        }

    })
}



function cargarDepartamentos() {
    var request = "/api/departamentos";
    $.ajax({
        url: urlApi + request,
        method: "GET",
        dataType: "json",
        success: function (data) {
            var html = "";
            $.each(data, function (index, dept) {
                html += "<tr>";
                html += "<td>" + dept.idDepartamento + "</td>";
                html += "<td>" + dept.nombre + "</td>";
                html += "<td>" + dept.localidad + "</td>";
                html += "</tr>";
                $("#tabladepartamentos tbody").html(html);
            })
        }
    })
}