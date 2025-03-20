document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll("video"); // Select all <video> elements
    
    videos.forEach(video => {
        if (video) {
            video.addEventListener("mouseover", function () {
                video.play();
            });

            video.addEventListener("mouseout", function () {
                video.pause();
                video.currentTime = 0; // Reset to the beginning
            });

            // Ensure PiP doesn't trigger
            video.disablePictureInPicture = true;
        }
    });
});


function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        if (sidebar.style.width === '250px') {
            sidebar.style.width = '0';
        } else {
            sidebar.style.width = '250px';
        }
    } else {
        console.error('Sidebar element not found');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector('.menu-icon');
    const sidebar = document.getElementById('sidebar');

    if (!sidebar) {
        console.error('Sidebar element not found');
        return;
    }

    if (menuBtn) {
        menuBtn.addEventListener('click', toggleSidebar);
    } else {
        console.error('Menu button not found');
    }
});