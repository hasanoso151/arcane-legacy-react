import { GoogleGenAI } from "@google/genai";
import { Archetype, Gender } from "../types";
import { ALL_QUESTIONS } from "../constants";

const API_KEY = process.env.API_KEY || '';

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateArcaneAnalysis = async (archetype: Archetype, answers: Record<number, string>, gender: Gender): Promise<string> => {
  try {
    // 1. Reconstruct the user's path (The Questions and the Answers they chose)
    let userPathContext = "";
    Object.entries(answers).forEach(([qId, optionId]) => {
      const question = ALL_QUESTIONS.find(q => q.id === Number(qId));
      if (question) {
        const selectedOption = question.options.find(opt => opt.id === optionId);
        if (selectedOption) {
          userPathContext += `- عندما سُئل: "${question.text}"\n  اختار: "${selectedOption.text}"\n`;
        }
      }
    });

    const isMale = gender === 'MALE';
    const localizedName = isMale ? archetype.name.male : archetype.name.female;
    const localizedTitle = isMale ? archetype.title.male : archetype.title.female;
    const genderContext = isMale ? "المستخدم ذكر. خاطبه بصيغة المذكر." : "المستخدم أنثى. خاطبها بصيغة المؤنث.";

    const prompt = `
      قم بتقمص شخصية "حارس السجلات القديمة" (The Keeper of Ancient Records).
      
      المهمة: اكتب تحليلاً غامضاً وعميقاً جداً لشخصية المستخدم بناءً على اختياراته (مساره) ونمطه الأركاني النهائي.
      
      بيانات المستخدم:
      الجنس: ${isMale ? 'ذكر' : 'أنثى'}
      النمط النهائي: ${localizedName}
      اللقب: ${localizedTitle}
      
      مسار الاختيارات التي قام بها (أسرار روحه):
      ${userPathContext}

      التعليمات الصارمة:
      1. **${genderContext}** (مهم جداً).
      2. **لا تسرد الاختيارات**: ممنوع قول "اخترت الباب" أو "فضلت الكتاب". هذا ركيك.
      3. **الهدف**: استنبط *الخيط الرفيع* الذي يربط بين هذه الاختيارات. هل هو الحذر؟ أم الجرأة؟ أم البحث عن الحقيقة؟
      4. اكتب نصاً متماسكاً يتدفق بسلاسة، يصف "جوهر هذه الشخصية" من الداخل.
      5. حافظ على **التواضع والواقعية**: صف صراعات النفس البشرية (الشك، اليقين، الأمل) بأسلوب أدبي عميق.
      6. ابتعد عن التأليه وصفات الغيب، وركز على "حكمة التجربة البشرية".
      7. الإيجاز الشديد جداً: جملة واحدة أو جملتان كحد أقصى (لا تتجاوز 30 كلمة).
      8. ممنوع الإطالة نهائياً.
      9. **ممنوع استخدام التشكيل نهائياً**: اكتب نصاً عربياً نظيفاً بدون أي حركات (ضمة، فتحة، كسرة، إلخ) لأنها تظهر بشكل خاطئ أحياناً.

      الناتج المطلوب: جوهر خالص في سطرين فقط بدون تشكيل.
    `;

    const response = await ai.models.generateContent({
      model: 'gemma-3-12b-it',
      contents: prompt,
      config: {
        maxOutputTokens: 150, // Reduced significantly to force brevity
        temperature: 0.7, // Slightly reduced to be more focused
      }
    });

    return response.text || "تعذر فك رموز المخطوطة... طاقة الأثير مضطربة حالياً.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "لقد تلاشت الحروف من الحجر... حاول الاتصال بالأرواح القديمة مرة أخرى لاحقاً.";
  }
};
