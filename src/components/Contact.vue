<template>
    <div>
        <section class="mbr-section--bg-adapted mbr-section--relative mbr-after-navbar" id="msg-box18-17"
                 data-rv-view="56" style="background-image: url(/static/assets/images/mbr-1920x1080.jpg);">
            <div class="intro page_head text-center" style="padding-top: 240px; padding-bottom: 120px;">
                <div class="mbr-overlay" style="opacity: 0.5; background-color: rgb(21, 21, 21);"></div>
                <div class="container">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <h3 class="mbr-title-font">İletişim</h3>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
  export default {
    data() {
      return {contact: {}}
    },
    created() {
      let _this = this
      firebase.database().ref('/contact/').once('value').then(function (snapshot) {
        _this.contact = snapshot.val()
      });

    }
  }
</script>
