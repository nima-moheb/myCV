document.addEventListener("DOMContentLoaded", function () {
    // مشاهده‌ی کارت‌ها برای انیمیشن ظاهر شدن هنگام اسکرول
    var observedElements = document.querySelectorAll(".observe");
    var supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var rootStyle = document.documentElement;
    document.body.classList.add("is-loaded");
    if (!supportsHover) {
        document.body.classList.add("is-mobile");
    }

    if ("IntersectionObserver" in window) {
        var observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        if (
                            !prefersReducedMotion &&
                            (entry.target.classList.contains("layer-card") ||
                                entry.target.classList.contains("highlight-card") ||
                                entry.target.classList.contains("mini-card"))
                        ) {
                            entry.target.classList.add("spark");
                            var sparkDuration = 600 + Math.random() * 300;
                            window.setTimeout(function () {
                                entry.target.classList.remove("spark");
                            }, sparkDuration);
                        }
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.18
            }
        );

        observedElements.forEach(function (el) {
            observer.observe(el);
        });
    } else {
        // مرورگرهای قدیمی‌تر: تمام کارت‌ها را نمایش بده
        observedElements.forEach(function (el) {
            el.classList.add("is-visible");
        });
    }

    // اسکرول نرم به بخش‌ها برای لینک‌هایی که به ID اشاره می‌کنند
    var anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            var targetId = this.getAttribute("href").substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                event.preventDefault();
                var rect = targetElement.getBoundingClientRect();
                var offset = window.scrollY || window.pageYOffset;
                var targetPosition = rect.top + offset - 72;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // جلوه‌ی نور دنبال‌کننده‌ی نشانگر
    var cursorGlow = document.querySelector(".cursor-glow");
    if (cursorGlow && supportsHover) {
        window.addEventListener("pointermove", function (event) {
            rootStyle.style.setProperty("--cursor-x", event.clientX + "px");
            rootStyle.style.setProperty("--cursor-y", event.clientY + "px");
        });
    } else if (cursorGlow) {
        cursorGlow.classList.add("is-breathing");

        if (!prefersReducedMotion) {
            var startTime = performance.now();
            var animateGlow = function (time) {
                var t = (time - startTime) / 1000;
                var x = 50 + Math.cos(t * 0.35) * 10;
                var y = 28 + Math.sin(t * 0.35) * 8;

                rootStyle.style.setProperty("--cursor-x", x.toFixed(2) + "vw");
                rootStyle.style.setProperty("--cursor-y", y.toFixed(2) + "vh");
                window.requestAnimationFrame(animateGlow);
            };

            window.requestAnimationFrame(animateGlow);
        }
    }

    // افکت زاویه‌دار کارت‌ها
    if (supportsHover) {
        var tiltCards = document.querySelectorAll(".layer-card, .highlight-card, .mini-card");
        tiltCards.forEach(function (card) {
            card.addEventListener("pointermove", function (event) {
                var rect = card.getBoundingClientRect();
                var x = (event.clientX - rect.left) / rect.width;
                var y = (event.clientY - rect.top) / rect.height;
                var rotateX = (0.5 - y) * 6;
                var rotateY = (x - 0.5) * 6;

                card.style.setProperty("--tilt-x", rotateX.toFixed(2) + "deg");
                card.style.setProperty("--tilt-y", rotateY.toFixed(2) + "deg");
            });

            card.addEventListener("pointerleave", function () {
                card.style.setProperty("--tilt-x", "0deg");
                card.style.setProperty("--tilt-y", "0deg");
            });
        });
    }

    // افکت مغناطیسی دکمه‌ها
    var buttons = document.querySelectorAll(".btn");
    if (supportsHover) {
        buttons.forEach(function (button) {
            button.addEventListener("pointermove", function (event) {
                var rect = button.getBoundingClientRect();
                var offsetX = event.clientX - rect.left - rect.width / 2;
                var offsetY = event.clientY - rect.top - rect.height / 2;
                var translateX = Math.max(-10, Math.min(10, offsetX * 0.2));
                var translateY = Math.max(-10, Math.min(10, offsetY * 0.2));

                button.style.setProperty("--btn-x", translateX.toFixed(1) + "px");
                button.style.setProperty("--btn-y", translateY.toFixed(1) + "px");
            });

            button.addEventListener("pointerleave", function () {
                button.style.setProperty("--btn-x", "0px");
                button.style.setProperty("--btn-y", "0px");
            });
        });
    }

    if (!supportsHover && !prefersReducedMotion) {
        var idleCards = Array.prototype.slice.call(
            document.querySelectorAll(".layer-card, .highlight-card, .mini-card")
        );

        var scheduleShimmer = function () {
            var delay = 8000 + Math.random() * 4000;
            window.setTimeout(function () {
                if (document.visibilityState !== "visible") {
                    scheduleShimmer();
                    return;
                }

                var count = Math.random() > 0.6 ? 2 : 1;
                var available = idleCards.slice();

                for (var i = 0; i < count && available.length > 0; i += 1) {
                    var index = Math.floor(Math.random() * available.length);
                    var card = available.splice(index, 1)[0];
                    card.classList.add("idle-shimmer");
                    window.setTimeout(
                        function (target) {
                            target.classList.remove("idle-shimmer");
                        }.bind(null, card),
                        1200
                    );
                }

                scheduleShimmer();
            }, delay);
        };

        if (idleCards.length > 0) {
            scheduleShimmer();
        }
    }
});
