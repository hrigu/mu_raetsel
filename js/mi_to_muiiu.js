const M = "M"
const I = "I"
const U = "U"

/*
Holt den selektierten Text
TODO: Wenn kein Selektierten Text, dann die Aktion abbrechen
 */
function getSelectedText(){
    var selected_text = window.getSelection().toString();

    if(window.getSelection().baseNode.parentNode.id != "aktuelle_kette"){
        selected_text = ""
        alert("Bitte selektiere aus der aktuellen Kette!");


    } else if(selected_text == ""){
        alert("Bitte selektiere den Input aus der aktuellen Kette für die Regel!");
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
        "   <div class='col-6'>" + regel + "</div>" +
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
    Handler für Regel 1: xI -> xIU
     */
    $("#regel_1").click(function() {

        var aktuelle_kette = $("#aktuelle_kette").text();
        var selectedText = getSelectedText();

        //muss mit I enden
        var lastChar = selectedText[selectedText.length -1];
        if(lastChar != I){
            alert("Der letzte Buchstabe der Selektion muss I sein. Die Selektion ist "+selectedText);
            return;
        }

        // start- und Endpunkt des ersten Erscheinens
        var start_index = aktuelle_kette.indexOf(selectedText);
        var end_index = start_index+selectedText.length;

        var erster_teil_kette = aktuelle_kette.substr(0, start_index+selectedText.length)
        var neu = U
        var zweiter_teil_kette = aktuelle_kette.substr(end_index)
        var neue_kette = erster_teil_kette+neu+zweiter_teil_kette;

        ersetze_text_der_aktuellen_kette(neue_kette);
        add_schritt_to_html(aktuelle_kette, "Regel I");

    });

    $("#regel_2").click(function() {
        var aktuelle_kette = $("#aktuelle_kette").text();
        var selectedText = getSelectedText();

        ersetze_text_der_aktuellen_kette(neue_kette);
        add_schritt_to_html(aktuelle_kette, "Regel II");

    });




    });