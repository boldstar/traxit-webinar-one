<template>
    <Layout>
        <div class="thanks">
            <div class="thanks-content">
                <h1 class="thanks-header">
                    Thank you for signing up!
                </h1>
                <div class="thanks-video">
                    <iframe src="https://www.youtube.com/embed/Mz0epi24L0E?&autoplay=1&rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="action-btns">
                    <g-link to="/webinar" class="webinar-btn">View Webinar</g-link>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
export default {
 name: 'Thanks',
 metaInfo: {
    title: 'Thank You!'
  },
}
</script>

<style>
    .thanks {
        max-width: 1120px;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        margin: 0 auto;
    }

    .thanks-content {
        align-self: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .thanks-header {
        font-size: 3rem;
        font-weight: bold;
        color: var(--white);
    }

    .action-btns {
        margin-top: 30px;
    }

    .webinar-btn {
        padding: 10px 105px;
        background: var(--main);
        color: var(--white);
        font-weight: bold;
        font-size: 1.25rem;
        text-decoration: none;
        border-radius: 5px;
        transition: font-size .3s;
    }

    .webinar-btn:hover {
        font-size: 1.28rem;
    }

    .thanks-video iframe {
        width: 700px;
        height: 455px;
    }

    @media screen and (max-width: 800px) {
        .thanks-video iframe {
            width: 500px;
            height: 355px;
        }

    }

    @media screen and (max-width: 800px) {
        .thanks-video iframe {
            width: 300px;
            height: 200px;
        }

        .thanks-header {
            font-size: 1.5rem;
            font-weight: bold;
            color: var(--white);
        }

    }
</style>
