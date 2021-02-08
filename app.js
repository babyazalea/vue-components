const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "em",
          name: "Eunmin",
          phone: "01012345678",
          email: "test@test.com",
        },
        {
          id: "em2",
          name: "Eunmin2",
          phone: "01099999999",
          email: "test2@test2.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
    <li>
        <h2>{{friend.name}}</h2>
        <button @click="toggleDetails()">
            {{detailsAreVisible ? 'Hide' : "Show"}} Details
        </button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{friend.phone}}</li>
            <li><strong>Email:</strong>{{friend.email}}</li>
        </ul>
    </li>
    `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "em",
        name: "Eunmin",
        phone: "01012345678",
        email: "test@test.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
