loadData();

function loadData() {
    $.getJSON('data/data.json', function (data) {

        for (let i = 0; i < data.length; i++) {
            $("#accordionExample").append(
                `<div class="card">
                <div class="card-header text-left" id=${data[i].id}>
                    <h2 class="mb-0">
                        <button class="btn btn-link text-decoration-none collapsed" type="button" data-toggle="collapse"
                            data-target="#collapse_${data[i].id}" aria-expanded="false" aria-controls="collapse_${data[i].id}">
                            ${data[i].day} - ${data[i].muscle_group}
                        </button>
                    </h2>
                </div>
                <div id="collapse_${data[i].id}" class="collapse" aria-labelledby="${data[i].id}" data-parent="#accordionExample">
                    <div class="card-body text-center">
                    <div class="btn-group-vertical" id="btns_${data[i].id}"></div>
                    </div>
                </div>
            </div>`);

            for (let j = 0; j < data[i].exercises.length; j++) {
                $(`#btns_${data[i].id}`).append(
                    `
                    <button class="btn btn-outline-info text-left" id="${data[i].exercises[j].id}" onclick='selectExercise(${JSON.stringify(data[i].exercises[j])})'>${data[i].exercises[j].name} ${data[i].exercises[j].set}</button>
                    `
                );
            }
        }
    }).fail(function () {
        document.write("An error has occurred.");
    });
}

function selectExercise(exercise) {
    $('#exercise_modal').modal('toggle');
    $('#exercise_label').html(exercise.name);
    $('#exercise_description').html(exercise.description);
    $('#exercise_media').attr('src', exercise.media);
}