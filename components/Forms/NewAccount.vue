<template>
    <div class="max-w-md mx-auto mt-24">
        <AlertsSuccess v-show="success" :message="success_message"/>
        <AlertsDanger v-show="error" :message="error_message"/>
        <h2 class="font-bold text-3xl mb-8 text-amber-400">New Account</h2>
        <div class="mb-3">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input type="text" v-model="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required>
        </div>
        <div class="mb-3">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="text" v-model="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john@gmail.com" required>
        </div>
        <div class="mb-3">
            <label for="contry" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
            <input type="text" v-model="country" id="country" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
        </div>
        <div class="mb-3">
            <label for="oassword" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" v-model="password" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
        </div>
        <button type="submit" @click="newAccount()" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Salvar
        </button>
    </div>
</template>

<script>
import axios from "@/src/lib/axios";
export default {
    name: "NewAccount",
    data() {
        return {
            name: null,
            email: null,
            country: null,
            password: null,
            success: false,
            success_message: null,
            error: false,
            error_message: null,
        }
    },
    methods: {
        async newAccount(e) {
            const response = null;
            try {
                response = await axios.post("/register", {
                    name: this.name,
                    email: this.email,
                    country: this.country,
                    password: this.password
                });

                this.success = true;
                this.success_message = "Conta criada com sucesso!";
                
            } catch(error) {
                this.error = true;
                this.error_message = error.response.data.message;
            }
        }
    }
}
</script>