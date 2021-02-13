<template>
  <div class="home">
    <Filternav @filterNav="current = $event" :current="current" />
    <div v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
          <Singleproject :project="project" @delete="handleDelete" @update="handleUpdate" />
      </div>
    </div>
  </div>
</template>

<script>
import Singleproject from "@/components/SingleProject.vue";
import Navbar from "@/components/Navbar";
import Filternav from "@/components/FilterNav";
export default {
  name: 'Home',
  data(){
    return{
      projects: [],
      current: 'all'
    }
  },
  methods: {
    handleDelete(id){
        this.projects = this.projects.filter((project) => {
          return project.id !== id
        })
    },
    handleUpdate(id){
      let p = this.projects.find((project) => {
        return project.id === id
      })
      p.complete = !p.complete
    }
  },
  computed: {
    filteredProjects(){
      if(this.current === 'completed'){
        return this.projects.filter(project => project.complete)
      }
      if(this.current === 'ongoing'){
        return this.projects.filter(project => !project.complete)
      }
      return this.projects
    }
  },
  mounted() {
    fetch("http://localhost:3000/projects")
    .then(res => res.json())
    .then(data => this.projects =data)
    .catch(err => console.log(err.message))
  },
  components: {Filternav, Navbar, Singleproject }
}
</script>



