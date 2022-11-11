<script>
  import {tododb} from "./store"
  export let pos

  let checkbox
  
  function updateTodo() {
    if(checkbox){
      tododb.update(oldValue => {
        oldValue[pos].done = true
        
        
        console.log(oldValue[pos].done)
        return oldValue
      })
    } else {
      tododb.update(oldValue => {
        oldValue[pos].done = false
        return oldValue
      })
    }
  }
</script>

<div>
  <input bind:checked={checkbox} on:click={updateTodo} type="checkbox" class="checkbox checkbox-info" />
</div>