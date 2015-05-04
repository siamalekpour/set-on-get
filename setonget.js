function setOnGet(varname, value){
    var url = window.location.href;
    var separator = (url.indexOf("?")===-1)?"?":"&";
    var oldParam = new RegExp(varname + '=?[^&]*', 'gi');
    url = url.replace(oldParam, ''); // Remove old var if exists
    url += separator + varname + '=' + value; // Add new param to end of string;

    // Remove any anolmalies;
    url = url.replace(/&&/gi, '&');
    url = url.replace(/\?&/gi, '?');

    return url
}
