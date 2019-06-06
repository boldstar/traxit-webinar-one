<template>
    <div class="action">
        <h1 class="signup-header">Signup For Our FREE Webinar!</h1>

                <!-- Begin Mailchimp Signup Form -->
        <div id="mc_embed_signup">
            <form action="https://traxit.us20.list-manage.com/subscribe/post?u=554da9b25bb5346ae99219141&amp;id=d85b539abe" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll">
                    <input type="text" value="" name="MMERGE1" class="required mailchimp-input" id="mce-MMERGE1" placeholder="First Name" required>
                    <input type="text" value="" name="MMERGE2" class="required mailchimp-input" id="mce-MMERGE2" placeholder="Last Name" required>
                    <input ref="mailchimp" type="email" value="" name="EMAIL" id="mce-EMAIL" placeholder="Email Address" class="required mailchimp-input" required>
                    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_554da9b25bb5346ae99219141_d85b539abe" tabindex="-1" value=""></div>
                    <div class="clear"><input type="submit" value="Register" name="subscribe" id="mc-embedded-subscribe" class="registration-btn"></div>
                </div>
            </form>
        </div>
        <!--End mc_embed_signup-->

        <p class="testimonial">"It gives management a snapshot of where everything is in the office. The ability to send questions via email from the system means we can track the question and whether it has been answered or not. Also when clients call in, anyone in the office can tell them what the status of their tax return is." - Aurelia Weems</p>
    </div>
</template>

<script>

export default {
    name: 'Action',
    methods: {
        handleForm() {
           
        }
    }
}
</script>

<style>
    .action {
        align-self: center;
        text-align: center;
        color: var(--white);
        margin-left: 50px;
    }

    .mailchimp-input {
        padding: 15px 20px;
        width: 100%;
        box-sizing: border-box;
        font-size: 1.1rem;
        border-radius: 5px;
        margin-bottom: 10px;
    }

    .registration-btn {
        width: 100%;
        padding: 15px 10px;
        box-sizing: border-box;
        font-size: 1rem;
        font-weight: bold;
        background: var(--main);
        border: none;
        border-radius: 5px;
        margin-top: 10px;
        box-shadow: 0 0 8px 0 rgba(0,0,0,.25);
        color: var(--white);
    }

    .signup-header {
        margin: 5px;
    }

    .testimonial {
        position: absolute;
        bottom: 130px;
        left: 28%;
        max-width: 900px;
        margin: 0 auto;
        font-size: 1.1rem;
    }
</style>
