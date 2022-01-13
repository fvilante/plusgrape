<script lang='ts'>

    let seed = `Panambra 2022`

    let button_text = 'Criar codigo'
    let result:number[] = []

    const makeCode = (input: string) => {
        const encoded = input.split('').map( char => char.charCodeAt(0))
        return encoded
    }

    const onclick = () => {
        button_text = 'Aguarde...'
        setTimeout( () => {
            button_text = 'Criar codigo'
            result = makeCode(seed)
        }, 2000)
    }

</script>

    
<style>
    p.result {
        background-color: aquamarine;            
    }

</style>


<div class='container'>
    <input bind:value={seed}>
    <button on:click="{onclick}"> {button_text} </button>
    <p>Convertendo o texto '{seed}' para um codigo</p>
    resultado; <p class='result'>[{result}]</p>

</div>