<script>

import { Input, Label, Helper, Button, Toggle , A } from 'flowbite-svelte';

</script>




    <!--
<Button type="submit" size="md" color="red"  style="width:300px"  on:click={() => ( x++ ) } >add one</Button>

-->


<form method="POST" action="?/max_cpu_1">
    <Button type="submit" size="md" color="red"  style="width:300px"  >Start Max CPU (1 Minute)</Button>
</form>
    <br/>



    <form method="POST" action="?/max_cpu_5">
        <Button type="submit"  size="md" color="red"  style="width:300px"   >Start Max CPU (5 Minute)</Button>
    </form>
        <br/>


        <form method="POST" action="?/kill_app">
            <Button type="submit" size="md" color="red"   style="width:300px"  >Kill App</Button>
        </form>
            <br/>
