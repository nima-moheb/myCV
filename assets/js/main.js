(function () {
    "use strict";

    document.documentElement.classList.add("js");

    /* Data */
    var root = document.documentElement;
    var storageKey = "nima-chaos-language";
    var email = "nima.mohebali.b@gmail.com";
    var phone = "09227241378";
    var currentLanguage = localStorage.getItem(storageKey) === "en" ? "en" : "fa";
    var lastFocusedElement = null;
    var debugMode = false;
    var gameIndex = 0;
    var bossHp = 100;
    var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    var colorScheme = window.matchMedia("(prefers-color-scheme: dark)");

    var translations = {
        fa: {
            skip: "رفتن به محتوای اصلی",
            metaTitle: "نیما — Web Chaos Command Center",
            metaDescription: "نیما — اتاق فرمان وب برای عیب‌یابی و اصلاح سایت‌های وردپرسی، لاراولی، فروشگاهی، سئو، سرعت، DNS، ایمیل و باگ‌های عجیب.",
            headerAria: "ناوبری اصلی",
            brandAria: "بازگشت به بالا",
            navAria: "لینک‌های صفحه",
            brandName: "نیما",
            brandRole: "اتاق فرمان وب نیما",
            navChaos: "دردسرها",
            navProjects: "ماموریت‌ها",
            navBoss: "بازی",
            navContact: "ارسال مشکل",
            commandTrigger: "فرمان‌ها",
            commandAria: "باز کردن فرمان‌ها",
            langAria: "تغییر زبان",
            langStatus: "حالت فارسی",
            heroBadge: "Nima — Web Chaos Command Center",
            heroTitle: "سایتت قاطی کرده؟ بفرستش.",
            heroSubtitle: "وردپرس، لاراول، ووکامرس، سئو، سرعت، DNS، ایمیل، فرم‌های خراب، جریان‌های نصفه‌نیمه و باگ‌هایی که کسی حوصله‌شان را ندارد؛ اول نقشه مشکل را درمی‌آورم، بعد تمیز درستش می‌کنم.",
            heroCtaGame: "سایت خراب رو نجات بده",
            heroCtaContact: "بفرست بررسی کنم",
            heroCtaCommand: "باز کردن فرمان‌ها",
            dashboardAria: "داشبورد فرمان",
            dashTitle: "ورودی مشکلات باز است",
            terminal1: "✓ آماده بررسی جریان‌های خراب",
            terminal2: "! احتمال تداخل افزونه یا تنظیمات",
            terminal3: "✓ نقشه‌برداری قبل از تعمیر",
            scanCta: "بررسی امن مرورگر",
            scanSafe: "بدون IP، بدون موقعیت مکانی",
            chaosKicker: "دردسرهای آشنا",
            chaosTitle: "این‌ها همان چیزهایی‌اند که معمولاً کسی حوصله باز کردنشان را ندارد.",
            projectsKicker: "ماموریت‌های واقعی",
            projectsTitle: "نه عددسازی، نه ادعای الکی؛ چند نمونه از کارهایی که واقعاً دستم بوده.",
            gameKicker: "بازی تعمیر سایت",
            gameTitle: "نبرد با سایت خراب",
            bossName: "سایت خراب",
            gameIntro: "کارت مشکل را بخوان و تعمیر درست را انتخاب کن.",
            resetGame: "شروع دوباره",
            scanVisitor: "بررسی امن مرورگر",
            diagnosisKicker: "تشخیص نیما",
            diagnosisLocked: "کارت تشخیص هنوز قفل است.",
            diagnosisHint: "سایت خراب را شکست بده تا باز شود.",
            diagnosisUnlocked: "مشکل معمولاً فقط یک باگ نیست.",
            diagnosisText: "معمولاً چند چیز با هم گره خورده‌اند: ساختار، جریان کاربر، سرور، محتوا و نگه‌داری. اول نقشه مشکل را درمی‌آورم، بعد تعمیر می‌کنم.",
            signalTitle: "Command Center Signal",
            audioPlay: "پخش سیگنال",
            audioPause: "توقف سیگنال",
            audioMissing: "اگر فایل صوتی موجود نباشد، پلیر بی‌صدا و تمیز می‌ماند.",
            contactKicker: "قدم بعدی",
            contactTitle: "مشکل سایتت رو بفرست.",
            contactText: "بگو کجای سایت کند، خراب، گیج‌کننده، نیمه‌کاره یا عجیب شده. لازم نیست تمیز و مرتب توضیحش بدهی؛ مرتب کردن مسئله بخشی از کار من است.",
            copyEmail: "کپی ایمیل",
            copyPhone: "کپی شماره",
            copiedEmail: "ایمیل کپی شد.",
            copiedPhone: "شماره کپی شد.",
            copyFailed: "کپی خودکار انجام نشد؛ متن را دستی بردار.",
            phoneAria: "تماس با 09227241378",
            footerText: "نیما — Web Chaos Command Center",
            backTop: "بازگشت به بالا",
            paletteTitle: "فرمان‌ها",
            paletteHint: "/ برای باز کردن، Escape برای بستن.",
            closeAria: "بستن",
            commandProjects: "دیدن ماموریت‌ها",
            commandChaos: "دیدن دردسرها",
            commandBoss: "شروع بازی تعمیر سایت",
            commandScan: "بررسی امن مرورگر",
            commandSignal: "پخش سیگنال نیما",
            commandEmail: "کپی ایمیل",
            commandPhone: "کپی شماره",
            commandSwitch: "تغییر زبان",
            commandContact: "ارسال مشکل",
            commandApplitent: "باز کردن Applitent",
            commandFannkala: "باز کردن Fannkala",
            commandParstek: "باز کردن Parstek",
            commandDebug: "حالت عیب‌یابی",
            hintScroll: "رفتن به بخش",
            hintCopy: "کپی در کلیپ‌بورد",
            hintExternal: "باز شدن در تب تازه",
            hintConsole: "فرمان سیستمی",
            gameWin: "سیستم پایدار شد. حالا مشکل واقعی سایتت رو بفرست.",
            gameGood: "درست زدی. مشکل کمتر شد.",
            gameBad: "نه، این یکی راهش نبود.",
            diagnostics: {
                device: "دستگاه",
                browser: "مرورگر",
                viewport: "اندازه صفحه",
                language: "زبان صفحه",
                timezone: "منطقه زمانی",
                scheme: "طرح رنگ",
                motion: "کاهش حرکت",
                connection: "اتصال",
                desktop: "رومیزی",
                tablet: "تبلت",
                mobile: "موبایل",
                dark: "تیره",
                light: "روشن",
                reduced: "فعال",
                noPreference: "غیرفعال",
                unknown: "نامشخص"
            }
        },
        en: {
            skip: "Skip to main content",
            metaTitle: "Nima — Web Chaos Command Center",
            metaDescription: "Nima — Web Chaos Command Center. Send me the broken thing: WordPress, Laravel, WooCommerce, SEO, speed, DNS, mail, weird bugs, broken flows, and half-built ideas.",
            headerAria: "Primary navigation",
            brandAria: "Back to top",
            navAria: "Page links",
            brandName: "Nima",
            brandRole: "Web Chaos Command Center",
            navChaos: "Chaos",
            navProjects: "Missions",
            navBoss: "Boss fight",
            navContact: "Send broken thing",
            commandTrigger: "Launcher",
            commandAria: "Open command launcher",
            langAria: "Change language",
            langStatus: "English mode",
            heroBadge: "Nima — Web Chaos Command Center",
            heroTitle: "Send me the broken thing.",
            heroSubtitle: "WordPress, Laravel, WooCommerce, SEO, speed, DNS, mail, weird bugs, broken flows, half-built ideas — I map the mess and make it usable.",
            heroCtaGame: "Fix the broken site",
            heroCtaContact: "Send the broken thing",
            heroCtaCommand: "Open console",
            dashboardAria: "Command dashboard",
            dashTitle: "Broken-site intake online",
            terminal1: "✓ listening for broken flows",
            terminal2: "! plugin conflict smell detected",
            terminal3: "✓ taste layer armed",
            scanCta: "Scan Visitor",
            scanSafe: "No IP. No geolocation.",
            chaosKicker: "Chaos Types",
            chaosTitle: "The kinds of mess I do not run away from.",
            projectsKicker: "Mission Projects",
            projectsTitle: "My words and live sites are proof — not fake numbers.",
            gameKicker: "Fix the Broken Website",
            gameTitle: "Boss fight: The Broken Site",
            bossName: "The Broken Site",
            gameIntro: "Read the issue card and hit the right repair.",
            resetGame: "Reset game",
            scanVisitor: "Safe visitor scan",
            diagnosisKicker: "Nima’s diagnosis",
            diagnosisLocked: "Diagnosis card is locked.",
            diagnosisHint: "Beat the boss to unlock it.",
            diagnosisUnlocked: "The problem is rarely just one bug.",
            diagnosisText: "It is usually structure, flow, server, content, and maintenance fighting each other. I map first, then repair.",
            signalTitle: "Command Center Signal",
            audioPlay: "Play signal",
            audioPause: "Pause signal",
            audioMissing: "If no audio file exists, this player stays quiet and graceful.",
            contactKicker: "Final unlocked action",
            contactTitle: "Send me the broken thing.",
            contactText: "Tell me what is slow, broken, confusing, unfinished, or weird. You do not need to organize the mess first — that is my job.",
            copyEmail: "Copy email",
            copyPhone: "Copy phone",
            copiedEmail: "Email copied.",
            copiedPhone: "Phone copied.",
            copyFailed: "Automatic copy failed; copy it manually.",
            phoneAria: "Call 09227241378",
            footerText: "Nima — Web Chaos Command Center",
            backTop: "Back to top",
            paletteTitle: "Command launcher",
            paletteHint: "/ opens. Escape closes.",
            closeAria: "Close",
            commandProjects: "Open Projects",
            commandChaos: "Show Chaos Types",
            commandBoss: "Start Boss Fight",
            commandScan: "Scan Visitor",
            commandSignal: "Play Nima Signal",
            commandEmail: "Copy Email",
            commandPhone: "Copy Phone",
            commandSwitch: "Switch Language",
            commandContact: "Contact / Send broken thing",
            commandApplitent: "Open Applitent",
            commandFannkala: "Open Fannkala",
            commandParstek: "Open Parstek",
            commandDebug: "Toggle Debug Mode",
            hintScroll: "Jump to section",
            hintCopy: "Copy to clipboard",
            hintExternal: "Open in a new tab",
            hintConsole: "System command",
            gameWin: "System stable. Now send me your real broken thing.",
            gameGood: "Correct repair. Chaos reduced.",
            gameBad: "Wrong move. The site growled louder.",
            diagnostics: {
                device: "Device",
                browser: "Browser",
                viewport: "Viewport",
                language: "Page language",
                timezone: "Timezone",
                scheme: "Color scheme",
                motion: "Reduced motion",
                connection: "Connection",
                desktop: "Desktop",
                tablet: "Tablet",
                mobile: "Mobile",
                dark: "Dark",
                light: "Light",
                reduced: "Reduced",
                noPreference: "No preference",
                unknown: "Unknown"
            }
        }
    };

    var chaosCards = {
        fa: [
            ["WP/WOO", "وردپرس یا ووکامرس به‌هم‌ریخته", "سایت بالا می‌آید، اما خرید، اعتماد، مدیریت یا نگه‌داری درست جلو نمی‌رود."],
            ["SPEED", "سایت کند", "تصویرهای سنگین، کش بد، هاست ضعیف یا ساختاری که نفس سایت را گرفته."],
            ["PLUGIN", "تداخل افزونه یا قالب", "هر بخش جداگانه سالم است، اما کنار هم که می‌آیند سایت قاطی می‌کند."],
            ["LARAVEL", "جریان‌های لاراول", "ورود، پنل، درخواست سرویس، داشبورد یا مسیری که نصفه مانده."],
            ["DNS/SSL", "DNS، SSL و Cloudflare", "دامنه، ریدایرکت، قفل سبز، رکوردها و تنظیماتی که اگر غلط باشند همه چیز را خراب می‌کنند."],
            ["MAIL", "ایمیل‌هایی که نمی‌رسند", "فرم تماس، SMTP، اعلان‌ها و پیام‌هایی که ظاهراً ارسال شده‌اند اما مقصدی ندارند."],
            ["SEO", "سئو و ساختار محتوا", "نقشه سایت، متاها، مسیر صفحات و محتوایی که باید برای آدم و گوگل قابل فهم شود."],
            ["FLOW", "فرآیند نصفه‌نیمه", "کاری که الان با فرم، اکسل، واتساپ و چند راه‌حل موقت سرپا مانده."],
            ["WEIRD", "باگ‌های عجیب", "همان مشکل‌هایی که تکرارشان سخت است و کسی دوست ندارد بازشان کند."]
        ],
        en: [
            ["WP/WOO", "Broken WordPress / WooCommerce", "The site loads, but trust, checkout, or maintenance keeps breaking."],
            ["SPEED", "Slow websites", "Heavy assets, bad cache, tired hosting, or messy structure."],
            ["PLUGIN", "Plugin/theme conflicts", "Everything is fine alone, then fights in the same room."],
            ["LARAVEL", "Laravel dashboards and flows", "Auth, panels, service requests, and unfinished product paths."],
            ["DNS/SSL", "DNS, SSL, Cloudflare", "Domains, green locks, redirects, and infrastructure layers."],
            ["MAIL", "Email not sending", "SMTP, contact forms, notifications, and messages lost in space."],
            ["SEO", "SEO structure and cleanup", "Sitemaps, metadata, content paths, and meaningful cleanup."],
            ["FLOW", "Half-built business workflows", "The thing currently held together by spreadsheets, forms, WhatsApp, and hope."],
            ["WEIRD", "Weird bugs", "The bug nobody wants to touch."]
        ]
    };

    var projectCards = {
        fa: [
            {
                name: "Applitent",
                url: "https://applitent.com",
                type: "ماموریت لاراول / Legal-tech",
                featured: true,
                mess: "پلتفرم خدمات حقوقی به جریان‌های قابل اعتماد، زیرساخت پایدار و مسیرهای واضح برای کاربر نیاز داشت.",
                move: "روی ورود و ثبت‌نام، داشبوردها، درخواست سرویس، آپلود امن‌تر، هاب حقوقی، ایمیل، DNS، SSL، Cloudflare، نقشه سایت، سئوی فنی و عیب‌یابی سمت سرور کار کردم.",
                outcome: "سیستم قابل استفاده‌تر، قابل نگه‌داری‌تر و آماده‌تر شد؛ همراه با Lighthouse 100×4.",
                chips: ["Laravel", "Auth", "Dashboards", "Cloudflare", "SEO", "Lighthouse 100×4"]
            },
            {
                name: "Fannkala",
                url: "https://fannkala.com",
                type: "ماموریت WordPress / WooCommerce",
                mess: "فروشگاه به ساختار روشن‌تر، مسیر خرید بهتر و نگه‌داری ساده‌تر نیاز داشت.",
                move: "روی ساختار وردپرس و ووکامرس، مسیر خرید، محتوا، تجربه کاربر و بهبود سرعت کار کردم.",
                outcome: "فروشگاه خواناتر، مرتب‌تر و آماده‌تر برای نگه‌داری و رشد محتوا شد.",
                chips: ["WordPress", "WooCommerce", "Content", "Performance"]
            },
            {
                name: "Parstek",
                url: "https://parstek.ir",
                type: "ماموریت سایت شرکتی وردپرس",
                mess: "سایت شرکتی باید خدمات، مسیرهای محتوا و حس حرفه‌ای برند را شفاف‌تر نشان می‌داد.",
                move: "روی ارائه خدمات، مسیرهای محتوا، پولیش رابط کاربری، سفارشی‌سازی قالب و تمیزکاری تجربه کاربر کار کردم.",
                outcome: "مسیر مطالعه و معرفی برند منظم‌تر و حرفه‌ای‌تر شد.",
                chips: ["Corporate", "WordPress", "UI polish", "UX cleanup"]
            }
        ],
        en: [
            {
                name: "Applitent",
                url: "https://applitent.com",
                type: "Laravel / Legal-tech mission",
                featured: true,
                mess: "A legal-services platform needed reliable flows, stable infrastructure, and trust-building paths.",
                move: "I worked on auth flows, dashboards, service requests, upload hardening, legal hub, mail, DNS, SSL, Cloudflare, sitemap, technical SEO, and server-side troubleshooting.",
                outcome: "The system became more usable and maintainable, with Lighthouse 100×4 as proof.",
                chips: ["Laravel", "Auth", "Dashboards", "Cloudflare", "SEO", "Lighthouse 100×4"]
            },
            {
                name: "Fannkala",
                url: "https://fannkala.com",
                type: "WordPress / WooCommerce mission",
                mess: "The store needed clearer structure, a smoother buying experience, and easier maintenance.",
                move: "I worked on WordPress/WooCommerce structure, buying paths, content, UX cleanup, and speed/performance cleanup.",
                outcome: "The store became clearer, cleaner, and easier to maintain and grow with content.",
                chips: ["WordPress", "WooCommerce", "Content", "Performance"]
            },
            {
                name: "Parstek",
                url: "https://parstek.ir",
                type: "Corporate WordPress mission",
                mess: "The corporate site needed clearer service presentation, content paths, and professional polish.",
                move: "I worked on service presentation, content paths, UI polish, theme customization, and UX cleanup.",
                outcome: "The brand presentation and browsing path became more organized and credible.",
                chips: ["Corporate", "WordPress", "UI polish", "UX cleanup"]
            }
        ]
    };

    var gameIssues = [
        { key: "dns", fa: "دامنه یک بار باز می‌شود، یک بار نه. مشکل از مسیر یا رکوردهاست.", en: "The domain works sometimes, then disappears. Routing smells wrong.", answer: "DNS" },
        { key: "ssl", fa: "مرورگر هشدار امنیتی می‌دهد و اعتماد کاربر همان اول می‌ریزد.", en: "The browser screams that the connection is not secure.", answer: "SSL" },
        { key: "cache", fa: "تغییرات انجام شده، اما سایت هنوز نسخه قدیمی را نشان می‌دهد.", en: "Changes are deployed, but visitors still see the old version.", answer: "Cache" },
        { key: "plugin", fa: "بعد از آپدیت، فرم یا سبد خرید ناگهان از کار افتاده.", en: "After an update, the form or checkout suddenly broke.", answer: "Plugin conflict" },
        { key: "assets", fa: "صفحه زیر بار تصویرها و اسکریپت‌های سنگین کند شده.", en: "The page is choking on heavy images and scripts.", answer: "Slow assets" },
        { key: "checkout", fa: "کاربر می‌خواهد فرم بفرستد یا خرید کند، اما مسیر گیر می‌کند.", en: "A user wants to pay or submit, but the flow gets stuck.", answer: "Broken checkout/form" },
        { key: "seo", fa: "گوگل نقشه، عنوان‌ها و مسیر محتوایی سایت را درست نمی‌فهمد.", en: "Search engines cannot see a clean map, title, or content path.", answer: "SEO missing" },
        { key: "mail", fa: "فرم می‌گوید ارسال شد، اما ایمیلی به مقصد نمی‌رسد.", en: "The form says sent; the inbox sees nothing.", answer: "Email not sending" }
    ];

    var repairOptions = ["DNS", "SSL", "Cache", "Plugin conflict", "Slow assets", "Broken checkout/form", "SEO missing", "Email not sending"];

    /* Utilities */
    function t(key) {
        return translations[currentLanguage][key] || translations.fa[key] || key;
    }

    function escapeHtml(value) {
        return String(value).replace(/[&<>"]/g, function (character) {
            return {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;"
            }[character];
        });
    }

    function setMeta(name, content) {
        var element = document.querySelector('meta[name="' + name + '"]');
        if (element) element.content = content;
    }

    function setMetaProperty(property, content) {
        var element = document.querySelector('meta[property="' + property + '"]');
        if (element) element.content = content;
    }

    function scrollToTarget(id) {
        var element = document.getElementById(id);
        if (!element) return;
        element.scrollIntoView({
            behavior: reducedMotion.matches ? "auto" : "smooth",
            block: "start"
        });
    }

    /* Language */
    function applyLanguage(language) {
        currentLanguage = language === "en" ? "en" : "fa";
        localStorage.setItem(storageKey, currentLanguage);

        root.lang = currentLanguage;
        root.dir = currentLanguage === "fa" ? "rtl" : "ltr";
        document.title = t("metaTitle");

        setMeta("description", t("metaDescription"));
        setMeta("twitter:title", t("metaTitle"));
        setMeta("twitter:description", t("metaDescription"));
        setMetaProperty("og:title", t("metaTitle"));
        setMetaProperty("og:description", t("metaDescription"));
        setMetaProperty("og:locale", currentLanguage === "fa" ? "fa_IR" : "en_US");

        document.querySelectorAll("[data-i18n]").forEach(function (element) {
            element.textContent = t(element.dataset.i18n);
        });

        document.querySelectorAll("[data-i18n-aria-label]").forEach(function (element) {
            element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
        });

        document.querySelectorAll("[data-lang-option]").forEach(function (button) {
            button.classList.toggle("is-active", button.dataset.langOption === currentLanguage);
        });

        renderChaosCards();
        renderProjectCards();
        renderGame();
        renderCommandList();
        renderDiagnostics(false);
        updateAudioUi();
    }

    /* Rendering */
    function renderChaosCards() {
        var grid = document.getElementById("chaos-grid");
        if (!grid) return;

        grid.innerHTML = chaosCards[currentLanguage].map(function (card) {
            return [
                '<article class="chaos-card observe is-visible">',
                '<button type="button" data-chaos-focus>',
                '<span class="alert-code">' + escapeHtml(card[0]) + '</span>',
                '<h3>' + escapeHtml(card[1]) + '</h3>',
                '<p>' + escapeHtml(card[2]) + '</p>',
                '</button>',
                '</article>'
            ].join("");
        }).join("");
    }

    function renderProjectCards() {
        var grid = document.getElementById("mission-grid");
        if (!grid) return;

        grid.innerHTML = projectCards[currentLanguage].map(function (project) {
            var chips = project.chips.map(function (chip) {
                return '<span class="chip">' + escapeHtml(chip) + '</span>';
            }).join("");

            return [
                '<article class="mission-card observe is-visible ' + (project.featured ? "featured" : "") + '">',
                '<span class="mission-type">' + escapeHtml(project.type) + '</span>',
                '<h3>' + escapeHtml(project.name) + '</h3>',
                renderMissionRow(currentLanguage === "fa" ? "آشوب" : "The mess", project.mess),
                renderMissionRow(currentLanguage === "fa" ? "حرکت من" : "My move", project.move),
                renderMissionRow(currentLanguage === "fa" ? "سیستم پایدارتر شد" : "System stabilized", project.outcome),
                '<div class="chips">' + chips + '</div>',
                '<a class="live-link" target="_blank" rel="noopener" href="' + escapeHtml(project.url) + '">' + (currentLanguage === "fa" ? "مشاهده سایت زنده" : "Open live site") + '</a>',
                '</article>'
            ].join("");
        }).join("");
    }

    function renderMissionRow(label, text) {
        return '<div class="mission-row"><strong>' + escapeHtml(label) + '</strong><p>' + escapeHtml(text) + '</p></div>';
    }

    /* Diagnostics */
    function getBrowserName() {
        var agent = navigator.userAgent;
        if (agent.indexOf("Edg/") > -1) return "Microsoft Edge";
        if (agent.indexOf("Firefox/") > -1) return "Firefox";
        if (agent.indexOf("Chrome/") > -1 && agent.indexOf("Chromium") === -1) return "Chrome";
        if (agent.indexOf("Safari/") > -1 && agent.indexOf("Chrome/") === -1) return "Safari";
        return translations[currentLanguage].diagnostics.unknown;
    }

    function getDeviceType() {
        var labels = translations[currentLanguage].diagnostics;
        if (window.innerWidth < 640) return labels.mobile;
        if (window.innerWidth < 980) return labels.tablet;
        return labels.desktop;
    }

    function renderDiagnostics(showPanel) {
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
            [labels.scheme, colorScheme.matches ? labels.dark : labels.light],
            [labels.motion, reducedMotion.matches ? labels.reduced : labels.noPreference],
            [labels.connection, connection && connection.effectiveType ? connection.effectiveType : labels.unknown]
        ];

        grid.innerHTML = items.map(function (item) {
            return '<div class="diagnostic-item"><small>' + escapeHtml(item[0]) + '</small><strong>' + escapeHtml(item[1]) + '</strong></div>';
        }).join("");

        if (showPanel) grid.hidden = false;
    }

    function scanVisitor() {
        renderDiagnostics(true);
        scrollToTarget("top");
    }

    /* Boss Fight */
    function renderGame() {
        updateBossMeter();

        var issue = document.getElementById("issue-card");
        var actions = document.getElementById("repair-actions");
        if (!issue || !actions) return;

        if (gameIndex >= gameIssues.length) {
            issue.textContent = t("gameWin");
            actions.innerHTML = '<a class="btn primary-btn" href="#contact">' + escapeHtml(t("heroCtaContact")) + '</a>';
            unlockDiagnosis();
            return;
        }

        var currentIssue = gameIssues[gameIndex];
        issue.textContent = currentLanguage === "fa" ? currentIssue.fa : currentIssue.en;
        actions.innerHTML = repairOptions.map(function (option) {
            return '<button type="button" data-repair="' + escapeHtml(option) + '">' + escapeHtml(option) + '</button>';
        }).join("");
    }

    function updateBossMeter() {
        var hp = document.getElementById("boss-hp");
        var label = document.getElementById("boss-hp-label");
        if (hp) hp.style.width = bossHp + "%";
        if (label) label.textContent = bossHp + "%";
    }

    function repairIssue(answer) {
        var card = document.getElementById("game-card");
        var status = document.getElementById("game-status");
        var currentIssue = gameIssues[gameIndex];
        if (!currentIssue) return;

        if (answer === currentIssue.answer) {
            bossHp = Math.max(0, bossHp - 13);
            gameIndex += 1;
            if (status) status.textContent = t("gameGood");
        } else {
            bossHp = Math.min(100, bossHp + 5);
            if (status) status.textContent = t("gameBad");
            shakeGameCard(card);
        }

        if (gameIndex >= gameIssues.length) bossHp = 0;
        renderGame();
    }

    function shakeGameCard(card) {
        if (!card) return;
        card.classList.remove("shake");
        void card.offsetWidth;
        card.classList.add("shake");
    }

    function resetGame() {
        gameIndex = 0;
        bossHp = 100;

        var status = document.getElementById("game-status");
        var diagnosis = document.getElementById("diagnosis-card");
        if (status) status.textContent = t("gameIntro");
        if (diagnosis) {
            diagnosis.classList.remove("unlocked");
            diagnosis.innerHTML = '<p class="section-kicker">' + escapeHtml(t("diagnosisKicker")) + '</p><h3 data-i18n="diagnosisLocked">' + escapeHtml(t("diagnosisLocked")) + '</h3><p data-i18n="diagnosisHint">' + escapeHtml(t("diagnosisHint")) + '</p>';
        }

        renderGame();
    }

    function unlockDiagnosis() {
        var diagnosis = document.getElementById("diagnosis-card");
        if (!diagnosis) return;

        diagnosis.classList.add("unlocked");
        diagnosis.innerHTML = [
            '<p class="section-kicker">' + escapeHtml(t("diagnosisKicker")) + '</p>',
            '<h3>' + escapeHtml(t("diagnosisUnlocked")) + '</h3>',
            '<p>' + escapeHtml(t("diagnosisText")) + '</p>'
        ].join("");
    }

    /* Command Launcher */
    function getCommands() {
        return [
            { label: t("commandProjects"), hint: t("hintScroll"), action: function () { closeCommandPalette(); scrollToTarget("projects"); } },
            { label: t("commandChaos"), hint: t("hintScroll"), action: function () { closeCommandPalette(); scrollToTarget("chaos"); } },
            { label: t("commandBoss"), hint: t("hintScroll"), action: function () { closeCommandPalette(); scrollToTarget("boss"); } },
            { label: t("commandScan"), hint: t("hintConsole"), action: function () { closeCommandPalette(); scanVisitor(); } },
            { label: t("commandSignal"), hint: t("hintConsole"), action: function () { closeCommandPalette(); toggleAudio(); } },
            { label: t("commandEmail"), hint: t("hintCopy"), action: function () { copyValue("email"); } },
            { label: t("commandPhone"), hint: t("hintCopy"), action: function () { copyValue("phone"); } },
            { label: t("commandSwitch"), hint: t("hintConsole"), action: function () { applyLanguage(currentLanguage === "fa" ? "en" : "fa"); } },
            { label: t("commandContact"), hint: t("hintScroll"), action: function () { closeCommandPalette(); scrollToTarget("contact"); } },
            { label: t("commandApplitent"), hint: t("hintExternal"), action: function () { window.open("https://applitent.com", "_blank", "noopener"); } },
            { label: t("commandFannkala"), hint: t("hintExternal"), action: function () { window.open("https://fannkala.com", "_blank", "noopener"); } },
            { label: t("commandParstek"), hint: t("hintExternal"), action: function () { window.open("https://parstek.ir", "_blank", "noopener"); } },
            { label: t("commandDebug"), hint: t("hintConsole"), action: toggleDebugMode }
        ];
    }

    function renderCommandList() {
        var list = document.getElementById("command-list");
        if (!list) return;

        list.innerHTML = "";
        getCommands().forEach(function (command) {
            var button = document.createElement("button");
            button.type = "button";
            button.innerHTML = "<span>" + escapeHtml(command.label) + "</span><small>" + escapeHtml(command.hint) + "</small>";
            button.addEventListener("click", command.action);
            list.appendChild(button);
        });
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

    function toggleDebugMode() {
        debugMode = !debugMode;
        document.body.classList.toggle("debug-mode", debugMode);
        scanVisitor();
    }

    /* Copy Actions */
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
        temporary.style.position = "fixed";
        temporary.style.opacity = "0";
        document.body.appendChild(temporary);
        temporary.select();

        var copied = document.execCommand("copy");
        temporary.remove();
        finish(copied ? (type === "phone" ? t("copiedPhone") : t("copiedEmail")) : t("copyFailed"));
    }

    /* Audio */
    function audioAvailable() {
        var player = document.getElementById("signal-player");
        return !!(player && player.dataset.audioReady === "true");
    }

    function formatTime(seconds) {
        if (!isFinite(seconds)) return "0:00";
        var minutes = Math.floor(seconds / 60);
        var rest = Math.floor(seconds % 60);
        return minutes + ":" + String(rest).padStart(2, "0");
    }

    function updateAudioUi() {
        var audio = document.getElementById("command-audio");
        var progress = document.getElementById("audio-progress");
        var time = document.getElementById("audio-time");
        var buttons = document.querySelectorAll("[data-audio-toggle]");
        if (!audio) return;

        if (progress) {
            progress.style.width = (audio.duration ? (audio.currentTime / audio.duration) * 100 : 0) + "%";
        }

        if (time) {
            time.textContent = formatTime(audio.currentTime) + " / " + formatTime(audio.duration);
        }

        buttons.forEach(function (button) {
            button.textContent = audio.paused ? "▶" : "Ⅱ";
            button.setAttribute("aria-label", audio.paused ? t("audioPlay") : t("audioPause"));
        });
    }

    function toggleAudio() {
        var audio = document.getElementById("command-audio");
        if (!audioAvailable() || !audio) return;

        if (audio.paused) audio.play().catch(function () {});
        else audio.pause();

        updateAudioUi();
    }

    function initAudio() {
        var player = document.getElementById("signal-player");
        var audio = document.getElementById("command-audio");
        if (!player || !audio) return;

        audio.addEventListener("loadedmetadata", function () {
            player.dataset.audioReady = "true";
            var note = document.getElementById("audio-note");
            if (note) note.hidden = true;
            updateAudioUi();
        });

        audio.addEventListener("error", function () {
            player.dataset.audioReady = "false";
            updateAudioUi();
        });

        ["timeupdate", "play", "pause"].forEach(function (eventName) {
            audio.addEventListener(eventName, updateAudioUi);
        });
    }

    /* Events */
    function handleDocumentClick(event) {
        var repairButton = event.target.closest("[data-repair]");
        var resetButton = event.target.closest("[data-reset-game]");
        var openCommandButton = event.target.closest("[data-open-command]");
        var closeCommandButton = event.target.closest("[data-close-command]");
        var scanButton = event.target.closest("[data-scan-visitor]");
        var copyButton = event.target.closest("[data-copy]");
        var audioButton = event.target.closest("[data-audio-toggle]");
        var languageButton = event.target.closest("[data-lang-option]");

        if (repairButton) repairIssue(repairButton.dataset.repair);
        if (resetButton) resetGame();
        if (openCommandButton) openCommandPalette();
        if (closeCommandButton) closeCommandPalette();
        if (scanButton) scanVisitor();
        if (audioButton) toggleAudio();

        if (copyButton) {
            event.preventDefault();
            copyValue(copyButton.dataset.copy);
        }

        if (languageButton) {
            applyLanguage(languageButton.dataset.langOption);
        }
    }

    function handleKeyboard(event) {
        var target = event.target;
        var isTyping = target && (target.matches("input, textarea, select") || target.isContentEditable);

        if (event.key === "/" && !isTyping) {
            event.preventDefault();
            openCommandPalette();
        }

        if (event.key === "Escape") {
            closeCommandPalette();
        }
    }

    function initObservers() {
        if (!("IntersectionObserver" in window)) {
            document.querySelectorAll(".observe").forEach(function (element) {
                element.classList.add("is-visible");
            });
            return;
        }

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        document.querySelectorAll(".observe").forEach(function (element) {
            observer.observe(element);
        });
    }

    function initCursorGlow() {
        if (reducedMotion.matches) return;

        var glow = document.querySelector(".cursor-glow");
        var scheduled = false;

        document.addEventListener("pointermove", function (event) {
            if (scheduled) return;
            scheduled = true;

            requestAnimationFrame(function () {
                scheduled = false;
                if (!glow) return;
                glow.style.opacity = "1";
                glow.style.left = event.clientX + "px";
                glow.style.top = event.clientY + "px";
            });
        });
    }

    function init() {
        document.addEventListener("click", handleDocumentClick);
        document.addEventListener("keydown", handleKeyboard);
        window.addEventListener("resize", function () { renderDiagnostics(false); });

        if (typeof reducedMotion.addEventListener === "function") {
            reducedMotion.addEventListener("change", function () { renderDiagnostics(false); });
            colorScheme.addEventListener("change", function () { renderDiagnostics(false); });
        }

        initAudio();
        applyLanguage(currentLanguage);
        initObservers();
        initCursorGlow();
    }

    init();

    window.nimaApplyLanguage = applyLanguage;
    window.nimaCopyValue = copyValue;
})();
