(function() {
    'use strict';
    const video = document.querySelector('video');
    video.addEventListener('play', () => {
        const videoHeight = video.videoHeight;
        const title = decodeURIComponent(location.hash.replace(/#/, '')).replace('.mp4', `-${videoHeight}p.mp4`) || `videoplayback-${new Date().getTime()}-${videoHeight}p.mp4`;
        console.log(title);
        const a = document.createElement('a');
        a.href = location.href;
        a.download = title;
        a.click();
        window.close();
    });
})();
