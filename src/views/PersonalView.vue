<script setup>
    import TheWelcome from '@/components/TheWelcome.vue'
</script>

<template>
    <header class="d-print-none">
        <div class="container text-center text-lg-left">
            <div class="py-3 clearfix">
                <h1 class="site-title mb-0"></h1>
                <div class="site-nav">
                    <nav role="navigation">
                        <ul class="nav justify-content-center">
                            <li class="nav-item">
                                <RouterLink to="/">Home</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/skil">Skill</RouterLink>
                            </li>

                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    <div class="page-content">
        <div class="container">
            <div class="cover shadow-lg bg-white">
                <div class="cover-bg p-3 p-lg-4 text-white" style="background-color: red;">
                    <div class="row">
                        <div class="col-lg-4 col-md-5">
                            <div class=" p-1"><img src="/src/assets/kipak.jpg"
                                    width="150" height="200"
                                    /></div>
                        </div>
                        <div class="col-lg-8 col-md-7 text-center text-md-start">
                            <h2 class="h1 mt-2" data-aos="fade-left" data-aos-delay="0">Muhammad Airil Pratama</h2>
                            <p data-aos="fade-left" data-aos-delay="100">FrontEnd & Web Developer</p>
                            <!-- <div class="d-print-none" data-aos="fade-left" data-aos-delay="200"><a
                                    class="btn btn-light text-dark shadow-sm mt-1 me-1" href="right-resume.pdf"
                                    target="_blank">Download CV</a><a class="btn btn-success shadow-sm mt-1"
                                    href="#contact">Hire Me</a></div> -->
                           
                        </div>
                    </div>
                </div>
                <div class="about-section pt-4 px-3 px-lg-4 mt-1">
                    <div class="row">
                        <div class="col-md-6">
                            <h2 class="h3 mb-3">About Me</h2>
                            <p>Saya Muhammad Airil, siswa SMK
                                Taruna Bhakti Depok jurusan Rekayasa
                                Perangkat Lunak. Tertarik dengan role
                                Front End Developer.
                                Memiliki kemampuan mengoperasikan
                                Laravel, MYSQL, tidak lupa dengan
                                HTML, CSS, dan juga Bootstrap, serta
                                design UI/UX dan juga Wordpress</p>
                        </div>
                        <div class="col-md-5 offset-md-1">
                            <div class="row mt-2">
                                <h2 class="h3 mb-3">Alamat</h2>
                                <div class="col-sm-4">
                                    <div class="pb-1">Age</div>
                                </div>
                                <div class="col-sm-8">
                                    <div class="pb-1 text-secondary">17</div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="pb-1">Email</div>
                                </div>
                                <div class="col-sm-8">
                                    <div class="pb-1 text-secondary">mhmmadairil@gmail.com</div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="pb-1">Phone</div>
                                </div>
                                <div class="col-sm-8">
                                    <div class="pb-1 text-secondary">08819923588</div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="pb-1">Address</div>
                                </div>
                                <div class="col-sm-8">
                                    <div class="pb-1 text-secondary">jl.bhaktiabri,Rt2/Rw9,Tapos Depok</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="d-print-none" />


            </div>
        </div>
    </div>
    <RouterView />
</template>