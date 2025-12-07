import { Archetype, Question } from './types';

export const ARCHETYPES: Record<string, Archetype> = {
  SEER: {
    id: 'SEER',
    name: 'الرائي المنسي',
    title: 'حامل مرآة الحقيقة',
    baseDescription: 'أنت ترى ما يخفيه الزمن خلف ستائر الواقع.',
  },
  GUARDIAN: {
    id: 'GUARDIAN',
    name: 'حارس العهد القديم',
    title: 'درع القلعة الصامتة',
    baseDescription: 'الثبات هو جوهر روحك، كالجبل الذي لا يهزه ريح.',
  },
  ARCHITECT: {
    id: 'ARCHITECT',
    name: 'مهندس الظلال',
    title: 'ناسج خيوط الرؤى',
    baseDescription: 'العقل المدبر الذي يرسم المسارات من شظايا الخيال.',
  },
  FLAME: {
    id: 'FLAME',
    name: 'سادن اللهب الأزلي',
    title: 'شعلة العزم المتقدة',
    baseDescription: 'تحترق لتضيء، وتذيب الجليد الذي يعيق تقدمك.',
  },
  ECHO: {
    id: 'ECHO',
    name: 'صدى الوديان العميقة',
    title: 'ذاكرة الأرض',
    baseDescription: 'أنت الصوت الذي يبقى بعد رحيل الجميع.',
  },
  WANDERER: {
    id: 'WANDERER',
    name: 'عابر الآفاق المحرمة',
    title: 'مكتشف المجهول',
    baseDescription: 'لا حدود تقيدك، ولا أسوار تحجب رؤيتك.',
  }
};

import { ALL_QUESTIONS } from './questions_data';

export { ALL_QUESTIONS };
export const QUESTIONS = ALL_QUESTIONS;
