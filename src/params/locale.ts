/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
    return /^(ko|en)$/i.test(param);
}