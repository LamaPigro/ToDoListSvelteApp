<script>
  import {tododb} from "./store"
  
  let nuovoTodo

  function addTodo() {
    //tododb.set(value), imposto io quanto deve valere

    tododb.update(oldValue => {
      oldValue.push({
        content: nuovoTodo,
        done: false
      })
      return oldValue
    })
    
  }
</script>

<input bind:value={nuovoTodo} type="text" placeholder="Inserisci la cosa da fare" class="input input-bordered input-info w-full max-w-xs" />

<button on:click={addTodo} class="btn btn-info"> + </button>

