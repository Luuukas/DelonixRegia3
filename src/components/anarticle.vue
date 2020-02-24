<template>
    <div>
    <div class="page">
        <div class="page__demo">
            <div class="main-container page__container">
                <article class="card">
                    
                        <!--<img class="card__preview" alt="Preview img" :src="img__url">-->
                        <el-carousel indicator-position="outside">
                            <el-carousel-item v-for="item in 4" :key="item">
                                <!--<h3>{{ item }}</h3>-->
                                <header class="card__header">
                                    <img class="card__preview" alt="Preview img" :src="img__url0">
                                    <h3 class="card__title"><a>THE MY ADVENTURE IN THE FRANCE AND PHOTOGRAPHY WITH TOUR DE FRANCE</a></h3>
                                </header>
</el-carousel-item>
                        </el-carousel>
                    
                    <div class="card__body">
                        <div class="card__content">
                            <label>Time: Sunday, February 9, 2020</label><br />
                            <label>Author: Chen Yachong</label><br /><br />
                            <p style="height:20px">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores distinctio aspernatur labore, odio debitis iure reprehenderit voluptatem praesentium magni alias.
                            </p>
                        </div>
                        <footer class="card__footer">
                            <a href="#popup-article" class="card__link card__readmore">readmore</a>
                            <div class="card__meta">
                                <span class="card__meta-label card__meta-comments">47</span>
                                <span class="card__meta-label card__meta-likes">99</span>
                            </div>
                        </footer>
                    </div>
                </article>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: 'anarticle',
        props: {

        },
        data() {
            return {
                imgs: [
                    'http://jazztravels.com/wp-content/uploads/2015/07/313.jpg',
                    'https://desk-fd.zol-img.com.cn/t_s1680x1050c5/g5/M00/01/0E/ChMkJ1bKwXCIWA17AAw3ZD2QoZAAALGYQGItfQADDd8205.jpg',
                    'https://desk-fd.zol-img.com.cn/t_s1680x1050c5/g5/M00/01/0E/ChMkJlbKwXCICJ35AAZau8oIW-AAALGYQGhd90ABlrT231.jpg'
                ],
                x: 0,
                img__url: "",
                img__url0: 'http://jazztravels.com/wp-content/uploads/2015/07/313.jpg',
            };
        },
    }
</script>

<style scoped>
    /*
 * card
*/

