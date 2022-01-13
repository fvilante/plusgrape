<script lang="ts">
  import logo from './assets/julia-labs-logo.png'
  import Counter from './lib/Counter.svelte'
  import Logo from './lib/Logo.svelte'
  import Titulo from './lib/Titulo.svelte'
</script>

<main>

  <div class='upperbar'>
    <Logo/>
    <Titulo/>
  </div>

  <p>clique em </p>
  <a href="http://192.168.15.80:8080/"> controle </a>
  <p>a qualquer momento para prosseguir</p>

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

  
  p {
    max-width: 54rem;
    margin: 1rem auto;
    line-height: 1.35;
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
