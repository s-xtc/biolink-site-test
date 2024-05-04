self.__BUILD_MANIFEST = function(s) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [],
            fallback: []
        },
        "/": [s, "static/chunks/44-9c97c5e6c8e910c2.js", "static/chunks/pages/index-3bba26290bb0c984.js"],
        "/404": ["static/chunks/pages/404-1394b728ca0e3fd1.js"],
        "/500": ["static/chunks/pages/500-67518b7afe156f5a.js"],
        "/_error": ["static/chunks/pages/_error-54de1933a164a1ff.js"],
        "/[username]": [s, "static/chunks/923-d76ad5ccb5039c6c.js", "static/chunks/pages/[username]-f861a9a6a8d2c96a.js"],
        sortedPages: ["/", "/404", "/500", "/_app", "/_error", "/[username]"]
    }
}("static/chunks/972-a8bb8c417d4f9752.js"),
self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
