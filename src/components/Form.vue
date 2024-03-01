<template>
  <div>
    <div class="breadcrumb">
      <b-breadcrumb :items="bread"></b-breadcrumb>
    </div>
    <div class="overflow-auto">
      <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"></b-pagination>

      <p class="mt-3">Current Page: {{ currentPage }}</p>

      <b-table id="my-table" :items="items" :per-page="perPage" :current-page="currentPage" small></b-table>
    </div>


    <div class="form">
      <div>

        <div>
          <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group id="input-group-2" label="Ingresa tu nombre" label-for="input-2" :state="nombreState">
              <b-form-input id="input-2" v-model="form.name" placeholder="Ingresa tu nombre"
                @input="validateNombre"></b-form-input>
              <b-form-invalid-feedback :state="nombreState">
                {{ nombreState === false ? "El nombre no debe contener números." : "" }}
              </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group id="input-group-2" label="Ingresa tu edad" label-for="input-2" @reset="onReset"
              :state="edadState">
              <b-form-input id="input-2" v-model="form.edad" placeholder="Ingresa tu edad"
                @input="validateEdad"></b-form-input>
              <b-form-invalid-feedback :state="edadState">
                {{ edadState === false ? "La edad debe ser un número positivo y no mayor a 100." : "" }}
              </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group id="input-group-2" label="Ingresa tu cuatrimestre" label-for="input-2" @reset="onReset"
              :state="cuatrimestreState">
              <b-form-input id="input-2" v-model="form.cuatrimestre" placeholder="Ingresa tu cuatrimestre"
                @input="validateCuatrimestre"></b-form-input>
              <b-form-invalid-feedback :state="cuatrimestreState">
                {{ cuatrimestreState === false ? "El cuatrimestre debe ser un número entre 1 y 12." : "" }}
              </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group id="input-group-2" label="Ingresa tu carrera" label-for="input-2" @reset="onReset"
              :state="carreraState">
              <b-form-input id="input-2" v-model="form.carrera" placeholder="ingresa tu carrera"
                @input="validateCarrera"></b-form-input>
              <b-form-invalid-feedback :state="carreraState">
                {{ carreraState === false ? "La carrera no debe contener números." : "" }}
              </b-form-invalid-feedback>
            </b-form-group>
            <div class="button">
              <b-button class="button" @click="onSubmit" variant="primary">Aceptar</b-button>
              <b-button @click="onReset" variant="danger">Cancelar</b-button>
            </div>


            <p class="p" v-if="error">{{ error }}</p>
          </b-form>
        </div>

      </div>
    </div>


  </div>
</template>
    
<script>
export default {
  name: "form",
  data() {
    return {
      bread: [
        {
          text: "inicio",
          href: "/",
          name: "inicio",
        },
        {
          text: "form",
          href: "/form",
          name: "form",
        },
      ],
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      perPage: 3,
      currentPage: 1,
      items: [
        {
          id: 1,
          first_name: "Juan",
          edad: "20",
          cuatrimestre: "3",
          carrera: "Ingeniería Civil",
        },
        {
          id: 2,
          first_name: "María",
          edad: "22",
          cuatrimestre: "5",
          carrera: "Medicina",
        },
        {
          id: 3,
          first_name: "Luis",
          edad: "19",
          cuatrimestre: "2",
          carrera: "Psicología",
        },
        {
          id: 4,
          first_name: "Ana",
          edad: "21",
          cuatrimestre: "4",
          carrera: "Derecho",
        },
        {
          id: 5,
          first_name: "Pedro",
          edad: "23",
          cuatrimestre: "6",
          carrera: "Administración de Empresas",
        },
      ],
      first_name: '',
      edad: '',
      cuatrimestre: '',
      carrera: '',
      nombreState: null,
      edadState: null,
      cuatrimestreState: null,
      carreraState: null,
      error: null,

    };
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
  methods: {
    onSubmit() {
      this.validateData();
      const newItem = {
        id: this.items.length + 1,
        first_name: this.form.name,
        edad: this.form.edad,
        cuatrimestre: this.form.cuatrimestre,
        carrera: this.form.carrera
      };

      if (!this.error) {
        this.items.push(newItem);
      }


    },
    onReset() {
      this.resetForm();
    },
    resetForm() {
      this.form.name = '';
      this.form.edad = '';
      this.form.cuatrimestre = '';
      this.form.carrera = '';
      this.nombreState = null;
      this.edadState = null;
      this.cuatrimestreState = null;
      this.carreraState = null;
    },
    validateNombre() {
      this.nombreState = /^[^0-9]+$/.test(this.form.name);
    },
    validateEdad() {
      const edad = parseInt(this.form.edad);
      this.edadState = !isNaN(edad) && edad > 0 && edad <= 100;
    },
    validateCuatrimestre() {
      const cuatrimestre = parseInt(this.form.cuatrimestre);
      this.cuatrimestreState = !isNaN(cuatrimestre) && cuatrimestre >= 1 && cuatrimestre <= 12;
    },
    validateCarrera() {
      this.carreraState = /^[^0-9]+$/.test(this.form.carrera);
    },
    validateData() {
      this.error = null;

      this.validateNombre();
      this.validateEdad();
      this.validateCuatrimestre();
      this.validateCarrera();

      if (!this.nombreState || !this.edadState || !this.cuatrimestreState || !this.carreraState) {
        this.error = 'Por favor, completa todos los campos correctamente.';
      }
    },
  },
};
</script>
    

<style>
breadcrumb {
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  max-width: 1100px;
  margin: auto;
}

button {
  margin-top: 1000px;
}
</style>