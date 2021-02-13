<template>
    <div class="project" :class="{complete: project.complete}">
      <div class="actions">
          <h3  @click="showDetails = !showDetails"  >{{ project.title }}</h3>
        <div>

        <router-link :to="{ name: 'EditProject', params: { id: project.id } }">
          <span class="material-icons" > create </span>
        </router-link>
            <span class="material-icons" @click="deleteProject"> delete </span>
            <span class="material-icons tick"  @click="updateStatus" > done </span>
        </div>
      </div>
      <div v-if="showDetails" class="details">
        <p>
          {{ project.details }}
        </p>
      </div>

    </div>
</template>

<script>
    import Filternav from "@/components/FilterNav";
    export default {
        name: 'Singleproject',
      components: {Filternav},
      props: ['project'],
        data(){
          return{
            showDetails: false,
            url: "http://localhost:3000/projects/" + this.project.id
          }
        },
        methods: {
          deleteProject(){
            fetch(this.url, {method: 'DELETE'})
            .then(() => this.$emit('delete', this.project.id))
            .catch(err => console.log(err.message))
          },
          updateStatus(){
            fetch(this.url, {method: 'PATCH',
                                 headers: {'Content-Type': 'application/json'},
                                  body: JSON.stringify({'complete': !this.project.complete})
                                })
            .then(() => this.$emit('update', this.project.id))
            .catch(err => console.log(err.message))
          }
        },

    };
</script>

<style>
  .project{
    margin: 20px auto;
    background: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.05);
    border-left: 4px solid #e90074;
  }

  h3{
    cursor: pointer;
  }
  .actions{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .material-icons{
    font-size: 24px;
    margin-left: 10px;
    color: #bbb;
    cursor: pointer;
  }
  .material-icons:hover{
    color: #777;
  }
  .project.complete{
  border-left: 4px solid #00ce89;
  }
  .project.complete .tick {
  color: #00ce89;
    }
</style>
