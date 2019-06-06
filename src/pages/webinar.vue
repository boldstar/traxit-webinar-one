<template>
    <Layout>
        <div class="webinar">
            <div class="webinar-content">
                <h1 class="webinar-header">
                    Welcome to the webinar!
                </h1>
                <iframe width="1060" height="615" src="https://www.youtube.com/embed/Mz0epi24L0E?&autoplay=1&rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div class="start">
                    <button class="free-trial-btn">Start FREE Trial</button>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
export default {
    name: 'Webinar',
    metaInfo: {
        title: 'Webinar Video'
    },
}
</script>

<style>
.webinar {
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
}

.webinar-content {
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}


.free-trial-btn {
    background: var(--main);
    color: var(--white);
    border-radius: 5px;
    padding: 15px 30px;
    border: none;
    font-size: 1.1rem;
    font-weight: bold;
}

.start {
    margin-top: 30px;
}

.webinar-header {
    font-size: 3rem;
    font-weight: bold;
    color: var(--white);
}
</style>
