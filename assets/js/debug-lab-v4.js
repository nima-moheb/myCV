(function () {
    "use strict";

    var stage = document.getElementById("debug-lab-stage");
    var core = document.getElementById("lab-core");
    var card = document.getElementById("game-card");
    var power = document.getElementById("game-power");
    var combo = document.getElementById("game-combo");
    var cleaned = document.getElementById("game-cleaned");

    if (!stage || !core || !card || !power) return;

    function language() {
        return document.documentElement.lang === "en" ? "en" : "fa";
    }

    function numericText(element) {
        if (!element) return 0;
        var match = String(element.textContent || "").match(/\d+/);
        return match ? Number(match[0]) : 0;
    }

    function createOverlay() {
        if (stage.querySelector(".lab-v4-overlay")) return;

        var overlay = document.createElement("div");
        overlay.className = "lab-v4-overlay";
        overlay.setAttribute("aria-hidden", "true");
        overlay.innerHTML = '<span>CORE / NODE NETWORK</span><span data-v4-phase>FAULT ACQUISITION</span>';

        var progress = document.createElement("div");
        progress.className = "lab-v4-progress";
        progress.setAttribute("aria-hidden", "true");
        progress.innerHTML = "<i></i>";

        stage.appendChild(overlay);
        stage.appendChild(progress);
    }

    function updateOverlay() {
        var stability = Math.max(0, Math.min(100, numericText(power)));
        var streak = numericText(combo);
        var total = numericText(cleaned);
        var bar = stage.querySelector(".lab-v4-progress > i");
        var phase = stage.querySelector("[data-v4-phase]");

        if (bar) bar.style.width = stability + "%";
        stage.style.setProperty("--v4-stability", stability / 100);
        card.classList.toggle("v4-online", stability > 0 && stability < 100);

        if (phase) {
            if (stability >= 100) phase.textContent = "CORE SYNCHRONIZED";
            else if (stability >= 72) phase.textContent = "FINAL SYNC / " + stability + "%";
            else if (streak >= 3) phase.textContent = "COMBO x" + streak + " / " + stability + "%";
            else if (total > 0) phase.textContent = "RESTORING / " + stability + "%";
            else phase.textContent = "FAULT ACQUISITION";
        }
    }

    function relativeCenter(element) {
        var stageRect = stage.getBoundingClientRect();
        var rect = element.getBoundingClientRect();
        return {
            x: rect.left - stageRect.left + rect.width / 2,
            y: rect.top - stageRect.top + rect.height / 2
        };
    }

    function packetToCore(node) {
        var from = relativeCenter(node);
        var to = relativeCenter(core);
        var packet = document.createElement("span");
        packet.className = "lab-v4-packet";
        packet.style.left = from.x + "px";
        packet.style.top = from.y + "px";
        packet.style.setProperty("--dx", (to.x - from.x) + "px");
        packet.style.setProperty("--dy", (to.y - from.y) + "px");
        packet.style.setProperty("--packet-accent", getComputedStyle(node).getPropertyValue("--accent") || "#76ffd8");
        stage.appendChild(packet);
        window.setTimeout(function () { packet.remove(); }, 520);
    }

    function scorePop(node) {
        var center = relativeCenter(node);
        var score = document.createElement("span");
        score.className = "lab-v4-score";
        score.textContent = language() === "fa" ? "+ رفع خطا" : "+ FAULT CLEARED";
        score.style.left = center.x + "px";
        score.style.top = center.y + "px";
        score.style.setProperty("--score-accent", getComputedStyle(node).getPropertyValue("--accent") || "#76ffd8");
        stage.appendChild(score);
        window.setTimeout(function () { score.remove(); }, 780);
    }

    function hitCore() {
        stage.classList.remove("v4-hit");
        void stage.offsetWidth;
        stage.classList.add("v4-hit");
        window.setTimeout(function () { stage.classList.remove("v4-hit"); }, 190);
    }

    function bootStage() {
        stage.classList.remove("v4-booting");
        void stage.offsetWidth;
        stage.classList.add("v4-booting");
        window.setTimeout(function () { stage.classList.remove("v4-booting"); }, 700);
    }

    /* Use a stage listener so we can capture the target before the legacy game removes it. */
    stage.addEventListener("click", function (event) {
        var node = event.target.closest("[data-glitch]");
        if (!node || !stage.contains(node)) return;
        packetToCore(node);
        scorePop(node);
        hitCore();
        window.setTimeout(updateOverlay, 0);
    });

    document.addEventListener("click", function (event) {
        if (event.target.closest("[data-start-game], [data-reset-game]")) {
            bootStage();
            window.setTimeout(updateOverlay, 0);
        }
    });

    [power, combo, cleaned].forEach(function (element) {
        if (!element) return;
        new MutationObserver(updateOverlay).observe(element, {
            childList: true,
            characterData: true,
            subtree: true
        });
    });

    new MutationObserver(function () {
        /* New glitch buttons are injected by the existing game. CSS handles them automatically. */
        updateOverlay();
    }).observe(document.getElementById("lab-consoles"), { childList: true });

    createOverlay();
    updateOverlay();
})();
