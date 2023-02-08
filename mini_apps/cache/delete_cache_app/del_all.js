function del_all_cache_in_app() {
    localStorage.cache = 'delete'
    setTimeout(() => {
        window.location.href = "/mini_apps/cache/delete_cache_app/run.html";
        delete localStorage.background
        delete localStorage.save_text_in_text_editor
    }, 3000);
}