<template>
  <form method="post">
    <div class="grid grid-cols-2 gap-4 mb-4">
      <input-first-name
        :first_name="user.first_name"
        @updatedFname="user.first_name = $event"
      ></input-first-name>
      <input-last-name
        :last_name="user.last_name"
        @updatedLname="user.first_name = $event"
      ></input-last-name>
    </div>
    <input-username
      :username="user.username"
      @updatedUsername="user.username = $event"
    ></input-username>
    <div class="flex w-full mb-4 border border-gray-300 rounded-md">
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
    <div>
      <label>Birthday</label>
      <div class="grid grid-cols-3 gap-4 mt-2">
        <select
          class="p-2 bg-white border border-gray-300 rounded-md  focus:outline-none"
          v-model="day"
        >
          <option v-for="i in 31" :value="i" :key="i">
            {{ i }}
          </option>
        </select>
        <select
          class="p-2 bg-white border border-gray-300 rounded-md  focus:outline-none"
          v-model="month"
        >
          <option v-for="i in monthList" :value="i" :key="i">
            {{ i }}
          </option>
        </select>
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
      Gender
      <div class="grid grid-cols-3 gap-5 mt-2">
        <div
          class="flex items-center justify-between p-2 border border-gray-300 rounded-md "
        >
          <label>Female</label>
          <input type="radio" value="female" v-model="gender" class="w-4 h-4" />
        </div>
        <div
          class="flex items-center justify-between p-2 border border-gray-300 rounded-md "
        >
          <label>Male</label>
          <input type="radio" value="male" v-model="gender" class="w-4 h-4" />
        </div>
        <div
          class="flex items-center justify-between p-2 border border-gray-300 rounded-md "
        >
          <label>Other</label>
          <input type="radio" value="other" v-model="gender" class="w-4 h-4" />
        </div>
      </div>
    </div>

    <div class="w-3/5 mx-auto mt-4">
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
      day: new Date().getDate(),
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      yearLimit: "",
      gender: "",
      user: {
        first_name: "",
        last_name: "",
        username: "",
        password: "",
      },
      isVisible: false,
    };
  },
  created() {
    this.month = this.monthList[this.month];
    this.yearLimit = this.year - 1904;
  },
  computed: {
    user_password() {
      return this.user.password;
    },
  },
};
</script>