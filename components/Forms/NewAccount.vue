<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h4 class="mb-3">Nova conta</h4>
                <AlertsError :message="message" v-show="error"/>
                <AlertsSuccess :message="message" v-show="success"/>
                <form class="needs-validation" @submit="newAccount">
                <div class="row g-3">
                    <div class="col-sm-12">
                        <label for="firstName" class="form-label">Nome:</label>
                        <input v-model="name" type="text" class="form-control" id="firstName" required>
                    </div>

                    <div class="col-12">
                        <label for="email" class="form-label">Email: <span class="text-body-secondary"></span></label>
                        <input v-model="email" type="email" class="form-control" id="email" placeholder="you@example.com" required>
                    </div>

                    <div class="col-12 mb-2">
                        <label for="address" class="form-label">Pais:</label>
                        <input v-model="country" type="text" class="form-control" id="address" placeholder="Brazil" required>
                    </div>
                    <div class="col-12 mb-2">
                        <label for="address" class="form-label">Senha:</label>
                        <input v-model="password" type="password" class="form-control" id="address" required>
                    </div>

                   <div v-show="no_loading">
                    <button class="w-100 btn btn-primary btn-lg" type="submit">Criar conta</button>
                   </div>

                 
                    <button class="btn btn-primary" v-show="loading" type="button" disabled>
                    <span class="spinner-border spinner-border-sm btn-lg" v-show="loading"  role="status" aria-hidden="true"></span>
                    Loading...
                    </button>
 

                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from '@/src/lib/axios';
export default {
    name: 'NewAccount',
    data() {
        return {
            name: null,
            email: null,
            country: null,
            password: null,
            message: null,
            success: null,
            error: null,
            errorRequisition: null,
            loading: false,
            no_loading: true,
        }
    },
    methods: {
        async newAccount(e) {

            const req = null;

            e.preventDefault();
            const error = '';

            this.loading = true;
            this.no_loading = false;

            try {
                req = await axios.post('http://192.168.1.3/gamevote-laravel-back-end/public/api/register', {
                    name: this.name,
                    email: this.email,
                    country: this.country,
                    password: this.password
                });

            }catch (error) {
                this.errorRequisition = true;
                console.log();
            }

            if(this.errorRequisition) {
                this.error = true;
                this.message = "Ocorreu um erro ao cadastrar o usuário!";
            }else {
                this.success = true;
                this.message = "Usuário cadastrado com sucesso!";
            }

            // Clear fields
            this.name = '';
            this.email = '';
            this.country = '';
            this.password = '';

            this.loading = false;
            this.no_loading = true;
        }
    },
}
</script>