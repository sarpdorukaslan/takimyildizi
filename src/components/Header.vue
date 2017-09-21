<template>
    <section id="dropdown-menu1-1" data-rv-view="222">

        <nav class="navbar navbar-dropdown mbr-title-font navbar-fixed-top">

            <div class="container">

                <div class="navbar-brand">

                    <a class="text-primary" href="/">takımYıldızı</a>
                </div>

                <button class="navbar-toggler pull-xs-right hidden-md-up" type="button" data-toggle="collapse"
                        data-target="#exCollapsingNavbar">
                    ☰
                </button>

                <ul class="nav-dropdown collapse pull-xs-right navbar-toggleable-sm nav navbar-nav"
                    id="exCollapsingNavbar">
                    <li class="nav-item dropdown open"><a class="nav-link link dropdown-toggle" href="#"
                                                          aria-expanded="true" data-toggle="dropdown-submenu">Etkİnlİkler</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="/etkinlikler-ve-konusmacilar">TÜmünü Gör</a>
                        </div>
                    </li>
                    <li class="nav-item"><a class="nav-link link" href="/neden">neden</a></li>
                    <li class="nav-item"><a class="nav-link link" href="/mekan">MEKAN</a></li>
                    <li class="nav-item"><a class="nav-link link" href="/iletisim">İletİşİm</a></li>
                    <li class="nav-item nav-btn"><a class="nav-link btn mbr-title-font btn-primary" href="/kayit">Kayıt ol</a>
                    </li>
                </ul>

            </div>

        </nav>

    </section>
</template>

<script>
  export default {}
  //  export default {
  //    data() {
  //      return {
  //        email: '',
  //        password: '',
  //        isLogged: false
  //      }
  //    },
  //    created() {
  //      let _this = this
  //        firebase.auth().onAuthStateChanged(function (user) {
  //          if (user) {
  //            _this.isLogged = true
  //          } else {
  //            _this.isLogged = false
  //          }
  //        });
  //    },
  //    methods: {
  //      signOut() {
  //        let _this = this
  //        firebase.auth().signOut().then(function () {
  //          $("#loginModal").modal("hide")
  //          _this.isLogged = false
  //          _this.$router.push('/')
  //        }).catch(function (error) {
  //          console.log('Sign out error : ' + error)
  //        });
  //      },
  //      signIn() {
  //        let _this = this
  //
  //        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
  //          .catch(function (error) {
  //            if (errorCode === 'auth/wrong-password') {
  //              alert('Wrong password.');
  //            } else {
  //              alert(errorMessage);
  //            }
  //            console.log(error);
  //          })
  //          .then(function (user) {
  //            $("#loginModal").modal("hide")
  //            _this.isLogged = true
  //          });
  //      }
  //    }
  //  }
</script>

<style>
    .intro-header {
        background-image: url('../assets/img/home-bg.jpg');
    }
</style>
