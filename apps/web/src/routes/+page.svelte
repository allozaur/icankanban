<script lang="ts">
	import { page } from '$app/state';

	let boards = $derived(page.data.boards);
</script>

<main>
	<h1>Your Boards</h1>

	<ul>
		{#each boards as board}
			<li>
				<a href={`/boards/${board.id}`}>{board.name}</a>
			</li>
		{/each}
	</ul>
</main>
