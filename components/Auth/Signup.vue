<template>
  <form method="post" @submit.prevent="registerUser">
    <div class="grid grid-cols-2 gap-4 mb-4">
      <div class="flex flex-col">
        <div>
          <input-first-name
            class="w-11/12"
            :first_name="user.first_name"
            @updatedFname="user.first_name = $event"
          ></input-first-name>
          <span class="text-red-500">*</span>
        </div>
        <span>{{ errors.first_name }}</span>
      </div>
      <div class="flex flex-col">
        <div>
          <input-last-name
            class="w-11/12"
            :last_name="user.last_name"
            @updatedLname="user.last_name = $event"
          ></input-last-name>
          <span class="text-red-500">*</span>
        </div>
        <span>{{ errors.last_name }}</span>
      </div>
    </div>
    <div class="flex flex-col mb-3">
      <div class="flex items-center">
        <input-username
          class="w-full mr-1"
          :username="user.email"
          @updatedUsername="user.email = $event"
        ></input-username>
        <span class="text-red-500">*</span>
      </div>
      <span>{{ errors.email }}</span>
    </div>
    <div class="flex flex-col mb-3">
      <div class="flex items-center">
        <div class="flex w-full mr-1 border border-gray-300 rounded-md">
          <input-password
            :password="user.password"
            :isVisible="isVisible"
            @updatedPassword="user.password = $event"
          ></input-password>
          <password-visibility
            @visibility="isVisible = $event"
            :password="user_password"
          ></password-visibility>
        </div>
        <span class="text-red-500">*</span>
      </div>
      <span>{{ errors.password }}</span>
    </div>
    <div>
      <div>
        <label>Birthday <span class="text-red-500">*</span></label>
        <span>{{ errors.birth_date }}</span>
      </div>
      <div class="grid grid-cols-3 gap-4 mt-2">
        <select-birth-day
          :day="day"
          :month="month"
          :year="year"
          :monthList="monthList"
          @updatedDay="day = $event"
        ></select-birth-day>
        <select-birth-month
          @updatedMonth="month = $event"
          :monthList="monthList"
        ></select-birth-month>
        <select
          class="p-2 bg-white border border-gray-300 rounded-md  focus:outline-none"
          v-model="year"
        >
          <option v-for="i in yearLimit" :value="year + 1 - i" :key="i">
            {{ year + 1 - i }}
          </option>
        </select>
      </div>
    </div>
    <div class="mt-4">
      <div>
        <label>Gender <span class="text-red-500">*</span></label>
        <span>{{ errors.gender }}</span>
      </div>
      <div class="grid grid-cols-3 gap-5 mt-2">
        <radio-gender>
          <label slot="label">Female</label>
          <input
            slot="input"
            type="radio"
            value="female"
            v-model="user.gender"
            class="w-4 h-4"
          />
        </radio-gender>
        <radio-gender>
          <label slot="label">Male</label>
          <input
            slot="input"
            type="radio"
            value="male"
            v-model="user.gender"
            class="w-4 h-4"
          />
        </radio-gender>
        <radio-gender>
          <label slot="label">Other</label>
          <input
            slot="input"
            type="radio"
            value="other"
            v-model="user.gender"
            class="w-4 h-4"
          />
        </radio-gender>
      </div>
    </div>

    <div
      class="absolute w-3/5 mx-auto transform -translate-x-1/2  bottom-1 left-1/2"
    >
      <button
        class="w-full p-4 text-center text-white bg-green-800 rounded-md"
        type="submit"
      >
        Signup
      </button>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      day: new Date().getDate(),
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      yearLimit: "",
      monthList: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      user: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        birth_date: "",
        gender: "",
      },
      isVisible: false,
      validation_errors: {},
    };
  },
  methods: {
    async registerUser() {
      this.user.birth_date = new Date(this.year, this.month - 1, this.day);
      await this.$axios
        .post("/account/signup/", this.user)
        .then(async (res) => {
          this.$emit("closeModal");
          this.$success(res.message);
        })
        .catch((err) => {
          if (err.response.data.message) {
            this.$error(err.response.data.message);
          } else {
            this.validation_errors = err.response.data;
          }
        });
    },
  },
  created() {
    this.yearLimit = this.year - 1904;
  },
  computed: {
    user_password() {
      return this.user.password;
    },
    errors() {
      return this.validation_errors;
    },
  },
};
</script>
<style scoped>
span {
  color: #ef4444;
  margin-left: 5px;
}
</style>