<template>
<!-- STRAT NAVBAR -->
        <nav class="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark">
            <div class="container">
                <!-- LOGO -->
                <a class="navbar-brand logo text-uppercase" href="/">
                    MANAGAER
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="mdi mdi-menu"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav navbar-center" id="mySidenav">
                        <li class="nav-item active">
                            <a href="#home" class="nav-link">Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="#services" class="nav-link">Services</a>
                        </li>
                        <li class="nav-item">
                            <a href="#features" class="nav-link">Features</a>
                        </li>
                        <li class="nav-item">
                            <a href="#process" class="nav-link">Process</a>
                        </li>
                        <li class="nav-item">
                            <a href="#contact" class="nav-link">Contact</a>
                        </li>
                    </ul>
                    
                    <div class="nav-button ml-auto">
                        <ul class="nav navbar-nav navbar-right">
                            <li>
                                <a href="http://localhost:8081/auth/register">
                                <button type="button"  class="btn btn-custom navbar-btn btn-rounded waves-effect waves-light">
                                    Register
                                </button>
                                </a>
                            </li>
                            <li>
                                 <a href="http://localhost:8081/auth/login">
                                <button type="button"  class="btn btn-custom navbar-btn btn-rounded waves-effect waves-light">
                                    Login
                                </button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
</template>

<script>


export default {
  name: 'Navbar',
  props: {
  },
  methods: {
      redirect(){

      }
  },
  }

</script>
