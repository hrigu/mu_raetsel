/*
Holt den selektierten Text
TODO: Nur selektierten Text des Elementes "aktuelle_kette" erlauben
TODO: Wenn kein Selektierten Text, dann die Aktion abbrechen
 */
function getSelectedText(){
    var selected_text = window.getSelection().toString();
    if(selected_text == ""){
        alert("Bitte selektiere den Input aus der aktuellen Kette für die Regel!");
        return false
    }
    return selected_text
}

/*
Schreibt den aktuellen Schritt in die History
 */
function add_schritt_to_html(kette, regel) {
    $("#history").append(
        "<div class='row'>" +
        "   <div class='col-6'>" + kette + "</div>" +
        "   <div class='col-6'>" +regel +"</div>" +
        "</div>"
    );
}

/*
Schreibt die neue Kette
 */
function ersetze_text_der_aktuellen_kette(neue_kette) {
    $("#aktuelle_kette").text(neue_kette)
}

$(document).ready(function() {

    /*
    Handler für Regel 1
     */
    $("#regel_1").click(function() {

        var aktuelle_kette = $("#aktuelle_kette").text();

        var selectedText = getSelectedText();

        var neue_kette = aktuelle_kette+selectedText;


        ersetze_text_der_aktuellen_kette(neue_kette);
        add_schritt_to_html(aktuelle_kette, "Regel I");

    });



});