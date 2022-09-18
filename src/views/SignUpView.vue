<template>
  <div class="bangs"></div>
  <div id="sign-up-view">
    <div class="sign-up">
        <h1>註冊帳號</h1>
    </div>

    <div class="sing-up-process">
        <div class="sing-up-process-step" v-bind:class="step1_color">
            <div class="number" v-bind:value="page">1</div>
            <div class="text">選擇</div>
        </div>
        <div class="sing-up-process-step" v-bind:class="step2_color">
            <div class="number">2</div>
            <div class="text">手機驗證</div>
            <div class="line"></div>
        </div>
        <div class="sing-up-process-step" v-bind:class="step3_color">
            <div class="number">3</div>
            <div class="text">基本訊息</div>
            <div class="line"></div>
        </div>
        <div class="sing-up-process-step sing-up-process-step4" v-bind:class="step4_color">
            <div class="number">4</div>
            <div class="text">完成</div>
            <div class="line"></div>
        </div>
    </div>
    <!-- #region choose -->
    <div id="choose" v-if="page === 1">
      <div class="sign-up-h2"><h2>在這平台中你的角色（可複選）</h2></div>
      <div class="choose-user-box">
          <!-- 賣家 -->
          <label class="choose-user-label">
              <input type="checkbox" class="checkbox" name="" id="">
              <div class="choose-user seller">
                  <div class="user-photo">
                      <img src="@/assets/photo/seller.png" alt="">
                  </div>
                  <div class="text">
                      <h3>賣家</h3>
                      <p>販售商品、與自媒體合作打造共享經濟，廣告收益可視化。</p>
                  </div>
              </div>
          </label>
          <!-- 自媒體 -->
          <label class="choose-user-label">
              <input type="checkbox" class="checkbox" name="" id="">
              <div class="choose-user kol">
                  <div class="user-photo">
                      <img src="@/assets/photo/kol.png" alt="">
                  </div>
                  <div class="text">
                      <h3>自媒體</h3>
                      <p>與賣家合作，可自由販售的商品，到個人平台推廣，越多人購買分潤越多。</p>
                  </div>
              </div>
          </label>
          <!-- 買家 -->
          <label class="choose-user-label">
              <input type="checkbox" class="checkbox" name="" id="">
              <div class="choose-user buyer">
                  <div class="user-photo">
                      <img src="@/assets/photo/buyer.png" alt="">
                  </div>
                  <div class="text">
                      <h3>買家</h3>
                      <p>用最實惠的價格購買商品。</p>
                  </div>
              </div>
          </label>
      </div>

      <div class="back-next-box">
          <RouterLink to="/the-welcome" class="back-btn">返回</RouterLink>
          <div class="next-step-box">
              <button class="next-step" @click="next_page">
                  <div class="arrow">    
                      <i class="fa-solid fa-arrow-right"></i>
                  </div>
              </button>
          </div>

      </div>
    </div>

    <!-- #endregion -->

    <!-- #region phone -->
    <div id="phone" v-else-if="page === 2">
      <div class="sign-up-h2"><h2>驗證手機號碼</h2></div>

      <!-- 手機號碼輸入框 -->
      <div class="form phone-number-icon">
          <input type="number" id="phone-number" class="form-input" autocomplete="off" placeholder=" ">
          <label for="phone-number" class="form-label">手機號碼</label>
      </div>

      <div class="btn-box">
          <button type="submit" class="send-number-btn">發送驗證碼</button>
      </div>

      <div class="sign-up-h2"><h2>輸入驗證碼</h2></div>

      <!-- 驗證碼輸入框 -->
      <div class="form captcha-icon">
          <input type="number" id="captcha" class="form-input form-input-captcha" autocomplete="off" placeholder=" ">
          <label for="captcha" class="form-label">驗證碼</label>
      </div>

      <div class="blank-box"></div>   
      

      <div class="back-next-box">
        <div @click="previous_page" class="back-btn">返回</div>
          <div class="next-step-box">
            <button class="next-step" @click="next_page">
              <div class="arrow">    
                  <i class="fa-solid fa-arrow-right"></i>
              </div>
            </button>
        </div>
      </div>
    </div>
    <!-- #endregion -->

    <!-- #region basic -->
    <div id="basic" v-else-if="page === 3">
      <div class="sign-up-h2"><h2>輸入基本訊息</h2></div>

      <!-- 用戶名稱輸入框 -->
      <div class="form user-name-icon">
          <input type="text" id="user-name" class="form-input" autocomplete="off" placeholder=" ">
          <label for="user-name" class="form-label">用戶名稱</label>
      </div>

      <!-- 帳號輸入框 -->
      <div class="form account-number-icon"> 
          <input type="text" id="account-number" class="form-input form-input-captcha" autocomplete="off" placeholder=" ">
          <label for="account-number" class="form-label">帳號</label>
      </div>

      <!-- 密碼輸入框 -->
      <div class="form password-icon">
          <input type="text" id="password" class="form-input form-input-captcha" autocomplete="off" placeholder=" ">
          <label for="password" class="form-label">密碼</label>
      </div>

      <!-- 確認密碼輸入框 -->
      <div class="form password-icon" >
          <input type="text" id="password-again" class="form-input form-input-captcha" autocomplete="off" placeholder=" ">
          <label for="password-again" class="form-label">確認密碼</label>
      </div>

      <!-- 電子郵件輸入框 -->
      <div class="form mail-icon">
          <input type="text" id="mail" class="form-input form-input-captcha" autocomplete="off" placeholder=" ">
          <label for="mail" class="form-label">電子郵件</label>
      </div>
      
      <!-- 勾選 -->
      <div class="agree-check-box">
        <div class="agree-check">
          <input type="checkbox" name="" id="agree-terms">
          <label for="agree-terms">
              <p>同意會員及 
                  <a href="#"> 購物條款</a>
              </p>
          </label>
        </div>

        <div class="agree-check">
          <input type="checkbox" name="" id="subscribe-email">
          <label for="subscribe-email">
              <p>訂閱電子郵件優惠活動資訊</p>
          </label>
        </div>
      </div>
      <div class="blank-box"></div>   
      <div class="back-next-box">
        <div @click="previous_page" class="back-btn">返回</div>
        <div class="next-step-box">
          <button class="next-step" @click="next_page">
            <div class="arrow">    
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </button>
        </div>
      </div>
    </div>
    <!-- #endregion -->

    <!-- #region done -->
    <div id="done" v-else-if="page === 4">
      <div class="like-icon">
        <div class="like-bg">
            <div class="hand">
                <div class="thumb"></div>
            </div>
        </div>
      </div>

      <div class="blank-box"></div>   

      <div class="back-next-box">
        <a href="./sing-up-phone.html" class="back-btn"></a>          
        <RouterLink to="/sign-in">
          <div class="next-step-box next-step-before">
            <button class="next-step">
              <div class="arrow">    
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </button>
          </div>
        </RouterLink>
      </div>
    </div>
    <!-- #endregion -->
  </div>

    
