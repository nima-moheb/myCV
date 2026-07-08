(function () {
    "use strict";

    document.documentElement.classList.add("js");

    /* Data */
    var root = document.documentElement;
    var storageKey = "nima-chaos-language";
    var CONTACT_CHANNELS = {
        email: "nima.mohebali.b@gmail.com",
        phone: "+989227241378",
        phoneDisplay: "09227241378",
        whatsapp: "+989227241378",
        telegram: "",
        bale: ""
    };
    var email = CONTACT_CHANNELS.email;
    var phone = CONTACT_CHANNELS.phoneDisplay;
    var currentLanguage = localStorage.getItem(storageKey) === "en" ? "en" : "fa";
    var lastFocusedElement = null;
    var debugMode = false;
    var diagnosticsOpen = false;
    var game = null;
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
            diagnosticsTitle: "اسکن محیط",
            scanFriendly: "نمای سریع محیطی که سایت را با آن می‌بینی.",
            scanHelper: "محیطی که این صفحه را با آن می‌بینی",
            scratchTitle: "از صفر هم می‌سازم",
            scratchBody: "اگر چیزی هنوز فقط ایده است، می‌توانم از صفر برایش ساختار، مسیر کاربر، ظاهر، منطق و نسخه قابل استفاده بسازم.",
            scratchItem1: "لندینگ و سایت شرکتی",
            scratchItem2: "فروشگاه وردپرسی / ووکامرس",
            scratchItem3: "وب‌اپ و پنل لاراول",
            scratchItem4: "ساختار، محتوا و جریان کار",
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
            gameKicker: "پاکسازی آشوب سایت",
            gameTitle: "آشوب‌ها را از هسته سایت پاک کن",
            healthLabel: "سلامت سایت",
            repairedLabel: "پاک شده",
            comboLabel: "کمبو",
            selectedToolLabel: "کمبو",
            startGame: "شروع پاکسازی",
            pauseGame: "مکث",
            gameIntro: "روی گلیچ‌ها بزن، اتاق را روشن کن و سایت را به حالت پایدار برگردان.",
            resetGame: "شروع دوباره",
            scanVisitor: "سیستم منو بخون",
            diagnosisKicker: "تشخیص نیما",
            diagnosisLocked: "تشخیص هنوز قفل است.",
            diagnosisHint: "آشوب‌ها را پاک کن تا نقشه مشکل روشن شود.",
            diagnosisUnlocked: "نقشه مشکل روشن شد",
            diagnosisText: "مشکل سایت معمولاً فقط یک باگ نیست؛ چند لایه با هم قاطی کرده‌اند: مسیر کاربر، تنظیمات، سرور، محتوا و نگه‌داری.",
            signalTitle: "سیگنال اتاق فرمان",
            audioPlay: "پخش سیگنال",
            audioPause: "توقف سیگنال",
            audioMissing: "اگر فایل صوتی موجود نباشد، پلیر عمداً خاموش و مرتب می‌ماند.",
            tagMade: "ساخته‌ی نیما",
            tagPersonal: "سیگنال شخصی",
            contactKicker: "خط ارتباط",
            contactTitle: "از هر مسیری راحتی، پیام بده.",
            contactText: "پروژه، باگ، ایده نصفه، سایت کند یا چیزی که هنوز دقیق نمی‌دانی مشکلش چیست؛ همان‌طور که هست بفرست.",
            contactRouterLabel: "SIGNAL ROUTER",
            contactUtilityTitle: "ابزار سریع",
            whatsappTitle: "واتساپ",
            whatsappHelper: "برای پیام سریع، عکس و توضیح کوتاه",
            whatsappAction: "باز کردن واتساپ",
            telegramTitle: "تلگرام",
            telegramHelper: "برای پیام، فایل و ادامه گفتگو",
            telegramAction: "باز کردن تلگرام",
            baleTitle: "بله",
            baleHelper: "یک مسیر داخلی و مستقیم",
            baleAction: "باز کردن بله",
            emailTitle: "ایمیل",
            emailContext: "برای شرح کامل پروژه و جزئیات",
            emailAction: "نوشتن ایمیل",
            phoneTitle: "تماس",
            phoneContext: "وقتی صحبت مستقیم بهتر جواب می‌دهد",
            phoneAction: "تماس با نیما",
            copyEmail: "کپی ایمیل",
            copyPhone: "کپی شماره",
            copiedEmail: "ایمیل کپی شد",
            copiedPhone: "شماره کپی شد",
            copyFailed: "کپی خودکار انجام نشد؛ متن را دستی بردار.",
            phoneAria: "تماس با 09227241378",
            whatsappMessage: "سلام نیما، درباره یک سایت / پروژه می‌خواستم صحبت کنم.",
            footerText: "نیما — Web Chaos Command Center",
            backTop: "بازگشت به بالا",
            paletteTitle: "فرمان‌ها",
            paletteHint: "/ برای باز کردن، Escape برای بستن.",
            closeAria: "بستن",
            commandProjects: "دیدن ماموریت‌ها",
            commandChaos: "دیدن دردسرها",
            commandBoss: "ورود به اتاق فرمان سه‌بعدی",
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
            gameWin: "اتاق فرمان روشن شد. حالا مشکل واقعی سایتت رو بفرست.",
            gameGood: "پاک شد. پایداری بیشتر شد.",
            gameLose: "اتاق فرمان روشن شد. حالا مشکل واقعی سایتت رو بفرست.",
            gameWrong: "پاک شد. پایداری بیشتر شد.",
            mistakesLabel: "کمبو",
            powerLabel: "پایداری",
            stabilityLabel: "پایداری",
            cleanedLabel: "پاک شده",
            gameStatusIdle: "برای شروع، روی گلیچ‌های اطراف هسته بزن.",
            gameStatusClean: "پاک شد. پایداری بیشتر شد.",
            gameStatusCombo: "کمبو گرفت. اتاق دارد روشن می‌شود.",
            chooseRepair: "برای شروع، روی گلیچ‌های اطراف هسته بزن.",
            gameHit: "کمبو گرفت. اتاق دارد روشن می‌شود.",
            gameBad: "پاک شد. پایداری بیشتر شد.",
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
            diagnosticsTitle: "Environment scan",
            scanFriendly: "A quick read of the setup viewing this site.",
            scanHelper: "The environment viewing this page",
            scratchTitle: "I also build from scratch",
            scratchBody: "If the thing is still only an idea, I can turn it into a usable structure: interface, user flow, logic, content, and a real working version.",
            scratchItem1: "Landing pages & company sites",
            scratchItem2: "WordPress / WooCommerce builds",
            scratchItem3: "Laravel web apps & dashboards",
            scratchItem4: "Structure, content, and flow",
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
            gameKicker: "Chaos Cleaner",
            gameTitle: "Clean the chaos around the site core",
            healthLabel: "Site health",
            repairedLabel: "Cleaned",
            comboLabel: "Combo",
            selectedToolLabel: "Combo",
            startGame: "Start cleaning",
            pauseGame: "Pause",
            gameIntro: "Tap the glitches, power up the room, and bring the site back to stable.",
            resetGame: "Restart",
            scanVisitor: "Read my setup",
            diagnosisKicker: "Nima’s diagnosis",
            diagnosisLocked: "Diagnosis is still locked.",
            diagnosisHint: "Clean the chaos to light the problem map.",
            diagnosisUnlocked: "The problem map is lit",
            diagnosisText: "A broken site is rarely one bug. It is usually layers fighting each other: user flow, settings, server, content, and maintenance.",
            signalTitle: "Command Center Signal",
            audioPlay: "Play signal",
            audioPause: "Pause signal",
            audioMissing: "If no audio file exists, this player stays intentionally quiet and clean.",
            tagMade: "Made by Nima",
            tagPersonal: "Personal signal",
            contactKicker: "Contact line",
            contactTitle: "Use whichever channel feels easiest.",
            contactText: "Project, bug, half-formed idea, slow site, or something you cannot quite diagnose yet — send it as it is.",
            contactRouterLabel: "SIGNAL ROUTER",
            contactUtilityTitle: "Quick tools",
            whatsappTitle: "WhatsApp",
            whatsappHelper: "Quick messages, screenshots, and short context",
            whatsappAction: "Open WhatsApp",
            telegramTitle: "Telegram",
            telegramHelper: "Messages, files, and longer back-and-forth",
            telegramAction: "Open Telegram",
            baleTitle: "Bale",
            baleHelper: "A direct local messaging route",
            baleAction: "Open Bale",
            emailTitle: "Email",
            emailContext: "Best for full project context and details",
            emailAction: "Write an email",
            phoneTitle: "Call",
            phoneContext: "When a direct conversation works better",
            phoneAction: "Call Nima",
            copyEmail: "Copy email",
            copyPhone: "Copy phone",
            copiedEmail: "Email copied",
            copiedPhone: "Phone copied",
            copyFailed: "Automatic copy failed; copy it manually.",
            phoneAria: "Call 09227241378",
            whatsappMessage: "Hi Nima, I wanted to talk about a site or project.",
            footerText: "Nima — Web Chaos Command Center",
            backTop: "Back to top",
            paletteTitle: "Command launcher",
            paletteHint: "/ opens. Escape closes.",
            closeAria: "Close",
            commandProjects: "Open Projects",
            commandChaos: "Show Chaos Types",
            commandBoss: "Enter 3D Debug Lab",
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
            gameWin: "The command room is online. Now send me the real broken thing.",
            gameGood: "Cleaned. Stability increased.",
            gameLose: "The command room is online. Now send me the real broken thing.",
            gameWrong: "Cleaned. Stability increased.",
            mistakesLabel: "Combo",
            powerLabel: "Stability",
            stabilityLabel: "Stability",
            cleanedLabel: "Cleaned",
            gameStatusIdle: "Tap the glitches around the core to begin.",
            gameStatusClean: "Cleaned. Stability increased.",
            gameStatusCombo: "Combo hit. The room is powering up.",
            chooseRepair: "Tap the glitches around the core to begin.",
            gameHit: "Combo hit. The room is powering up.",
            gameBad: "Cleaned. Stability increased.",
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
                outcome: "",
                proof: "Lighthouse 100×4",
                chips: ["Laravel", "Auth", "Dashboards", "Cloudflare", "SEO", "Lighthouse 100×4"]
            },
            {
                name: "Fannkala",
                url: "https://fannkala.com",
                type: "WordPress / WooCommerce store",
                mess: "فروشگاهی که ساختار، خرید و نگه‌داری‌اش باید روشن‌تر می‌شد.",
                move: "روی ساختار وردپرس و ووکامرس، مسیر خرید، محتوا، تجربه کاربر و بهبود سرعت کار کردم.",
                outcome: "فروشگاه خواناتر، مرتب‌تر و آماده‌تر برای نگه‌داری و رشد محتوا شد.",
                proof: "ساختار فروشگاه، مسیر خرید و بهبود سرعت",
                chips: ["WordPress", "WooCommerce", "Content", "Performance"]
            },
            {
                name: "Parstek",
                url: "https://parstek.ir",
                type: "Corporate WordPress site",
                mess: "سایت شرکتی که باید معرفی خدمات و مسیر محتوا را شفاف‌تر نشان می‌داد.",
                move: "روی ارائه خدمات، مسیرهای محتوا، پولیش رابط کاربری، سفارشی‌سازی قالب و تمیزکاری تجربه کاربر کار کردم.",
                outcome: "مسیر مطالعه و معرفی برند منظم‌تر و حرفه‌ای‌تر شد.",
                proof: "ارائه خدمات، مسیر محتوا و پولیش تجربه کاربر",
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
                outcome: "",
                proof: "Lighthouse 100×4",
                chips: ["Laravel", "Auth", "Dashboards", "Cloudflare", "SEO", "Lighthouse 100×4"]
            },
            {
                name: "Fannkala",
                url: "https://fannkala.com",
                type: "WordPress / WooCommerce mission",
                mess: "The store needed clearer structure, a smoother buying experience, and easier maintenance.",
                move: "I worked on WordPress/WooCommerce structure, buying paths, content, UX cleanup, and speed/performance cleanup.",
                outcome: "The store became clearer, cleaner, and easier to maintain and grow with content.",
                proof: "Store structure, buying path, and speed cleanup",
                chips: ["WordPress", "WooCommerce", "Content", "Performance"]
            },
            {
                name: "Parstek",
                url: "https://parstek.ir",
                type: "Corporate WordPress mission",
                mess: "The corporate site needed clearer service presentation, content paths, and professional polish.",
                move: "I worked on service presentation, content paths, UI polish, theme customization, and UX cleanup.",
                outcome: "The brand presentation and browsing path became more organized and credible.",
                proof: "Service presentation, content path, and UX polish",
                chips: ["Corporate", "WordPress", "UI polish", "UX cleanup"]
            }
        ]
    };

    var repairLabels = {
        DNS: { fa: "DNS", en: "DNS" }, SSL: { fa: "SSL", en: "SSL" }, Cache: { fa: "کش", en: "Cache" },
        Plugin: { fa: "افزونه", en: "Plugin" }, Speed: { fa: "سرعت", en: "Speed" }, Flow: { fa: "جریان", en: "Flow" }, SEO: { fa: "سئو", en: "SEO" }, Mail: { fa: "ایمیل", en: "Mail" }
    };

    var rescueTools = Object.keys(repairLabels).map(function (key) { return { type: key, key: key.toLowerCase(), fa: repairLabels[key].fa, en: repairLabels[key].en, fixed: key + " ONLINE" }; });

    var debugConsoles = [
        { key: "DNS", label: "DNS", faTitle: "DNS", enTitle: "DNS", faClue: "دامنه درست مسیر نمی‌گیرد یا گاهی بالا نمی‌آید.", enClue: "The domain does not route correctly or only loads sometimes.", correct: "DNS", choices: ["DNS", "Cache", "Plugin"] },
        { key: "SSL", label: "SSL", faTitle: "SSL", enTitle: "SSL", faClue: "مرورگر اعتماد نمی‌کند و هشدار امنیتی نشان می‌دهد.", enClue: "The browser does not trust the site and shows a security warning.", correct: "SSL", choices: ["SSL", "SEO", "Mail"] },
        { key: "Cache", label: "CACHE", faTitle: "کش", enTitle: "Cache", faClue: "تغییر انجام شده اما کاربر هنوز نسخه قدیمی را می‌بیند.", enClue: "The change is live, but users still see the old version.", correct: "Cache", choices: ["Cache", "DNS", "Flow"] },
        { key: "Plugin", label: "PLUGIN", faTitle: "افزونه", enTitle: "Plugin", faClue: "بعد از آپدیت، بخشی از سایت ناگهان از کار افتاده.", enClue: "After an update, part of the site suddenly stopped working.", correct: "Plugin", choices: ["Plugin", "Speed", "SSL"] },
        { key: "Speed", label: "SPEED", faTitle: "سرعت", enTitle: "Speed", faClue: "صفحه سنگین است و دیر جان می‌گیرد.", enClue: "The page is heavy and takes too long to wake up.", correct: "Speed", choices: ["Speed", "Mail", "SEO"] },
        { key: "Flow", label: "FLOW", faTitle: "جریان", enTitle: "Flow", faClue: "کاربر در فرم، خرید یا درخواست سرویس گیر می‌کند.", enClue: "Users get stuck in a form, checkout, or service request.", correct: "Flow", choices: ["Flow", "Cache", "DNS"] },
        { key: "SEO", label: "SEO", faTitle: "سئو", enTitle: "SEO", faClue: "مسیر محتوا و متاها برای آدم و گوگل واضح نیست.", enClue: "Content paths and metadata are unclear for people and Google.", correct: "SEO", choices: ["SEO", "SSL", "Plugin"] },
        { key: "Mail", label: "MAIL", faTitle: "ایمیل", enTitle: "Mail", faClue: "فرم می‌گوید ارسال شد اما ایمیلی نمی‌رسد.", enClue: "The form says sent, but no email arrives.", correct: "Mail", choices: ["Mail", "Speed", "Cache"] }
    ];

    var rescueConfig = { targetRepairs: 8, maxProblems: 0 };

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
        if (game) { renderDebugLab(); updateGameHud(); if (game.won) unlockDiagnosis(); else lockDiagnosis(); }
        renderCommandList();
        renderDiagnostics(diagnosticsOpen);
        renderContactChannels();
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
            var badge = project.featured ? '<div class="mission-proof"><div class="lighthouse-badge"><strong>Lighthouse 100×4</strong><span><i>100</i><i>100</i><i>100</i><i>100</i></span></div></div>' : '<div class="mission-proof"><strong>' + escapeHtml(project.proof) + '</strong></div>';

            return [
                '<article class="mission-card observe is-visible ' + (project.featured ? "featured" : "") + '">',
                '<span class="mission-type">' + escapeHtml(project.type) + '</span>',
                '<h3>' + escapeHtml(project.name) + '</h3>',
                '<p class="mission-mess">' + escapeHtml(project.mess) + '</p>',
                '<div class="mission-work"><strong>' + escapeHtml(currentLanguage === "fa" ? "کار من" : "My work") + '</strong><p>' + escapeHtml(project.move) + '</p></div>',
                badge,
                '<div class="chips">' + chips + '</div>',
                '<a class="live-link" target="_blank" rel="noopener" href="' + escapeHtml(project.url) + '">' + (currentLanguage === "fa" ? "مشاهده سایت زنده" : "Open live site") + '</a>',
                '</article>'
            ].join("");
        }).join("");
    }

    function renderMissionRow(label, text) {
        return '<div class="mission-row"><strong>' + escapeHtml(label) + '</strong><p>' + escapeHtml(text) + '</p></div>';
    }


    function normalizePhone(value) {
        return String(value || "").replace(/[^0-9]/g, "");
    }

    function channelIcon(name) {
        var paths = {
            whatsapp: '<path d="M7.6 18.4 8.4 15A7 7 0 1 1 11 17.6z"/><path d="M10.2 8.8c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.2.1.4 0 .6l-.4.5c.6 1 1.4 1.8 2.5 2.3l.6-.7c.2-.2.4-.2.7-.1l1.4.7c.3.1.4.3.4.6-.1.8-.8 1.5-1.6 1.5-2.9-.1-6.3-3-6.9-6.1-.1-.3.5-.7 1-.7z"/>',
            telegram: '<path d="M20 5 4.4 11.2c-.8.3-.8 1.4.1 1.6l3.9 1.1 1.5 4.6c.3.8 1.3 1 1.8.3l2.2-2.8 4 3c.7.5 1.7.1 1.9-.8L22 6.3c.2-.9-.9-1.6-2-.9z"/><path d="m8.6 13.8 8.6-5.2-6.8 7.2-.2 2.2"/>',
            bale: '<path d="M6 5.5h8.6a4.1 4.1 0 0 1 0 8.2H11l-3.8 4.1v-4.1H6z"/><path d="M11 9.6h4.8"/><path d="M11 12.2h3.2"/>',
            email: '<rect x="4" y="6" width="16" height="12" rx="3"/><path d="m5.2 8 6.8 5 6.8-5"/>',
            phone: '<path d="M8.5 5.5 10.4 9c.3.5.2 1.1-.2 1.5l-.9.9a10.5 10.5 0 0 0 4.4 4.4l.9-.9c.4-.4 1-.5 1.5-.2l3.4 1.9c.6.3.8 1 .5 1.6-.8 1.5-2.4 2.2-4 1.8A15.2 15.2 0 0 1 4 8c-.4-1.6.3-3.2 1.8-4 .6-.3 1.3-.1 1.6.5z"/>'
        };
        return '<svg class="channel-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + paths[name] + '</svg>';
    }

    function renderChannelCard(channel) {
        var isExternal = channel.href.indexOf("http") === 0;
        var attrs = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';
        return ['<a class="switchboard-channel channel-' + channel.name + '" data-channel="' + channel.name + '" href="' + escapeHtml(channel.href) + '"' + attrs + '>',
            '<span class="channel-orb">' + channelIcon(channel.name) + '</span>',
            '<span class="channel-copy"><strong>' + escapeHtml(t(channel.title)) + '</strong><small>' + escapeHtml(t(channel.helper)) + '</small><em>' + escapeHtml(t(channel.action)) + '</em></span>',
            '<span class="signal-dots" aria-hidden="true"><i></i><i></i><i></i></span>',
            '</a>'].join("");
    }

    function renderContactChannels() {
        var grid = document.getElementById("contact-channel-grid");
        if (!grid) return;
        var whatsappNumber = normalizePhone(CONTACT_CHANNELS.whatsapp || CONTACT_CHANNELS.phone);
        var channels = [
            { name: "whatsapp", title: "whatsappTitle", helper: "whatsappHelper", action: "whatsappAction", href: "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(t("whatsappMessage")) },
            { name: "telegram", title: "telegramTitle", helper: "telegramHelper", action: "telegramAction", href: CONTACT_CHANNELS.telegram },
            { name: "bale", title: "baleTitle", helper: "baleHelper", action: "baleAction", href: CONTACT_CHANNELS.bale },
            { name: "email", title: "emailTitle", helper: "emailContext", action: "emailAction", href: "mailto:" + CONTACT_CHANNELS.email },
            { name: "phone", title: "phoneTitle", helper: "phoneContext", action: "phoneAction", href: "tel:" + CONTACT_CHANNELS.phone }
        ];
        grid.innerHTML = channels.filter(function (channel) { return !!channel.href && channel.href !== "#"; }).map(renderChannelCard).join("");
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

        grid.hidden = !showPanel;
    }

    function openDiagnosticsPanel() {
        var dialog = document.getElementById("diagnostics-dialog");
        if (!dialog) return;

        diagnosticsOpen = true;
        renderDiagnostics(true);
        dialog.hidden = false;
        document.body.style.overflow = "hidden";

        var closeButton = dialog.querySelector("[data-close-diagnostics]");
        if (closeButton) closeButton.focus();
    }

    function closeDiagnosticsPanel() {
        var dialog = document.getElementById("diagnostics-dialog");
        diagnosticsOpen = false;
        renderDiagnostics(false);
        if (dialog) dialog.hidden = true;
        if (document.getElementById("command-dialog").hidden) document.body.style.overflow = "";
    }

    function scanVisitor() {
        openDiagnosticsPanel();
    }

    /* Chaos Cleaner */
    var glitchTypes = [
        { key: "DNS", label: "DNS", accent: "#76ffd8" },
        { key: "SSL", label: "SSL", accent: "#ffd36e" },
        { key: "Cache", label: "Cache", accent: "#8c7bff" },
        { key: "Plugin", label: "Plugin", accent: "#ff6fb5" },
        { key: "Speed", label: "Speed", accent: "#76ffd8" },
        { key: "Flow", label: "Flow", accent: "#ffd36e" },
        { key: "SEO", label: "SEO", accent: "#8c7bff" },
        { key: "Mail", label: "Mail", accent: "#ff6fb5" }
    ];
    var desktopGlitchSlots = [[18,18],[34,16],[50,14],[66,16],[82,18],[14,34],[30,32],[70,32],[86,34],[12,50],[88,50],[14,66],[30,68],[70,68],[86,66],[18,82],[38,84],[62,84],[82,82]];
    var mobileGlitchSlots = [[20,17],[50,14],[80,17],[15,34],[85,34],[12,52],[88,52],[18,70],[82,70],[32,84],[68,84]];
    var rescueConfig = { targetStability: 100, maxGlitches: 6, mobileMaxGlitches: 5, cleanStep: 14 };

    function initRescueGame() {
        var stage = document.getElementById("debug-lab-stage");
        if (!stage) return;
        game = { stage: stage, running: false, gameWon: false, won: false, stability: 0, cleanedCount: 0, combo: 0, activeGlitches: [], lastCleanTime: 0, nextId: 1 };
        setStatus(t("gameStatusIdle"));
        renderDebugLab();
        updateGameHud();
        lockDiagnosis();
    }

    function startGame() { if (!game) initRescueGame(); if (!game) return; resetGame(true); }

    function resetGame(autostart) {
        if (!game) initRescueGame();
        if (!game) return;
        game.running = !!autostart; game.gameWon = false; game.won = false; game.stability = 0; game.cleanedCount = 0; game.combo = 0; game.activeGlitches = []; game.lastCleanTime = 0; game.nextId = 1;
        if (game.running) spawnGlitches(5);
        lockDiagnosis(); setStatus(t("gameStatusIdle")); renderDebugLab(); updateGameHud();
    }

    function togglePause() { startGame(); }
    function selectTool() {}
    function renderToolbelt() {}

    function getStageMetrics() {
        var rect = game && game.stage ? game.stage.getBoundingClientRect() : { width: 720, height: 380 };
        return { width: Math.max(rect.width || 720, 280), height: Math.max(rect.height || 380, 260), mobile: (rect.width || window.innerWidth) < 560 };
    }

    function getGlitchSlots() {
        return getStageMetrics().mobile ? mobileGlitchSlots : desktopGlitchSlots;
    }

    function glitchRadius(size, metrics) {
        var scale = metrics.mobile ? 0.76 : (metrics.width < 920 ? 0.88 : 1);
        return Math.max(48, size * scale) / 2;
    }

    function coreClearance(candidate, metrics) {
        var cx = metrics.width / 2, cy = metrics.height / 2;
        var coreRadius = metrics.mobile ? 58 : 76;
        var dx = candidate.px - cx, dy = candidate.py - cy;
        return Math.sqrt(dx * dx + dy * dy) >= candidate.radius + coreRadius + 18;
    }

    function candidateFits(candidate, metrics) {
        var gap = metrics.mobile ? 12 : 16;
        if (candidate.px - candidate.radius < 8 || candidate.px + candidate.radius > metrics.width - 8 || candidate.py - candidate.radius < 8 || candidate.py + candidate.radius > metrics.height - 8) return false;
        if (!coreClearance(candidate, metrics)) return false;
        return game.activeGlitches.every(function (item) {
            if (item.slot === candidate.slot) return false;
            var dx = item.px - candidate.px, dy = item.py - candidate.py;
            return Math.sqrt(dx * dx + dy * dy) >= item.radius + candidate.radius + gap;
        });
    }

    function createGlitchCandidate(type, size, metrics) {
        var slots = getGlitchSlots().map(function (slot, index) { return { slot: slot, index: index }; }).filter(function (entry) {
            return !game.activeGlitches.some(function (item) { return item.slot === entry.index; });
        });
        for (var i = slots.length - 1; i > 0; i -= 1) {
            var j = (game.nextId + i * 7) % (i + 1), tmp = slots[i]; slots[i] = slots[j]; slots[j] = tmp;
        }
        for (var attempt = 0; attempt < slots.length; attempt += 1) {
            var entry = slots[attempt], radius = glitchRadius(size, metrics), maxJitter = Math.max(0, Math.min(10, Math.min(metrics.width, metrics.height) * 0.018));
            var jitterSeed = game.nextId + attempt * 11;
            var x = entry.slot[0] + (((jitterSeed % 5) - 2) * maxJitter / metrics.width * 100);
            var y = entry.slot[1] + ((((jitterSeed * 3) % 5) - 2) * maxJitter / metrics.height * 100);
            var candidate = { slot: entry.index, x: Math.max(6, Math.min(94, x)), y: Math.max(6, Math.min(94, y)), px: metrics.width * x / 100, py: metrics.height * y / 100, radius: radius };
            if (candidateFits(candidate, metrics)) return candidate;
        }
        return null;
    }

    function spawnGlitches(count) {
        if (!game || game.gameWon) return;
        var metrics = getStageMetrics(), limit = metrics.mobile ? rescueConfig.mobileMaxGlitches : rescueConfig.maxGlitches;
        while (count > 0 && game.activeGlitches.length < limit) {
            var type = glitchTypes[(game.nextId + game.activeGlitches.length) % glitchTypes.length];
            var size = 56 + ((game.nextId % 3) * 10);
            var candidate = createGlitchCandidate(type, size, metrics);
            if (!candidate) break;
            game.activeGlitches.push({ id: String(game.nextId++), key: type.key, label: type.label, accent: type.accent, x: Number(candidate.x.toFixed(2)), y: Number(candidate.y.toFixed(2)), px: candidate.px, py: candidate.py, radius: candidate.radius, slot: candidate.slot, size: size, motion: game.nextId % 2 ? " drift-a" : " drift-b" });
            count -= 1;
        }
    }

    function reflowGlitches() {
        if (!game || !game.activeGlitches.length) return;
        var existing = game.activeGlitches.slice();
        game.activeGlitches = [];
        existing.forEach(function (item) {
            var candidate = createGlitchCandidate(item, item.size, getStageMetrics());
            if (candidate) game.activeGlitches.push(Object.assign(item, { x: Number(candidate.x.toFixed(2)), y: Number(candidate.y.toFixed(2)), px: candidate.px, py: candidate.py, radius: candidate.radius, slot: candidate.slot }));
        });
        renderDebugLab();
    }

    function renderDebugLab() {
        var glitches = document.getElementById("lab-consoles"), beams = document.getElementById("lab-beams"), card = document.getElementById("game-card");
        if (!game || !glitches || !beams) return;
        if (!game.running && !game.gameWon && game.activeGlitches.length === 0) spawnGlitches(5);
        if (card) card.classList.toggle("is-powered", game.gameWon);
        glitches.innerHTML = game.activeGlitches.map(function (item) {
            return '<button type="button" class="chaos-glitch' + item.motion + '" data-glitch="' + escapeHtml(item.id) + '" style="--x:' + item.x + '%;--y:' + item.y + '%;--size:' + item.size + 'px;--accent:' + escapeHtml(item.accent) + '" aria-label="Clean ' + escapeHtml(item.label) + ' glitch"><span></span><strong>' + escapeHtml(item.label) + '</strong></button>';
        }).join("");
        var lit = Math.ceil(game.stability / 13);
        beams.innerHTML = getGlitchSlots().slice(0, 8).map(function (_, index) { return '<span class="lab-beam beam-' + index + (index < lit ? ' is-lit' : '') + '"></span>'; }).join("");
    }

    function openConsole(key) { cleanGlitch(key); }

    function cleanGlitch(id) {
        if (!game || game.gameWon) return;
        if (!game.running) game.running = true;
        var index = game.activeGlitches.findIndex(function (item) { return item.id === id; });
        if (index < 0) return;
        var item = game.activeGlitches.splice(index, 1)[0];
        var now = Date.now();
        game.combo = now - game.lastCleanTime < 1200 ? game.combo + 1 : 1;
        game.lastCleanTime = now;
        game.cleanedCount += 1;
        game.stability = Math.min(rescueConfig.targetStability, game.stability + rescueConfig.cleanStep + Math.min(game.combo, 4));
        createRepairBurst(item);
        setStatus(game.combo > 1 ? t("gameStatusCombo") : t("gameStatusClean"));
        if (game.stability >= rescueConfig.targetStability) finishGame(true); else spawnGlitches(2);
        renderDebugLab(); updateGameHud();
    }

    function createRepairBurst(item) {
        if (!game || reducedMotion.matches) return;
        var burst = document.createElement("span");
        burst.className = "repair-burst";
        burst.style.setProperty("--x", item.x + "%");
        burst.style.setProperty("--y", item.y + "%");
        burst.style.setProperty("--accent", item.accent);
        game.stage.appendChild(burst);
        setTimeout(function () { burst.remove(); }, 700);
    }

    function chooseRepair(choice) { cleanGlitch(choice); }
    function finishGame(won) { game.gameWon = won; game.won = won; game.running = false; game.activeGlitches = []; game.stability = 100; setStatus(t("gameWin")); renderDebugLab(); updateGameHud(); unlockDiagnosis(); }
    function setStatus(text) { var status = document.getElementById("game-status"); if (status) status.textContent = text; }

    function updateGameHud() {
        var cleaned = document.getElementById("game-cleaned") || document.getElementById("game-repaired"), combo = document.getElementById("game-combo") || document.getElementById("game-mistakes"), power = document.getElementById("game-power"), legacy = document.getElementById("game-active-console");
        if (cleaned) cleaned.textContent = game ? String(game.cleanedCount) : "0";
        if (combo) combo.textContent = game ? String(game.combo) : "0";
        if (power) power.textContent = (game ? game.stability : 0) + "%";
        if (legacy) legacy.textContent = game ? String(game.combo) : "0";
    }

    function lockDiagnosis() {
        var diagnosis = document.getElementById("diagnosis-card");
        if (!diagnosis) return;
        diagnosis.classList.remove("unlocked");
        diagnosis.innerHTML = '<p class="section-kicker">' + escapeHtml(t("diagnosisKicker")) + '</p><h3 data-i18n="diagnosisLocked">' + escapeHtml(t("diagnosisLocked")) + '</h3><p data-i18n="diagnosisHint">' + escapeHtml(t("diagnosisHint")) + '</p>';
    }

    function unlockDiagnosis() {
        var diagnosis = document.getElementById("diagnosis-card");
        if (!diagnosis) return;
        diagnosis.classList.add("unlocked");
        diagnosis.innerHTML = ['<p class="section-kicker">' + escapeHtml(t("diagnosisKicker")) + '</p>', '<h3>' + escapeHtml(t("diagnosisUnlocked")) + '</h3>', '<p>' + escapeHtml(t("diagnosisText")) + '</p>', '<a class="btn primary-btn" href="#contact">' + escapeHtml(t("commandContact")) + '</a>'].join("");
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
        var startButton = event.target.closest("[data-start-game]");
        var pauseButton = event.target.closest("[data-pause-game]");
        var toolButton = event.target.closest("[data-tool]");
        var resetButton = event.target.closest("[data-reset-game]");
        var openCommandButton = event.target.closest("[data-open-command]");
        var closeCommandButton = event.target.closest("[data-close-command]");
        var closeDiagnosticsButton = event.target.closest("[data-close-diagnostics]");
        var scanButton = event.target.closest("[data-scan-visitor]");
        var copyButton = event.target.closest("[data-copy]");
        var audioButton = event.target.closest("[data-audio-toggle]");
        var languageButton = event.target.closest("[data-lang-option]");

        if (startButton) startGame();
        if (pauseButton) togglePause();
        if (toolButton) selectTool(toolButton.dataset.tool);
        var glitchButton = event.target.closest("[data-glitch]");
        if (glitchButton) cleanGlitch(glitchButton.dataset.glitch);
        if (resetButton) resetGame(true);
        if (openCommandButton) openCommandPalette();
        if (closeCommandButton) closeCommandPalette();
        if (closeDiagnosticsButton) closeDiagnosticsPanel();
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

        if (!isTyping && /^[1-8]$/.test(event.key)) {
            var tool = rescueTools[Number(event.key) - 1];
            if (tool) selectTool(tool.type);
        }

        if (!isTyping && event.code === "Space" && document.getElementById("boss") && document.getElementById("boss").contains(document.activeElement)) {
            event.preventDefault();
            togglePause();
        }

        if (event.key === "Escape") {
            closeCommandPalette();
            closeDiagnosticsPanel();
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
        var resizeTimer = null;
        window.addEventListener("resize", function () { renderDiagnostics(diagnosticsOpen); clearTimeout(resizeTimer); resizeTimer = setTimeout(reflowGlitches, 120); });
        document.addEventListener("visibilitychange", function () { return; });

        if (typeof reducedMotion.addEventListener === "function") {
            reducedMotion.addEventListener("change", function () { renderDiagnostics(diagnosticsOpen); });
            colorScheme.addEventListener("change", function () { renderDiagnostics(diagnosticsOpen); });
        }

        initAudio();
        initRescueGame();
        applyLanguage(currentLanguage);
        initObservers();
        initCursorGlow();
    }

    init();

    window.nimaApplyLanguage = applyLanguage;
    window.nimaCopyValue = copyValue;
})();
