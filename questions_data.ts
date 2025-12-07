
import { Question } from './types';

export const ALL_QUESTIONS: Question[] = [
    // Original 4 (preserved)
    {
        id: 1,
        text: "في ليلة عاصفة، تجد باباً حجرياً قديماً نُحت عليه رمز غير معروف. ماذا تفعل؟",
        options: [
            { id: 'A', text: "أقوم بنسخ الرمز في مذكرتي لدراسته لاحقاً.", weight: { ARCHITECT: 3, SEER: 1 } },
            { id: 'B', text: "أحاول فتحه بالقوة، فلا شيء يقف أمامي.", weight: { FLAME: 3, GUARDIAN: 1 } },
            { id: 'C', text: "أبحث عن مدخل سري آخر، الباب فخ.", weight: { WANDERER: 3, ARCHITECT: 1 } },
            { id: 'D', text: "أضع يدي عليه وأحاول استشعار طاقته.", weight: { SEER: 3, ECHO: 1 } },
        ]
    },
    {
        id: 2,
        text: "إذا عُرض عليك قراءة سطر واحد من كتاب الحكمة المفقود، ماذا تختار؟",
        options: [
            { id: 'A', text: "كيفية حماية من أحب.", weight: { GUARDIAN: 3, ARCHITECT: 1 } },
            { id: 'B', text: "حقيقة النفس البشرية.", weight: { SEER: 3, WANDERER: 1 } },
            { id: 'C', text: "طريق النصر على المصاعب.", weight: { FLAME: 3, ARCHITECT: 1 } },
            { id: 'D', text: "قصة ستُروى عني كأثر طيب.", weight: { ECHO: 3, GUARDIAN: 1 } },
        ]
    },
    {
        id: 3,
        text: "تجد نفسك وسط نزاع بين قبيلتين قديمتين. دورك هو:",
        options: [
            { id: 'A', text: "القائد الذي يفرض السلام بالسيف.", weight: { GUARDIAN: 2, FLAME: 2 } },
            { id: 'B', text: "الحكيم الذي يهمس بالنصيحة من الظلال.", weight: { ARCHITECT: 3, ECHO: 1 } },
            { id: 'C', text: "الرحالة الذي يراقب بصمت ثم يرحل.", weight: { WANDERER: 3, SEER: 1 } },
            { id: 'D', text: "الوسيط الروحي الذي يكشف أصل اللعنة.", weight: { SEER: 2, ECHO: 2 } },
        ]
    },
    {
        id: 4,
        text: "ما هو الشيء الذي تخشى فقدانه أكثر من غيره؟",
        options: [
            { id: 'A', text: "حريتي في الاختيار والتنقل.", weight: { WANDERER: 3, FLAME: 1 } },
            { id: 'B', text: "ذكرياتي وهويتي.", weight: { ECHO: 3, GUARDIAN: 1 } },
            { id: 'C', text: "قدرتي على الفهم والتحليل.", weight: { ARCHITECT: 3, SEER: 1 } },
            { id: 'D', text: "قوتي وتأثيري على من حولي.", weight: { FLAME: 2, GUARDIAN: 2 } },
        ]
    },
    // New Questions (Total targeting 50)
    {
        id: 5,
        text: "تجد مرآة لا تعكس صورتك، بل تعكس شيئاً آخر. ماذا ترى؟",
        options: [
            { id: 'A', text: "أرى نسختي المثالية التي انتصرت على كل شيء.", weight: { ARCHITECT: 3, FLAME: 1 } },
            { id: 'B', text: "أرى مكاناً لم أزره من قبل ولكنه يناديني.", weight: { WANDERER: 3, SEER: 1 } },
            { id: 'C', text: "أرى وجوه الذين حاربت لأجل حمايتهم.", weight: { GUARDIAN: 3, ECHO: 1 } },
            { id: 'D', text: "أرى حقيقة روحي مجردة من الجسد.", weight: { SEER: 3, ECHO: 1 } },
        ]
    },
    {
        id: 6,
        text: "عثرت على مفتاح ذهبي ملقى في الرماد. ماذا تظنه يفتح؟",
        options: [
            { id: 'A', text: "خزنة تحتوي على علوم محرمة.", weight: { ARCHITECT: 2, SEER: 2 } },
            { id: 'B', text: "بوابة لمدينة ضائعة.", weight: { WANDERER: 3, ARCHITECT: 1 } },
            { id: 'C', text: "زنزانة وحش تم حبسه لسبب وجيه.", weight: { GUARDIAN: 3, FLAME: 1 } },
            { id: 'D', text: "صندوق ذكريات شخص مجهول.", weight: { ECHO: 3, SEER: 1 } },
        ]
    },
    {
        id: 7,
        text: "السماء تمطر ناراً زرقاء باردة. كيف تتصرف؟",
        options: [
            { id: 'A', text: "أجمع هذه النار، فهي مصدر طاقة نادر.", weight: { ARCHITECT: 3, FLAME: 1 } },
            { id: 'B', text: "أحتمي وأحمي من معي حتى تنتهي العاصفة.", weight: { GUARDIAN: 3, ECHO: 1 } },
            { id: 'C', text: "أخرج للرقص تحتها، الفوضى جميلة.", weight: { FLAME: 3, WANDERER: 1 } },
            { id: 'D', text: "أتأمل الظاهرة لأفهم رسالتها السماوية.", weight: { SEER: 3, ARCHITECT: 1 } },
        ]
    },
    {
        id: 8,
        text: "يُعرض عليك السفر عبر الزمن، ولكن لمرة واحدة. إلى أين؟",
        options: [
            { id: 'A', text: "إلى لحظة بناء الحضارات الأولى.", weight: { SEER: 3, ARCHITECT: 1 } },
            { id: 'B', text: "إلى الماضي لتصحيح خطأ فادح.", weight: { ARCHITECT: 2, GUARDIAN: 2 } },
            { id: 'C', text: "إلى المستقبل البعيد حيث لا يعرفني أحد.", weight: { WANDERER: 3, FLAME: 1 } },
            { id: 'D', text: "إلى زمن أجدادي لأعيش مجدهم.", weight: { ECHO: 3, GUARDIAN: 1 } },
        ]
    },
    {
        id: 9,
        text: "تسمع همسات قادمة من بئر مظلم. ماذا تقول الهمسات؟",
        options: [
            { id: 'A', text: "أسماء كل من نسيهم التاريخ.", weight: { ECHO: 3, SEER: 1 } },
            { id: 'B', text: "تحذيرات من خطر قادم.", weight: { GUARDIAN: 3, ARCHITECT: 1 } },
            { id: 'C', text: "أسرار العزيمة الصلبة.", weight: { FLAME: 3, ARCHITECT: 1 } },
            { id: 'D', text: "دعوة لترك كل شيء والقفز.", weight: { WANDERER: 3, FLAME: 1 } },
        ]
    },
    {
        id: 10,
        text: "أي من هذه الأسلحة القديمة تختار؟",
        options: [
            { id: 'A', text: "درع لا يخترقه أي معدن.", weight: { GUARDIAN: 3, ECHO: 1 } },
            { id: 'B', text: "سيف يشتعل عند الغضب.", weight: { FLAME: 3, WANDERER: 1 } },
            { id: 'C', text: "بوصلة تشير إلى ما تريد قلبه.", weight: { WANDERER: 3, SEER: 1 } },
            { id: 'D', text: "كتاب يكتب نفسه باستمرار.", weight: { ARCHITECT: 3, SEER: 1 } },
        ]
    },
    {
        id: 11,
        text: "وصلت إلى قمة جبل شاهق. ماذا تفعل أولاً؟",
        options: [
            { id: 'A', text: "أصرخ بأعلى صوتي ليعلم العالم بوجودي.", weight: { FLAME: 3, ECHO: 1 } },
            { id: 'B', text: "أبحث عن الطريق للجبل التالي.", weight: { WANDERER: 3, ARCHITECT: 1 } },
            { id: 'C', text: "أبني نصباً تذكارياً يخلد وصولي.", weight: { ARCHITECT: 3, GUARDIAN: 1 } },
            { id: 'D', text: "أجلس بصمت وأراقب العالم من فوق.", weight: { SEER: 3, GUARDIAN: 1 } },
        ]
    },
    {
        id: 12,
        text: "إذا كان العالم لعبة شطرنج، فأنت:",
        options: [
            { id: 'A', text: "الملك الذي يجب حمايته بأي ثمن.", weight: { GUARDIAN: 2, ECHO: 2 } },
            { id: 'B', text: "الوزير الذي يملك حرية الحركة والقوة.", weight: { FLAME: 3, ARCHITECT: 1 } },
            { id: 'C', text: "اللاعب الذي يحرك القطع من الخارج.", weight: { ARCHITECT: 3, SEER: 1 } },
            { id: 'D', text: "الحصان الذي يقفز فوق الحواجز.", weight: { WANDERER: 3, FLAME: 1 } },
        ]
    },
    {
        id: 13,
        text: "تم نفيك إلى جزيرة مهجورة. ماذا تأخذ معك؟",
        options: [
            { id: 'A', text: "سلاحاً للدفاع والصيد.", weight: { FLAME: 2, GUARDIAN: 2 } },
            { id: 'B', text: "أدوات بناء لتشييد مأوى.", weight: { ARCHITECT: 3, GUARDIAN: 1 } },
            { id: 'C', text: "مجموعة خرائط للنجوم.", weight: { SEER: 3, WANDERER: 1 } },
            { id: 'D', text: "مذكراتي لأكتب قصتي.", weight: { ECHO: 3, SEER: 1 } },
        ]
    },
    {
        id: 14,
        text: "تجد مكتبة تحترق، يمكنك إنقاذ كتاب واحد. ماذا يكون؟",
        options: [
            { id: 'A', text: "كتاب القوانين والدساتير الأولى.", weight: { ARCHITECT: 3, GUARDIAN: 1 } },
            { id: 'B', text: "كتاب الأساطير والأغاني القديمة.", weight: { ECHO: 3, WANDERER: 1 } },
            { id: 'C', text: "كتاب التنبؤات والأسرار الكونية.", weight: { SEER: 3, FLAME: 1 } },
            { id: 'D', text: "خريطة العالم القديم.", weight: { WANDERER: 2, ECHO: 2 } },
        ]
    },
    {
        id: 15,
        text: "يقال أن الظلام يخفي وحوشاً. أنت تقول أن الظلام يخفي:",
        options: [
            { id: 'A', text: "فرصاً لا يراها الجبناء.", weight: { ARCHITECT: 3, FLAME: 1 } },
            { id: 'B', text: "هدوءاً وصفاءً للعقل.", weight: { GUARDIAN: 2, SEER: 2 } },
            { id: 'C', text: "أسراراً لم يحن وقت كشفها.", weight: { SEER: 3, ECHO: 1 } },
            { id: 'D', text: "طرقاً جديدة للهروب.", weight: { WANDERER: 3, FLAME: 1 } },
        ]
    },
    {
        id: 16,
        text: "من هو العدو الحقيقي للإنسان؟",
        options: [
            { id: 'A', text: "الخوف الذي يشل الحركة.", weight: { FLAME: 3, WANDERER: 1 } },
            { id: 'B', text: "الجهل بالحقيقة.", weight: { SEER: 3, ARCHITECT: 1 } },
            { id: 'C', text: "النسيان وضياع الأصل.", weight: { ECHO: 3, GUARDIAN: 1 } },
            { id: 'D', text: "الفوضى وغياب النظام.", weight: { ARCHITECT: 3, GUARDIAN: 1 } },
        ]
    },
    {
        id: 17,
        text: "لو كنت عنصراً من عناصر الطبيعة، لـكنت:",
        options: [
            { id: 'A', text: "الجبل الصامد.", weight: { GUARDIAN: 4 } },
            { id: 'B', text: "النار المشتعلة.", weight: { FLAME: 4 } },
            { id: 'C', text: "الريح المرسلة.", weight: { WANDERER: 4 } },
            { id: 'D', text: "الماء الذي يتشكل ولا يُكسر.", weight: { SEER: 2, ARCHITECT: 2 } },
        ]
    },
    {
        id: 18,
        text: "تستيقظ لتجد أن العالم قد نسي اسمك. رد فعلك:",
        options: [
            { id: 'A', text: "أصنع اسماً جديداً وأسطورة أعظم.", weight: { FLAME: 3, ARCHITECT: 1 } },
            { id: 'B', text: "هذه حريتي الحقيقية، الآن أنا طليق.", weight: { WANDERER: 4 } },
            { id: 'C', text: "أبحث عن من يحمل ذاكرتي.", weight: { ECHO: 3, GUARDIAN: 1 } },
            { id: 'D', text: "لا يهم الاسم، المهم هو الأثر.", weight: { ARCHITECT: 2, SEER: 2 } },
        ]
    },
    {
        id: 19,
        text: "ما هي أعظم فضيلة؟",
        options: [
            { id: 'A', text: "الشجاعة في وجه الموت.", weight: { FLAME: 3, GUARDIAN: 1 } },
            { id: 'B', text: "الوفاء بالعهود.", weight: { GUARDIAN: 3, ECHO: 1 } },
            { id: 'C', text: "الحكمة والبصيرة.", weight: { SEER: 3, ARCHITECT: 1 } },
            { id: 'D', text: "القدرة على التكيف.", weight: { WANDERER: 3, ARCHITECT: 1 } },
        ]
    },
    {
        id: 20,
        text: "طائر غريب يحط على كتفك ويهمس بكلمة واحدة. الكلمة هي:",
        options: [
            { id: 'A', text: "\"ابنِ\"", weight: { ARCHITECT: 4 } },
            { id: 'B', text: "\"احمِ\"", weight: { GUARDIAN: 4 } },
            { id: 'C', text: "\"ارحل\"", weight: { WANDERER: 4 } },
            { id: 'D', text: "\"تذكر\"", weight: { ECHO: 4 } },
        ]
    },
    {
        id: 21,
        text: "أمامك طريقان: طريق آمن ومزدحم، وطريق وعر ومجهول. تختار:",
        options: [
            { id: 'A', text: "الطريق الوعر، هناك تكمن المغامرة.", weight: { WANDERER: 3, FLAME: 1 } },
            { id: 'B', text: "الطريق الآمن، الحكمة في السلامة.", weight: { GUARDIAN: 3, ARCHITECT: 1 } },
            { id: 'C', text: "أشق طريقاً ثالثاً خاصاً بي.", weight: { ARCHITECT: 3, FLAME: 1 } },
            { id: 'D', text: "أقف لأستخير النجوم قبل المسير.", weight: { SEER: 3, ECHO: 1 } },
        ]
    },
    {
        id: 22,
        text: "ما الذي يجلب الدمار للممالك؟",
        options: [
            { id: 'A', text: "الخيانة من الداخل.", weight: { GUARDIAN: 2, ECHO: 2 } },
            { id: 'B', text: "الركود وعدم التطور.", weight: { FLAME: 3, WANDERER: 1 } },
            { id: 'C', text: "الغرور والطمع.", weight: { SEER: 3, ARCHITECT: 1 } },
            { id: 'D', text: "نسيان المبادئ التي قامت عليها.", weight: { ECHO: 3, GUARDIAN: 1 } },
        ]
    },
    {
        id: 23,
        text: "لو كانت حياتك رواية، ما هو عنوانها؟",
        options: [
            { id: 'A', text: "الحصن الأخير.", weight: { GUARDIAN: 3, ECHO: 1 } },
            { id: 'B', text: "رحلة بلا عودة.", weight: { WANDERER: 3, FLAME: 1 } },
            { id: 'C', text: "اللعنة المقدسة.", weight: { SEER: 2, FLAME: 2 } },
            { id: 'D', text: "مهندس المسارات.", weight: { ARCHITECT: 3, SEER: 1 } },
        ]
    },
    {
        id: 24,
        text: "تجد قلادة قديمة تنبض بضوء خافت. لمن تهديها؟",
        options: [
            { id: 'A', text: "لأقوى محارب أعرفه.", weight: { FLAME: 2, GUARDIAN: 2 } },
            { id: 'B', text: "أحتفظ بها، قد تكون نادرة.", weight: { ARCHITECT: 3, SEER: 1 } },
            { id: 'C', text: "أعيدها لمكانها، للأشياء حرمتها.", weight: { ECHO: 3, GUARDIAN: 1 } },
            { id: 'D', text: "لشخص يحب السفر ليحملها بعيداً.", weight: { WANDERER: 3 } },
        ]
    },
    {
        id: 25,
        text: "ما هو شعورك تجاه المجهول؟",
        options: [
            { id: 'A', text: "شغف ورغبة في الاكتشاف.", weight: { WANDERER: 3, SEER: 1 } },
            { id: 'B', text: "قلق وحذر واجب.", weight: { GUARDIAN: 3, ARCHITECT: 1 } },
            { id: 'C', text: "تحدٍ يجب السيطرة عليه.", weight: { ARCHITECT: 3, FLAME: 1 } },
            { id: 'D', text: "لا يوجد مجهول، فقط حقائق لم ندركها.", weight: { SEER: 4 } },
        ]
    },
    {
        id: 26,
        text: "عندما تغضب، تكون كـ:",
        options: [
            { id: 'A', text: "البركان الثائر.", weight: { FLAME: 4 } },
            { id: 'B', text: "الجليد الصامت.", weight: { GUARDIAN: 2, ARCHITECT: 2 } },
            { id: 'C', text: "العاصفة العابرة.", weight: { WANDERER: 3 } },
            { id: 'D', text: "البحر العميق المظلم.", weight: { ECHO: 2, SEER: 2 } },
        ]
    },
    {
        id: 27,
        text: "ما هي اللغة التي تتمنى التحدث بها؟",
        options: [
            { id: 'A', text: "لغة الحيوانات والوحوش.", weight: { WANDERER: 3, GUARDIAN: 1 } },
            { id: 'B', text: "لغة الآلات والرياضيات.", weight: { ARCHITECT: 4 } },
            { id: 'C', text: "لغة التاريخ والذكريات.", weight: { SEER: 3, ECHO: 1 } },
            { id: 'D', text: "لغة القلوب والمشاعر.", weight: { ECHO: 2, FLAME: 2 } },
        ]
    },
    {
        id: 28,
        text: "أي صوت يهدئ روحك؟",
        options: [
            { id: 'A', text: "صوت الأمواج المتلاطمة.", weight: { WANDERER: 2, ECHO: 2 } },
            { id: 'B', text: "صوت طقطقة النار.", weight: { FLAME: 3, SEER: 1 } },
            { id: 'C', text: "الصمت المطبق.", weight: { GUARDIAN: 2, ARCHITECT: 2 } },
            { id: 'D', text: "صوت الأذان أو التراتيل القديمة.", weight: { ECHO: 3, SEER: 1 } },
        ]
    },
    {
        id: 29,
        text: "كيف تتعامل مع الأسرار؟",
        options: [
            { id: 'A', text: "أدفنها عميقاً جداً.", weight: { ECHO: 3, GUARDIAN: 1 } },
            { id: 'B', text: "أستخدمها كأوراق رابحة.", weight: { ARCHITECT: 3, FLAME: 1 } },
            { id: 'C', text: "لا أهتم بها، الحقيقة ستظهر.", weight: { WANDERER: 2, SEER: 2 } },
            { id: 'D', text: "أبحث عن خفاياها وأحللها.", weight: { SEER: 3, ARCHITECT: 1 } },
        ]
    },
    {
        id: 30,
        text: "إذا كان عليك بناء منزل، أين تبنيه؟",
        options: [
            { id: 'A', text: "على قمة جبل لا يصله أحد.", weight: { SEER: 2, GUARDIAN: 2 } },
            { id: 'B', text: "في عربة متنقلة تجوب العالم.", weight: { WANDERER: 4 } },
            { id: 'C', text: "في قلب المدينة حيث الأحداث.", weight: { FLAME: 2, ARCHITECT: 2 } },
            { id: 'D', text: "بجانب أطلال قديمة.", weight: { ECHO: 4 } },
        ]
    },
    {
        id: 31,
        text: "ما هو سلاحك الأقوى في النقاش؟",
        options: [
            { id: 'A', text: "المنطق والحقائق المجردة.", weight: { ARCHITECT: 3, SEER: 1 } },
            { id: 'B', text: "الصوت العالي والحضور الطاغي.", weight: { FLAME: 3, GUARDIAN: 1 } },
            { id: 'C', text: "الاستشهاد بالتاريخ والتجارب.", weight: { ECHO: 3, GUARDIAN: 1 } },
            { id: 'D', text: "الانسحاب، لا جدوى من الجدال.", weight: { WANDERER: 3, SEER: 1 } },
        ]
    },
    {
        id: 32,
        text: "تجد سيفاً مغروساً في حجر. ماذا تفعل؟",
        options: [
            { id: 'A', text: "أحاول سحبه، ربما أنا المختار.", weight: { FLAME: 3, GUARDIAN: 1 } },
            { id: 'B', text: "أدرس الحجر، كيف غُرس السيف؟", weight: { ARCHITECT: 3, SEER: 1 } },
            { id: 'C', text: "أتركه، الأساطير تجلب المتاعب.", weight: { WANDERER: 3, ECHO: 1 } },
            { id: 'D', text: "أحميه من المتطفلين.", weight: { GUARDIAN: 4 } },
        ]
    },
    {
        id: 33,
        text: "ماذا يعني لك 'المنزل'؟",
        options: [
            { id: 'A', text: "المكان الذي أشعر فيه بالأمان.", weight: { GUARDIAN: 3, ECHO: 1 } },
            { id: 'B', text: "أينما أكون، هذا هو منزلي.", weight: { WANDERER: 4 } },
            { id: 'C', text: "القلعة التي أبنيها بمجدي.", weight: { ARCHITECT: 3, FLAME: 1 } },
            { id: 'D', text: "مجرد محطة مؤقتة.", weight: { SEER: 2, WANDERER: 2 } },
        ]
    },
    {
        id: 34,
        text: "لو كنت ملكاً، ماذا سيكون لقبك؟",
        options: [
            { id: 'A', text: "العادل.", weight: { guardian: 2, architect: 2 } },
            { id: 'B', text: "الفاتح.", weight: { flame: 3, wanderer: 1 } },
            { id: 'C', text: "الحكيم.", weight: { seer: 3, echo: 1 } },
            { id: 'D', text: "صاحب الأثر.", weight: { echo: 3, architect: 1 } },
        ]
    },
    {
        id: 35,
        text: "أمامك بوابة سوداء وبوابة بيضاء. أيهما تختار؟",
        options: [
            { id: 'A', text: "السوداء، لمعرفة ما يخفيه النور.", weight: { SEER: 3, FLAME: 1 } },
            { id: 'B', text: "البيضاء، الوضوح هو الغاية.", weight: { ARCHITECT: 3, GUARDIAN: 1 } },
            { id: 'C', text: "أبحث عن بوابة رمادية.", weight: { ECHO: 2, WANDERER: 2 } },
            { id: 'D', text: "لا أدخل أياً منهما، أصنع بوابتي.", weight: { WANDERER: 2, FLAME: 2 } },
        ]
    },
    {
        id: 36,
        text: "ما هو الوقت المفضل لديك؟",
        options: [
            { id: 'A', text: "الفجر، الولادة الجديدة.", weight: { GUARDIAN: 2, ARCHITECT: 2 } },
            { id: 'B', text: "الظهر، وضوح الرؤية.", weight: { FLAME: 2, ARCHITECT: 2 } },
            { id: 'C', text: "الغروب، الحنين والنهايات.", weight: { ECHO: 4 } },
            { id: 'D', text: "منتصف الليل، وقت السحر.", weight: { SEER: 3, WANDERER: 1 } },
        ]
    },
    {
        id: 37,
        text: "تخيل أنك فقدت بصرك. ماذا ستفعل؟",
        options: [
            { id: 'A', text: "أطور بصيرتي الداخلية.", weight: { SEER: 4 } },
            { id: 'B', text: "أعتمد على حواسي الأخرى للبقاء.", weight: { GUARDIAN: 2, WANDERER: 2 } },
            { id: 'C', text: "أصنع عيوناً اصطناعية.", weight: { ARCHITECT: 4 } },
            { id: 'D', text: "أستمع لأصوات الماضي.", weight: { ECHO: 3, SEER: 1 } },
        ]
    },
    {
        id: 38,
        text: "الكنز الحقيقي هو:",
        options: [
            { id: 'A', text: "الذهب والسلطة.", weight: { FLAME: 3, ARCHITECT: 1 } },
            { id: 'B', text: "المعرفة والحقيقة.", weight: { SEER: 3, ARCHITECT: 1 } },
            { id: 'C', text: "الصحة والسلامة.", weight: { GUARDIAN: 4 } },
            { id: 'D', text: "الذكريات والتجارب.", weight: { ECHO: 2, WANDERER: 2 } },
        ]
    },
    {
        id: 39,
        text: "لو كان بإمكانك تغيير شيء واحد في العالم، ماذا تغير؟",
        options: [
            { id: 'A', text: "أزيل الألم والمعاناة.", weight: { GUARDIAN: 3, SEER: 1 } },
            { id: 'B', text: "أمنح الجميع حرية مطلقة.", weight: { WANDERER: 3, FLAME: 1 } },
            { id: 'C', text: "أعيد تصميم القوانين الفيزيائية.", weight: { ARCHITECT: 4 } },
            { id: 'D', text: "أجعل الجميع يتذكرون كل شيء.", weight: { ECHO: 3, GUARDIAN: 1 } },
        ]
    },
    {
        id: 40,
        text: "ما هو الحيوان الذي يمثل روحك؟",
        options: [
            { id: 'A', text: "الذئب الوحيد.", weight: { WANDERER: 2, GUARDIAN: 2 } },
            { id: 'B', text: "البومة الحكيمة.", weight: { SEER: 3, ECHO: 1 } },
            { id: 'C', text: "الأسد القائد.", weight: { FLAME: 2, GUARDIAN: 2 } },
            { id: 'D', text: "العنكبوت النساج.", weight: { ARCHITECT: 3, SEER: 1 } },
        ]
    },
    {
        id: 41,
        text: "كيف تريد أن تموت؟",
        options: [
            { id: 'A', text: "في معركة ملحمية.", weight: { FLAME: 3, GUARDIAN: 1 } },
            { id: 'B', text: "بسلام في فراشي.", weight: { GUARDIAN: 2, ECHO: 2 } },
            { id: 'C', text: "أثناء اكتشاف مكان جديد.", weight: { WANDERER: 3, SEER: 1 } },
            { id: 'D', text: "تاركاً ورائي إرثاً لا ينسى.", weight: { ARCHITECT: 2, ECHO: 2 } },
        ]
    },
    {
        id: 42,
        text: "ما هو رد فعلك على الخيانة؟",
        options: [
            { id: 'A', text: "الانتقام الفوري.", weight: { FLAME: 3 } },
            { id: 'B', text: "التعلم من الدرس وعدم التكرار.", weight: { ARCHITECT: 2, SEER: 2 } },
            { id: 'C', text: "المغادرة بصمت.", weight: { WANDERER: 3 } },
            { id: 'D', text: "الحزن على ما فقدته.", weight: { ECHO: 3, GUARDIAN: 1 } },
        ]
    },
    {
        id: 43,
        text: "تجد رسالة في زجاجة على الشاطئ. ماذا تتمنى أن يكون فيها؟",
        options: [
            { id: 'A', text: "خريطة لجزيرة الكنز.", weight: { WANDERER: 2, FLAME: 2 } },
            { id: 'B', text: "حكمة من الماضي.", weight: { SEER: 3, GUARDIAN: 1 } },
            { id: 'C', text: "قصة حب ضائعة.", weight: { ECHO: 3, SEER: 1 } },
            { id: 'D', text: "مخطط لاختراع مذهل.", weight: { ARCHITECT: 3, SEER: 1 } },
        ]
    },
    {
        id: 44,
        text: "أيهما أهم؟",
        options: [
            { id: 'A', text: "الرحلة.", weight: { WANDERER: 3, ECHO: 1 } },
            { id: 'B', text: "الوصول.", weight: { FLAME: 2, ARCHITECT: 2 } },
            { id: 'C', text: "الرفقة.", weight: { GUARDIAN: 3, ECHO: 1 } },
            { id: 'D', text: "الهدف.", weight: { ARCHITECT: 3, SEER: 1 } },
        ]
    },
    {
        id: 45,
        text: "ما هو لون هالتك؟",
        options: [
            { id: 'A', text: "أحمر نابض.", weight: { FLAME: 4 } },
            { id: 'B', text: "أزرق هادئ.", weight: { SEER: 2, GUARDIAN: 2 } },
            { id: 'C', text: "أخضر متجدد.", weight: { WANDERER: 2, ARCHITECT: 2 } },
            { id: 'D', text: "فضي غامض.", weight: { ECHO: 3, SEER: 1 } },
        ]
    },
    {
        id: 46,
        text: "ماذا تفعل إذا انكسر سلاحك؟",
        options: [
            { id: 'A', text: "أقاتل بيدي.", weight: { FLAME: 3, GUARDIAN: 1 } },
            { id: 'B', text: "أصلحه فوراً.", weight: { ARCHITECT: 3, GUARDIAN: 1 } },
            { id: 'C', text: "أبحث عن سلاح بديل.", weight: { WANDERER: 2, ARCHITECT: 2 } },
            { id: 'D', text: "أستخدم عقلي كسلاح.", weight: { SEER: 3, ECHO: 1 } },
        ]
    },
    {
        id: 47,
        text: "ما هو دورك في المجموعة؟",
        options: [
            { id: 'A', text: "الحامي.", weight: { GUARDIAN: 4 } },
            { id: 'B', text: "المخطط.", weight: { ARCHITECT: 4 } },
            { id: 'C', text: "المستكشف.", weight: { WANDERER: 4 } },
            { id: 'D', text: "الروحاني.", weight: { SEER: 2, ECHO: 2 } },
        ]
    },
    {
        id: 48,
        text: "كيف تتعامل مع الفشل؟",
        options: [
            { id: 'A', text: "أشعر بالغضب وأحاول مجدداً.", weight: { FLAME: 3, ARCHITECT: 1 } },
            { id: 'B', text: "أحلل الأسباب لأتجنبه.", weight: { ARCHITECT: 3, SEER: 1 } },
            { id: 'C', text: "أتقبله كجزء من الرحلة.", weight: { WANDERER: 3, ECHO: 1 } },
            { id: 'D', text: "ألوم نفسي طويلاً.", weight: { ECHO: 2, GUARDIAN: 2 } },
        ]
    },
    {
        id: 49,
        text: "ما هو الشيء الذي لا يمكن شراؤه؟",
        options: [
            { id: 'A', text: "الوقت.", weight: { ECHO: 3, SEER: 1 } },
            { id: 'B', text: "الولاء.", weight: { GUARDIAN: 3, FLAME: 1 } },
            { id: 'C', text: "الموهبة.", weight: { ARCHITECT: 3, SEER: 1 } },
            { id: 'D', text: "الحرية.", weight: { WANDERER: 4 } },
        ]
    },
    {
        id: 50,
        text: "في النهاية، ماذا سيبقى منك؟",
        options: [
            { id: 'A', text: "عظامي في الأرض.", weight: { GUARDIAN: 2, ECHO: 2 } },
            { id: 'B', text: "أفعالي التي غيرت العالم.", weight: { FLAME: 2, ARCHITECT: 2 } },
            { id: 'C', text: "قصص سيرويها الآخرون.", weight: { ECHO: 3, WANDERER: 1 } },
            { id: 'D', text: "روحي التي ستعود لبارئها بسلام.", weight: { SEER: 3, WANDERER: 1 } },
        ]
    }
];
