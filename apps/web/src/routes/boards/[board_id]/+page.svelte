<script lang="ts">
	import KanbanCard from '$lib/components/KanbanCard.svelte';
	import KanbanColumn from '$lib/components/KanbanColumn.svelte';
	import KanbanColumnsWrapper from '$lib/components/KanbanColumnsWrapper.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Plus } from '@lucide/svelte';

	let { data } = $props();
</script>

<main>
	<h1 class="p-6 text-3xl font-semibold">{data.board.name}</h1>

	<KanbanColumnsWrapper>
		{#each data.board.columns as column}
			<KanbanColumn title={column.name}>
				{#each data.tasks.filter((task) => task.columnId === column.id) as task}
					<KanbanCard title={task.title} />
				{/each}
			</KanbanColumn>
		{/each}

		<Button>
			<Plus />
		</Button>
	</KanbanColumnsWrapper>
</main>
