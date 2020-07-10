$(document).ready(function() {
    i18n.init({
        lng: 'ko',
        load: 'languageOnly',
        resGetPath: 'js/locales/__lng__.json',
        debug: true
    }, function() {
        $("body").i18n()
    })
})

function changeLang(lang) {
    i18n.setLng(lang, function() {
        $('body').i18n()
    })
}
