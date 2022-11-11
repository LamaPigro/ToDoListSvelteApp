<script>
  import ToDoCheck from "./ToDoCheck.svelte"
  
  export let todo
  export let pos

</script>

<div>
  <label class="cursor-pointer label">
    <ToDoCheck pos={pos}/>
    <p class="label-text">{todo.content} {pos}</p> 
  </label>
</div>