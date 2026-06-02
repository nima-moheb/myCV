document.addEventListener("DOMContentLoaded", function () {
    var root = document.documentElement;
    var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    var observedElements = document.querySelectorAll(".observe");
    if (prefersReducedMotion) {
        observedElements.forEach(function (element) {
            element.classList.add("is-visible");
        });
    } else if ("IntersectionObserver" in window) {
        var revealObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    if (entry.target.classList.contains("project-card") || entry.target.classList.contains("stack-card")) {
                        entry.target.classList.add("spark");
                        window.setTimeout(function () {
                            entry.target.classList.remove("spark");
                        }, 900);
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.16, rootMargin: "0px 0px -8% 0px" });

        observedElements.forEach(function (element) {
            revealObserver.observe(element);
        });
    } else {
        observedElements.forEach(function (element) {
            element.classList.add("is-visible");
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            var targetId = link.getAttribute("href").slice(1);
            var target = document.getElementById(targetId);
            if (!target) {
                return;
            }

            event.preventDefault();
            var header = document.querySelector(".site-header");
            var headerOffset = header && getComputedStyle(header).position === "sticky" ? header.offsetHeight + 18 : 18;
            var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: targetPosition,
                behavior: prefersReducedMotion ? "auto" : "smooth"
            });
        });
    });

    var cursorGlow = document.querySelector(".cursor-glow");
    if (cursorGlow && supportsHover && !prefersReducedMotion) {
        var latestX = window.innerWidth / 2;
        var latestY = window.innerHeight * 0.3;
        var currentX = latestX;
        var currentY = latestY;
        var ticking = false;

        var renderGlow = function () {
            currentX += (latestX - currentX) * 0.16;
            currentY += (latestY - currentY) * 0.16;
            root.style.setProperty("--cursor-x", currentX.toFixed(1) + "px");
            root.style.setProperty("--cursor-y", currentY.toFixed(1) + "px");

            if (Math.abs(latestX - currentX) > 0.5 || Math.abs(latestY - currentY) > 0.5) {
                window.requestAnimationFrame(renderGlow);
            } else {
                ticking = false;
            }
        };

        window.addEventListener("pointermove", function (event) {
            latestX = event.clientX;
            latestY = event.clientY;
            if (!ticking) {
                ticking = true;
                window.requestAnimationFrame(renderGlow);
            }
        }, { passive: true });
    }

    if (supportsHover && !prefersReducedMotion) {
        document.querySelectorAll(".tilt-card").forEach(function (card) {
            var queued = false;
            var lastEvent = null;

            var updateTilt = function () {
                if (!lastEvent) {
                    queued = false;
                    return;
                }
                var rect = card.getBoundingClientRect();
                var x = (lastEvent.clientX - rect.left) / rect.width;
                var y = (lastEvent.clientY - rect.top) / rect.height;
                card.style.setProperty("--tilt-x", ((0.5 - y) * 7).toFixed(2) + "deg");
                card.style.setProperty("--tilt-y", ((x - 0.5) * 7).toFixed(2) + "deg");
                queued = false;
            };

            card.addEventListener("pointermove", function (event) {
                lastEvent = event;
                if (!queued) {
                    queued = true;
                    window.requestAnimationFrame(updateTilt);
                }
            }, { passive: true });

            card.addEventListener("pointerleave", function () {
                lastEvent = null;
                card.style.setProperty("--tilt-x", "0deg");
                card.style.setProperty("--tilt-y", "0deg");
            });
        });

        document.querySelectorAll(".btn").forEach(function (button) {
            button.addEventListener("pointermove", function (event) {
                var rect = button.getBoundingClientRect();
                var offsetX = event.clientX - rect.left - rect.width / 2;
                var offsetY = event.clientY - rect.top - rect.height / 2;
                button.style.setProperty("--btn-x", Math.max(-9, Math.min(9, offsetX * 0.18)).toFixed(1) + "px");
                button.style.setProperty("--btn-y", Math.max(-9, Math.min(9, offsetY * 0.18)).toFixed(1) + "px");
            }, { passive: true });

            button.addEventListener("pointerleave", function () {
                button.style.setProperty("--btn-x", "0px");
                button.style.setProperty("--btn-y", "0px");
            });
        });
    }
});
