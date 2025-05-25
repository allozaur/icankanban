<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Badge from '$lib/components/ui/badge/badge.svelte';

	interface Props {
		labels?: KanbanLabel[];
		title: string;
	}

	let { labels, title }: Props = $props();
</script>

<Card.Root class="dark:bg-muted/70 p-4">
	<Card.Header class="flex px-0 py-0">
		<Card.Title>{title}</Card.Title>
	</Card.Header>

	{#if labels?.length}
		<Card.Content class="flex flex-wrap gap-1">
			{#each labels as label}
				<Badge style="background-color: {label.color}">{label.name}</Badge>
			{/each}
		</Card.Content>
	{/if}
</Card.Root>
