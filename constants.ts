import { Archetype, Question } from './types';

export const ARCHETYPES: Record<string, Archetype> = {
  SEER: {
    id: 'SEER',
    name: { male: 'الرائي المنسي', female: 'الرائية المنسية' },
    title: { male: 'حامل مرآة الحقيقة', female: 'حاملة مرآة الحقيقة' },
    baseDescription: 'أنت ترى ما يخفيه الزمن خلف ستائر الواقع.',
  },
  GUARDIAN: {
    id: 'GUARDIAN',
    name: { male: 'حارس العهد القديم', female: 'حارسة العهد القديم' },
    title: { male: 'درع القلعة الصامتة', female: 'درع القلعة الصامتة' },
    baseDescription: 'الثبات هو جوهر روحك، كالجبل الذي لا يهزه ريح.',
  },
  ARCHITECT: {
    id: 'ARCHITECT',
    name: { male: 'مهندس الظلال', female: 'مهندسة الظلال' },
    title: { male: 'ناسج خيوط الرؤى', female: 'ناسجة خيوط الرؤى' },
    baseDescription: 'العقل المدبر الذي يرسم المسارات من شظايا الخيال.',
  },
  FLAME: {
    id: 'FLAME',
    name: { male: 'سادن اللهب الأزلي', female: 'سادنة اللهب الأزلي' },
    title: { male: 'شعلة العزم المتقدة', female: 'شعلة العزم المتقدة' },
    baseDescription: 'تحترق لتضيء، وتذيب الجليد الذي يعيق تقدمك.',
  },
  ECHO: {
    id: 'ECHO',
    name: { male: 'صدى الوديان العميقة', female: 'صدى الوديان العميقة' },
    title: { male: 'ذاكرة الأرض', female: 'ذاكرة الأرض' },
    baseDescription: 'أنت الصوت الذي يبقى بعد رحيل الجميع.',
  },
  WANDERER: {
    id: 'WANDERER',
    name: { male: 'عابر الآفاق المحرمة', female: 'عابرة الآفاق المحرمة' },
    title: { male: 'مكتشف المجهول', female: 'مكتشفة المجهول' },
    baseDescription: 'لا حدود تقيدك، ولا أسوار تحجب رؤيتك.',
  }
};

import { ALL_QUESTIONS } from './questions_data';

export { ALL_QUESTIONS };
export const QUESTIONS = ALL_QUESTIONS;