.card {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
    max-width: 480px;
    background-color: #fff;
}
.card__header {
    position: relative;
}
.card__header:before {
    content: "";
    width: 100%;
    height: 100%;
    background-image: -webkit-linear-gradient(top, transparent 30%, rgba(0, 0, 0, .6) 70%, rgba(0, 0, 0, .7));
    background-image: linear-gradient(to bottom, transparent 30%, rgba(0, 0, 0, .6) 70%, rgba(0, 0, 0, .7));
    position: absolute;
    left: 0;
    bottom: 0;
}
.card__title {
    font-size: 2.2rem;
    font-weight: 400;
    color: #fff;
    text-transform: uppercase;
    line-height: 1.5;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-top: 0;
    margin-bottom: 0;
    position: absolute;
    bottom: 2rem;
    left: 0;
}
.card__link {
    color: inherit;
    text-decoration: none;
}
.card__preview {
    width: 100%;
    display: block;
}
.card__body {
    padding: 3rem 2.5rem 2rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-flex: 2;
    -ms-flex-positive: 2;
    flex-grow: 2;
}
.card__content {
    -webkit-box-flex: 2;
    -ms-flex-positive: 2;
    flex-grow: 2;
}
.card__footer {
    font-size: 1.4rem;
    border-top: 1px solid #f0f0f0;
    margin-top: 3rem;
    padding-top: 2rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
}
.card__readmore {
    text-transform: uppercase;
    color: #512da8;
}
.card__meta {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.card__meta-label {
    display: inline-block;
    padding-left: 2.2rem;
    background-repeat: no-repeat;
    background-size: 1.6rem;
    background-position: 1% center;
}
.card__meta-label:not(:first-child) {
    margin-left: 1.5rem;
}
.card__meta-comments {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAABdCAIAAABFDY3TAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAQISURBVHhe7ZrreaMwEACvxCvFnaQRF0Ih9OFbxNhBTyS0AsnH/Es+sY9hJYidP68bm9uIy23E5TbichtxuY24XGbkbwYsPZdTjdDoIQjRnuZGaEgVQrehlRFqbwzJVGlihHpPgZR6KBuhzNMhvQZqRijtUiilDh0jVNQH1HSUWiNU0RkUd4gqI+TvEkos57gRMncMhRZy0Ag5u4dySzhihGyDQNHZFBshz1BQeh5lRsgwIDSQQYERYg8LbeyRa4Sog0MzSf4vIwL9xMkyQrCvgJbi7Bsh0hdBYxFuIy47RojRkEctP8+ZYl+vefoh7A6sD3GqkaX85zTN828P6oiUB+kSsDhEyghXFyFNC0vfC8/PDy0leGSNCms9oka4LsVjO6/z9JzO7HqHrO3DWpsaIz8TazvkGiPbGVFDDpllu5n9th6dZPtl/fWyPdfdKZdsWPZq4KIQpLQJG+GKXVSmZG0itwtlqGFDnZGKMVkOno2FH+sQyntgaEDCDZVGysfEiODaD6Egua8WdZBsQ7WR3DmxR8ImYnXXiXnSG2omimxvAkZYWMJDht7Xsh5ze+ecXMt6H9FojtiF9Th9X2S9qgoVE0WENzpGsjAdSWubBwQZFZifh8eECG8aGVnuYdu3dZsKIecYUXkqF1B1ChPjjWuEVbU0eXmLUv1YIo6hkREhdWLqUv+cJpChnRGFQTFvcYbU3881ZwgQydDSSPI4WbpdHsxLN8F1wUYfT3/pSEaCQxJ4Qw8aCe+FQMj6TXOpkeANDRmJ3Hk/pMKIXLlrgvczOEqROz+2kdzqS4z4kgcyEmg0+2woMBJZWAShDO2MBPqM3M6Cg3VkI6E2C4zE9sKoRoL7QMOIHzimrghiGVwjAqsOE9FR0KVwohECvdE1Yj4DIIxPZL6/08gj/CmaRWzDf5+RYEc+0RMwdIz0ZURgbQb2twpxEoUHjWTvsK6M5H8Ckiy7zkh09PIgyobjRjI3i+hIFx2OM6IRMyN7p+k87Q71GEYErsjA/JuMp8Z8Y8WKJEVGvC1WJYQYNgpGKikzYimpPVUJY9OpkWSv5quw9BeFeZDMJmpE4LrWeM+ajMNHAZJ5pIwIXN0cbvsCv2kOHXp0YuRsaC/EjhGBGF8EjUW4jbjsGxGI9BXQUpzbiEuWEYF4g0MzSXKNCEQdFtrYo8CIQOwBoYEMyowIZBgKSs+j2IhAnkGg6GyOGBHI1j2UW8JBIwI5O4ZCCzluRCBzl1BiOVVGBPJ3BsUdotaIQBXdQFlHUTCyQjmXQil1qBlZobTTIb0GykZWKPMsyKpEEyMCxTaGZKq0MvKB2lUhdBuaG/lANxUQqDHnGXGgyyQsPZfLjHTLbcTlNuJyG3G5jdi8Xv8APPVvHIIfTnAAAAAASUVORK5CYII=");
    background-position: 1% 75%;
}
.card__meta-likes {
    background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMjEyMTIxIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPiAgICA8cGF0aCBkPSJNMTIgMjEuMzVsLTEuNDUtMS4zMkM1LjQgMTUuMzYgMiAxMi4yOCAyIDguNSAyIDUuNDIgNC40MiAzIDcuNSAzYzEuNzQgMCAzLjQxLjgxIDQuNSAyLjA5QzEzLjA5IDMuODEgMTQuNzYgMyAxNi41IDMgMTkuNTggMyAyMiA1LjQyIDIyIDguNWMwIDMuNzgtMy40IDYuODYtOC41NSAxMS41NEwxMiAyMS4zNXoiLz48L3N2Zz4=);
}

/*
* demo page
*/

@media screen and (min-width: 768px) {
    html {
        font-size: 62.5%;
    }
}
@media screen and (max-width: 767px) {
    html {
        font-size: 50%;
    }
}
body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans, Ubuntu, Fira Sans, Helvetica Neue, sans-serif;
    font-size: 1.6rem;
    color: #222;
    background-color: #512da8;
    margin: 0;
    -webkit-overflow-scrolling: touch;
    overflow-y: scroll;
}
p {
    margin: 0;
    line-height: 1.5;
}
p:not(:last-child) {
    margin-bottom: 1.5rem;
}
img {
    display: block;
    max-width: 100%;
}
a {
    text-decoration: none;
    color: #039be5;
}
.page {
    /*min-height: 100vh;*/
    display: -webkit-box;
    display: -ms-flexbox;
    /*display: flex;*/
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: distribute;
    justify-content: space-around;
}
.page__demo {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.main-container {
    max-width: 1200px;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-left: auto;
    margin-right: auto;
}
.page__container {
    margin: auto;
}
.footer {
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: center;
    font-size: 1.4rem;
}
.footer__link {
    color: #fff;
}
@media screen and (min-width: 361px) {
    .footer__container {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }
}
@media screen and (max-width: 360px) {
    .melnik909 {
        display: none;
    }
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>