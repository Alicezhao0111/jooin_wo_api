window.addEventListener('load', () => {
    quicklink.listen();
});

//下載app連結
function goToGoogle() {
    var url = 'https://play.google.com/store/apps/details?id=io.jooinnow.app&hl=zh_TW';
    window.open(url, '_blank');
}
function goToApp() {
    var url = 'https://apps.apple.com/tw/app/jooin-now/id6464280623';
    window.open(url, '_blank');
}