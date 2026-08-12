(function () {
    "use strict";

    var root = document.documentElement;
    var mainPage = !document.body.classList.contains("agency-page");

    var PROJECTS = [
        {
            id: "applitent",
            name: "Applitent",
            url: "https://applitent.com",
            featured: true,
            agency: true,
            type: {
                fa: "Laravel / پلتفرم Legal-tech",
                en: "Laravel / Legal-tech platform"
            },
            challenge: {
                fa: "یک محصول واقعی با ثبت‌نام، داشبورد، درخواست سرویس، آپلود و ایمیل که باید هم قابل اعتماد می‌بود و هم برای توسعه بعدی تمیز می‌ماند.",
                en: "A real product with registration, dashboards, service requests, uploads, and mail that had to stay reliable in production and clean enough to keep evolving."
            },
            work: {
                fa: "معماری و توسعه Laravel، احراز هویت، داشبوردها، جریان درخواست سرویس، سخت‌سازی آپلود، مرکز حقوقی، ایمیل، DNS و SSL، Cloudflare، استقرار و سئوی فنی.",
                en: "Laravel architecture and development, authentication, dashboards, service-request flows, upload hardening, legal hub, mail, DNS and SSL, Cloudflare, deployment, and technical SEO."
            },
            result: {
                fa: "یک محصول عملیاتی و قابل نگه‌داری که از لایه اپلیکیشن تا زیرساخت تحت کنترل یک معماری واحد است.",
                en: "A maintainable production product with the application and infrastructure layers treated as one system."
            },
            proof: "Lighthouse 100×4",
            chips: ["Laravel", "Auth", "Dashboards", "Cloudflare", "Deployment", "Technical SEO"]
        },
        {
            id: "fannkala",
            name: "Fannkala",
            url: "https://fannkala.com",
            agency: true,
            type: {
                fa: "WooCommerce / سیستم فروش اختصاصی",
                en: "WooCommerce / Custom commerce system"
            },
            challenge: {
                fa: "فروشگاهی که فقط ویترین نبود؛ مسیر خرید، ورود کاربر و چند جریان تجاری اختصاصی باید بدون شلوغ‌کردن وردپرس کنار هم کار می‌کردند.",
                en: "A store that needed more than a storefront: checkout, authentication, and custom business flows had to work together without turning WordPress into plugin soup."
            },
            work: {
                fa: "توسعه اختصاصی WordPress و WooCommerce، افزونه‌های سفارشی برای ورود و منطق کسب‌وکار، بهینه‌سازی تجربه خرید، محتوا، عملکرد و نگه‌داری فنی.",
                en: "Custom WordPress and WooCommerce development, bespoke plugins for authentication and business logic, checkout UX, content, performance, and operational maintenance."
            },
            result: {
                fa: "فروشگاهی قابل توسعه با وابستگی کمتر به افزونه‌های عمومی و کنترل بیشتر روی منطق اصلی کسب‌وکار.",
                en: "A commerce stack with less generic-plugin dependency and more direct control over the business logic that matters."
            },
            proof: {
                fa: "منطق فروش و ورود اختصاصی",
                en: "Custom commerce + auth flows"
            },
            chips: ["WordPress", "WooCommerce", "Custom Plugins", "OTP", "Business Logic", "Performance"]
        },
        {
            id: "parstek",
            name: "Parstek",
            url: "https://parstek.ir",
            agency: false,
            type: {
                fa: "WordPress / سایت شرکتی",
                en: "WordPress / Corporate website"
            },
            challenge: {
                fa: "سایت شرکتی باید محصولات، خدمات و محتوای تخصصی را حرفه‌ای‌تر نشان می‌داد و در عین حال برای تیم داخلی ساده بماند.",
                en: "The corporate site needed to present products, services, and technical content more clearly while remaining straightforward for the internal team to operate."
            },
            work: {
                fa: "ساختار صفحات، اجزای اختصاصی رابط، اسلایدر و شورت‌کدهای سفارشی، سفارشی‌سازی قالب، تجربه کاربری، سئو و جزئیات فنی اجرا.",
                en: "Page architecture, custom interface components, slider and shortcode work, theme customization, UX, SEO, and production polish."
            },
            result: {
                fa: "معرفی برند منظم‌تر شد و بخش‌های مهم سایت به‌جای اتکا به راه‌حل‌های پراکنده، ساختار مشخص‌تری گرفتند.",
                en: "A cleaner brand presentation and a more deliberate structure instead of scattered one-off page solutions."
            },
            proof: {
                fa: "اجزای اختصاصی + ساختار محتوایی",
                en: "Custom components + content architecture"
            },
            chips: ["WordPress", "Corporate", "Custom UI", "Shortcodes", "SEO"]
        },
        {
            id: "shaliia",
            name: "Shaliia",
            url: "https://shaliia.ir",
            agency: false,
            type: {
                fa: "WooCommerce / بازسازی فروشگاه و برند",
                en: "WooCommerce / Storefront rebuild"
            },
            challenge: {
                fa: "یک فروشگاه برنج با محتوای قدیمی و بدهی فنی زیاد باید بدون حمل‌کردن همان آشفتگی قبلی، از نو قابل نگه‌داری می‌شد.",
                en: "A rice store with legacy content and technical debt needed a clean rebuild without dragging the old implementation forward."
            },
            work: {
                fa: "بازسازی روی WordPress و WooCommerce با قالب و لایه کسب‌وکار اختصاصی، حداقل افزونه‌های ثالث، پاک‌سازی و مهاجرت محتوا، معماری محصولات و طراحی تجربه فروشگاه.",
                en: "A WordPress/WooCommerce rebuild with a custom theme and business layer, minimal third-party plugins, audited content migration, product architecture, and storefront UX."
            },
            result: {
                fa: "یک پایه تمیزتر برای فروش، محتوا و توسعه‌های بعدی؛ با جداسازی آگاهانه کد قابل نگه‌داری از میراث قدیمی سایت.",
                en: "A cleaner base for commerce, content, and future development, with maintainable application code deliberately separated from legacy baggage."
            },
            proof: {
                fa: "بازسازی تمیز + حداقل افزونه",
                en: "Clean rebuild + minimal plugin surface"
            },
            chips: ["WordPress", "WooCommerce", "Custom Theme", "Custom Core", "Content Migration", "SEO"]
        },
        {
            id: "fanaz",
            name: "Fan Azarakhsh",
            url: "https://fanaz.ir",
            agency: true,
            type: {
                fa: "WordPress / سایت شرکتی چندحوزه‌ای",
                en: "WordPress / Multi-division corporate site"
            },
            challenge: {
                fa: "یک شرکت باسابقه با دو حوزه متفاوتِ شنوایی و انرژی به سایتی نیاز داشت که هر دو کسب‌وکار را منظم ارائه کند و بخش‌های اختصاصی زیادی داشته باشد.",
                en: "A long-established company spanning hearing and energy needed one coherent site with substantial custom presentation for two very different business divisions."
            },
            work: {
                fa: "توسعه هسته اختصاصی سایت با CPT، تنظیمات مدیریتی، شورت‌کدها و کامپوننت‌های مخصوص؛ همراه با ساختار صفحات، رابط، محتوا و حداقل‌کردن وابستگی به افزونه‌های عمومی.",
                en: "A bespoke site core with custom post types, admin settings, shortcodes, and site-specific components, plus page architecture, UI, content, and reduced reliance on generic plugins."
            },
            result: {
                fa: "قابلیت‌های اصلی سایت به‌جای مجموعه‌ای از افزونه‌های پراکنده، در یک لایه اختصاصی و قابل کنترل متمرکز شدند.",
                en: "Core site capabilities live in a controlled custom layer instead of a collection of disconnected plugins."
            },
            proof: {
                fa: "هسته اختصاصی WordPress",
                en: "Bespoke WordPress core"
            },
            chips: ["WordPress", "Custom Plugin", "CPT", "Admin UI", "Shortcodes", "Corporate"]
        },
        {
            id: "ofoghnikan",
            name: "Ofogh Nikan",
            url: "https://www.ofoghnikan.com",
            agency: true,
            type: {
                fa: "WordPress / خدمات حقوقی و نوآوری",
                en: "WordPress / Innovation-services platform"
            },
            challenge: {
                fa: "سایتی با حجم بالای خدمات، محتوا و مسیرهای ورودی کاربر باید بازطراحی و فنی‌سازی می‌شد، بدون اینکه ارزش سئوی سال‌های قبل از بین برود.",
                en: "A service-heavy site with years of content and many user-entry paths needed a technical rebuild without throwing away its accumulated search value."
            },
            work: {
                fa: "قالب و قابلیت‌های اختصاصی WordPress، بازطراحی ساختار خدمات و صفحات، فرم‌ها و مسیرهای تبدیل، پاک‌سازی فنی، مهاجرت سرور، سئو و بهینه‌سازی نگه‌داری.",
                en: "Custom WordPress theme and site functionality, service and page architecture, conversion forms, technical cleanup, server migration, SEO, and maintainability work."
            },
            result: {
                fa: "یک سایت خدماتی بزرگ‌تر و منظم‌تر که ساختار محتوا، تبدیل و زیرساخت آن برای ادامه کار قابل کنترل‌تر شده است.",
                en: "A more controlled service platform with clearer content architecture, conversion paths, and infrastructure for ongoing work."
            },
            proof: {
                fa: "قالب اختصاصی + بازسازی سئو",
                en: "Custom theme + SEO rebuild"
            },
            chips: ["WordPress", "Custom Theme", "Custom Functionality", "SEO", "Migration", "Lead Flows"]
        }
    ];

    var COPY = {
        fa: {
            title: "نیما — توسعه‌دهنده فول‌استک و سازنده سیستم‌های وب",
            description: "نیما؛ توسعه‌دهنده فول‌استک برای ساخت و نگه‌داری سایت، فروشگاه، وب‌اپ و سیستم‌های آنلاین با WordPress، WooCommerce، Laravel، توسعه اختصاصی، زیرساخت، استقرار و سئوی فنی.",
            brandRole: "توسعه‌دهنده فول‌استک و حل‌کننده مسئله",
            navProjects: "نمونه‌کارها",
            navChaos: "مسئله‌ها",
            heroBadge: "نیما — توسعه‌دهنده فول‌استک و حل‌کننده مسئله",
            heroTitleMain: "از ایده تا",
            heroTitleSoft: "سیستم زنده",
            heroSubtitle: "سایت، فروشگاه، وب‌اپ، پنل، زیرساخت و سئو؛ اگر لازم باشد از صفر می‌سازم، اگر خراب باشد عیب‌یابی می‌کنم، و اگر پیچیده شده باشد ساده و قابل نگه‌داری تحویل می‌دهم.",
            heroCta: "نمونه‌کارها را ببین",
            scratchTitle: "فقط صفحه نمی‌سازم",
            scratchBody: "دامنه، سرور، بک‌اند، فرانت‌اند، مسیر کاربر، داده، ایمیل، استقرار، سئو و نگه‌داری را یک سیستم می‌بینم؛ نه چند کار جدا از هم.",
            scratchItems: ["WordPress و WooCommerce اختصاصی", "Laravel و وب‌اپ", "افزونه و منطق کسب‌وکار", "زیرساخت، استقرار و سئو"],
            dashTitle: "از صفر می‌سازم؛ در محیط واقعی هم نگه می‌دارم",
            terminal: ["> مسئله و وابستگی‌ها را می‌فهمم", "> سیستم را می‌سازم و تست می‌کنم", "> استقرار می‌دهم و نگه می‌دارم"],
            projectsKicker: "نمونه‌کارهای منتخب",
            projectsTitle: "پروژه‌هایی که کار فنی‌شان خیلی فراتر از ظاهر سایت بود",
            projectsSubtitle: "از محصول Laravel تا فروشگاه و سایت شرکتی؛ توسعه اختصاصی، منطق کسب‌وکار، زیرساخت، سئو و استقرار بخشی از کار واقعی بوده‌اند.",
            challenge: "مسئله",
            work: "کاری که انجام دادم",
            result: "خروجی",
            open: "مشاهده سایت زنده",
            systemsKicker: "چیزی که می‌سازم",
            systemsTitle: "یک نفر برای کل زنجیره، نه فقط یک لایه",
            systemsText: "وقتی پروژه نیاز دارد فرانت‌اند، بک‌اند، وردپرس، سرور و سئو با هم تصمیم بگیرند، دقیقاً همان‌جاست که بهترین عملکرد را دارم.",
            systems: [
                ["WP", "WordPress و WooCommerce اختصاصی", "قالب، افزونه، فروشگاه، منطق تجاری و تجربه کاربر با حداقل وابستگی غیرضروری."],
                ["{}", "Laravel و وب‌اپ", "احراز هویت، داشبورد، جریان‌های سرویس، پنل داخلی، API و منطق محصول."],
                ["↯", "اتوماسیون و منطق کسب‌وکار", "وقتی فرم و اکسل و کار دستی کافی نیست، جریان را تبدیل به ابزار و نرم‌افزار می‌کنم."],
                ["⌁", "زیرساخت، استقرار و رشد", "VPS، DNS، SSL، Cloudflare، ایمیل، عملکرد، سئوی فنی و نگه‌داری محیط واقعی."]
            ],
            chaosKicker: "جایی که معمولاً وارد می‌شوم",
            chaosTitle: "وقتی یک مشکل فقط یک مشکل نیست و چند لایه با هم قاطی کرده‌اند.",
            gameKicker: "MINI DEBUG LAB",
            gameTitle: "هسته را پایدار کن",
            gameIntro: "اسکن را اجرا کن و گلیچ‌های روشن دور هسته را پاک کن. پایداری که به ۱۰۰٪ برسد، گزارش نهایی باز می‌شود.",
            startGame: "اجرای اسکن",
            resetGame: "اسکن دوباره",
            gameBrief: "۸ گلیچ • هدف: ۱۰۰٪ پایداری",
            diagnosisKicker: "گزارش نهایی",
            diagnosisLocked: "هنوز داده کافی ندارم.",
            diagnosisHint: "هسته را تا ۱۰۰٪ پایدار کن تا تشخیص ساخته شود.",
            diagnosisUnlocked: "ریشه مشکل معمولاً بین لایه‌هاست",
            diagnosisText: "مسیر کاربر، کد، تنظیمات، سرور، محتوا و نگه‌داری روی هم اثر می‌گذارند. برای همین قبل از دست‌زدن به یک جزء، کل سیستم را می‌خوانم.",
            contactTitle: "پروژه، ایده یا دردسر فنی؟ مستقیم بفرست.",
            contactText: "لازم نیست مسئله را از قبل مرتب و فنی توضیح بدهی. وضعیت فعلی، هدف و هر چیزی که داری را بفرست؛ من از همان‌جا شروع می‌کنم.",
            commandProject: "باز کردن"
        },
        en: {
            title: "Nima — Full-Stack Web Developer & Systems Builder",
            description: "Nima is a full-stack developer building and operating websites, stores, web apps, and online systems with WordPress, WooCommerce, Laravel, custom development, infrastructure, deployment, and technical SEO.",
            brandRole: "Full-stack builder & problem solver",
            navProjects: "Work",
            navChaos: "Problems",
            heroBadge: "Nima — Full-stack builder & problem solver",
            heroTitleMain: "Idea to",
            heroTitleSoft: "live system",
            heroSubtitle: "Websites, stores, web apps, internal tools, infrastructure, and SEO. I can build the system from scratch, debug what is broken, and simplify what has become hard to maintain.",
            heroCta: "See selected work",
            scratchTitle: "I build the whole thing",
            scratchBody: "Domain, server, backend, frontend, user flow, data, mail, deployment, SEO, and maintenance are one system to me—not a pile of unrelated tasks.",
            scratchItems: ["Custom WordPress & WooCommerce", "Laravel & web apps", "Plugins & business logic", "Infrastructure, deployment & SEO"],
            dashTitle: "Built from zero. Operated in production.",
            terminal: ["> map the problem and dependencies", "> build and test the system", "> deploy, observe, and maintain"],
            projectsKicker: "Selected work",
            projectsTitle: "Projects where the engineering went far beyond the interface",
            projectsSubtitle: "From a Laravel product to commerce and corporate systems: custom development, business logic, infrastructure, SEO, and deployment are part of the actual work.",
            challenge: "Challenge",
            work: "What I built",
            result: "Result",
            open: "Open live site",
            systemsKicker: "What I build",
            systemsTitle: "One owner across the stack, not one isolated layer",
            systemsText: "I do my best work when frontend, backend, WordPress, infrastructure, and SEO need to make sense as one system.",
            systems: [
                ["WP", "Custom WordPress & WooCommerce", "Themes, plugins, commerce, business logic, and user experience with as little unnecessary dependency as possible."],
                ["{}", "Laravel & web applications", "Authentication, dashboards, service flows, internal tools, APIs, and product logic."],
                ["↯", "Automation & business logic", "When forms, spreadsheets, and manual work stop being enough, I turn the workflow into software."],
                ["⌁", "Infrastructure, deployment & growth", "VPS, DNS, SSL, Cloudflare, mail, performance, technical SEO, and production maintenance."]
            ],
            chaosKicker: "Where I usually get pulled in",
            chaosTitle: "When one problem is really several layers colliding.",
            gameKicker: "MINI DEBUG LAB",
            gameTitle: "Stabilize the core",
            gameIntro: "Run the scan and clear the lit glitches around the core. Reach 100% stability to unlock the final diagnosis.",
            startGame: "Run scan",
            resetGame: "Scan again",
            gameBrief: "8 glitches • target: 100% stability",
            diagnosisKicker: "Final diagnosis",
            diagnosisLocked: "Not enough signal yet.",
            diagnosisHint: "Stabilize the core to 100% to generate the diagnosis.",
            diagnosisUnlocked: "The root cause usually lives between layers",
            diagnosisText: "User flow, code, configuration, server, content, and maintenance all affect each other. That is why I read the whole system before changing one piece.",
            contactTitle: "A project, an idea, or a technical mess? Send it directly.",
            contactText: "You do not need to pre-format the problem for me. Send the current state, the goal, and whatever context you already have; I will start there.",
            commandProject: "Open"
        }
    };

    function language() {
        return root.lang === "en" ? "en" : "fa";
    }

    function localized(value, lang) {
        if (value && typeof value === "object" && !Array.isArray(value)) return value[lang] || value.en || value.fa || "";
        return value || "";
    }

    function escapeHtml(value) {
        return String(value).replace(/[&<>\"]/g, function (character) {
            return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[character];
        });
    }

    function setText(selector, value) {
        var element = document.querySelector(selector);
        if (element) element.textContent = value;
    }

    function setMeta(selector, value) {
        var element = document.querySelector(selector);
        if (element) element.setAttribute("content", value);
    }

    function renderProjects() {
        var grid = document.getElementById("mission-grid");
        if (!grid) return;
        var lang = language();
        var copy = COPY[lang];

        grid.innerHTML = PROJECTS.map(function (project) {
            var proof = localized(project.proof, lang);
            var chips = project.chips.map(function (chip) {
                return '<span class="chip">' + escapeHtml(chip) + '</span>';
            }).join("");

            if (project.featured) {
                return [
                    '<article class="mission-card featured flagship observe is-visible" data-project="' + project.id + '">',
                    '<div class="mission-primary">',
                    '<span class="mission-type">' + escapeHtml(localized(project.type, lang)) + '</span>',
                    '<h3>' + escapeHtml(project.name) + '</h3>',
                    '<div class="mission-block"><strong>' + escapeHtml(copy.challenge) + '</strong><p>' + escapeHtml(localized(project.challenge, lang)) + '</p></div>',
                    '<div class="mission-block mission-work"><strong>' + escapeHtml(copy.work) + '</strong><p>' + escapeHtml(localized(project.work, lang)) + '</p></div>',
                    '</div>',
                    '<div class="mission-side">',
                    '<div class="mission-proof"><div class="lighthouse-badge"><strong>' + escapeHtml(proof) + '</strong><span><i>100</i><i>100</i><i>100</i><i>100</i></span></div></div>',
                    '<div class="mission-result"><strong>' + escapeHtml(copy.result) + '</strong><p>' + escapeHtml(localized(project.result, lang)) + '</p></div>',
                    '<div class="chips">' + chips + '</div>',
                    '<a class="live-link" target="_blank" rel="noopener" href="' + escapeHtml(project.url) + '">' + escapeHtml(copy.open) + '</a>',
                    '</div>',
                    '</article>'
                ].join("");
            }

            return [
                '<article class="mission-card observe is-visible" data-project="' + project.id + '">',
                '<span class="mission-type">' + escapeHtml(localized(project.type, lang)) + '</span>',
                '<h3>' + escapeHtml(project.name) + '</h3>',
                '<div class="mission-block"><strong>' + escapeHtml(copy.challenge) + '</strong><p>' + escapeHtml(localized(project.challenge, lang)) + '</p></div>',
                '<div class="mission-block mission-work"><strong>' + escapeHtml(copy.work) + '</strong><p>' + escapeHtml(localized(project.work, lang)) + '</p></div>',
                '<div class="mission-result"><strong>' + escapeHtml(copy.result) + '</strong><p>' + escapeHtml(localized(project.result, lang)) + '</p></div>',
                '<div class="mission-proof"><strong>' + escapeHtml(proof) + '</strong></div>',
                '<div class="chips">' + chips + '</div>',
                '<a class="live-link" target="_blank" rel="noopener" href="' + escapeHtml(project.url) + '">' + escapeHtml(copy.open) + '</a>',
                '</article>'
            ].join("");
        }).join("");
    }

    function ensureSystemsSection() {
        if (!mainPage) return;
        var projects = document.getElementById("projects");
        var chaos = document.getElementById("chaos");
        if (!projects || !chaos) return;

        if (projects.previousElementSibling && projects.previousElementSibling.id === "chaos") {
            projects.parentNode.insertBefore(projects, chaos);
        }

        var section = document.getElementById("systems");
        if (!section) {
            section = document.createElement("section");
            section.id = "systems";
            section.className = "section systems-section";
            projects.parentNode.insertBefore(section, chaos);
        }

        var lang = language();
        var copy = COPY[lang];
        section.innerHTML = [
            '<div class="container">',
            '<div class="section-heading observe is-visible">',
            '<p class="section-kicker">' + escapeHtml(copy.systemsKicker) + '</p>',
            '<h2>' + escapeHtml(copy.systemsTitle) + '</h2>',
            '<p>' + escapeHtml(copy.systemsText) + '</p>',
            '</div>',
            '<div class="systems-grid">',
            copy.systems.map(function (item) {
                return '<article class="system-capability observe is-visible"><span>' + escapeHtml(item[0]) + '</span><h3>' + escapeHtml(item[1]) + '</h3><p>' + escapeHtml(item[2]) + '</p></article>';
            }).join(""),
            '</div>',
            '</div>'
        ].join("");
    }

    function patchMainCopy() {
        if (!mainPage) return;
        var lang = language();
        var copy = COPY[lang];

        document.title = copy.title;
        setMeta('meta[name="description"]', copy.description);
        setMeta('meta[property="og:title"]', copy.title);
        setMeta('meta[property="og:description"]', copy.description);
        setMeta('meta[name="twitter:title"]', copy.title);
        setMeta('meta[name="twitter:description"]', copy.description);

        setText('[data-i18n="brandRole"]', copy.brandRole);
        setText('[data-i18n="navProjects"]', copy.navProjects);
        setText('[data-i18n="navChaos"]', copy.navChaos);
        setText('[data-i18n="heroBadge"]', copy.heroBadge);
        setText('[data-i18n="heroTitleMain"]', copy.heroTitleMain);
        setText('[data-i18n="heroTitleSoft"]', copy.heroTitleSoft);
        setText('[data-i18n="heroSubtitle"]', copy.heroSubtitle);

        var heroCta = document.querySelector('[data-i18n="heroCtaContact"]');
        if (heroCta) {
            heroCta.textContent = copy.heroCta;
            heroCta.setAttribute("href", "#projects");
        }

        setText('[data-i18n="scratchTitle"]', copy.scratchTitle);
        setText('[data-i18n="scratchBody"]', copy.scratchBody);
        copy.scratchItems.forEach(function (item, index) {
            setText('[data-i18n="scratchItem' + (index + 1) + '"]', item);
        });

        setText('[data-i18n="dashTitle"]', copy.dashTitle);
        copy.terminal.forEach(function (item, index) {
            setText('[data-i18n="terminal' + (index + 1) + '"]', item);
        });

        setText('[data-i18n="projectsKicker"]', copy.projectsKicker);
        setText('[data-i18n="projectsTitle"]', copy.projectsTitle);
        setText('[data-i18n="projectsSubtitle"]', copy.projectsSubtitle);
        setText('[data-i18n="chaosKicker"]', copy.chaosKicker);
        setText('[data-i18n="chaosTitle"]', copy.chaosTitle);

        setText('[data-i18n="gameKicker"]', copy.gameKicker);
        setText('[data-i18n="gameTitle"]', copy.gameTitle);
        setText('[data-i18n="gameIntro"]', copy.gameIntro);
        setText('[data-i18n="startGame"]', copy.startGame);
        setText('[data-i18n="resetGame"]', copy.resetGame);
        setText('[data-i18n="diagnosisKicker"]', copy.diagnosisKicker);

        var power = document.getElementById("game-power");
        if (!power || power.textContent.trim() !== "100%") {
            setText('[data-i18n="diagnosisLocked"]', copy.diagnosisLocked);
            setText('[data-i18n="diagnosisHint"]', copy.diagnosisHint);
        }

        setText('[data-i18n="contactTitle"]', copy.contactTitle);
        setText('[data-i18n="contactText"]', copy.contactText);

        var brief = document.querySelector(".game-brief-v2");
        if (!brief) {
            var hud = document.querySelector(".debug-lab-hud");
            if (hud) {
                brief = document.createElement("div");
                brief.className = "game-brief-v2";
                hud.parentNode.insertBefore(brief, hud);
            }
        }
        if (brief) brief.textContent = copy.gameBrief;
    }

    function trimChaos() {
        if (!mainPage) return;
        var grid = document.getElementById("chaos-grid");
        if (!grid) return;
        Array.prototype.slice.call(grid.children, 6).forEach(function (card) { card.remove(); });
    }

    function updateGameCompletion() {
        if (!mainPage) return;
        var power = document.getElementById("game-power");
        if (!power) return;
        var complete = power.textContent.trim() === "100%";
        var card = document.getElementById("game-card");
        if (card) card.classList.toggle("v2-complete", complete);
        if (!complete) return;

        var copy = COPY[language()];
        window.setTimeout(function () {
            var diagnosis = document.getElementById("diagnosis-card");
            if (!diagnosis) return;
            var heading = diagnosis.querySelector("h3");
            var paragraph = diagnosis.querySelector("p:not(.section-kicker)");
            if (heading) heading.textContent = copy.diagnosisUnlocked;
            if (paragraph) paragraph.textContent = copy.diagnosisText;
        }, 0);
    }

    function patchCommandList() {
        if (!mainPage) return;
        var list = document.getElementById("command-list");
        if (!list || list.dataset.v2Busy === "1") return;
        list.dataset.v2Busy = "1";

        Array.prototype.slice.call(list.querySelectorAll("button")).forEach(function (button) {
            var text = button.textContent || "";
            if (/Applitent|Fannkala|Parstek|Shaliia|Fan Azarakhsh|Ofogh Nikan/i.test(text)) button.remove();
        });

        var lang = language();
        PROJECTS.forEach(function (project) {
            var button = document.createElement("button");
            button.type = "button";
            button.innerHTML = '<span>' + escapeHtml(COPY[lang].commandProject + " " + project.name) + '</span><small>' + (lang === "fa" ? "باز شدن در تب تازه" : "Open in a new tab") + '</small>';
            button.addEventListener("click", function () {
                window.open(project.url, "_blank", "noopener");
            });
            list.appendChild(button);
        });

        window.setTimeout(function () { delete list.dataset.v2Busy; }, 0);
    }

    function renderAgencyCases() {
        if (mainPage) return;
        var grid = document.getElementById("case-grid");
        if (!grid) return;
        var lang = language();
        var labels = lang === "fa"
            ? { challenge: "مسئله", work: "کاری که انجام دادم", result: "خروجی" }
            : { challenge: "Challenge", work: "What I built", result: "Result" };

        grid.innerHTML = PROJECTS.filter(function (project) { return project.agency; }).map(function (project) {
            return [
                '<article class="agency-case observe is-visible">',
                '<span>' + escapeHtml(localized(project.type, lang)) + '</span>',
                '<h3>' + escapeHtml(project.name) + '</h3>',
                '<p><strong>' + escapeHtml(labels.challenge) + ':</strong> ' + escapeHtml(localized(project.challenge, lang)) + '</p>',
                '<p><strong>' + escapeHtml(labels.work) + ':</strong> ' + escapeHtml(localized(project.work, lang)) + '</p>',
                '<p><strong>' + escapeHtml(labels.result) + ':</strong> ' + escapeHtml(localized(project.result, lang)) + '</p>',
                '<a href="' + escapeHtml(project.url) + '" target="_blank" rel="noopener">' + escapeHtml(project.url.replace(/^https?:\/\//, "")) + '</a>',
                '</article>'
            ].join("");
        }).join("");
    }

    function applyAll() {
        if (mainPage) {
            ensureSystemsSection();
            patchMainCopy();
            renderProjects();
            trimChaos();
            patchCommandList();
            updateGameCompletion();
        } else {
            renderAgencyCases();
        }
    }

    var languageObserver = new MutationObserver(function (mutations) {
        if (mutations.some(function (mutation) { return mutation.attributeName === "lang"; })) {
            window.requestAnimationFrame(applyAll);
        }
    });
    languageObserver.observe(root, { attributes: true, attributeFilter: ["lang"] });

    if (mainPage) {
        var power = document.getElementById("game-power");
        if (power) {
            new MutationObserver(updateGameCompletion).observe(power, { childList: true, characterData: true, subtree: true });
        }

        document.addEventListener("click", function (event) {
            if (event.target.closest("[data-lang-option]")) window.setTimeout(applyAll, 0);
            if (event.target.closest("[data-open-command]")) window.setTimeout(patchCommandList, 0);
            if (event.target.closest("[data-start-game], [data-reset-game]")) window.setTimeout(updateGameCompletion, 0);
        });
    }

    applyAll();
})();
