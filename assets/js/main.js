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
});
