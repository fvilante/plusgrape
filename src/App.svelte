<script lang="ts">
  import logo from './assets/julia-labs-logo.png'
  import Counter from './lib/Counter.svelte'
  import Logo from './lib/Logo.svelte'
  import Titulo from './lib/Titulo.svelte'

  const ipAddress = `192.168.15.80`
  const port = `8080`
  const httpAddress= `http://${ipAddress}:${port}`

</script>

<main>

  <div class='upperbar'>
    <Logo/>
    <Titulo/>
  </div>

  <p>clique em `controle` abaixo, a qualquer momento para proseguir</p>
  <a href="{httpAddress}"> controle </a>
  <br>
  <p class='ip'> {httpAddress} </p>

</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  div.upperbar {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: stretch;
    border: 1px solid black
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  img {
    height: 160rem;
    width: 160rem;
  }

  a {
    display: inline-block;
    width: 100px;
    background-color: beige;
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
  }

  a:hover {
    display: inline-block;
    width: 100px;
    background-color: beige;
    border: 5px solid red;
    padding: 10px;
    margin: 10px;
  }
  
  p {
    max-width: 54rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  p.ip {
    font-size: small;
    font-style: italic;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
