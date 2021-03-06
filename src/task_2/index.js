"use strict"
/** Задача 2 - Форматтер для ФИО
Требуется написать функцию fioFormat, которая
принимает строку, в которой через пробел написаны три слова: имя, фамилия и отчество,
требуется вернуть новую строку формата Фамилия И.О. где И - имя и О - отчество
@param {string} inputFio - Строка с именем, фамилией и отчеством
@return {string} Строка формата Фамилия И.О.
 */
function fioFormat(inputFio) 
{
    let fio = "";
    for (let char = inputFio.indexOf(" ")+1; char < inputFio.lastIndexOf(" "); char++){
        fio += inputFio[char];
    }
    fio += " ";
    fio += inputFio[0];
    fio += ".";
    let spase = inputFio.lastIndexOf(" ");
    fio +=inputFio[spase+1];
    fio += ".";
    return fio;
}

module.exports.fioFormat = fioFormat;
