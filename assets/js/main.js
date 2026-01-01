document.addEventListener("DOMContentLoaded", function () {
    // مشاهده‌ی کارت‌ها برای انیمیشن ظاهر شدن هنگام اسکرول
    var observedElements = document.querySelectorAll(".observe");

    if ("IntersectionObserver" in window) {
        var observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
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

    var supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    var rootStyle = document.documentElement;

    // جلوه‌ی نور دنبال‌کننده‌ی نشانگر
    var cursorGlow = document.querySelector(".cursor-glow");
    if (cursorGlow && supportsHover) {
        window.addEventListener("pointermove", function (event) {
            rootStyle.style.setProperty("--cursor-x", event.clientX + "px");
            rootStyle.style.setProperty("--cursor-y", event.clientY + "px");
        });
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
});
