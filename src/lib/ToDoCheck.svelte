<script>
  import {tododb} from "./store"
  export let pos

  let box
  
  function updateTodo() {
    if(box.checked){
      tododb[pos].done.set(true)
      console.log(tododb.done)
    } else {
      tododb[pos].done.set(false)
      console.log(tododb.done)
    }
  }
</script>

<div>
  <input on:click={updateTodo} bind:value={box} type="checkbox" class="checkbox checkbox-info" />
</div>