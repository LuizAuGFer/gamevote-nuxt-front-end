<template>
    <div class="apresentation-area">
        <div class="container">
            <div class="row mt-5">
                <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                <img class="logo-image" src="/images/home-logo.png" alt="logo">
                <h2 class="title">DECEMBER 7</h2>
                <h2>PEACOCK THEATER, LOS ANGELES</h2>
                <div class="d-flex justify-content-center justify-content-lg-start gap-2">
                    <NuxtLink to="new_account">
                        <button type="button" class="btn btn-primary btn-lg m-2">New account</button>
                    </NuxtLink>
                    <button type="button" class="btn btn-outline-success btn-lg m-2">Vote now</button>
                </div>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 hero-img aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                <img src="/images/image-tropy-simple.png" class="img-fluid animated" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.apresentation-area {
    height: 70vh;
}

.title {
    font-size: 70px;
    color: #FF9F59;
}

.logo-image {   
    width: 500px;
    margin-bottom: 9px;
}
</style>