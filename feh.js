(function feh() {
    var path = ".fehbg";
    var wallpaper = $store.getRaw(path);
    var args = this.arg.arguments;
    if (args.length != 0) {
        $store.set(path, args.join(" "));
        $explorer.refresh();
        var wallpaper = $store.getRaw(path);
    }
    if (wallpaper) {
        document.getElementById("s42_background").style["background-image"] = "url(" + wallpaper + ")";
        document.getElementById("s42_background").style["background-size"] = "cover";
    }
    $log.pass("");
})