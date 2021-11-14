(function () {
    'use strict';
    function getVideoSrc(video) {
        const url = video.src;
        const height = video.videoHeight;
        console.log(height, url);
        const title = document.querySelector('a.ytp-title-link').textContent;
        console.log(title);
        window.open(video.src + '#' + title, '_blank');
    }

    function appendButton() {
        const button = document.createElement('button');
        button.style.zIndex = 999;
        button.style.position = 'absolute';
        button.style.top = '0';
        button.style.right = '0';
        button.style.height = '30px';
        button.style.width = '100px';
        button.textContent = 'Download';
        button.onclick = () => {
            const video = document.querySelector('video');
            getVideoSrc(video);
        };
        document.body.appendChild(button);
    }

    appendButton();

})();
