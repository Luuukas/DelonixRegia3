<template>
    <span class="nxt-load-more" @click="nxtpage"></span>
</template>

<script>
    export default {
        name: 'nxtpage',
        data() {
            return {
                page : 1,
                moving : false,
                animationIteration : "animationiteration webkitAnimationIteration mozAnimationIteration oAnimationIteration oanimationiteration",
                transitionEnd : "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",
            }
        },
        methods: {
            nxtpage: function () {
                if (this.moving == false) {
                    this.moving = true;
                    $(".nxt-load-more").addClass("active");
                    setTimeout(() => {
                        $(".nxt-load-more").one(this.animationIteration, function() {
                            $(".nxt-load-more").removeClass("active");
                            $(".nxt-load-more").one(this.transitionEnd, function () {
                            });
                        });
                        console.log("next article")
                        this.page++;
                        this.moving = false;
                    }, 2000);
                }
            }
        }
    }
</script>

<style scoped>
body {
    background-color: #fff;
}
.nxt-load-more {
    position: absolute;
    display: block;
    cursor: pointer;
    width: 40px;
    height: 40px;
    top: 50%;
    left: 50%;
    margin: 0 0 0 0;
}
.nxt-load-more:before,
.nxt-load-more:after {
    position: absolute;
    display: block;
    content: '';
    width: 30px;
    height: 30px;
    left: 50%;
    top: 50%;
    margin-top: -15px;
    border-width: 2px;
    border-style: solid;
    border-color: transparent;
    border-bottom-color: #4a4047;
    border-right-color: #4a4047;
    border-radius: 0 0 5px 0;
    transform: translate(-50%, -50%) rotate(45deg);
    transition: all 0.4s ease-in-out;
}
.nxt-load-more.active:before {
    border-radius: 50%;
    animation: 0.8s rotate 0.4s linear forwards infinite;
}
.nxt-load-more.active:after {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    animation: 0.8s rotate2 0.4s linear forwards infinite;
}
@keyframes rotate {
    to {
        transform: translate(-50%, -50%) rotate(405deg);
    }
}
@keyframes rotate2 {
    to {
        transform: translate(-50%, -50%) rotate(-315deg);
    }
}
.nxt-load-more.disabled:before,
.nxt-load-more.disabled:after {
    margin-top: 0;
    transform: translate(-50%, -50%) rotate(135deg) rotateY(180deg);
}
</style>