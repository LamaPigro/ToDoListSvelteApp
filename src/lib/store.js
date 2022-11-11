import {writable} from "svelte/store" // funzione che crea un oggetto che gestisce le notifiche

// MODEL, contenitore dati
export const tododb = writable([
  {
    content: "test",
    done: false,
  },
  {
    content: "test2",
    done: false,
  }
]) // export con nome

