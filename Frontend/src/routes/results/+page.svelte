<script>
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		ImagePlaceholder,
		Modal
	} from 'flowbite-svelte';

	
	export let data;


	import { slide } from 'svelte/transition';

	import { Input, Label, Helper, Button, Toggle , A } from 'flowbite-svelte';

	let openRow;
	let details;

	const toggleRow = (i) => {
		openRow = openRow === i ? null : i;
	};
</script>


<div class="mb-4 grid grid-cols-1 gap-1">
	<div class=" rounded bg-gray-50 dark:bg-gray-800">

		
		<Table>
			<TableHead>
        <TableHeadCell>Test Time</TableHeadCell>
				<TableHeadCell>Test ID</TableHeadCell>
				<TableHeadCell>Website URL</TableHeadCell>
				<TableHeadCell>Result</TableHeadCell>
				<TableHeadCell>HTTP Code</TableHeadCell>
        <TableHeadCell>Error Code</TableHeadCell>
				<TableHeadCell>Time Taken</TableHeadCell>


			</TableHead>
			<TableBody>
				{#each data.results as test, i}
					<TableBodyRow  class="hover:bg-gray-50 dark:hover:bg-gray-600">
            <TableBodyCell>{test.ts}</TableBodyCell>
						<TableBodyCell>{test.test_id}</TableBodyCell>
						<TableBodyCell>{test.url}</TableBodyCell>
						<TableBodyCell>{test.result}</TableBodyCell>
						<TableBodyCell>{test.httpcode}</TableBodyCell>
            <TableBodyCell>{test.errorcode}</TableBodyCell>
            <TableBodyCell>{test.time}</TableBodyCell>

					</TableBodyRow>
				{/each} 	
			</TableBody>
		</Table>
	</div>


</div>
