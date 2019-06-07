<template>
    <div class="video">
       <iframe class="youtube-video" width="560" height="315" src="https://www.youtube.com/embed/Mz0epi24L0E?&autoplay=1&rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</template>

<script>
export default {
 name: 'Video'
}
</script>

<style>
    .video {
        align-self: center;
        border-radius: 5px;
    }

    @media screen and (max-width: 1150px) {
        .video {
            margin-top: 100px;
        }
    }

    @media screen and (max-width: 600px) {

        .video {
            max-width: 550px;
            width: 90%;
            height: auto;
        }

        .youtube-video {
            max-width: 550px;
            width: 100%;
            height: auto;
        }
    }
</style>
