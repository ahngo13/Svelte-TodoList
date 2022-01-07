<script>
import { count, todos, title } from "../stores";
import Button from '@smui/button';
import TextField from '@smui/textfield';
import List, { Item, Separator, Text } from '@smui/list';

function handleKeyup(e){
    title.setTodoTitle(e.target.value);
    if(e.keyCode === 13){
        handleInsert();
        title.setTodoTitle('');
    }
}

function handleInsert(){
    todos.insert($title);
    title.setTodoTitle('');
}

function handleDelete(id){
    todos.delete(id);
}

</script>
<svelte:head>

    <title>index</title>
</svelte:head>

<h1>To Do List</h1>
<div>
    <TextField value={$title} on:keyup={handleKeyup}/><Button on:click={handleInsert}>입력</Button></div>
<List >
    {#if $todos.length }
        {#each $todos as todo, i}
            <Item >{todo.title} <Button on:click={()=>handleDelete(todo.id)}>삭제</Button></Item >
        {/each}
    {/if}
</List >
<h1>The count is {$count}</h1>
<button on:click={count.increment}>+</button>
<button on:click={count.decrement}>-</button>
<button on:click={count.reset}>reset</button>