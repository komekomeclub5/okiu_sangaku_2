Vue.component('navigation', {
    template: `
        <div class="header">
            <div class="container header-nav"> 
                <div class="row">
                    <div class="col-md-3 header-nav-title">
                        <a href="/index.html">
                            <img src="/img/logo.png">
                        </a>
                    </div>
                    <div class="col header-nav-menu">
                        <a href="/about.html">産学協力会について</a>
                        <a href="/constitution.html">会則</a>
                        <a href="/member.html">会員名簿</a>
                        <a href="/join.html">入会申込み</a>
                        <a href="/contact.html">お問い合わせ</a> 
                    </div>
                </div>
            </div>
        </div>
      `
});

Vue.component('navimb', {
  props: ['ActiveBtn'],
  template: `
        <div class="header">
            <div class=" header-nav"> 
                <div class="row">
                    <div class="col-md-4 header-nav-title">
                        <a href="/index.html">
                            <img src="/img/logo.png">
                        </a>
                    </div>
                    <div class="hamburger_btn" v-on:click="ActiveBtn=!ActiveBtn">
                        <span class="line line_01" v-bind:class='{"btn_line01":ActiveBtn}'></span>
                        <span class="line line_02" v-bind:class='{"btn_line02":ActiveBtn}'></span>
                        <span class="line line_03" v-bind:class='{"btn_line03":ActiveBtn}'></span>
                    </div>
                    <transition name="menu">
                        <div class="menu" v-show="ActiveBtn">
                            <ul>
                                <li><a href="/index.html">トップ</a></li>
                                <li><a href="/about.html">産学協力会について</a></li>
                                <li><a href="/constitution.html">会則</a></li>
                                <li><a href="/member.html">会員名簿</a></li>
                                <li><a href="/join.html">入会申込み</a></li>
                                <li><a href="/contact.html">お問い合わせ</a></li>
                            </ul>
                        </div> 
                    </transition>
                </div>
            </div>
        </div>
      `
});

Vue.component('ft-text', {
  props: ['classname'],
  template: `
      <div :class="classname">
          <div class="container">
              <div class="row footer-main">
                  <h3>沖縄国際大学 産業情報学部長室</h3>
                  <p>〒901-2701 沖縄県宜野湾市宜野湾2-6-1<br>
                      TEL・FAX : 098-893-3276</p>
                  <p>Copyright (c) 2022 Okinawa International University. Allrights reserved.</p>
              </div>
          </div>
      </div>
    `
})

Vue.component('btn', {
  props: ['pass','title'],
  template: `
      <div class="bt-comp">
          <a :href="pass">{{title}}</a>
      </div>
    `
})