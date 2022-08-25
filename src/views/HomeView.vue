<script setup>
  import TheWelcome from '@/components/TheWelcome.vue'
</script>

<template>
  <header class="d-print-none">
    <div class="container text-center text-lg-left">
      <div class="py-3 clearfix">
        <h1 class="site-title mb-0">Joyce Harrison</h1>
        <div class="site-nav">
          <nav role="navigation">
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <RouterLink to="/">Home</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/about">About</RouterLink>
              </li>
              <li class="nav-item"><a class="nav-link" href="https://www.instagram.com/templateflip"
                  title="Instagram"><i class="fab fa-instagram"></i><span
                    class="menu-title sr-only">Instagram</span></a>
              </li>
              <li class="nav-item"><a class="nav-link" href="https://github.com/templateflip" title="Github"><i
                    class="fab fa-github"></i><span class="menu-title sr-only">Github</span></a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
  <RouterView />
</template>