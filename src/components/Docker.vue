<template>
    <div>

        <section class="mbr-section--bg-adapted mbr-section--relative mbr-after-navbar" id="msg-box8-m" data-rv-view="28" style="background-color: rgb(241, 241, 241);">
            <div class="info-content" style="padding-top: 140px; padding-bottom: 70px;">

                <div class="container">
                    <div class="row center-content center-content-ipad">
                        <div class="col-md-6 col-sm-7 text-center">
                            <figure class="mbr-figure mbr-figure--adapted mbr-figure--full-width"><img src="/static/assets/images/docker-1118x684.png" class="mbr-figure__img img-responsive center-content"></figure>
                        </div>
                        <div class="col-md-6 col-sm-5">
                            <h3 class="mbr-title-font">Geliştirme İçin Docker</h3>
                            <p>Geliştirme sürecinde dockeri anlamak ve VueJs ile geliştireceğimiz blog için docker ile geliştirme ortamı ayağa kaldıracağız.</p>
                            <div class="space30"></div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="mbr-section--bg-adapted mbr-section--relative" id="msg-box6-n" data-rv-view="31" style="background-color: rgb(255, 255, 255);">
            <div class="elements-content accordionStyles" style="padding-top: 50px; padding-bottom: 100px;">

                <div class="container">
                    <div class="row">
                        <div class="col-md-10 col-md-offset-1">
                            <div class="section-head text-center space30">
                                <h1 class="mbr-title-font">Etkinlik İçeriği</h1>
                            </div>
                            <div class="clearfix"></div>
                            <div id="msg-box6-n" class="panel-group accordionStyles accordion" role="tablist" aria-multiselectable="true">
                                <div class="panel panel-default" style="display: block;">
                                    <div class="panel-heading" role="tab" id="headingOne">
                                        <h4 class="panel-title mbr-title-font"><a role="button" class="collapsed" data-toggle="collapse" data-parent="#msg-box6-n" data-core="" href="#collapseOnemsg-box6-n" aria-expanded="false" aria-controls="collapseOne">Tanıtım</a></h4>
                                    </div>
                                    <div id="collapseOnemsg-box6-n" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                        <div class="panel-body"><p>
                                            <div>
                                                <div>Docker, container merkezli bir y&ouml;netim sistemidir. Uygulamaları farklı ihtiya&ccedil;lara g&ouml;re bağımsız &ccedil;alıştırılması imkanı sağlayan Docker bunu sanal ortamlar sunan container mekanizmasına g&ouml;re y&ouml;netmektedir. Docker, &ouml;nemli yapıları da kullanarak, uygulamaları derleme, &ccedil;alıştırma ve taşıma işlemlerini yerine getirmemizi sağlar.&nbsp;</div>
                                                <div>&nbsp;</div>
                                                <div>Takım yıldızı serisindeki Docker etkinliğimizde docker platformunun başlıca &ouml;nemli noktalarını birlikte ele alacağız. Docker platformunu &ouml;ğrenme aşamasında karşımıza &ccedil;ıkacak olan Container ve Image unitelerini ve volume tekniklerini uygulamalı &ouml;ğreneceğiz. Etkinlik i&ccedil;eriğimizin hedefi olan '<em>geliştirim i&ccedil;in docker'</em>&nbsp;adımlarını atarak &ccedil;alışma ortamımızı hedef uygulamaların geliştirimine&nbsp;uyumlu hale getirilmesinde gerekli zemini hazırlamış olacağız.</div>
                                                <div>&nbsp;</div>
                                                <div><strong>Neler var?</strong>:<br /><br /></div>
                                            </div>
                                            <p>Docker d&uuml;nyasını tanıyalım<br />Docker Container y&ouml;netimi<br />Docker Image uniteleriyle &ccedil;alışmak<br />Docker Image oluşturma adımları<br />Docker Volume stratejileri</p>
                                            <div>&nbsp;</div>
                                            <div>Etkinlik &ouml;ncesinden fikir vermesi a&ccedil;ısından G&ouml;khan Şeng&uuml;l'&uuml;n&nbsp;<a href="http://www.gokhansengun.com/docker-nedir-nasil-calisir-nerede-kullanilir" target="_blank" rel="noopener" data-saferedirecturl="https://www.google.com/url?hl=tr&amp;q=http://www.gokhansengun.com/docker-nedir-nasil-calisir-nerede-kullanilir&amp;source=gmail&amp;ust=1505643693691000&amp;usg=AFQjCNFenRsdSEIJoS1tBKnpxuU4iACftg">Docker Nedir, Nasıl &Ccedil;alışır, Nerede Kullanılır?</a>&nbsp;ile&nbsp;Alper Kanat'ın&nbsp;<a href="https://medium.com/monitisemea/docker-serisi-1-1c6629499b9a" target="_blank" rel="noopener" data-saferedirecturl="https://www.google.com/url?hl=tr&amp;q=https://medium.com/monitisemea/docker-serisi-1-1c6629499b9a&amp;source=gmail&amp;ust=1505643693691000&amp;usg=AFQjCNEJTlSYoK7tItcEPU34Q1bifN8bLQ">Docker Serisi #1</a>&nbsp;yazılarının okunmasını tavsiye ediyoruz. Bunun dışında Docker bağlantılı diğer yerel kaynakları da&nbsp;<a href="https://github.com/dockerizmir/docker-resources" target="_blank" rel="noopener" data-saferedirecturl="https://www.google.com/url?hl=tr&amp;q=https://github.com/dockerizmir/docker-resources&amp;source=gmail&amp;ust=1505643693691000&amp;usg=AFQjCNFGnKTG7a_jSmsWvohkCkckIYg2bA">inceleyebilirsiniz</a>.</div>
                                        </p></div>
                                    </div>
                                </div>
                                <div class="panel panel-default" style="display: block;">
                                    <div class="panel-heading" role="tab" id="headingTwo">
                                        <h4 class="panel-title mbr-title-font"><a role="button" class="collapsed" data-toggle="collapse" data-parent="#msg-box6-n" data-core="" href="#collapseTwomsg-box6-n" aria-expanded="false" aria-controls="collapseTwo">Gereksinimler</a></h4>
                                    </div>
                                    <div id="collapseTwomsg-box6-n" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                        <div class="panel-body"><p>
                                            <div>T&uuml;m gereksinimleriyle Docker aracının kurulması i&ccedil;in&nbsp;<a href="https://gist.github.com/ozlerhakan/8d01b9115dfd63f7be83360d2370a04a" target="_blank" rel="noopener" data-saferedirecturl="https://www.google.com/url?hl=tr&amp;q=https://gist.github.com/ozlerhakan/8d01b9115dfd63f7be83360d2370a04a&amp;source=gmail&amp;ust=1505643693691000&amp;usg=AFQjCNEqiTI7ChXo8U58dG2YaleKVxXoJQ">gerekli adımlar</a>.&nbsp;</div>
                                        </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel-default" style="display: block;">
                                    <div class="panel-heading" role="tab" id="headingThree">
                                        <h4 class="panel-title mbr-title-font"><a role="button" class="collapsed" data-toggle="collapse" data-parent="#msg-box6-n" data-core="" href="#collapseThreemsg-box6-n" aria-expanded="false" aria-controls="collapseThree">Hedefler</a></h4>
                                    </div>
                                    <div id="collapseThreemsg-box6-n" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                        <div class="panel-body"><p>
                                            Etkinliğimizin hedefi, Docker ekosistemini katılımcılara aşılamak ve gösterilen temel bileşenleriyle kendi uygulamalarımızda nasıl kullanmamız gerektiğini somutlaştırmaktır.
                                        </p></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
    div.panel-body  a {
        text-decoration: underline;
        color: #1b6d85;
        font-weight: bold;
    }
</style>