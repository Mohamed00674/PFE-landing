<template>
    <div id="home1">
        <navbar></navbar> 

        <hero-section2></hero-section2> 
        
        <services></services> 
        
        <features></features>

        <web-configuration></web-configuration> 

        <start-process></start-process>

        <get-started></get-started>

        <contact></contact>

        <social></social>

        <footer-section></footer-section>
        
        <footer-alter></footer-alter> 
        
        <switcher />
    </div>
</template>

<script>
"use strict";
import Navbar from './Elements/Navbar.vue'
import HeroSection2 from './Sections/HeroSection2.vue'
import Services from './Sections/Services.vue'
import features from './Sections/features.vue'
import WebConfiguration from './Sections/WebConfiguration.vue'
import StartProcess from './Sections/StartProcess.vue'
import GetStarted from './Sections/GetStarted.vue'
import Contact from './Sections/Contact.vue'
import Social from './Sections/Social.vue'
import FooterSection from './Elements/FooterSection.vue'
import FooterAlter from './Elements/FooterAlter.vue'
import Switcher from './Elements/Switcher.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    HeroSection2,
    Services,
    features,
    WebConfiguration,
    StartProcess,
    GetStarted,
    Contact,
    Social,
    FooterSection,
    FooterAlter,
    Switcher
  }
}

</script>
