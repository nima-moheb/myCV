(function () {
    "use strict";

    document.documentElement.classList.add("js");

    var root = document.documentElement;
    var storageKey = "nima-cv-language";
    var email = "nima.mohebali.b@gmail.com";
    var phone = "09227241378";
    var phoneIntl = "+989227241378";
    var currentLanguage = localStorage.getItem(storageKey) === "en" ? "en" : "fa";
    var activeHealth = new Set();
    var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    var colorScheme = window.matchMedia("(prefers-color-scheme: dark)");
    var lastFocusedElement = null;

    var translations = {
        fa: {
            skip: "رفتن به محتوای اصلی",
            metaTitle: "نیما | مرکز فرمان توسعه وب",
            metaDescription: "رزومه و پورتفولیوی تعاملی نیما؛ توسعه‌دهنده فول‌استک وب برای لاراول، وردپرس، ووکامرس، سئوی فنی، سرعت، زیرساخت و عیب‌یابی سایت‌های واقعی.",
            headerAria: "ناوبری اصلی",
            brandAria: "بازگشت به ابتدای صفحه",
            navAria: "لینک‌های صفحه",
            brandName: "نیما",
            brandRole: "مرکز فرمان توسعه وب",
            navProjects: "پروژه‌ها",
            navStack: "توانایی‌ها",
            navContact: "تماس",
            commandTrigger: "فرمان سریع",
            commandAria: "باز کردن فرمان سریع",
            langAria: "تغییر زبان",
            langStatus: "حالت فارسی",
            heroBadge: "توسعه‌دهنده فول‌استک وب",
            heroTitle: "وب‌اپلیکیشن، فروشگاه و سایت‌هایی که فقط ظاهر ندارند؛ واقعاً کار می‌کنند.",
            heroSubtitle: "از لاراول و داشبوردهای کاربردی تا وردپرس، ووکامرس، سئوی فنی، بهینه‌سازی سرعت و عیب‌یابی محیط واقعی سایت.",
            heroCtaProjects: "دیدن پروژه‌ها",
            heroCtaContact: "تماس با من",
            heroImageAlt: "تصویر مرکز فرمان توسعه وب نیما",
            chip1: "Laravel",
            chip2: "WordPress",
            chip3: "WooCommerce",
            chip4: "SEO / Performance",
            metricLighthouse: "گزارش Lighthouse برای Applitent",
            metricProjects: "پروژه منتخب",
            metricApis: "API خارجی برای این صفحه",
            diagKicker: "عیب‌یابی مرورگر",
            diagTitle: "نمای امنی از محیط بازدید شما",
            diagText: "این کارت فقط اطلاعات بی‌خطر مرورگر را نشان می‌دهد؛ بدون IP، مکان‌یابی یا API خارجی.",
            focusKicker: "تمرکز همکاری",
            focusTitle: "برای کارفرما یا مشتری، خروجی مهم است.",
            focusAria: "انتخاب نوع همکاری",
            focusEmployer: "کارفرما",
            focusClient: "مشتری",
            focusEmployerText: "برای تیم‌ها، روی کد قابل نگه‌داری، مستندسازی مسیرها، عیب‌یابی تولید و تحویل قابل اتکا تمرکز می‌کنم.",
            focusClientText: "برای مشتری‌ها، مسیر سفارش تا تحویل را روشن نگه می‌دارم و سایت یا فروشگاهی می‌سازم که بعد از تحویل هم قابل مدیریت باشد.",
            projectsKicker: "پروژه‌های منتخب",
            projectsTitle: "سه نمونه که ساختار، سئو، سرعت و عیب‌یابی واقعی در آن‌ها مهم بوده است.",
            featuredLabel: "ویژه",
            openSite: "مشاهده سایت",
            applitentSummary: "وب‌سایت خدمات حقوقی و پلتفرم تجاری لاراول با جریان‌های احراز هویت، داشبورد، درخواست سرویس و آماده‌سازی سئو.",
            fannkalaSummary: "فروشگاه وردپرس و ووکامرس با تمرکز روی ساختار، تجربه خرید، نگه‌داری و سرعت.",
            parstekSummary: "سایت شرکتی با مسیرهای محتوایی روشن‌تر، رابط حرفه‌ای‌تر و سفارشی‌سازی وردپرس.",
            tabProblem: "مسئله",
            tabWork: "کار من",
            tabOutcome: "خروجی",
            stackKicker: "جعبه‌ابزار",
            stackTitle: "ترکیب مهارت‌هایی که برای یک محصول واقعی کنار هم لازم می‌شوند.",
            deliverKicker: "تحویل",
            deliverTitle: "چه چیزی تحویل می‌دهم؟",
            deliver1: "داشبورد و جریان کاری قابل استفاده",
            deliver2: "فروشگاه و سایت قابل نگه‌داری",
            deliver3: "سئوی فنی و ساختار تمیز",
            deliver4: "سرعت بهتر و تجربه کاربری بهتر",
            deliver5: "عیب‌یابی واقعی از کد تا سرور",
            aiKicker: "روند کاری با هوش مصنوعی",
            aiTitle: "سریع‌تر، اما با کنترل انسانی.",
            aiNote: "از ابزارهای هوش مصنوعی برای سرعت بیشتر استفاده می‌کنم، اما معماری، تصمیم فنی، تست، عیب‌یابی و تحویل نهایی با خودم است.",
            healthKicker: "بازی کوچک",
            healthTitle: "System Health Mini Game",
            healthAria: "گره‌های سلامت سیستم",
            healthHint: "چهار گره را فعال کن.",
            healthComplete: "سیستم آماده‌تر شد. حالا فقط یک پروژه واقعی کم دارد.",
            contactKicker: "تماس",
            contactTitle: "اگر پروژه‌ای داری که هم ظاهر خوب می‌خواهد، هم منطق درست، هم سئو، سرعت و نگه‌داری، پیام بده.",
            copyEmail: "کپی ایمیل",
            copyPhone: "کپی شماره",
            copiedEmail: "ایمیل کپی شد.",
            copiedPhone: "شماره کپی شد.",
            copyFailed: "کپی خودکار انجام نشد؛ می‌توانی متن را دستی برداری.",
            phoneAria: "تماس با 09227241378",
            footerText: "نیما — مرکز فرمان توسعه وب",
            backTop: "بازگشت به بالا",
            paletteTitle: "فرمان سریع",
            paletteHint: "کلید Escape برای بستن. کلید / برای باز کردن.",
            closeAria: "بستن",
            commandProjects: "دیدن پروژه‌ها",
            commandStack: "دیدن توانایی‌ها",
            commandContact: "تماس",
            commandSwitch: "تغییر زبان به انگلیسی",
            commandCopyEmail: "کپی ایمیل",
            commandCopyPhone: "کپی شماره",
            commandOpenApplitent: "باز کردن Applitent",
            commandScrollHint: "رفتن به بخش صفحه",
            commandCopyHint: "کپی در کلیپ‌بورد",
            commandLangHint: "بدون بارگذاری دوباره",
            commandExternalHint: "باز شدن در پنجره تازه",
            diagnostics: {
                device: "نوع دستگاه",
                browser: "مرورگر",
                viewport: "اندازه صفحه",
                language: "زبان صفحه",
                timezone: "منطقه زمانی",
                online: "وضعیت اتصال",
                scheme: "طرح رنگ",
                motion: "کاهش حرکت",
                connection: "نوع اتصال",
                desktop: "رومیزی",
                tablet: "تبلت",
                mobile: "موبایل",
                onlineValue: "آنلاین",
                offlineValue: "آفلاین",
                dark: "تیره",
                light: "روشن",
                reduced: "فعال",
                noPreference: "غیرفعال",
                unknown: "نامشخص"
            }
        },
        en: {
            skip: "Skip to main content",
            metaTitle: "Nima | Developer Command Center",
            metaDescription: "Interactive CV and portfolio for Nima, a full-stack web developer working across Laravel, WordPress, WooCommerce, technical SEO, performance, infrastructure, and production debugging.",
            headerAria: "Primary navigation",
            brandAria: "Back to top",
            navAria: "Page links",
            brandName: "Nima",
            brandRole: "Developer Command Center",
            navProjects: "Projects",
            navStack: "Stack",
            navContact: "Contact",
            commandTrigger: "Command Center",
            commandAria: "Open command palette",
            langAria: "Change language",
            langStatus: "English mode",
            heroBadge: "Full-Stack Web Developer",
            heroTitle: "Web apps, stores, and websites that do more than look good — they work.",
            heroSubtitle: "From Laravel dashboards to WordPress/WooCommerce systems, technical SEO, performance, infrastructure, and production debugging.",
            heroCtaProjects: "View Projects",
            heroCtaContact: "Contact Me",
            heroImageAlt: "Nima developer command-center visual",
            chip1: "Laravel",
            chip2: "WordPress",
            chip3: "WooCommerce",
            chip4: "SEO / Performance",
            metricLighthouse: "Applitent Lighthouse report",
            metricProjects: "Featured projects",
            metricApis: "External APIs on this page",
            diagKicker: "Browser diagnostics",
            diagTitle: "A safe snapshot of your browsing environment",
            diagText: "This card only shows safe browser information: no IP lookup, no location lookup, and no external APIs.",
            focusKicker: "Collaboration focus",
            focusTitle: "For employers and clients, the output matters.",
            focusAria: "Choose collaboration type",
            focusEmployer: "Employer",
            focusClient: "Client",
            focusEmployerText: "For teams, I focus on maintainable code, documented flows, production debugging, and reliable delivery.",
            focusClientText: "For clients, I keep the path from request to delivery clear and build sites or stores that remain manageable after handoff.",
            projectsKicker: "Featured projects",
            projectsTitle: "Three examples where structure, SEO, performance, and real debugging mattered.",
            featuredLabel: "Featured",
            openSite: "Open site",
            applitentSummary: "Laravel business platform and legal-tech service website with auth, dashboards, service requests, and SEO preparation.",
            fannkalaSummary: "WordPress and WooCommerce store focused on structure, buying experience, maintenance, and speed.",
            parstekSummary: "Corporate WordPress site with clearer content paths, more polished UI, and theme customization.",
            tabProblem: "Problem",
            tabWork: "My Work",
            tabOutcome: "Outcome",
            stackKicker: "Stack bento",
            stackTitle: "The combined skills a real product needs side by side.",
            deliverKicker: "Delivery",
            deliverTitle: "What I deliver",
            deliver1: "Usable dashboards and workflows",
            deliver2: "Maintainable stores and websites",
            deliver3: "Technical SEO and clean structure",
            deliver4: "Better speed and user experience",
            deliver5: "Real debugging from code to server",
            aiKicker: "AI-assisted workflow",
            aiTitle: "Faster, but human controlled.",
            aiNote: "I use AI tools to move faster, but architecture, technical decisions, testing, debugging, and final delivery stay under my control.",
            healthKicker: "Mini game",
            healthTitle: "System Health Mini Game",
            healthAria: "System health nodes",
            healthHint: "Activate all four nodes.",
            healthComplete: "System is cleaner now. It just needs a real project.",
            contactKicker: "Contact",
            contactTitle: "If your project needs a strong interface, solid logic, SEO, speed, and maintainability, send a message.",
            copyEmail: "Copy Email",
            copyPhone: "Copy Phone",
            copiedEmail: "Email copied.",
            copiedPhone: "Phone copied.",
            copyFailed: "Automatic copy failed; you can copy the text manually.",
            phoneAria: "Call 09227241378",
            footerText: "Nima — Developer Command Center",
            backTop: "Back to top",
            paletteTitle: "Quick command",
            paletteHint: "Escape closes. / opens.",
            closeAria: "Close",
            commandProjects: "View Projects",
            commandStack: "View Stack",
            commandContact: "Contact",
            commandSwitch: "Switch Language to Persian",
            commandCopyEmail: "Copy Email",
            commandCopyPhone: "Copy Phone",
            commandOpenApplitent: "Open Applitent",
            commandScrollHint: "Jump to page section",
            commandCopyHint: "Copy to clipboard",
            commandLangHint: "No reload needed",
            commandExternalHint: "Opens in a new tab",
            diagnostics: {
                device: "Device type",
                browser: "Browser",
                viewport: "Viewport",
                language: "Page language",
                timezone: "Timezone",
                online: "Online status",
                scheme: "Color scheme",
                motion: "Reduced motion",
                connection: "Connection type",
                desktop: "Desktop",
                tablet: "Tablet",
                mobile: "Mobile",
                onlineValue: "Online",
                offlineValue: "Offline",
                dark: "Dark",
                light: "Light",
                reduced: "Reduced",
                noPreference: "No preference",
                unknown: "Unknown"
            }
        }
    };

    var projectContent = {
        fa: {
            applitent: {
                problem: "یک پلتفرم خدمات حقوقی به مسیرهای ورود، ثبت‌نام، درخواست خدمت، صفحات اعتمادساز و زیرساخت پایدار نیاز داشت.",
                work: "روی احراز هویت، ثبت‌نام، تأیید ایمیل، بازیابی رمز، ورود و خروج، داشبوردها، جریان درخواست خدمت، سخت‌سازی بارگذاری مدارک، هاب حقوقی، مسیر مشاوره رایگان، نقشه سایت، آماده‌سازی سئو، ایمیل، DNS، SSL، Cloudflare و عیب‌یابی سمت سرور کار کردم.",
                outcome: "جریان‌ها قابل اتکاتر شدند، نگه‌داری ساده‌تر شد و گزارش Lighthouse سایت به 4×100 رسیده است."
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
                problem: "A Laravel business platform and legal-tech service website needed reliable auth, registration, service requests, trust pages, and production infrastructure.",
                work: "I worked on, improved, debugged, implemented, redesigned, hardened, prepared, and maintained auth, registration, email verification, password reset, login/logout flows, dashboards, service request/application flows, upload/document hardening, a legal hub, free consultation CTA flow, sitemap and SEO preparation, mail, DNS, SSL, Cloudflare, and server-side production troubleshooting.",
                outcome: "The flows became more reliable, maintenance became cleaner, and the site has reached a 4×100 Lighthouse score."
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

    function applyLanguage(language) {
        currentLanguage = language === "en" ? "en" : "fa";
        localStorage.setItem(storageKey, currentLanguage);
        root.lang = currentLanguage;
        root.dir = currentLanguage === "fa" ? "rtl" : "ltr";
        document.title = t("metaTitle");
        setMeta("description", t("metaDescription"));
        setMetaProperty("og:title", t("metaTitle"));
        setMetaProperty("og:description", t("heroTitle"));
        setMetaProperty("og:locale", currentLanguage === "fa" ? "fa_IR" : "en_US");
        setMeta("twitter:title", t("metaTitle"));
        setMeta("twitter:description", t("metaDescription"));

        document.querySelectorAll("[data-i18n]").forEach(function (element) {
            element.textContent = t(element.dataset.i18n);
        });
        document.querySelectorAll("[data-i18n-alt]").forEach(function (element) {
            element.setAttribute("alt", t(element.dataset.i18nAlt));
        });
        document.querySelectorAll("[data-i18n-aria-label]").forEach(function (element) {
            element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
        });
        document.querySelectorAll("[data-lang-option]").forEach(function (button) {
            button.classList.toggle("is-active", button.dataset.langOption === currentLanguage);
        });

        updateFocusCopy();
        renderDiagnostics();
        renderProjectPanels();
        renderCommandList();
        updateHealthResult();
    }

    function getBrowserName() {
        var agent = navigator.userAgent;
        if (agent.indexOf("Edg/") > -1) return "Microsoft Edge";
        if (agent.indexOf("OPR/") > -1 || agent.indexOf("Opera") > -1) return "Opera";
        if (agent.indexOf("Chrome/") > -1 && agent.indexOf("Chromium") === -1) return "Chrome";
        if (agent.indexOf("Firefox/") > -1) return "Firefox";
        if (agent.indexOf("Safari/") > -1 && agent.indexOf("Chrome/") === -1) return "Safari";
        return translations[currentLanguage].diagnostics.unknown;
    }

    function getDeviceType() {
        var labels = translations[currentLanguage].diagnostics;
        var width = window.innerWidth;
        if (width < 640) return labels.mobile;
        if (width < 980) return labels.tablet;
        return labels.desktop;
    }

    function renderDiagnostics() {
        var grid = document.getElementById("diagnostics-grid");
        if (!grid) return;
        var labels = translations[currentLanguage].diagnostics;
        var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        var items = [
            [labels.device, getDeviceType()],
            [labels.browser, getBrowserName()],
            [labels.viewport, window.innerWidth + "×" + window.innerHeight],
            [labels.language, root.lang + " / " + root.dir],
            [labels.timezone, Intl.DateTimeFormat().resolvedOptions().timeZone || labels.unknown],
            [labels.online, navigator.onLine ? labels.onlineValue : labels.offlineValue],
            [labels.scheme, colorScheme.matches ? labels.dark : labels.light],
            [labels.motion, reducedMotion.matches ? labels.reduced : labels.noPreference],
            [labels.connection, connection && connection.effectiveType ? connection.effectiveType : labels.unknown]
        ];
        grid.innerHTML = items.map(function (item) {
            return '<div class="diagnostic-item"><small>' + escapeHtml(item[0]) + '</small><strong>' + escapeHtml(item[1]) + '</strong></div>';
        }).join("");
    }

    function updateFocusCopy() {
        var active = document.querySelector(".focus-toggle .is-active");
        var copy = document.getElementById("focus-copy");
        if (!active || !copy) return;
        var key = active.dataset.focus === "client" ? "focusClientText" : "focusEmployerText";
        copy.textContent = t(key);
        copy.dataset.i18n = key;
    }

    function renderProjectPanels() {
        document.querySelectorAll(".project-card[data-project]").forEach(function (card) {
            var project = card.dataset.project;
            var activeTab = card.querySelector("[data-project-tab].is-active") || card.querySelector("[data-project-tab]");
            var panel = card.querySelector(".project-panel");
            if (!activeTab || !panel || !projectContent[currentLanguage][project]) return;
            var tab = activeTab.dataset.projectTab;
            panel.textContent = projectContent[currentLanguage][project][tab];
            card.querySelectorAll("[data-project-tab]").forEach(function (button) {
                button.setAttribute("aria-selected", button === activeTab ? "true" : "false");
            });
        });
    }

    function renderCommandList() {
        var list = document.getElementById("command-list");
        if (!list) return;
        var commands = [
            { label: t("commandProjects"), hint: t("commandScrollHint"), action: function () { closeCommandPalette(); scrollToTarget("projects"); } },
            { label: t("commandStack"), hint: t("commandScrollHint"), action: function () { closeCommandPalette(); scrollToTarget("stack"); } },
            { label: t("commandContact"), hint: t("commandScrollHint"), action: function () { closeCommandPalette(); scrollToTarget("contact"); } },
            { label: t("commandSwitch"), hint: t("commandLangHint"), action: function () { applyLanguage(currentLanguage === "fa" ? "en" : "fa"); } },
            { label: t("commandCopyEmail"), hint: t("commandCopyHint"), action: function () { copyValue("email"); } },
            { label: t("commandCopyPhone"), hint: t("commandCopyHint"), action: function () { copyValue("phone"); } },
            { label: t("commandOpenApplitent"), hint: t("commandExternalHint"), action: function () { window.open("https://applitent.com/", "_blank", "noopener"); } }
        ];
        list.innerHTML = "";
        commands.forEach(function (command) {
            var button = document.createElement("button");
            button.type = "button";
            button.innerHTML = "<span>" + escapeHtml(command.label) + "</span><small>" + escapeHtml(command.hint) + "</small>";
            button.addEventListener("click", command.action);
            list.appendChild(button);
        });
    }

    function scrollToTarget(id) {
        var target = document.getElementById(id);
        if (target) target.scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth", block: "start" });
    }

    function openCommandPalette() {
        var dialog = document.getElementById("command-dialog");
        if (!dialog) return;
        lastFocusedElement = document.activeElement;
        dialog.hidden = false;
        document.body.style.overflow = "hidden";
        var firstCommand = dialog.querySelector(".command-list button");
        if (firstCommand) firstCommand.focus();
    }

    function closeCommandPalette() {
        var dialog = document.getElementById("command-dialog");
        if (!dialog || dialog.hidden) return;
        dialog.hidden = true;
        document.body.style.overflow = "";
        if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
            lastFocusedElement.focus();
        }
    }

    function copyValue(type) {
        var value = type === "phone" ? phone : email;
        var status = document.getElementById("copy-status");
        var finish = function (message) {
            if (status) status.textContent = message;
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(value).then(function () {
                finish(type === "phone" ? t("copiedPhone") : t("copiedEmail"));
            }).catch(function () {
                fallbackCopy(value, finish, type);
            });
        } else {
            fallbackCopy(value, finish, type);
        }
    }

    function fallbackCopy(value, finish, type) {
        var temporary = document.createElement("textarea");
        temporary.value = value;
        temporary.setAttribute("readonly", "");
        temporary.style.position = "fixed";
        temporary.style.opacity = "0";
        document.body.appendChild(temporary);
        temporary.select();
        var copied = document.execCommand("copy");
        temporary.remove();
        finish(copied ? (type === "phone" ? t("copiedPhone") : t("copiedEmail")) : t("copyFailed"));
    }

    function updateHealthResult() {
        var result = document.getElementById("health-result");
        if (!result) return;
        result.textContent = activeHealth.size === 4 ? t("healthComplete") : t("healthHint");
    }

    function escapeHtml(value) {
        return String(value).replace(/[&<>"]/g, function (character) {
            return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[character];
        });
    }

    document.querySelectorAll("[data-lang-option]").forEach(function (button) {
        button.addEventListener("click", function () {
            applyLanguage(button.dataset.langOption);
        });
    });

    document.querySelectorAll(".focus-toggle button").forEach(function (button) {
        button.addEventListener("click", function () {
            document.querySelectorAll(".focus-toggle button").forEach(function (item) { item.classList.remove("is-active"); });
            button.classList.add("is-active");
            updateFocusCopy();
        });
    });

    document.querySelectorAll(".project-tabs button").forEach(function (button) {
        button.addEventListener("click", function () {
            var tabs = button.closest(".project-tabs");
            if (!tabs) return;
            tabs.querySelectorAll("button").forEach(function (item) { item.classList.remove("is-active"); });
            button.classList.add("is-active");
            renderProjectPanels();
        });
    });

    document.querySelectorAll("[data-open-command]").forEach(function (button) {
        button.addEventListener("click", openCommandPalette);
    });
    document.querySelectorAll("[data-close-command]").forEach(function (button) {
        button.addEventListener("click", closeCommandPalette);
    });

    document.querySelectorAll("[data-copy]").forEach(function (button) {
        button.addEventListener("click", function () {
            copyValue(button.dataset.copy);
        });
    });

    document.querySelectorAll("[data-health]").forEach(function (button) {
        button.addEventListener("click", function () {
            activeHealth.add(button.dataset.health);
            button.classList.add("is-active");
            button.setAttribute("aria-pressed", "true");
            updateHealthResult();
        });
    });

    document.addEventListener("keydown", function (event) {
        var target = event.target;
        var isTyping = target && (target.matches("input, textarea, select") || target.isContentEditable);
        if (event.key === "/" && !isTyping) {
            event.preventDefault();
            openCommandPalette();
        }
        if (event.key === "Escape") {
            closeCommandPalette();
        }
    });

    window.addEventListener("resize", renderDiagnostics);
    window.addEventListener("online", renderDiagnostics);
    window.addEventListener("offline", renderDiagnostics);
    if (typeof reducedMotion.addEventListener === "function") {
        reducedMotion.addEventListener("change", renderDiagnostics);
        colorScheme.addEventListener("change", renderDiagnostics);
    }

    if ("IntersectionObserver" in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        document.querySelectorAll(".observe").forEach(function (element) { observer.observe(element); });
    } else {
        document.querySelectorAll(".observe").forEach(function (element) { element.classList.add("is-visible"); });
    }

    if (!reducedMotion.matches) {
        var glow = document.querySelector(".cursor-glow");
        var pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        var scheduledGlow = false;
        document.addEventListener("pointermove", function (event) {
            pointer.x = event.clientX;
            pointer.y = event.clientY;
            if (!scheduledGlow) {
                scheduledGlow = true;
                requestAnimationFrame(function () {
                    scheduledGlow = false;
                    if (glow) {
                        glow.style.opacity = "1";
                        glow.style.left = pointer.x + "px";
                        glow.style.top = pointer.y + "px";
                    }
                });
            }
        });

        document.querySelectorAll(".tilt-card").forEach(function (card) {
            var scheduledTilt = false;
            var tiltEvent = null;
            card.addEventListener("pointermove", function (event) {
                tiltEvent = event;
                if (scheduledTilt) return;
                scheduledTilt = true;
                requestAnimationFrame(function () {
                    scheduledTilt = false;
                    var rect = card.getBoundingClientRect();
                    var x = ((tiltEvent.clientX - rect.left) / rect.width - 0.5) * 5;
                    var y = ((tiltEvent.clientY - rect.top) / rect.height - 0.5) * -5;
                    card.style.transform = "perspective(900px) rotateX(" + y.toFixed(2) + "deg) rotateY(" + x.toFixed(2) + "deg)";
                });
            });
            card.addEventListener("pointerleave", function () {
                card.style.transform = "";
            });
        });
    }

    applyLanguage(currentLanguage);
    window.nimaApplyLanguage = applyLanguage;
    window.nimaCopyValue = copyValue;
})();
