<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		title: string;
		subtitle?: string;
	}

	let { children, title, subtitle }: Props = $props();
</script>

<div class="w-xs bg-muted dark:bg-muted/40 flex h-full flex-col rounded-lg p-4 shadow-sm">
	<header>
		<span class="mb-4 grid gap-1">
			<h2 class="text-xl font-bold">{title}</h2>
			<span class="text-foreground/50 text-sm">{subtitle}</span>
		</span>
	</header>

	<div class="grid gap-3">
		{@render children?.()}
	</div>
</div>
