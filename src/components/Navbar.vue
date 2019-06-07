<template>
    <header>
        <div class="navbar">
            <a href="" class="logo"><img src="../../static/img/logo.png" alt="logo" class="logo-img"></a>
            <nav>
                <p>Flexible Workflows With Powerful Impact</p>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
 name: 'Navbar'
}
</script>

<style>
    header {
        background: var(--main);
        padding: 20px 15px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        position: fixed;
    }

    .navbar {
        max-width: 1120px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        width: 100%;

    }

    .logo {
        text-decoration: none;
        align-self: center;
    }

    .logo-img {
        height: 50px;
        width: auto;
    }

    nav {
        align-self: center;
    }

    nav p {
        font-size: 1.5rem;
        margin: 0;
        color: var(--white);
    }

    @media screen and (max-width: 767px) {
        .logo-img {
            height: 30px;
        }

        nav p {
            font-size: 1rem;
        }
    }

    @media screen and (max-width: 450px) {
        nav p {
            display: none;
        }

        .navbar {
            justify-content: center;
        }
    }

</style>
