// Function to save data to a cookie without expiration
function saveCookie(key, value) {
    document.cookie = key + "=" + value + ";path=/";
}

// Function to load data from a cookie
function loadFromCookie(key) {
    var name = key + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');

    for (var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i].trim();
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }

    return null;
}

// Get a cookie
function loadCookie(cookieKey)
{
   return loadFromCookie(cookieKey); 
}
