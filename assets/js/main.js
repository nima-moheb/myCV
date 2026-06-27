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
    var diagnosticsOpen = false;
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
            heroBadge: "نیما — اتاق فرمان وب",
            heroTitleMain: "سایتت قاطی کرده؟",
            heroTitleSoft: "بفرستش",
            heroSubtitle: "وردپرس، لاراول، ووکامرس، سئو، سرعت، DNS، ایمیل، فرم‌های خراب، جریان‌های نصفه‌نیمه و باگ‌هایی که کسی حوصله‌شان را ندارد؛ اول نقشه مشکل را درمی‌آورم، بعد تمیز درستش می‌کنم.",
            heroCtaGame: "سایت خراب رو نجات بده",
            heroCtaContact: "بفرست بررسی کنم",
            heroCtaCommand: "باز کردن فرمان‌ها",
            dashboardAria: "داشبورد فرمان",
            dashTitle: "ورودی مشکلات باز است",
            terminal1: "> مشکل را می‌خوانم",
            terminal2: "> مسیر را پیدا می‌کنم",
            terminal3: "> تمیز تعمیر می‌کنم",
            scanCta: "سیستم منو بخون",
            scanFriendly: "نمای سریع محیطی که سایت را با آن می‌بینی.",
            operatorAlt: "نیما در اتاق فرمان وب",
            statusWp: "قابل بررسی",
            statusLaravel: "قابل بررسی",
            statusDns: "قابل بررسی",
            statusMailLabel: "ایمیل/فرم",
            statusMail: "قابل بررسی",
            chaosKicker: "دردسرهای آشنا",
            chaosTitle: "این‌ها همان چیزهایی‌اند که معمولاً کسی حوصله باز کردنشان را ندارد.",
            projectsKicker: "ماموریت‌های واقعی",
            projectsTitle: "چند نمونه از جاهایی که فقط ظاهر سایت مهم نبود",
            projectsSubtitle: "ساختار، مسیر کاربر، نگه‌داری، سرعت و عیب‌یابی واقعی هم بخشی از کار بودند.",
            gameKicker: "شبیه‌ساز تعمیر سایت",
            gameTitle: "شبیه‌ساز تعمیر سایت",
            bossName: "پیشرفت تعمیر",
            gameIntro: "کارت مشکل را بخوان و تعمیر درست را انتخاب کن.",
            resetGame: "شروع دوباره",
            scanVisitor: "سیستم منو بخون",
            diagnosisKicker: "تشخیص نیما",
            diagnosisLocked: "کارت تشخیص هنوز قفل است.",
            diagnosisHint: "چند تعمیر درست بزن تا باز شود.",
            diagnosisUnlocked: "مشکل معمولاً فقط یک باگ نیست.",
            diagnosisText: "معمولاً چند چیز با هم گره خورده‌اند: ساختار، جریان کاربر، سرور، محتوا و نگه‌داری. اول نقشه مشکل را درمی‌آورم، بعد تعمیر می‌کنم.",
            signalTitle: "سیگنال اتاق فرمان",
            audioPlay: "پخش سیگنال",
            audioPause: "توقف سیگنال",
            audioMissing: "اگر فایل صوتی موجود نباشد، پلیر عمداً خاموش و مرتب می‌ماند.",
            tagMade: "ساخته‌ی نیما",
            tagPersonal: "سیگنال شخصی",
            contactKicker: "قدم بعدی",
            contactTitle: "مشکل سایتت رو بفرست.",
            contactText: "بگو کجای سایت کند، خراب، گیج‌کننده، نیمه‌کاره یا عجیب شده. لازم نیست تمیز و مرتب توضیحش بدهی؛ مرتب کردن مسئله بخشی از کار من است.",
            emailContext: "بهترین مسیر برای شرح پروژه یا مشکل",
            phoneContext: "تماس سریع‌تر و مستقیم‌تر",
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
            commandScan: "منو بررسی کن",
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
            gameGood: "درست زدی؛ یک لایه آشوب کم شد.",
            gameBad: "این تعمیر جواب نداد؛ یک گزینه دقیق‌تر بزن.",
            diagnostics: {
                device: "دستگاه",
                browser: "مرورگر",
                viewport: "اندازه صفحه",
                language: "زبان صفحه",
                timezone: "منطقه زمانی",
                scheme: "طرح رنگ",
                motion: "کاهش حرکت",
                connection: "اتصال",
                dpr: "تراکم پیکسل",
                cores: "هسته CPU",
                memory: "حافظه",
                touch: "لمسی",
                online: "وضعیت",
                yes: "بله",
                no: "نه",
                onlineValue: "آنلاین",
                offlineValue: "آفلاین",
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
            heroTitleMain: "Send me",
            heroTitleSoft: "the broken thing",
            heroSubtitle: "WordPress, Laravel, WooCommerce, SEO, speed, DNS, mail, weird bugs, broken flows, half-built ideas — I map the mess and make it usable.",
            heroCtaGame: "Fix the broken site",
            heroCtaContact: "Send the broken thing",
            heroCtaCommand: "Open console",
            dashboardAria: "Command dashboard",
            dashTitle: "Broken-site intake online",
            terminal1: "> read the mess",
            terminal2: "> map the path",
            terminal3: "> repair cleanly",
            scanCta: "Read my setup",
            scanFriendly: "A quick read of the setup viewing this site.",
            operatorAlt: "Nima in the web command center",
            statusWp: "WordPress",
            statusLaravel: "Laravel",
            statusDns: "DNS/SSL",
            statusMailLabel: "Mail/forms",
            statusMail: "Mail/forms",
            chaosKicker: "Chaos Types",
            chaosTitle: "The kinds of mess I do not run away from.",
            projectsKicker: "Real Missions",
            projectsTitle: "A few places where the job was bigger than the surface",
            projectsSubtitle: "Structure, user flow, maintenance, speed, and real debugging mattered too.",
            gameKicker: "Repair Simulator",
            gameTitle: "Repair Simulator",
            bossName: "Repair progress",
            gameIntro: "Read the issue card and hit the right repair.",
            resetGame: "Reset game",
            scanVisitor: "Read my setup",
            diagnosisKicker: "Nima’s diagnosis",
            diagnosisLocked: "Diagnosis card is locked.",
            diagnosisHint: "Make a few clean repairs to unlock it.",
            diagnosisUnlocked: "The problem is rarely just one bug.",
            diagnosisText: "It is usually structure, flow, server, content, and maintenance fighting each other. I map first, then repair.",
            signalTitle: "Command Center Signal",
            audioPlay: "Play signal",
            audioPause: "Pause signal",
            audioMissing: "If no audio file exists, this player stays intentionally quiet and clean.",
            tagMade: "Made by Nima",
            tagPersonal: "Personal signal",
            contactKicker: "Final unlocked action",
            contactTitle: "Send me the broken thing.",
            contactText: "Tell me what is slow, broken, confusing, unfinished, or weird. You do not need to organize the mess first — that is my job.",
            emailContext: "Best for describing a project or problem",
            phoneContext: "Faster, more direct contact",
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
            commandScan: "Scan my setup",
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
                dpr: "Pixel ratio",
                cores: "CPU cores",
                memory: "Memory",
                touch: "Touch",
                online: "Status",
                yes: "Yes",
                no: "No",
                onlineValue: "Online",
                offlineValue: "Offline",
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
                type: "Laravel legal-tech platform",
                featured: true,
                mess: "پلتفرمی که جریان کاربر، زیرساخت و اعتماد در آن مهم بود.",
                move: "ورود، داشبورد، درخواست سرویس، آپلود، ایمیل، DNS/SSL، Cloudflare، نقشه سایت و سئوی فنی.",
                outcome: "Lighthouse 100×4",
                chips: ["Laravel", "Auth", "Dashboards", "Cloudflare", "SEO", "Lighthouse 100×4"]
            },
            {
                name: "Fannkala",
                url: "https://fannkala.com",
                type: "WordPress / WooCommerce store",
                mess: "فروشگاهی که ساختار، خرید و نگه‌داری‌اش باید روشن‌تر می‌شد.",
                move: "روی ساختار وردپرس و ووکامرس، مسیر خرید، محتوا، تجربه کاربر و بهبود سرعت کار کردم.",
                outcome: "فروشگاه خواناتر، مرتب‌تر و آماده‌تر برای نگه‌داری و رشد محتوا شد.",
                chips: ["WordPress", "WooCommerce", "Content", "Performance"]
            },
            {
                name: "Parstek",
                url: "https://parstek.ir",
                type: "Corporate WordPress site",
                mess: "سایت شرکتی که باید معرفی خدمات و مسیر محتوا را شفاف‌تر نشان می‌داد.",
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

        document.querySelectorAll("[data-i18n-alt]").forEach(function (element) {
            element.setAttribute("alt", t(element.dataset.i18nAlt));
        });

        document.querySelectorAll("[data-lang-option]").forEach(function (button) {
            button.classList.toggle("is-active", button.dataset.langOption === currentLanguage);
        });

        renderChaosCards();
        renderProjectCards();
        renderGame();
        renderCommandList();
        renderDiagnostics(diagnosticsOpen);
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
            var chips = project.chips.filter(function (chip) { return chip !== "Lighthouse 100×4"; }).map(function (chip) {
                return '<span class="chip">' + escapeHtml(chip) + '</span>';
            }).join("");
            var badge = project.featured ? '<div class="lighthouse-badge"><strong>Lighthouse 100×4</strong><span><i>100</i><i>100</i><i>100</i><i>100</i></span></div>' : '';

            return [
                '<article class="mission-card observe is-visible ' + (project.featured ? "featured" : "") + '">',
                '<span class="mission-type">' + escapeHtml(project.type) + '</span>',
                '<h3>' + escapeHtml(project.name) + '</h3>',
                '<p class="mission-mess">' + escapeHtml(project.mess) + '</p>',
                '<div class="mission-work"><strong>' + escapeHtml(currentLanguage === "fa" ? "کار من" : "My work") + '</strong><p>' + escapeHtml(project.move) + '</p></div>',
                '<div class="mission-proof">' + badge + '<span>' + escapeHtml(project.outcome) + '</span></div>',
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
            [labels.language, navigator.language || root.lang],
            [labels.timezone, Intl.DateTimeFormat().resolvedOptions().timeZone || labels.unknown],
            [labels.scheme, colorScheme.matches ? labels.dark : labels.light],
            [labels.motion, reducedMotion.matches ? labels.reduced : labels.noPreference],
            [labels.connection, connection && connection.effectiveType ? connection.effectiveType : labels.unknown],
            [labels.dpr, String(window.devicePixelRatio || 1)],
            [labels.cores, navigator.hardwareConcurrency ? String(navigator.hardwareConcurrency) : labels.unknown],
            [labels.memory, navigator.deviceMemory ? navigator.deviceMemory + " GB" : labels.unknown],
            [labels.touch, ("ontouchstart" in window || navigator.maxTouchPoints > 0) ? labels.yes : labels.no],
            [labels.online, navigator.onLine ? labels.onlineValue : labels.offlineValue]
        ];

        grid.innerHTML = items.map(function (item) {
            return '<div class="diagnostic-item"><small>' + escapeHtml(item[0]) + '</small><strong>' + escapeHtml(item[1]) + '</strong></div>';
        }).join("");

        if (showPanel) {
            diagnosticsOpen = true;
            grid.hidden = false;
        } else if (!diagnosticsOpen) {
            grid.hidden = true;
        }
    }

    function scanVisitor() {
        diagnosticsOpen = true;
        renderDiagnostics(true);
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
        var repaired = 100 - bossHp;
        if (hp) hp.style.width = repaired + "%";
        if (label) label.textContent = repaired + "%";
    }

    function repairIssue(answer) {
        var card = document.getElementById("game-card");
        var status = document.getElementById("game-status");
        var currentIssue = gameIssues[gameIndex];
        if (!currentIssue) return;

        if (answer === currentIssue.answer) {
            showRepairEffect(currentIssue.key);
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

    function showRepairEffect(key) {
        var stage = document.querySelector(".boss-stage");
        if (!stage || reducedMotion.matches) return;
        var label = document.createElement("span");
        label.className = "repair-float";
        label.textContent = key === "cache" ? "CACHE CLEARED" : key === "dns" ? "DNS FIXED" : "PATCHED";
        stage.appendChild(label);
        window.setTimeout(function () { label.remove(); }, 900);
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
        var current = document.getElementById("audio-current");
        var duration = document.getElementById("audio-duration");
        var thumb = document.getElementById("audio-thumb");
        var buttons = document.querySelectorAll("[data-audio-toggle]");
        if (!audio) return;

        var percent = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
        if (progress) progress.style.width = percent + "%";
        if (thumb) thumb.style.left = percent + "%";
        if (current) current.textContent = formatTime(audio.currentTime);
        if (duration) duration.textContent = formatTime(audio.duration);

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

    function seekAudio(event) {
        var audio = document.getElementById("command-audio");
        var track = event.currentTarget;
        if (!audioAvailable() || !audio || !audio.duration || !track) return;

        var rect = track.getBoundingClientRect();
        var ratio = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
        audio.currentTime = ratio * audio.duration;
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

        ["timeupdate", "play", "pause", "durationchange"].forEach(function (eventName) {
            audio.addEventListener(eventName, updateAudioUi);
        });

        document.querySelectorAll("[data-audio-seek]").forEach(function (track) {
            track.addEventListener("click", seekAudio);
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
        window.addEventListener("resize", function () { renderDiagnostics(diagnosticsOpen); });

        if (typeof reducedMotion.addEventListener === "function") {
            reducedMotion.addEventListener("change", function () { renderDiagnostics(diagnosticsOpen); });
            colorScheme.addEventListener("change", function () { renderDiagnostics(diagnosticsOpen); });
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
