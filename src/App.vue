<template>
  <div id="app">
   
    <toptop></toptop>
    <navnav></navnav>
    <profile></profile>
    <experiences></experiences>
    <abilities></abilities>
    <projects></projects>
    <contact></contact>

  
  </div>
</template>

<script>

 
  import toptop from './components/toptop'
  import navnav from './components/navnav'
  import profile from './components/profile'
  import contact from './components/contact'
  import experiences from './components/experiences'
  import abilities from './components/abilities'
  import projects from './components/projects'

export default {
  name: 'app',
  components: { contact,experiences,abilities,projects,profile,navnav,toptop },
 
}
</script>

<style lang="scss">

</style>