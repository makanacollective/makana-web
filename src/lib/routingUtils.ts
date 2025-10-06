import type { AnyTargetableDocumentStub, CollectionDocument, CollectionDocumentType, Language } from '@root/sanity/sanity.types';
import { getSlug } from '@lib/contentUtils';

export const HOME_PAGE_PATHNAME = '/';

export const LOCALE_PREFIXES: Record<Language, string> = {
    ar: 'ar',
    en: 'en',
};

type LocalisedRecord<T> = {
    [L in Language]: T;
};

type DocumentTypePaths = {
  [K in CollectionDocumentType]: LocalisedRecord<string>;
};

export const DOCUMENT_COLLECTION_PATHS: DocumentTypePaths = {
    project: {
        ar: 'mashrouat',
        en: 'projects',
    },
    writing: {
        ar: 'kitabat',
        en: 'writings',
    },
    happening: {
        ar: 'baramij',
        en: 'happenings',
    },
    resource: {
        ar: 'mawarid',
        en: 'resources',
    },
    specialProject_counterMap_initiative: {
        ar: 'mubadarat',
        en: 'initiatives',
    },
};

const isCollectionDocument = (doc: AnyTargetableDocumentStub): doc is CollectionDocument => {
    return doc._type in DOCUMENT_COLLECTION_PATHS;
};

export type SubpageKey = 'counter-map-information' | 'counter-map-contribute';

export type SubpageSlug = 'information' | 'maaloumat' | 'contribute' | 'lil-musahama';

export const COUNTER_MAP_SUBPAGE_PATHS: Record<SubpageKey, LocalisedRecord<SubpageSlug>> = {
    'counter-map-information': {
        en: 'information',
        ar: 'maaloumat',
    },
    'counter-map-contribute': {
        en: 'contribute',
        ar: 'lil-musahama',
    },
};

export const getSubpageKeyFromSlug = (
    slug: SubpageSlug,
    lang: Language,
): SubpageKey | undefined => {
    return (Object.keys(COUNTER_MAP_SUBPAGE_PATHS) as SubpageKey[]).find((key) => {
        return COUNTER_MAP_SUBPAGE_PATHS[key][lang] === slug;
    });
};

export const generateRoute = (
    doc: AnyTargetableDocumentStub | undefined,
    lang: Language | undefined,
): string | undefined => {
    if (!doc || !lang) return undefined;
    const localePath = LOCALE_PREFIXES[lang];
    const slug = getSlug(doc, lang);
    if (!slug) return undefined;
    if (isCollectionDocument(doc)) {
        const collectionPath: string = DOCUMENT_COLLECTION_PATHS[doc._type][lang];
        return `/${localePath}/${collectionPath}/${slug}/`;
    } else {
        return `/${localePath}/${slug}/`;
    }
};