"use strict";
function btnSubmit_onclick(event) {
    var $submit = $(event.target);
    var $form = $submit.parents("form");
    $form.attr("method", $submit.data("method"));
    $form.attr("action", $submit.data("action"));
    $form.submit();
}
function document_onready() {
    $("input type='submit'").on("click", function (event) { return btnSubmit_onclick(event); });
}
$(document).ready(document_onready);
//# sourceMappingURL=regist.js.map