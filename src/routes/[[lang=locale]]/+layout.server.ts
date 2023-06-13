import type { LayoutServerLoad } from './$types';
// import '$lib/i18n';

export const load = (async({ params }) => {
    const { lang } = params;
    // TODO await setLocale(lang);
    return { lang };
}) satisfies LayoutServerLoad;