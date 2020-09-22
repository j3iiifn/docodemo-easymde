window.onload = function() {
    document.querySelectorAll('textarea').forEach(function (elem) {
        new EasyMDE({
            element: elem,
            autoDownloadFontAwesome: false,
            spellChecker: false,
            tabSize: 4,
            toolbar: false
        });
    });
};
