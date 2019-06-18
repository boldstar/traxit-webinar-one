<template>
    <Layout>
        <div class="webinar">
            <div class="webinar-content">
                <h1 class="webinar-header">
                    Welcome to the webinar!
                </h1>
                <div class="webinar-video">
                    <iframe width="1060" height="615" src="https://www.youtube.com/embed/6mTHZBwaSSQ?&autoplay=1&rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="start">
                    <a href="https://traxit.io/trial" class="free-trial-btn">Start FREE Trial</a>
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
    mounted() {
        "use strict";
    
        !function() {
        var t = window.driftt = window.drift = window.driftt || [];
        if (!t.init) {
            if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
            t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
            t.factory = function(e) {
            return function() {
                var n = Array.prototype.slice.call(arguments);
                return n.unshift(e), t.push(n), t;
            };
            }, t.methods.forEach(function(e) {
            t[e] = t.factory(e);
            }), t.load = function(t) {
            var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
            o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
            var i = document.getElementsByTagName("script")[0];
            i.parentNode.insertBefore(o, i);
            };
        }
        }();
        drift.SNIPPET_VERSION = '0.3.1';
        drift.load('ts5e9cfuyihd');
    }
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
    text-decoration: none;
}

.start {
    margin-top: 30px;
}

.webinar-header {
    font-size: 3rem;
    font-weight: bold;
    color: var(--white);
}

@media screen and (max-width: 800px) {
    .webinar-header {
        font-size: 1.5rem;
    }

    .webinar-video {
        width: 800px;
        max-width: 600px;
        height: auto;
    }

    .webinar-video iframe {
        width: 100%;
        max-width: 600px;
        height: 300px;
    }
}

@media screen and (max-width: 650px) {

    .webinar-video {
        width: 500px;
        height: auto;
    }

    .webinar-video iframe {
        width: 100%;
    }
}


@media screen and (max-width: 550px) {

    .webinar-video {
        width: 400px;
        height: auto;
    }

    .webinar-video iframe {
        width: 100%;
    }
}

@media screen and (max-width: 450px) {

    .webinar-video {
        width: 300px;
    }

    .webinar-video iframe {
        width: 100%;
        height: 200px;
    }
}
</style>
