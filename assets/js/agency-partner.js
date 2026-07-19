(function () {
    "use strict";

    document.documentElement.classList.add("js");

    var root = document.documentElement;
    var storageKey = "nima-chaos-language";
    var currentLanguage = localStorage.getItem(storageKey) === "en" ? "en" : "fa";
    var email = "nima.mohebali.b@gmail.com";
    var mailtoLink = document.getElementById("mailto-link");
    var copyStatus = document.getElementById("copy-status");
    var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    var data = {
        fa: {
            skip: "رفتن به محتوای اصلی",
            headerAria: "سربرگ همکاری آژانس",
            headerNavAria: "ناوبری سربرگ همکاری آژانس",
            sectionNavAria: "بخش‌های صفحه همکاری",
            footerNavAria: "ناوبری پایین صفحه همکاری",
            brandAria: "بازگشت به صفحه اصلی",
            brandName: "نیما",
            brandRole: "Partner Operations Console",
            langAria: "تغییر زبان",
            langStatus: "حالت فارسی",
            relayAria: "رله اجرای همکاری آژانس",
            mailSubject: "همکاری آژانسی برای یک پروژه آزمایشی",
            navCapabilities: "توانمندی‌ها",
            navWorkflow: "مدل همکاری",
            navWork: "نمونه‌ها",
            navContact: "شروع آزمایشی",
            heroKicker: "همکار فنی وایت‌لیبل برای آژانس‌ها",
            heroTitle: "مشتری و برند برای شما؛ اجرای فنی برای من.",
            heroText: "برای آژانس‌های طراحی، سئو و تبلیغات که گاهی به ظرفیت فنی مطمئن نیاز دارند. شما رابطه با مشتری، برند و قیمت نهایی را مدیریت می‌کنید؛ من اجرای فنی توافق‌شده را تمیز، سریع و قابل تحویل انجام می‌دهم.",
            heroPrimary: "بررسی یک پروژه آزمایشی",
            heroSecondary: "مدل همکاری را ببینید",
            chipNoClient: "بدون ارتباط مستقیم با مشتری شما",
            chipScopeQuote: "قیمت همکاری براساس محدوده پروژه",
            relayTitle: "رله اجرای آژانس",
            caseKicker: "دلیل تجاری",
            caseTitle: "ظرفیت فنی بیشتر، بدون استخدام عجولانه",
            caseText: "وقتی پروژه‌ها هم‌زمان می‌شوند، می‌توانید کار بیشتری قبول کنید بدون اینکه فوراً تیم ثابت بزرگ‌تر کنید یا رابطه مشتری را به بیرون بدهید. یک نفر می‌تواند اجرای WordPress، توسعه، پیاده‌سازی SEO، استقرار و مسئله‌های زیرساختی را پوشش دهد؛ قبل از تعهد به مشتری هم می‌توانید برای محدوده روشن، قیمت همکاری بگیرید و همکاری را با یک پروژه آزمایشی کوچک و پرداخت‌شده شروع کنید.",
            capKicker: "توان اجرای فنی",
            capTitle: "کارهایی که می‌توانید بی‌سروصدا واگذار کنید",
            rulesTitle: "قواعد روشن همکاری",
            workflowTitle: "آژانس می‌تواند تنها طرفِ روبه‌روی مشتری بماند",
            workKicker: "کارهای تأییدشده",
            workTitle: "نمونه‌هایی که یک آژانس می‌تواند مشابهشان را واگذار کند",
            modelTitle: "مدل همکاری ساده است",
            ctaTitle: "بیایید با یک پروژه کوچک شروع کنیم.",
            ctaText: "یک پروژه مشخص، یک محدوده روشن و یک تحویل واقعی؛ بهترین راه برای سنجیدن کیفیت همکاری همین است.",
            ctaPrimary: "ارسال پروژه برای بررسی",
            ctaSecondary: "بازگشت به رزومه و نمونه‌کارها",
            copyEmail: "کپی ایمیل",
            copied: "ایمیل کپی شد",
            copyFailed: "کپی خودکار انجام نشد؛ ایمیل را دستی بردارید.",
            footerText: "نیما — Partner Operations Console",
            homeLink: "رزومه و نمونه‌کارها",
            backTop: "بازگشت به بالا",
            need: "نیاز:", role: "نقش فنی:", value: "ارزش واگذاری:",
            services: [["اجرای کامل سایت", ["سایت‌های شرکتی WordPress", "فروشگاه‌های WooCommerce", "landing page و صفحه کمپین", "سفارشی‌سازی قالب", "قالب اختصاصی WordPress وقتی واقعاً توجیه دارد", "پیاده‌سازی responsive", "ساختار محتوا و مسیر کاربر"]], ["توسعه اختصاصی", ["افزونه اختصاصی WordPress", "hooks، filters، shortcodes و ابزارهای ادمین", "اتصال API", "منطق اختصاصی WooCommerce", "فرم‌ها و workflowهای کسب‌وکار", "داشبوردهای PHP و Laravel", "احراز هویت و سیستم داخلی", "نجات پروژه نیمه‌کاره یا بدپیاده‌سازی‌شده"]], ["مالکیت فنی پروژه", ["پیاده‌سازی technical SEO", "metadata، sitemap، indexability و structured cleanup", "Performance و Core Web Vitals", "cache و پاک‌سازی دیتابیس", "migration و deployment", "VPS، nginx، DNS، SSL و Cloudflare", "عیب‌یابی transactional email و فرم‌ها", "troubleshooting و نگه‌داری تولید"]]],
            rules: [["WHITE-LABEL DELIVERY", "کار می‌تواند زیر فرایند و برند آژانس تحویل شود."], ["NO CLIENT POACHING", "بازاریابی مستقیم، مذاکره مستقل یا تلاش برای گرفتن مشتری آژانس انجام نمی‌دهم."], ["CLEAR SCOPE", "هر پروژه با محدوده، استثناها، زمان‌بندی و قیمت همکاری مشخص شروع می‌شود."], ["AGENCY APPROVAL", "هیچ چیز تحویل نهایی محسوب نمی‌شود تا آژانس آن را بررسی کند."], ["CLEAN HANDOFF", "کد، دسترسی‌ها، مستندات و اطلاعات deployment متناسب با پروژه تحویل می‌شود."], ["CONFIDENTIALITY", "در صورت نیاز، فرایند کاری با NDA سازگار است."], ["NO FALSE PROMISES", "ریسک‌ها، blockerها، دسترسی‌های ناقص و تغییر محدوده مستقیم گفته می‌شوند."]],
            workflow: [["Brief", "آژانس پروژه، نیاز، طراحی، مشکل یا درخواست مشتری را ارسال می‌کند."], ["Audit and scope", "کار، وابستگی‌ها، ریسک‌ها، دسترسی‌های ناقص و استثناها مشخص می‌شود."], ["Partner quote", "برای محدوده تعریف‌شده، قیمت ثابت همکاری و بازه تحویل اعلام می‌شود."], ["Build", "پیاده‌سازی در فرایندی جدا، قابل بررسی و منظم انجام می‌شود."], ["QA and agency review", "responsive، جریان‌های اصلی، کیفیت فنی و معیارهای پذیرش بررسی می‌شوند."], ["Launch and handoff", "کار deploy می‌شود یا با اطلاعات فنی لازم به آژانس تحویل داده می‌شود."]],
            cases: [["Applitent", "Laravel legal-tech platform", "نیاز به جریان‌های قابل اعتماد، زیرساخت پایدار و مسیرهای اعتمادساز.", "احراز هویت، داشبورد، درخواست سرویس، آپلود، ایمیل، DNS/SSL، Cloudflare، sitemap و technical SEO.", "در پروژه مشابه، آژانس می‌تواند توسعه محصول، زیرساخت و تحویل فنی را واگذار کند.", "https://applitent.com"], ["Fannkala", "WordPress / WooCommerce store", "فروشگاهی که ساختار، خرید و نگه‌داری‌اش باید روشن‌تر می‌شد.", "ساختار WordPress/WooCommerce، مسیر خرید، محتوا، UX و بهبود سرعت.", "در پروژه مشابه، آژانس می‌تواند اجرای فروشگاه و پاک‌سازی فنی را واگذار کند.", "https://fannkala.com"], ["Parstek", "Corporate WordPress site", "سایت شرکتی نیازمند ارائه روشن‌تر خدمات و مسیر محتوایی منظم‌تر.", "ارائه خدمات، مسیرهای محتوا، پولیش UI، سفارشی‌سازی قالب و UX cleanup.", "در پروژه مشابه، آژانس می‌تواند پیاده‌سازی و پولیش سایت شرکتی را واگذار کند.", "https://parstek.ir"]],
            model: ["نیما برای کار تعریف‌شده partner quote ارائه می‌کند.", "آژانس قیمت نهایی مشتری را خودش تعیین می‌کند.", "پروژه‌های کوچک می‌توانند fixed-scope باشند.", "پروژه‌های بزرگ‌تر می‌توانند به milestone تقسیم شوند.", "نگه‌داری بعد از تحویل جداگانه قابل هماهنگی است.", "تغییرات خارج از محدوده قبل از اجرا تأیید می‌شوند."],
            faq: [["آیا مستقیماً با مشتری آژانس صحبت می‌کنی؟", "خیر، پیش‌فرض این است که آژانس تنها طرف client-facing باشد؛ ارتباط مستقیم فقط با درخواست صریح آژانس انجام می‌شود."], ["آیا پروژه با برند آژانس تحویل داده می‌شود؟", "بله، خروجی می‌تواند زیر فرایند، نام و استانداردهای تحویل آژانس آماده شود."], ["قیمت همکاری چطور مشخص می‌شود؟", "برای هر محدوده مشخص، یک قیمت ثابت همکاری اعلام می‌شود و آژانس قیمت نهایی مشتری را خودش تعیین می‌کند."], ["تغییرات خارج از محدوده چطور مدیریت می‌شوند؟", "ابتدا اثر روی زمان و هزینه مشخص می‌شود و فقط بعد از تأیید آژانس اجرا می‌شود."], ["بعد از تحویل، پشتیبانی هم انجام می‌دهی؟", "بله، نگه‌داری یا پشتیبانی می‌تواند جدا از پروژه اصلی تعریف شود."], ["امکان NDA وجود دارد؟", "بله، فرایند همکاری با توافق محرمانگی سازگار است."]]
        }
    };

    data.en = JSON.parse(JSON.stringify(data.fa));
    Object.assign(data.en, {
        skip: "Skip to main content", headerAria: "Agency partnership header", headerNavAria: "Agency partnership header navigation", sectionNavAria: "Agency page sections", footerNavAria: "Agency partnership footer navigation", brandAria: "Back to homepage", brandName: "Nima", langAria: "Change language", langStatus: "English mode", relayAria: "Agency delivery relay", mailSubject: "Agency partner pilot project", navCapabilities: "Capabilities", navWorkflow: "Workflow", navWork: "Verified work", navContact: "Pilot project", heroKicker: "White-label technical partner for agencies", heroTitle: "Your client and brand; my technical delivery.", heroText: "For design, SEO, and advertising agencies that occasionally need reliable technical capacity. You manage the client relationship, brand, and final price; I deliver the agreed technical scope cleanly, quickly, and ready to hand off.", heroPrimary: "Review a pilot project", heroSecondary: "See the workflow", chipNoClient: "No direct contact with your client", chipScopeQuote: "Partner quote based on project scope", relayTitle: "Agency Operations Relay", caseKicker: "Business case", caseTitle: "More technical capacity without rushed hiring", caseText: "When projects overlap, your agency can accept more work without immediately expanding payroll or handing away the client relationship. One technical partner can cover WordPress delivery, development, SEO implementation, deployment, and infrastructure issues. You can request a quote before committing, then start with one small paid pilot project.", capKicker: "Delivery capabilities", capTitle: "Work your agency can quietly delegate", rulesTitle: "Clear partnership rules", workflowTitle: "Your agency can remain the only client-facing party", workKicker: "Verified work", workTitle: "Examples of work an agency could delegate in similar projects", modelTitle: "The engagement model is simple", ctaTitle: "Let’s start with a small project.", ctaText: "One defined project, one clear scope, and one real delivery — the best way to evaluate the partnership.", ctaPrimary: "Send project for review", ctaSecondary: "Back to resume and work", copyEmail: "Copy email", copied: "Email copied", copyFailed: "Automatic copy failed; please copy the email manually.", homeLink: "Resume and work", backTop: "Back to top", need: "Need:", role: "Technical role:", value: "Delegation value:"
    });
    data.en.services = [["Complete website delivery", ["WordPress corporate websites", "WooCommerce stores", "Landing pages", "Campaign pages", "Theme customization", "Custom WordPress themes when justified", "Responsive implementation", "Content structure and user flows"]], ["Custom development", ["Custom WordPress plugins", "Hooks, filters, shortcodes, and admin tools", "API integrations", "WooCommerce custom logic", "Forms and business workflows", "PHP and Laravel dashboards", "Authentication and internal systems", "Repairing unfinished or poorly implemented projects"]], ["Technical ownership", ["Technical SEO implementation", "Metadata, sitemap, indexability, and structured cleanup", "Performance and Core Web Vitals work", "Caching and database cleanup", "Migration and deployment", "VPS, nginx, DNS, SSL, and Cloudflare", "Transactional email and form-delivery debugging", "Production troubleshooting and maintenance"]]];
    data.en.rules = [["WHITE-LABEL DELIVERY", "Work can be delivered under the agency’s process and brand."], ["NO CLIENT POACHING", "I will not market directly to or attempt to take over the agency’s client."], ["CLEAR SCOPE", "Each project starts with defined scope, exclusions, timeline, and partner quote."], ["AGENCY APPROVAL", "Nothing is final until the agency has reviewed it."], ["CLEAN HANDOFF", "Code, credentials, documentation, and deployment information are handed off as appropriate."], ["CONFIDENTIALITY", "NDA-compatible workflow is available when required."], ["NO FALSE PROMISES", "Risks, blockers, missing access, and scope changes are communicated directly."]];
    data.en.workflow = [["Brief", "The agency sends the project, requirement, design, problem, or client request."], ["Audit and scope", "I identify the work, dependencies, risks, missing access, and exclusions."], ["Partner quote", "The agency receives a fixed quote and delivery window for the defined scope."], ["Build", "Implementation is completed in an isolated and reviewable workflow."], ["QA and agency review", "Responsive behavior, primary flows, technical quality, and agreed acceptance criteria are checked."], ["Launch and handoff", "The work is deployed or handed to the agency with necessary technical information."]];
    data.en.model = ["Nima supplies a partner quote for the defined work.", "The agency chooses its own client-facing price.", "Small projects can be fixed-scope.", "Larger projects can be divided into milestones.", "Maintenance can be arranged separately after delivery.", "Scope changes require confirmation before implementation."];
    data.en.faq = [["Do you speak directly with the agency’s client?", "No. The default is that the agency remains the only client-facing party; direct contact happens only if the agency explicitly requests it."], ["Can the project be delivered under the agency brand?", "Yes. The output can be prepared under the agency’s process, name, and delivery standards."], ["How is partner pricing defined?", "A fixed partner quote is provided for each defined scope. The agency determines its own client-facing price."], ["How are out-of-scope changes handled?", "Impact on time and cost is clarified first, then implemented only after agency approval."], ["Do you provide support after delivery?", "Yes. Maintenance or support can be defined separately after the main delivery."], ["Is NDA work possible?", "Yes. The workflow is compatible with confidentiality agreements."]];

    function t(key) { return data[currentLanguage][key] || key; }
    function esc(value) { return String(value).replace(/[&<>'"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c]; }); }
    function setMailto() { if (mailtoLink) { mailtoLink.href = "mailto:" + email + "?subject=" + encodeURIComponent(t("mailSubject")); } }
    function renderLists() {
        var d = data[currentLanguage];
        document.getElementById("service-grid").innerHTML = d.services.map(function (s) { return '<article class="agency-service"><h3>' + esc(s[0]) + '</h3><ul>' + s[1].map(function (i) { return '<li>' + esc(i) + '</li>'; }).join("") + '</ul></article>'; }).join("");
        document.getElementById("rules-grid").innerHTML = d.rules.map(function (r) { return '<article class="agency-rule"><span>' + esc(r[0]) + '</span><p>' + esc(r[1]) + '</p></article>'; }).join("");
        document.getElementById("workflow-list").innerHTML = d.workflow.map(function (w, i) { return '<li><b>0' + (i + 1) + '</b><h3>' + esc(w[0]) + '</h3><p>' + esc(w[1]) + '</p></li>'; }).join("");
        document.getElementById("case-grid").innerHTML = d.cases.map(function (c) { return '<article class="agency-case"><span>' + esc(c[1]) + '</span><h3>' + esc(c[0]) + '</h3><p>' + esc(d.need) + ' ' + esc(c[2]) + '</p><p>' + esc(d.role) + ' ' + esc(c[3]) + '</p><p>' + esc(d.value) + ' ' + esc(c[4]) + '</p><a href="' + esc(c[5]) + '" target="_blank" rel="noopener">' + esc(c[5]) + '</a></article>'; }).join("");
        document.getElementById("model-list").innerHTML = d.model.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join("");
        document.getElementById("faq-list").innerHTML = d.faq.map(function (f) { return '<details class="agency-faq-item"><summary>' + esc(f[0]) + '</summary><p>' + esc(f[1]) + '</p></details>'; }).join("");
        observe();
    }
    function render() {
        document.querySelectorAll("[data-i18n]").forEach(function (element) { element.textContent = t(element.dataset.i18n); });
        document.querySelectorAll("[data-i18n-aria-label]").forEach(function (element) { element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel)); });
        document.querySelectorAll("[data-lang-option]").forEach(function (button) { button.classList.toggle("is-active", button.dataset.langOption === currentLanguage); button.setAttribute("aria-pressed", button.dataset.langOption === currentLanguage ? "true" : "false"); });
        root.lang = currentLanguage;
        root.dir = currentLanguage === "fa" ? "rtl" : "ltr";
        localStorage.setItem(storageKey, currentLanguage);
        setMailto();
        renderLists();
    }
    function observe() {
        if (reducedMotion.matches || !("IntersectionObserver" in window)) { document.querySelectorAll(".observe").forEach(function (element) { element.classList.add("is-visible"); }); return; }
        var io = new IntersectionObserver(function (entries) { entries.forEach(function (entry) { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); io.unobserve(entry.target); } }); }, { threshold: 0.12 });
        document.querySelectorAll(".observe:not(.is-visible)").forEach(function (element) { io.observe(element); });
    }
    function fallbackCopy(value) {
        var textarea = document.createElement("textarea");
        textarea.value = value;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.insetInlineStart = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);
        try { return document.execCommand("copy"); } finally { document.body.removeChild(textarea); }
    }
    function copyEmail() {
        try {
            if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
                navigator.clipboard.writeText(email).then(function () { copyStatus.textContent = t("copied"); }).catch(function () { copyStatus.textContent = fallbackCopy(email) ? t("copied") : t("copyFailed"); });
                return;
            }
            copyStatus.textContent = fallbackCopy(email) ? t("copied") : t("copyFailed");
        } catch (error) { copyStatus.textContent = t("copyFailed"); }
    }

    document.addEventListener("click", function (event) {
        var lang = event.target.closest("[data-lang-option]");
        if (lang) { currentLanguage = lang.dataset.langOption; render(); return; }
        if (event.target.closest("[data-copy-email]")) { copyEmail(); }
    });

    render();
}());
