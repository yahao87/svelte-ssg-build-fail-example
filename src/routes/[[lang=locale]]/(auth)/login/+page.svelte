<script lang="ts">
    import { getStores, navigating, page, updated } from "$app/stores";

    function transformUrl(url: string) {
        const { lang } = $page.params;
        if (!lang) return url;
        else if (url.startsWith(`/${lang}`) || url.startsWith("http"))
            return url;
        return `/${lang}` + url;
    }
</script>

<h1>Login</h1>
<a href={transformUrl("/")}>/</a>
<a href={transformUrl("/about")}>/about</a>
<a href={transformUrl("/login")}>/login</a>