import type { AnyTargetableDocumentType, Language } from '@root/sanity/sanity.types';
import { HOME_PAGE_PATHNAME, type CounterMapSubpageKey } from '@lib/routingUtils';

type LocalisedRecord<T> = {
    [L in Language]: T;
};

type DocumentTypeLabels = {
  [K in AnyTargetableDocumentType]: LocalisedRecord<string>;
};

type CounterMapSubpageTitles = {
  [K in CounterMapSubpageKey]: LocalisedRecord<string | null>;
};

export const UI_DICTIONARY: DocumentTypeLabels & CounterMapSubpageTitles & {
    websiteTitle: LocalisedRecord<string>;
    untitledLabel: LocalisedRecord<string>;
    navigationMenuLabel: LocalisedRecord<string>;
    featuredItemsLabel: LocalisedRecord<string>;
    languageSwitchLabel: LocalisedRecord<string>;
    languageSwitchSymbol: LocalisedRecord<string>;
    submitButtonLabel: LocalisedRecord<string>;
    closeButtonLabel: LocalisedRecord<string>;
    closeButtonSymbol: string;
    backButtonLabel: LocalisedRecord<string>;
    backButtonSymbol: string;
    optionSelectPlaceholder: LocalisedRecord<string>;
    error404Message: LocalisedRecord<string>;
    comma: LocalisedRecord<string>;
    monthNames: LocalisedRecord<string[]>;
    datePlaceholder: string;
    timeAmLabel: LocalisedRecord<string>;
    timePmLabel: LocalisedRecord<string>;
    counterMapInformationLabel: LocalisedRecord<string>;
    counterMapProcessLabel: LocalisedRecord<string>;
    counterMapContributeLabel: LocalisedRecord<string>;
    counterMapInformationSymbol: string;
    counterMapProcessSymbol: string;
    counterMapContributeSymbol: string;
} = {
    websiteTitle: {
        ar: 'مكانة',
        en: 'makāna',
    },
    untitledLabel: {
        ar: 'بلا عنوان',
        en: 'Untitled',
    },
    navigationMenuLabel: {
        ar: 'قائمة التصفح العربية',
        en: 'English navigation menu',
    },
    featuredItemsLabel: {
        ar: 'مختارات',
        en: 'Featured items',
    },
    languageSwitchLabel: {
        ar: 'المطالعة بالعربية',
        en: 'View in English',
    },
    languageSwitchSymbol: {
        ar: `<svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M12.07,18c-.57,0-1.09-.07-1.56-.22-.47-.15-.87-.36-1.21-.65s-.59-.65-.77-1.07c-.18-.42-.27-.91-.27-1.47,0-.71.22-1.36.65-1.95.44-.59,1.05-1.05,1.85-1.39v-.07c-.5-.31-.89-.68-1.17-1.13s-.42-.91-.42-1.41c0-.4.07-.76.2-1.08.13-.33.31-.6.53-.84.22-.23.49-.41.8-.54.31-.13.63-.19.98-.19.5,0,.94.1,1.31.31.37.21.68.5.92.88l-.66.77c-.23-.28-.47-.49-.73-.62-.26-.13-.56-.2-.89-.2-.5,0-.88.14-1.14.42s-.39.65-.39,1.1c0,.29.05.54.16.75s.26.38.46.52c.19.13.42.23.69.3.27.07.56.1.88.1.37,0,.75-.04,1.15-.12l1.07-.2.2,1.03-1.74.37c-1.28.27-2.22.64-2.83,1.09-.61.45-.91,1.03-.91,1.74v.26c0,.74.25,1.31.76,1.72.51.4,1.2.61,2.08.61.57,0,1.1-.1,1.58-.31.48-.21.94-.54,1.39-1.01l.71.88c-.55.57-1.11.99-1.7,1.24-.59.26-1.25.38-1.99.38Z'/></svg>`,
        en: `<svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M10.38,16.5h-5.49V7.5h5.49v.95h-4.41v3.02h4.15v.95h-4.15v3.12h4.41v.95Z'/><path d='M17.87,16.5l-3.29-5.49-1.08-2h-.04v7.49h-1.06V7.5h1.25l3.29,5.49,1.08,2h.04v-7.49h1.06v9h-1.25Z'/></svg>`,
    },
    submitButtonLabel: {
        ar: 'إرسال',
        en: 'Submit',
    },
    closeButtonLabel: {
        ar: 'إغلاق',
        en: 'Close',
    },
    closeButtonSymbol: `<svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><line x1='6' y1='6' x2='18' y2='18'/><line x1='6' y1='18' x2='18' y2='6'/></svg>`,
    backButtonLabel: {
        ar: 'إغلاق',
        en: 'Close',
    },
    backButtonSymbol: `<svg width='48' height='24' viewBox='0 0 48 24' xmlns='http://www.w3.org/2000/svg'><line x1='42' y1='12' x2='12' y2='12'/><polyline points='18 6, 12 12, 18 18'/></svg>`,
    optionSelectPlaceholder: {
        ar: '-- يرجى الاختيار --',
        en: '-- select an option --',
    },
    error404Message: {
        ar: `<h1>خطأ 404: الصفحة غير موجودة</h1><p>يبدو أن الصفحة التي تبحثون عنها قد نُقلت أو حُذفت، أو ربّما لم تكن موجودة من الأساس.</p><p>يمكنكم تجربة ما يلي:</p><ol><li>التأكد من صحة الرابط</li><li>العودة إلى <a href='${HOME_PAGE_PATHNAME}'>الصفحة الرئيسة</a></li></ol><p>إذا استمرت المشكلة، يُرجى التواصل معنا أو إعادة المحاولة لاحقًا.</p><p><em>مكانة</em></p>`,
        en: `<h1>Error 404: Page not found</h1><p>It looks like the page you are looking for may have been moved or deleted, or may never have existed.</p><p>You can try the following:</p><ol><li>Check the URL for any mistakes</li><li>Go back to the <a href='${HOME_PAGE_PATHNAME}'>homepage</a></li></ol><p>If the issue continues, please contact us or try again later.</p><p><em>makāna</em></p>`,
    },
    comma: {
        ar: '،',
        en: ',',
    },
    monthNames: {
        ar: ['كانون الثاني', 'شباط', 'آذار', 'نيسان', 'أيار', 'حزيران', 'تموز', 'آب', 'أيلول', 'تشرين الأول', 'تشرين الثاني', 'كانون الأول'],
        en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    },
    datePlaceholder: '00_00_0000',
    timeAmLabel: {
        ar: 'ص',
        en: 'AM',
    },
    timePmLabel: {
        ar: 'م',
        en: 'PM',
    },
    aboutPage: {
        ar: 'عن مكانة',
        en: 'About',
    },
    project: {
        ar: 'مشروعات',
        en: 'Projects',
    },
    writing: {
        ar: 'كتابات',
        en: 'Writings',
    },
    happening: {
        ar: 'برامج',
        en: 'Happenings',
    },
    resource: {
        ar: 'موارد',
        en: 'Resources',
    },
    specialProject_counterMap: {
        ar: 'خريطة عمّان المضادة',
        en: 'Counter-Map of Amman',
    },
    specialProject_counterMap_initiative: {
        ar: 'مبادرات',
        en: 'Initiatives',
    },
    'counter-map-information': {
        ar: null,
        en: null,
    },
    'counter-map-process': {
        ar: 'منهجية إعداد الخريطة',
        en: 'Mapping Process',
    },
    'counter-map-contribute': {
        ar: 'المساهمة في قائمة المبادرات',
        en: 'Contribute to our list of initiatives',
    },
    counterMapInformationLabel: {
        ar: 'معلومات حول الخريطة',
        en: 'About the map',
    },
    counterMapProcessLabel: {
        ar: 'معلومات حول منهجية إعداد الخريطة',
        en: 'About the mapping process',
    },
    counterMapContributeLabel: {
        ar: 'المساهمة في قائمة المبادرات',
        en: 'Contribute to our list of initiatives',
    },
    counterMapInformationSymbol: `<svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M12,8.6c-.2,0-.4,0-.5-.2,0-.1-.1-.2-.1-.4v-.2c0-.2,0-.3.1-.4,0-.1.2-.2.5-.2s.4,0,.5.2.1.2.1.4v.2c0,.2,0,.3-.1.4s-.2.2-.5.2ZM11.5,16.4v-6.3h1v6.3h-1Z'/></svg>`,
    counterMapProcessSymbol: `<svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><circle cx='7' cy='12' r='1.1'/><circle cx='12' cy='12' r='1.1'/><circle cx='17' cy='12' r='1.1'/></svg>`,
    counterMapContributeSymbol: `<svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><line x1='12' y1='4' x2='12' y2='20'/><line x1='4' y1='12' x2='20' y2='12'/></svg>`,
};