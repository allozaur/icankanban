<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="flex w-full justify-start gap-4 p-4">
	{@render children?.()}
</div>
