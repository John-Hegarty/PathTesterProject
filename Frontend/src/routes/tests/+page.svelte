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
				<TableHeadCell>Test ID</TableHeadCell>
				<TableHeadCell>Test State</TableHeadCell>
				<TableHeadCell>Website URL</TableHeadCell>
				<TableHeadCell>Schedule</TableHeadCell>
				<TableHeadCell style="">Will Run Next </TableHeadCell>
				<TableHeadCell><Button type="submit" size="sm" style="float:right" on:click={() => (details=  {id:'New',url:'',active:true,schedule:'*/5 * * * *'})}>New</Button></TableHeadCell>
			</TableHead>
			<TableBody>
				{#each data.schedules as test, i}
					<TableBodyRow
						on:click={() => (details = test)}  class="hover:bg-gray-50 dark:hover:bg-gray-600">
						<TableBodyCell>{test.id}</TableBodyCell>
						<TableBodyCell>{test.active == 1 ? 'Active' : 'Inactive'}</TableBodyCell>
						<TableBodyCell>{test.url}</TableBodyCell>
						<TableBodyCell>{test.schedule}</TableBodyCell>
						<TableBodyCell>{new Date(test.nextrun)}</TableBodyCell>
					</TableBodyRow>
				{/each} 	
			</TableBody>
		</Table>
	</div>

	<Modal title="Test : {details?.id}" open={!!details}>

		<form method="POST">


		<div class="mb-6 grid gap-6 md:grid-cols-2">
			<div>
				<Label for="test_id" class="mb-2">Test ID</Label>
				<Input type="text" name="id"  readonly value={details.id} />
			</div>
        <div>
			<Label for="test_active" class="mb-2">Test State</Label>

			<ul class="w-full items-center divide-x divide-gray-200 rounded-lg border border-gray-200 dark:divide-gray-600 dark:border-gray-600 dark:bg-gray-800 sm:flex rtl:divide-x-reverse">
				<li class="w-full">
					<Toggle class="p-3" name="active" checked={details.active}>Active</Toggle>
				</li>
			</ul>
		</div>
		<div>
			<Label for="test_url" class="mb-2">Website URL</Label>
			<Input type="text" name="url" value={details.url} required />
		</div>
		<div>
			<Label for="Schedule" class="mb-2">Schedule</Label>
			<Input type="text" name="schedule" placeholder="" value={details.schedule} required />
		</div>

		<Button type="submit" size="sm" class="float-right">Update</Button>
	
	
  </div>
</form>


	</Modal>
</div>
