<script>
  import ToDoCounter from "./lib/ToDoCounter.svelte"
  import ToDoView from "./lib/ToDoView.svelte"
  import AddTodoForm from "./lib/AddTodoForm.svelte"
  import ToDoCheck from "./lib/ToDoCheck.svelte"

  import {tododb} from "./lib/store"
</script>

<main>
  <h1>ToDo List</h1>
  <ToDoCounter />
    {#each $tododb as todo, index}
    <ToDoView todo={todo} pos={index}/>
    {/each}
  <AddTodoForm />
</main>

<style>

</style>
