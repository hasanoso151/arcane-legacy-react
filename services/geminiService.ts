import { GoogleGenAI } from "@google/genai";
import { Archetype } from "../types";
import { ALL_QUESTIONS } from "../constants";

const API_KEY = process.env.API_KEY || '';

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateArcaneAnalysis = async (archetype: Archetype, answers: Record<number, string>): Promise<string> => {
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

    const prompt = `
      قم بتقمص شخصية "حارس السجلات القديمة" (The Keeper of Ancient Records).
      
      المهمة: اكتب تحليلاً غامضاً وعميقاً جداً لشخصية المستخدم بناءً على اختياراته (مساره) ونمطه الأركاني النهائي.
      
      بيانات المستخدم:
      النمط النهائي: ${archetype.name}
      اللقب: ${archetype.title}
      
      مسار الاختيارات التي قام بها (أسرار روحه):
      ${userPathContext}

      التعليمات الصارمة:
      1. **لا تسرد الاختيارات**: ممنوع قول "اخترت الباب" أو "فضلت الكتاب". هذا ركيك.
      2. **الهدف**: استنبط *الخيط الرفيع* الذي يربط بين هذه الاختيارات. هل هو الحذر؟ أم الجرأة؟ أم البحث عن الحقيقة؟
      3. اكتب نصاً متماسكاً يتدفق بسلاسة، يصف "جوهر هذه الشخصية" من الداخل.
      4. حافظ على **التواضع والواقعية**: صف صراعات النفس البشرية (الشك، اليقين، الأمل) بأسلوب أدبي عميق.
      5. ابتعد عن التأليه وصفات الغيب، وركز على "حكمة التجربة البشرية".
      6. الإيجاز الشديد: فقرة قصيرة جداً ومكثفة (لا تتجاوز 4 أسطر).
      7. لا تكرر الكلام، ادخل في الجوهر فوراً.

      الناتج المطلوب: جوهر خالص وقصير يعكس حقيقة نفسية عميقة بكلمات قليلة مؤثرة.
    `;

    const response = await ai.models.generateContent({
      model: 'gemma-3-12b-it',
      contents: prompt,
      config: {
        maxOutputTokens: 300, // Reduced from 600
        temperature: 0.8,
      }
    });

    return response.text || "تعذر فك رموز المخطوطة... طاقة الأثير مضطربة حالياً.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "لقد تلاشت الحروف من الحجر... حاول الاتصال بالأرواح القديمة مرة أخرى لاحقاً.";
  }
};