</template>

<script>
export default {
  data () {
    return {
      page:1,
      step1_color:"color-black",
      step2_color:"color-white",
      step3_color:"color-white",
      step4_color:"color-white",
    }
  },
  watch:{
    page(now,before){
      switch(now){
        case 1:
          this.step1_color="color-black";
          this.step2_color="color-white";
          this.step3_color="color-white";
          this.step4_color="color-white";
          break
        case 2:
          this.step1_color="color-black";
          this.step2_color="color-black";
          this.step3_color="color-white";
          this.step4_color="color-white";
          break
        case 3:
          this.step1_color="color-black";
          this.step2_color="color-black";
          this.step3_color="color-black";
          this.step4_color="color-white";
          break
        case 4:
          this.step1_color="color-black";
          this.step2_color="color-black";
          this.step3_color="color-black";
          this.step4_color="color-black";
          break
      }
    }
  },
  methods: {
    next_page(event){
      this.page+=1;
    },
    previous_page(event){
      this.page-=1;
    },
  }
}
</script>


<style>
.color-black .number{
  background: #000;
}
.color-black .text{
  color: #000;
}
.color-white .number{
  background: #CDCDCD;
}
.color-white .text{
  color: #CDCDCD;
}
.color-black .line{
  background: #000;
}

</style>