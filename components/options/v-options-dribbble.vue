<template>
  <div class="options-dribbble" v-if="service">
    <v-checkbox @change="onCheckboxChange" :checked="service.gifs" name="dribbbleGifs" label="Play gifs"></v-checkbox>
    <v-checkbox @change="onCheckboxChange" :checked="service.smallImages" name="dribbbleSmallImages" label="Small images"></v-checkbox>
    <v-input type="number" @change="onChange" :value="service.panelWidth" name="dribbbleWidth" label="Panel width in px"></v-input>
    <v-input type="number" @change="onChange" :value="service.refresh" name="dribbbleRefresh" label="Refresh rate (in minutes)"></v-input>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import vInput from 'components/v-input';
  import vCheckbox from 'components/v-checkbox';

  export default {
    components: {
      vInput,
      vCheckbox
    },
    computed: {
      ...mapState({
        services: 'services',
        service (state) {
          return state.services.find(s => s.id === 10);
        }
      })
    },

    methods: {
      onChange (name, newVal) {
        this.saveData(this.service.id, name, newVal)
      },
      onCheckboxChange (name, value) {
        if (name === 'dribbbleGifs') {
          this.saveData(this.service.id, name, !this.service.gifs);
        } else if (name === 'dribbbleSmallImages') {
          this.saveData(this.service.id, !this.service.smallImages);
        }
      }
    },
  }
</script>

