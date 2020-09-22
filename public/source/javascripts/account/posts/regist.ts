
function btnSubmit_onclick(event:JQuery.ClickEvent) {
    const $submit = $(event.target)
    const $form = $submit.parents("form")
    $form.attr("method", $submit.data("method"))
    $form.attr("action", $submit.data("action"))
    $form.submit()
    $submit.off().prop("disabled", true)
    $form.on("submit", false)
}

function document_onready() {
    $("input[type='submit'").on("click",event => btnSubmit_onclick(event))
}

$(document).ready(document_onready)