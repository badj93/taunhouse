<template>
    <v-app id="main">

        <header>
            <div class="container">
                <div class="row">
                    <div class="menu-block" :class="{'mobile-menu': hamburger}">
                        <router-link class="logo" tag="a" to="/" v-show="!hamburger"></router-link>

                        <nav>
                            <ul>
                                <li v-for="link in links" :key="link.title" @click.prevent="scroll(link.class)">
                                    <router-link :class="link.class" :ret="link.url" tag="a" to="/">{{ link.title }}
                                    </router-link>
                                </li>
                            </ul>
                        </nav>
                        <div class="phone-contact" v-show="!hamburger">
                            <span class="phone"></span>
                            <p>+7(911)438-91-68</p>
                        </div>
                        <button class="hamburger hamburger--collapse" @click="showNav" :class="{'is-active': hamburger}"  type="button">
                          <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                          </span>
                        </button>
                        <span class="contact-phone" v-show="hamburger"></span>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="content-slider">
                        <div class="desc-block">
                            <v-carousel hide-controls class="slider-content" :cycle="true">
                                <v-carousel-item>
                                    <h2>Жизнь без суеты</h2>
                                    <p id="cool">
                                        Таунхаус у белых ключей - это жилой блокированный дом европейского типа,
                                        разделенный на несколько просторных квартир, с индивидуальными входом и гаражом.
                                        Приобретение таунхауса - это прекрасная возможность сделать свою жизнь
                                        спокойнее, комфортнее и повысить её уровень без существенных дополнительных
                                        затрат!
                                    </p>
                                </v-carousel-item>
                                <v-carousel-item>
                                    <h2>Большие площади по привлекательной цене</h2>
                                    <p>
                                        Трёхуровневое расположение комнат позволяет разделить дом на зоны, где каждый
                                        занимается своим делом или отдыхает, не отвлекая других членов семьи. Основное
                                        время вы будете проводить на 2 этаже, где располагаются гостинная и кухня. На
                                        третьем этаже располагаются спальни. Первый этаж служит для технических
                                        помещений, гаража, сауны и комнаты для гостей. На каждом этаже предусмотрен
                                        санузел, это удобно для большой семьи.
                                    </p>
                                </v-carousel-item>
                                <v-carousel-item>
                                    <h2>Все городские коммуникации</h2>
                                    <p>
                                        Преимуществом городского таунхауса перед загородным домом безусловно является
                                        наличие всех городских коммунальных сетей. Вам не надо беспокоиться о септиках
                                        или автономных канализациях, не надо брать на себя расходы по их эксплуатации и
                                        риски, связанные с их возможной поломкой. В таунхаусе у белых ключей за все
                                        коммуникации отвечают соответствующие городские службы.
                                    </p>
                                </v-carousel-item>
                            </v-carousel>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <v-content>
            <router-view></router-view>
        </v-content>

        <v-footer class="footer-content">
            <div class="container">
                <div class="row">
                    <h2>Стоимость таунхауса у «Белых ключей»</h2>
                </div>
                <div class="row" style="justify-content: center">
                    <table class="content-table">
                        <thead>
                        <tr>
                            <th>Тип секции</th>
                            <th>Кол-во комнат</th>
                            <th>Наличие гаража</th>
                            <th>Площадь, м2</th>
                            <th colspan="2" id="price">Стоимость, рублей</th>
                        </tr>
                        </thead>
                        <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th class="little-td">без отделки</th>
                            <th class="little-td">без отделки<br> при быстрой оплате</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Комфорт</td>
                            <td>5</td>
                            <td>Да</td>
                            <td>158</td>
                            <td>5 530 000</td>
                            <td>4 582 000</td>
                        </tr>
                        <tr>
                            <td>Стандарт</td>
                            <td>3</td>
                            <td>Да</td>
                            <td>129</td>
                            <td>4 522 500</td>
                            <td>3 741 000</td>
                        </tr>
                        <tr>
                            <td>Уют</td>
                            <td>4</td>
                            <td>Нет</td>
                            <td>126</td>
                            <td>4 410 000</td>
                            <td>3 654 000</td>
                        </tr>
                        </tbody>
                    </table>

                    <div class="table-mobile">
                        <div class="tr">
                            <span style="text-align: left">Тип секции</span>
                            <span>Комфорт</span>
                            <span>Стандарт</span>
                            <span>Уют</span>
                        </div>
                        <div class="tr">
                            <span style="text-align: left">Кол-во комнат</span>
                            <span>5</span>
                            <span>3</span>
                            <span>4</span>
                        </div>
                        <div class="tr">
                            <span style="text-align: left">Наличие гаража</span>
                            <span>Да</span>
                            <span>Да</span>
                            <span>Да</span>
                        </div>
                        <div class="tr">
                            <span style="text-align: left">Площадь, м2</span>
                            <span>158</span>
                            <span>129</span>
                            <span>126</span>
                        </div>
                        <div class="tr">
                            <span style="text-align: left">Стоимость, рублей</span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div class="tr">
                            <span style="text-align: left" class="td-style">без отделки</span>
                            <span>5 530 000</span>
                            <span>4 522 500</span>
                            <span>4 410 000</span>
                        </div>
                        <div class="tr">
                            <span style="text-align: left" class="td-style">без отделки при быстрой оплате</span>
                            <span>4 582 000</span>
                            <span>3 741 000</span>
                            <span>3 654 000</span>
                        </div>
                    </div>

                </div>

                <div class="row">
                    <div class="documents" @click="dialog = true">
                        <span class="icon-doc"></span>
                        <h3 id="document">Документы</h3>
                    </div>
                    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                        <v-card>
                            <v-toolbar dark style="background-color: #429361">
                                <p class="close-doc" @click="dialog = false">Закрыть</p>
                                <v-toolbar-title>Документы</v-toolbar-title>
                                <v-spacer></v-spacer>
                            </v-toolbar>
                            <v-divider></v-divider>
                            <v-list three-line subheader>
                                <p style="margin-top: 2em"><a title="Скачать" class="download-doc" href="../src/assets/documents/Permission_for_commissioning.pdf" download>Разрешение на ввод в эксплуатацию</a></p>
                                <p style="margin-top: 2em"><a title="Скачать" class="download-doc" href="../src/assets/documents/Building_permit.pdf" download>Разрешение на строительство</a></p>
                            </v-list>
                        </v-card>
                    </v-dialog>
                </div>

                <div class="row">
                    <div class="call-me">
                        <h2 id="contacts">Звоните</h2>
                        <p><span class="phone"></span>+7(911)438-91-68</p>
                    </div>
                </div>
            </div>
        </v-footer>

    </v-app>
</template>

<script>
  export default {
    data () {
      return {
        links: [
          {title: 'Преимущества', url: '#cool', class: 'link0'},
          {title: 'Стоимость', url: '#price', class: 'link1'},
          {title: 'Планировки', url: '#plains', class: 'link2'},
          {title: 'Фото', url: '#photo', class: 'link3'},
          {title: 'Документы', url: '#document', class: 'link4'},
          {title: 'Контакты', url: '#contacts', class: 'link5'}
        ],
        nav: '',
        hamburger: false,
        hamburgerClass: 'js-active, is-active',
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false
      }
    },
    methods: {
      scroll (classEl) {
        let el = document.querySelector('a.' + classEl).getAttribute('ret')
        let V = 0.2
        let w = window.pageYOffset
        let hash = el
        let t = document.querySelector(hash).getBoundingClientRect().top
        let start = null
        requestAnimationFrame(step)

        function step (time) {
          if (start === null) {
            start = time
          }
          let progress = time - start
          let r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t))
          window.scrollTo(0, r)
          if (r !== w + t) {
            requestAnimationFrame(step)
          } else {
            location.hash = hash
          }
        }
      },
      showNav () {
        this.hamburger = !this.hamburger
      }
    }
  }
</script>

