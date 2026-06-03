document.addEventListener("DOMContentLoaded", function () {
    var EMAIL = "nima.mohebali.b@gmail.com";
    var PHONE = "+989227241378";
    var root = document.documentElement;
    var prefersReducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    var prefersReducedMotion = prefersReducedMotionQuery.matches;
    var supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    var currentLanguage = localStorage.getItem("nima-cv-language") || "fa";
    var lastFocusedElement = null;
    var activeProjectTabs = { applitent: "problem", fannkala: "problem", parstek: "problem" };

    var translations = {
        fa: {
            metaTitle: "نیما | مرکز فرمان توسعه وب",
            metaDescription: "رزومه و پورتفولیوی تعاملی نیما؛ توسعه‌دهنده فول‌استک وب برای لاراول، وردپرس، ووکامرس، سئوی فنی، سرعت، زیرساخت و عیب‌یابی سایت‌های واقعی.",
            skip: "رفتن به محتوای اصلی",
            headerAria: "ناوبری اصلی",
            brandAria: "بازگشت به ابتدای صفحه",
            brandName: "نیما",
            brandRole: "مرکز فرمان توسعه وب",
            navAria: "لینک‌های صفحه",
            navProjects: "پروژه‌ها",
            navStack: "توانایی‌ها",
            navContact: "تماس",
            langAria: "تغییر زبان",
            langStatus: "حالت فارسی",
            commandTrigger: "Command Center",
            heroBadge: "توسعه‌دهنده فول‌استک وب",
            heroTitle: "وب‌اپلیکیشن، فروشگاه و سایت‌هایی که فقط ظاهر ندارند؛ واقعاً کار می‌کنند.",
            heroSubtitle: "از لاراول و داشبوردهای کاربردی تا وردپرس، ووکامرس، سئوی فنی، بهینه‌سازی سرعت و عیب‌یابی محیط واقعی سایت.",
            heroCtaProjects: "دیدن پروژه‌ها",
            heroCtaContact: "تماس با من",
            chip1: "لاراول و داشبورد",
            chip2: "وردپرس و ووکامرس",
            chip3: "سئو و سرعت",
            chip4: "زیرساخت و عیب‌یابی",
            visualAria: "تصویر مرکز فرمان توسعه وب",
            heroAlt: "نیما در مرکز فرمان توسعه وب",
            diagnosticsKicker: "نمایش مهارت فرانت‌اند",
            diagnosticsTitle: "سیستم شما از نگاه مرورگر",
            diagnosticsNote: "فقط داده‌های امن مرورگر نمایش داده می‌شود؛ بدون آی‌پی، مکان‌یابی یا درخواست بیرونی.",
            focusKicker: "تغییر زاویه نگاه",
            focusAria: "انتخاب نوع مخاطب",
            focusEmployer: "برای کارفرما",
            focusClient: "برای مشتری",
            focusEmployerTitle: "چیزی که برای تیم مهم است",
            focusEmployerText: "استک قابل رشد، تحویل قابل اتکا، عیب‌یابی در محیط واقعی و یادگیری سریع برای جا افتادن در تیم.",
            focusClientTitle: "چیزی که برای پروژه مهم است",
            focusClientText: "خروجی کسب‌وکاری، نگه‌داری ساده‌تر، ساختار سئوی تمیز، سرعت بهتر و پشتیبانی بعد از تحویل.",
            projectsKicker: "مطالعه موردی",
            projectsTitle: "پروژه‌ها، با تمرکز روی خروجی واقعی",
            projectsIntro: "کارت‌ها کوتاه‌اند، اما روی مسئله، نقش من و خروجی تمرکز دارند.",
            featuredLabel: "پروژه شاخص",
            storeLabel: "فروشگاه",
            corporateLabel: "سایت شرکتی",
            applitentSummary: "روی یک پلتفرم کسب‌وکاری لاراولی و سایت خدمات حقوقی کار کردم؛ از مسیرهای ورود و ثبت‌نام تا داشبورد، درخواست سرویس، ساختار حقوقی، سئو، ایمیل، سرور و رفع خطاهای محیط واقعی.",
            fannkalaSummary: "بهینه‌سازی و نگه‌داری فروشگاه وردپرسی با تمرکز روی ساختار محصول، تجربه خرید، سرعت و مدیریت ساده‌تر محتوا.",
            parstekSummary: "ساختاردهی سایت شرکتی، صفحات معرفی، رابط کاربری، سفارشی‌سازی قالب و بهبود تجربه کاربری.",
            visitApplitent: "باز کردن Applitent",
            visitApplitentAria: "باز کردن Applitent در تب جدید",
            visitSite: "بازدید سایت",
            tabProblem: "مسئله",
            tabWork: "کار من",
            tabOutcome: "خروجی",
            stackKicker: "داشبورد توانایی‌ها",
            stackTitle: "توانایی‌ها در قالب یک داشبورد جمع‌وجور",
            deliverKicker: "تحویل واقعی",
            deliverTitle: "چه چیزی تحویل می‌دهم؟",
            deliver1: "داشبورد و جریان کاری قابل استفاده",
            deliver2: "فروشگاه و سایت قابل نگه‌داری",
            deliver3: "سئوی فنی و ساختار تمیز",
            deliver4: "سرعت بهتر و تجربه کاربری بهتر",
            deliver5: "عیب‌یابی واقعی از کد تا سرور",
            aiNote: "از ابزارهای هوش مصنوعی برای سرعت بیشتر استفاده می‌کنم، اما معماری، تصمیم فنی، تست، عیب‌یابی و تحویل نهایی با خودم است.",
            healthKicker: "تعامل کوچک",
            healthTitle: "System Health Mini Game",
            healthHint: "چهار گره را فعال کن.",
            healthDone: "سیستم آماده‌تر شد. حالا فقط یک پروژه واقعی کم دارد.",
            contactKicker: "تماس",
            contactTitle: "اگر پروژه‌ای داری که هم ظاهر خوب می‌خواهد، هم منطق درست، هم سئو، سرعت و نگه‌داری، پیام بده.",
            copyEmail: "کپی ایمیل",
            copyPhone: "کپی شماره",
            phoneAria: "تماس با 09227241378",
            footerText: "نیما — مرکز فرمان توسعه وب",
            backTop: "بازگشت به بالا",
            paletteTitle: "فرمان سریع",
            paletteHint: "کلید Escape برای بستن. کلید / برای باز کردن.",
            copiedEmail: "ایمیل کپی شد.",
            copiedPhone: "شماره کپی شد.",
            copyFailed: "کپی انجام نشد؛ مقدار را دستی بردارید.",
            diagnostics: {
                device: "نوع دستگاه", browser: "مرورگر", viewport: "اندازه نما", language: "زبان", timezone: "منطقه زمانی", online: "وضعیت اتصال", scheme: "ترجیج رنگ", motion: "کاهش حرکت", connection: "نوع اتصال",
                desktop: "دسکتاپ", tablet: "تبلت", mobile: "موبایل", onlineValue: "آنلاین", offlineValue: "آفلاین", dark: "تیره", light: "روشن", reduced: "فعال", noPreference: "بدون محدودیت", unknown: "نامشخص"
            }
        },
        en: {
            metaTitle: "Nima | Developer Command Center",
            metaDescription: "Nima's interactive CV and portfolio for Laravel platforms, React-minded UI, WordPress/WooCommerce, technical SEO, performance, infrastructure, and production debugging.",
            skip: "Skip to main content",
            headerAria: "Main navigation",
            brandAria: "Back to top",
            brandName: "Nima",
            brandRole: "Developer Command Center",
            navAria: "Page links",
            navProjects: "Projects",
            navStack: "Stack",
            navContact: "Contact",
            langAria: "Change language",
            langStatus: "English Mode",
            commandTrigger: "Command Center",
            heroBadge: "Full-Stack Web Developer",
            heroTitle: "Web apps, stores, and websites that do more than look good — they work.",
            heroSubtitle: "From Laravel dashboards to WordPress/WooCommerce systems, technical SEO, performance, infrastructure, and production debugging.",
            heroCtaProjects: "View Projects",
            heroCtaContact: "Contact Me",
            chip1: "Laravel Dashboards",
            chip2: "WordPress / WooCommerce",
            chip3: "SEO / Performance",
            chip4: "Infrastructure / Debugging",
            visualAria: "Developer command center visual",
            heroAlt: "Nima in a developer command center",
            diagnosticsKicker: "Frontend Demo",
            diagnosticsTitle: "Your Browser Environment",
            diagnosticsNote: "Only privacy-safe browser data is shown; no IP lookup, location lookup, or external request.",
            focusKicker: "Focus Switch",
            focusAria: "Choose audience type",
            focusEmployer: "For Employers",
            focusClient: "For Clients",
            focusEmployerTitle: "What matters for a team",
            focusEmployerText: "A scalable stack, reliable delivery, production debugging, and fast learning inside the team.",
            focusClientTitle: "What matters for a project",
            focusClientText: "Business outcomes, maintainability, clean SEO foundations, better performance, and support after delivery.",
            projectsKicker: "Case Studies",
            projectsTitle: "Projects focused on real outcomes",
            projectsIntro: "Compact cards that focus on the problem, my work, and the outcome.",
            featuredLabel: "Featured Case",
            storeLabel: "Store",
            corporateLabel: "Corporate Site",
            applitentSummary: "I worked on a Laravel business platform and legal-tech service website, covering auth flows, dashboards, service requests, legal pages, SEO preparation, mail, server work, and production troubleshooting.",
            fannkalaSummary: "Optimization and maintenance for a WordPress store focused on product structure, purchase experience, performance, and easier content management.",
            parstekSummary: "Corporate site structure, introduction pages, UI, WordPress theme customization, and user-experience polish.",
            visitApplitent: "Open Applitent",
            visitApplitentAria: "Open Applitent in a new tab",
            visitSite: "Visit site",
            tabProblem: "Problem",
            tabWork: "My Work",
            tabOutcome: "Outcome",
            stackKicker: "Stack Bento",
            stackTitle: "Capabilities in a compact command grid",
            deliverKicker: "Delivery",
            deliverTitle: "What I Actually Deliver",
            deliver1: "Usable dashboards and business flows",
            deliver2: "Maintainable websites and stores",
            deliver3: "Clean technical SEO foundations",
            deliver4: "Better performance and user experience",
            deliver5: "Real debugging from code to server",
            aiNote: "I use modern AI tools to move faster, but architecture, technical decisions, testing, debugging, and final delivery stay under my control.",
            healthKicker: "Tiny Interaction",
            healthTitle: "System Health Mini Game",
            healthHint: "Activate all four nodes.",
            healthDone: "System is cleaner now. It just needs a real project.",
            contactKicker: "Contact",
            contactTitle: "If your project needs clean UI, solid logic, SEO, performance, and maintainability, send me a message.",
            copyEmail: "Copy Email",
            copyPhone: "Copy Phone",
            phoneAria: "Call 09227241378",
            footerText: "Nima — Developer Command Center",
            backTop: "Back to top",
            paletteTitle: "Quick command",
            paletteHint: "Escape closes it. / opens it.",
            copiedEmail: "Email copied.",
            copiedPhone: "Phone copied.",
            copyFailed: "Copy failed; please copy it manually.",
            diagnostics: {
                device: "Device type", browser: "Browser", viewport: "Viewport", language: "Language", timezone: "Timezone", online: "Online status", scheme: "Color scheme", motion: "Reduced motion", connection: "Connection type",
                desktop: "Desktop", tablet: "Tablet", mobile: "Mobile", onlineValue: "Online", offlineValue: "Offline", dark: "Dark", light: "Light", reduced: "Reduced", noPreference: "No preference", unknown: "Unknown"
            }
        }
    };

    var projectContent = {
        fa: {
            applitent: {
                problem: "پلتفرم خدمات حقوقی به مسیرهای ورود، ثبت‌نام، درخواست سرویس، صفحات اعتمادساز و زیرساخت پایدار نیاز داشت.",
                work: "مسیرهای احراز هویت، ثبت‌نام، تأیید ایمیل، بازیابی رمز، ورود و خروج، بهبود داشبورد کاربر و مدیر، سخت‌سازی آپلود، ساختار قوانین، حریم خصوصی، کوکی، صفحه مشاوره رایگان، نقشه سایت، ایمیل، DNS، SSL، Cloudflare و خطاهای سمت سرور را پیاده‌سازی، بهبود یا عیب‌یابی کردم.",
                outcome: "جریان‌ها قابل اتکاتر شدند، آماده‌سازی سئو و عملکرد انجام شد و سایت به امتیازهای 4×100 Lighthouse رسیده است."
            },
            fannkala: {
                problem: "فروشگاه به ساختار واضح‌تر، تجربه خرید بهتر و نگه‌داری ساده‌تر نیاز داشت.",
                work: "روی تنظیمات وردپرس و ووکامرس، صفحات کلیدی، محتوا، سرعت و تمیزتر شدن تجربه کاربر کار کردم.",
                outcome: "فروشگاه خواناتر، قابل نگه‌داری‌تر و آماده‌تر برای رشد محتوا شد."
            },
            parstek: {
                problem: "سایت شرکتی باید معرفی خدمات و مسیرهای محتوایی را شفاف‌تر نشان می‌داد.",
                work: "ساختار صفحات، رابط کاربری، سفارشی‌سازی قالب و جزئیات تجربه کاربری را بهبود دادم.",
                outcome: "نمایش برند و مسیر مطالعه برای کاربر منظم‌تر و حرفه‌ای‌تر شد."
            }
        },
        en: {
            applitent: {
                problem: "The legal-tech platform needed reliable auth, registration, service request flows, trust pages, and stable production infrastructure.",
                work: "I implemented, improved, hardened, prepared, maintained, or debugged auth, email verification, password reset, login/logout, admin/user dashboards, application flows, upload handling, legal hub, terms, privacy, cookie structure, free consultation CTAs, sitemap and SEO preparation, mail, DNS, SSL, Cloudflare, and server-side production issues.",
                outcome: "The flows became more reliable, SEO and performance polish were prepared, and the site has reached 4×100 Lighthouse scores."
            },
            fannkala: {
                problem: "The store needed clearer structure, a better buying experience, and easier maintenance.",
                work: "I worked on WordPress and WooCommerce configuration, key pages, content structure, performance, and a cleaner user experience.",
                outcome: "The store became easier to scan, maintain, and grow with content."
            },
            parstek: {
                problem: "The corporate site needed clearer service presentation and content paths.",
                work: "I improved page structure, UI, WordPress theme customization, and user-experience details.",
                outcome: "The brand presentation and browsing path became more organized and professional."
            }
        }
    };

    function t(key) {
        return translations[currentLanguage][key] || translations.fa[key] || key;
    }

    function applyLanguage(language) {
        currentLanguage = language;
        localStorage.setItem("nima-cv-language", language);
        root.lang = language === "fa" ? "fa" : "en";
        root.dir = language === "fa" ? "rtl" : "ltr";
        document.title = t("metaTitle");
        setMeta("description", t("metaDescription"));
        setMetaProperty("og:title", t("metaTitle"));
        setMetaProperty("og:description", t("metaDescription"));
        setMetaProperty("og:locale", language === "fa" ? "fa_IR" : "en_US");
        setMeta("twitter:title", t("metaTitle"));
        setMeta("twitter:description", t("metaDescription"));

        document.querySelectorAll("[data-i18n]").forEach(function (element) {
            element.textContent = t(element.dataset.i18n);
        });
        document.querySelectorAll("[data-i18n-aria-label]").forEach(function (element) {
            element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
        });
        document.querySelectorAll("[data-i18n-alt]").forEach(function (element) {
            element.setAttribute("alt", t(element.dataset.i18nAlt));
        });
        document.querySelectorAll("[data-lang-option]").forEach(function (button) {
            button.classList.toggle("is-active", button.dataset.langOption === language);
        });
        updateFocusCard(document.querySelector(".focus-toggle .is-active") ? document.querySelector(".focus-toggle .is-active").dataset.focus : "employer");
        renderDiagnostics();
        renderProjectTabs();
        renderCommandList();
        updateHealthResult();
    }

    function setMeta(name, content) {
        var element = document.querySelector('meta[name="' + name + '"]');
        if (element) {
            element.setAttribute("content", content);
        }
    }

    function setMetaProperty(property, content) {
        var element = document.querySelector('meta[property="' + property + '"]');
        if (element) {
            element.setAttribute("content", content);
        }
    }

    function updateFocusCard(mode) {
        var title = document.getElementById("focus-title");
        var text = document.getElementById("focus-text");
        if (!title || !text) {
            return;
        }
        title.textContent = mode === "client" ? t("focusClientTitle") : t("focusEmployerTitle");
        text.textContent = mode === "client" ? t("focusClientText") : t("focusEmployerText");
        document.querySelectorAll("[data-focus]").forEach(function (button) {
            button.classList.toggle("is-active", button.dataset.focus === mode);
        });
    }

    function renderProjectTabs() {
        Object.keys(activeProjectTabs).forEach(function (project) {
            var tabs = document.querySelector('[data-project="' + project + '"]');
            var panel = document.querySelector('[data-project-panel="' + project + '"]');
            if (!tabs || !panel) {
                return;
            }
            var tabData = [
                { key: "problem", label: t("tabProblem") },
                { key: "work", label: t("tabWork") },
                { key: "outcome", label: t("tabOutcome") }
            ];
            tabs.innerHTML = "";
            tabData.forEach(function (tab) {
                var button = document.createElement("button");
                button.type = "button";
                button.textContent = tab.label;
                button.className = activeProjectTabs[project] === tab.key ? "is-active" : "";
                button.setAttribute("role", "tab");
                button.setAttribute("aria-selected", String(activeProjectTabs[project] === tab.key));
                button.addEventListener("click", function () {
                    activeProjectTabs[project] = tab.key;
                    renderProjectTabs();
                });
                tabs.appendChild(button);
            });
            panel.textContent = projectContent[currentLanguage][project][activeProjectTabs[project]];
        });
    }

    function renderDiagnostics() {
        var list = document.getElementById("diagnostics-list");
        if (!list) {
            return;
        }
        var labels = translations[currentLanguage].diagnostics;
        var width = window.innerWidth;
        var device = width < 700 ? labels.mobile : width < 1024 ? labels.tablet : labels.desktop;
        var colorScheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? labels.dark : labels.light;
        var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        var items = [
            [labels.device, device],
            [labels.browser, detectBrowser()],
            [labels.viewport, window.innerWidth + " × " + window.innerHeight],
            [labels.language, navigator.language || labels.unknown],
            [labels.timezone, Intl.DateTimeFormat().resolvedOptions().timeZone || labels.unknown],
            [labels.online, navigator.onLine ? labels.onlineValue : labels.offlineValue],
            [labels.scheme, colorScheme],
            [labels.motion, prefersReducedMotion ? labels.reduced : labels.noPreference],
            [labels.connection, connection && connection.effectiveType ? connection.effectiveType : labels.unknown]
        ];
        list.innerHTML = "";
        items.forEach(function (item) {
            var wrapper = document.createElement("div");
            var term = document.createElement("dt");
            var detail = document.createElement("dd");
            term.textContent = item[0];
            detail.textContent = item[1];
            wrapper.appendChild(term);
            wrapper.appendChild(detail);
            list.appendChild(wrapper);
        });
    }

    function detectBrowser() {
        var ua = navigator.userAgent;
        if (ua.indexOf("Firefox") > -1) return "Firefox";
        if (ua.indexOf("Edg") > -1) return "Edge";
        if (ua.indexOf("Chrome") > -1) return "Chrome";
        if (ua.indexOf("Safari") > -1) return "Safari";
        return translations[currentLanguage].diagnostics.unknown;
    }

    function copyValue(type) {
        var value = type === "phone" ? PHONE : EMAIL;
        var successMessage = type === "phone" ? t("copiedPhone") : t("copiedEmail");
        var status = document.getElementById("copy-status");
        if (!navigator.clipboard) {
            if (status) status.textContent = t("copyFailed") + " " + value;
            return;
        }
        navigator.clipboard.writeText(value).then(function () {
            if (status) status.textContent = successMessage;
        }).catch(function () {
            if (status) status.textContent = t("copyFailed") + " " + value;
        });
    }

    function getCommands() {
        return [
            { label: t("heroCtaProjects"), detail: "#projects", action: function () { goTo("projects"); } },
            { label: t("navStack"), detail: "#stack", action: function () { goTo("stack"); } },
            { label: t("navContact"), detail: "#contact", action: function () { goTo("contact"); } },
            { label: t("langStatus") === "حالت فارسی" ? "English Mode" : "حالت فارسی", detail: "FA / EN", action: function () { applyLanguage(currentLanguage === "fa" ? "en" : "fa"); } },
            { label: t("copyEmail"), detail: EMAIL, action: function () { copyValue("email"); } },
            { label: t("copyPhone"), detail: PHONE, action: function () { copyValue("phone"); } },
            { label: t("visitApplitent"), detail: "applitent.com", action: function () { window.open("https://applitent.com", "_blank", "noopener"); } }
        ];
    }

    function renderCommandList() {
        var list = document.getElementById("command-list");
        if (!list) {
            return;
        }
        list.innerHTML = "";
        getCommands().forEach(function (command) {
            var button = document.createElement("button");
            button.type = "button";
            button.className = "command-item";
            button.innerHTML = "<strong></strong><span></span>";
            button.querySelector("strong").textContent = command.label;
            button.querySelector("span").textContent = command.detail;
            button.addEventListener("click", function () {
                command.action();
                closeCommandDialog();
            });
            list.appendChild(button);
        });
    }

    function openCommandDialog() {
        var dialog = document.getElementById("command-dialog");
        if (!dialog) return;
        lastFocusedElement = document.activeElement;
        dialog.hidden = false;
        renderCommandList();
        var firstCommand = dialog.querySelector(".command-item") || dialog.querySelector("button");
        if (firstCommand) firstCommand.focus();
    }

    function closeCommandDialog() {
        var dialog = document.getElementById("command-dialog");
        if (!dialog || dialog.hidden) return;
        dialog.hidden = true;
        if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
            lastFocusedElement.focus();
        }
    }

    function goTo(id) {
        var target = document.getElementById(id);
        if (!target) return;
        var header = document.querySelector(".site-header");
        var headerOffset = header ? header.offsetHeight + 24 : 18;
        var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({ top: targetPosition, behavior: prefersReducedMotion ? "auto" : "smooth" });
    }

    function updateHealthResult() {
        var result = document.getElementById("health-result");
        if (!result) return;
        var allActive = document.querySelectorAll("[data-health].is-active").length === 4;
        result.textContent = allActive ? t("healthDone") : t("healthHint");
    }

    function setupReveal() {
        var observedElements = document.querySelectorAll(".observe");
        if (prefersReducedMotion) {
            observedElements.forEach(function (element) { element.classList.add("is-visible"); });
        } else if ("IntersectionObserver" in window) {
            var revealObserver = new IntersectionObserver(function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
            observedElements.forEach(function (element) { revealObserver.observe(element); });
        } else {
            observedElements.forEach(function (element) { element.classList.add("is-visible"); });
        }
    }

    function setupPointerEffects() {
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
                    card.style.setProperty("--tilt-x", ((0.5 - y) * 5).toFixed(2) + "deg");
                    card.style.setProperty("--tilt-y", ((x - 0.5) * 5).toFixed(2) + "deg");
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
                    button.style.setProperty("--btn-x", Math.max(-8, Math.min(8, offsetX * 0.16)).toFixed(1) + "px");
                    button.style.setProperty("--btn-y", Math.max(-8, Math.min(8, offsetY * 0.16)).toFixed(1) + "px");
                }, { passive: true });
                button.addEventListener("pointerleave", function () {
                    button.style.setProperty("--btn-x", "0px");
                    button.style.setProperty("--btn-y", "0px");
                });
            });
        }
    }

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            var targetId = link.getAttribute("href").slice(1);
            if (!document.getElementById(targetId)) return;
            event.preventDefault();
            goTo(targetId);
        });
    });

    document.querySelectorAll("[data-lang-option]").forEach(function (button) {
        button.addEventListener("click", function () { applyLanguage(button.dataset.langOption); });
    });

    document.querySelectorAll("[data-focus]").forEach(function (button) {
        button.addEventListener("click", function () { updateFocusCard(button.dataset.focus); });
    });

    document.querySelectorAll("[data-copy]").forEach(function (button) {
        button.addEventListener("click", function () { copyValue(button.dataset.copy); });
    });

    document.querySelectorAll("[data-open-command]").forEach(function (button) {
        button.addEventListener("click", openCommandDialog);
    });
    document.querySelectorAll("[data-close-command]").forEach(function (button) {
        button.addEventListener("click", closeCommandDialog);
    });

    document.querySelectorAll("[data-health]").forEach(function (button) {
        button.addEventListener("click", function () {
            button.classList.toggle("is-active", true);
            updateHealthResult();
        });
    });

    window.addEventListener("keydown", function (event) {
        var dialog = document.getElementById("command-dialog");
        var isTyping = ["INPUT", "TEXTAREA", "SELECT"].indexOf(document.activeElement.tagName) > -1 || document.activeElement.isContentEditable;
        if (event.key === "/" && !isTyping && (!dialog || dialog.hidden)) {
            event.preventDefault();
            openCommandDialog();
        }
        if (event.key === "Escape") {
            closeCommandDialog();
        }
        if (event.key === "Tab" && dialog && !dialog.hidden) {
            var focusable = dialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            if (!focusable.length) return;
            var first = focusable[0];
            var last = focusable[focusable.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        }
    });

    window.addEventListener("resize", renderDiagnostics, { passive: true });
    window.addEventListener("online", renderDiagnostics);
    window.addEventListener("offline", renderDiagnostics);
    var handleMotionChange = function (event) {
        prefersReducedMotion = event.matches;
        renderDiagnostics();
    };
    if (typeof prefersReducedMotionQuery.addEventListener === "function") {
        prefersReducedMotionQuery.addEventListener("change", handleMotionChange);
    } else if (typeof prefersReducedMotionQuery.addListener === "function") {
        prefersReducedMotionQuery.addListener(handleMotionChange);
    }

    applyLanguage(currentLanguage === "en" ? "en" : "fa");
    setupReveal();
    setupPointerEffects();
});
