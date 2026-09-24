(function() {
    var currentProtocol = window.location.protocol; // 'http:' 或 'https:'
    var currentUrl = window.location.href;
    
    var urlParams = new URLSearchParams(window.location.search);
    var hasDontEncryptParam = urlParams.has('dontencrypt');

    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    var cookieMode = getCookie('allow_http');

    // 1. 如果網址帶有 ?dontencrypt 參數，設定 Cookie 為 '1' 並清掉網址參數
    if (hasDontEncryptParam) {
        setCookie('allow_http', '1', 365); 
        var cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        window.history.replaceState({}, document.title, cleanUrl);
        cookieMode = '1'; // 確保當下狀態同步
    }

    // 2. 邏輯判斷
    // 如果使用者已經選擇使用 HTTP (cookieMode === '1')，就安靜地留在 HTTP，不需要跳出提示
    if (cookieMode === '1') {
        return; 
    }

    // 如果使用者之前選擇過 HTTPS (cookieMode === '2')，或者完全沒做過選擇
    if (currentProtocol === 'http:' && cookieMode !== '2') {
        // 如果是 HTTP 且沒選過 HTTPS，當 DOM 載入後顯示提示 Banner
        window.addEventListener('DOMContentLoaded', function() {
            showHttpBanner();
        });
    }

    // 3. 顯示「不加密模式」的提示與切換按鈕
    function showHttpBanner() {
        var banner = document.createElement('div');
        banner.style.cssText = "position: fixed; bottom: 0; left: 0; width: 100%; background: #333; color: #fff; text-align: center; padding: 10px; z-index: 99999; font-size: 14px; box-shadow: 0 -2px 5px rgba(0,0,0,0.3);";
        banner.innerHTML = '目前為非加密（HTTP）相容模式。 ' +
                           '<button id="to-https" style="background: #4CAF50; color: white; border: none; padding: 5px 10px; margin-left: 10px; cursor: pointer; border-radius: 4px;">前往 HTTPS 版網站</button> ' +
                           '<button id="dont-encrypt-btn" style="background: #2196F3; color: white; border: none; padding: 5px 10px; margin-left: 10px; cursor: pointer; border-radius: 4px;">我想使用 HTTP</button>';
        
        document.body.appendChild(banner);

        // 點擊「前往 HTTPS」
        document.getElementById('to-https').addEventListener('click', function() {
            setCookie('allow_http', '2', 365); // 記錄選擇 HTTPS
            window.location.href = currentUrl.replace('http://', 'https://');
        });

        // 點擊「我想使用 HTTP」
        document.getElementById('dont-encrypt-btn').addEventListener('click', function() {
            setCookie('allow_http', '1', 365); // 記錄選擇 HTTP
            window.location.reload(); // 加上括號以正常重新整理
        });
    }
})();