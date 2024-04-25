<script>

    import { Input, Label, Helper, Button, Toggle , A } from 'flowbite-svelte';
    
    let a =5;

</script>
    


<Button type="submit" size="md" color="red"  style="width:300px"  on:click={() => ( a++ ) } >add one</Button>

<p style="color:white">
    {a}

</p>
