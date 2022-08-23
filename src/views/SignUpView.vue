<template>
 <div class="bangs"></div>
    <div class="sign-up">
        <h1>註冊帳號</h1>
    </div>

    <div class="sing-up-process">
        <div class="sing-up-process-step sing-up-process-choose-step1">
            <div class="number">1</div>
            <div class="text">選擇</div>
        </div>
        <div class="sing-up-process-step sing-up-process-choose-step2">
            <div class="number">2</div>
            <div class="text">手機驗證</div>
        </div>
        <div class="sing-up-process-step sing-up-process-choose-step3">
            <div class="number">3</div>
            <div class="text">基本訊息</div>
        </div>
        <div class="sing-up-process-step sing-up-process-choose-step4 sing-up-process-step4">
            <div class="number">4</div>
            <div class="text">完成</div>
        </div>
    </div>

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
        <a href="./sing-up-phone.html">
            <div class="next-step-box">
                <button class="next-step">
                    <div class="arrow">    
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </button>
            </div>
        </a>
    </div>
</template>

<script>

</script>


<style>

</style>