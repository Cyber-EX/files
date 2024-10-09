// script.js file

function domReady(fn) {
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
    ) {
        setTimeout(fn, 1000);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

domReady(function () {

    // If found you qr code
    function onScanSuccess(decodeText, decodeResult) {
        alert("Your Qr is : " + decodeText, decodeResult);

        var fileContent = decodeText;
        var bb = new Blob([fileContent ], { type: 'text/plain' });
        var a = document.createElement('a');
        a.download = 'download.txt';
        a.href = window.URL.createObjectURL(bb);
        a.click();
    }

    let htmlscanner = new Html5QrcodeScanner(
        "my-qr-reader",
        { fps: 10, qrbos: 250 }
    );
    htmlscanner.render(onScanSuccess);
});
