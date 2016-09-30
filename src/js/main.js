/**
 * Created by lenovo on 2016/9/21.
 */

window.onload = function () {

    var p = document.querySelector(".attract .unit.content p");

    var style = window.getComputedStyle(p, null);

    var sizeText = style.fontSize;

    var textNode = document.createTextNode(" font-size: " + sizeText);

    p.appendChild(textNode);

};
