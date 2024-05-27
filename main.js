const searchInput = document.querySelector("#search-input");
searchInput.addEventListener("keydown",function(event) {
if(event.code == "Enter") {
    search();
}
});
function search() {
    const input = searchInput.value;

    window.location.href="https://www.google.com/search?q= "+ input +" &sxsrf=AJOqlzXriBT10pn0DomNrMu1AN08wmj29Q%3A1677909269946&ei=Fd0CZJuyOcmPxc8PwYmRqAI&ved=0ahUKEwjbkICQy8H9AhXJR_EDHcFEBCUQ4dUDCA8&uact=5&oq= "+ input +" &gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECCMQJzIECC4QQzIECC4QQzIECC4QQzIECC4QQzIFCC4QgAQyBQguEIAEMgUIABCABDIFCC4QgAQyBQguEIAEOgoIABBHENYEELADOgcILhCwAxBDOgcIABCwAxBDOgwILhDIAxCwAxBDGAE6BggAEAcQHkoECEEYAFDkfFjkfGCRjgFoAXABeACAAbYBiAHSApIBAzAuMpgBAKABAcgBFMABAdoBBggBEAEYCA&sclient=gws-wiz-serp";
}