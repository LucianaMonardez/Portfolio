import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    skill: [
      {
        id: 1,
        title: "C#",
        img: "https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png",
      },
      {
        id: 2,
        title: ".NET Core",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/2048px-.NET_Core_Logo.svg.png",
      },
      {
        id: 3,
        title: "Javascript",
        img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      },
      {
        id: 4,
        title: "HTML 5",
        img: "https://cdn-icons-png.flaticon.com/512/5968/5968267.png",
      },
      {
        id: 5,
        title: "CSS 3",
        img: "https://cdn-icons-png.flaticon.com/512/5968/5968242.png",
      },
      {
        id: 6,
        title: "Bootstrap",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png",
      },
      {
        id: 7,
        title: "Vue",
        img: "https://seeklogo.com/images/V/vuejs-logo-17D586B587-seeklogo.com.png",
      },
      {
        id: 8,
        title: "MySql",
        img: "https://camo.githubusercontent.com/f85f882cb31eeaeee657ec955313015c30378e8f56c3dc2f06933b617a276cfd/68747470733a2f2f77372e706e6777696e672e636f6d2f706e67732f3734372f3739382f706e672d7472616e73706172656e742d6d7973716c2d6c6f676f2d6d7973716c2d64617461626173652d7765622d646576656c6f706d656e742d636f6d70757465722d736f6674776172652d646f6c7068696e2d6d6172696e652d6d616d6d616c2d616e696d616c732d746578742d7468756d626e61696c2e706e67",
      },
      {
        id: 9,
        title: "MongoDB",
        img: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
      },
      {
        id: 10,
        title: "Git",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1024px-Git_icon.svg.png",
      },

    ],
    projects: [
      {
        id: 1,
        title: "Disney Api",
        url: "https://github.com/LucianaMonardez/Disney",
        tools: "C#, .NET, Entity Framework, MySql",
        description: "CRUD realizado para el challenge de ingreso para la aceleración C# en Alkemy. Se utilizó code first para el modelado de la base de datos. Se realizo el registo y loggeo de usuario, implementando SendGrid y JWT Token. Se realizaron los endpoints get, get by id, update, delete y get por filtraciones de querys",
      },
      {
        id: 2,
        title: "Api ONG Somos Más",
        url: "https://github.com/LucianaMonardez/OT134-SERVER",
        tools: "C#, .NET, Entity Framework, MySql",
        description: "Proyecto para la ONG Somos Más. Su propósito consiste en administrar la persistencia y vinculación de la información que será consumida por los distintos canales tecnológicos  de comunicación de la ONG. El mismo fue realizado en equipo utilizando la metodología SCRUM y patrones de diseño como Unit Of Work. Se integraron apis externas como JWT, SendGrid y Amazon Web Services, además se realizaron test unitarios.",
      },
      {
        id: 4,
        title: "Portfolio",
        url: "",
        tools: "Vue, Vuex, Vuetify",
        description: "Proyecto para mi portfolio personal realizado en Vue, Vuex y empleando Vuetify para los componentes UI.",
      },
      {
        id: 5,
        title: "Poke Store",
        url: "https://github.com/LucianaMonardez/pruebastorev2",
        tools: "Angular, Angular Material, Sass, Swiper ",
        description: "Proyecto de ecommerce en progreso desarrolado en Angular.",
      },
    ],
  },
  getters: {
    allSkills: state => state.skill,
    allProjects: state => state.projects,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
