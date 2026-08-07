(function () {
    function setPanelOpen(button, panel, isOpen) {
        var video = panel.querySelector("video");
        panel.hidden = !isOpen;
        button.setAttribute("aria-expanded", String(isOpen));
        button.textContent = isOpen
            ? button.dataset.videoHideLabel
            : button.dataset.videoLabel;

        if (!isOpen && video) {
            video.pause();
        }
    }

    document.querySelectorAll(".video-toggle[aria-controls]").forEach(function (button) {
        var panel = document.getElementById(button.getAttribute("aria-controls"));

        if (!panel) {
            return;
        }

        button.addEventListener("click", function () {
            setPanelOpen(button, panel, panel.hidden);
        });
    });
}());