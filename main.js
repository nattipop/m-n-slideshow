import './style.css'
const script = document.createElement("script");

script.src = "https://cdn.jsdelivr.net/npm/publicalbum@latest/embed-ui.min.js";
script.async = true;

document.body.appendChild(script);

document.querySelector('#app').innerHTML = `
<div class="pa-carousel-widget" style="width:auto;min-width:470px; height:100vh; display:none;"
data-link="https://photos.app.goo.gl/mpoSyoEYfrvR8D36A"
data-title="Matthew and me"
data-delay="3"
data-description="64 new items added to shared album">
<object data="https://lh3.googleusercontent.com/pw/AP1GczNDGt7XeGFTscZfRJ9fE2Eib-XAuvs9mIBZJ4GeZNYjbzPUGse86FFg0vJH4WarQOUbB-FRVKHEwQkXf5KqJ2h9_XjNxBtbSYcSQlgfacrtZMCeADM=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczNkct0DvHSEo78oD4rwcRp_ZbtU2EFvBb-b2xh9zDBbeVpiHKOTWl9iUUhaXJjSdA8zv7buHBE5r27r0PIQOE-NHblHVoO_rOux3VhOLbbtjemnL5g=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczMa4xxYtxh9iHbvlFVxD4D_hwO94D2b12Dpx6X9UBbiWZqtc31jhe91DFX50GZZuzSLNpgId5LIsu8TnfkGHSjkUHQJggbh2zvVgv-ZH_VCgeHtKeM=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczPIlgIqOBz75s-VF8Qhu_av7yjqAtOdZNfTlqoKMFcTEV9EML2Xp1ZVphkpZLn_-odPJxiVcowgf8DNUEidd1BSlqFeXNkSNQTUKUndnkJ9jBQ6KLY=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczOApIw-aXwWaxynnT_F3AXlZiVjqSk7zQL_nFnwrQCnntLuOqk6CMl4FXOrphLqgApGvgIYWz9zLu42SplBZCwbYsjFWQc-Pbi3C6FNzIoRW8ik9Uo=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczMNsRv0jhkN4iW5k3U4h26fcTk3fyKhiVvdmBRLLKf7NTEaSbfVWbe_a3daZOLmqoRQL2dsVd341paYf9CEAefIJhh1OCLkQra38agPIrYvhPtbXFk=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczPfED7mw29xlmUbcgIv0y93Sh9sLL2WNjk4Mzqa4Ihbk1OZlKDT630pf471X8BxGYzs0fp3VdE7hHugn6VdJus43AHqMx1Roj0C1Hd-53rEGjSWyNU=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczNk-kPJz8fOEaz74VZaSFpjqeUJ8ueCdRYwcZmW-Tg0U5QB9IY3h3jhzn0hvUX5c18hLbsZHXrwLjXUDswiNFAkXw0ah8PRJevUR9JgS4G8Jrn1miM=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczMCTUNJKM1xxCJoUQ3qvQQqOymp8mRf1UePdsghAG4315JMCV4hJwkb562Lpsox4RKV40b2aygaOX4Fmd41zAHVf68j16SqEZ4XdoDafPW0eCcIi0E=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczPMu_2jCbeUcSoUHX8UHv7Z0QQU599HY4bo2s-tPNvfbn82nB68gvkslvXlnMJZjMBovoPCzxQjdm4rs7hHj4Gyq4JuckX51eh9u_Lu_fZvWDKJJQM=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczMHuQcvIl_RBNQDlYSZSECXaY1ROIF6sApGtEkFnZjV1bgtm0VxvOpDOgOAlQ0_T_2GyGQ8iEog4rRjqXUUzQ_91Cfqxkk5Z4a9suPtXQj5j7B_2gc=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczNBxcXA9XfEych78jNkK_FslIrSbbi3hNBhJ74HUfKOA2g8_-h9Jnw4969TNHztP3hUq4CpgleAP5FJrXfttbnsWgsQUn2algRoP0RK6t3VtR1vOx8=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczPlPgfVJpUhnsIuCguZknwiaLNq_sMn5365z08lVuZiYTETLsLgF_Zd7hJrk0p2CHHfUwgrNaIyyYmYY-tCyotB9JD7u8_7qv0PT0hlvMbEZJzapqs=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczPjSJHDV-ljo_93xulwaLcqTEKqzQ1D0BiPHl3Cvo9KjjHgzbAGHezzxKs9EinHq5oK0601oMSK_UvQiaYQYciafYdlHhYmHNQE4Kt7_YluUdXiguY=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczPVGjW3wEdw0qvvySyUPK6on5mMd1JaqKuxqpNmKOBq8monpHLjXPDRLXkhTO0P3rv9FPLxRKfs2yzzLwZqKwmbhlxlRCna38W3yOtR1iQtYdLYlOs=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczOtz8WVDuKfQ6dR7E9krMnZoc9rCdyvielnhqzVdyIJqT6uOJKSZoCZPJCE4sg0IfpZBPFQUSrQsGfPsElxGpb87S_mqlBd_TcnicCPIVMQIAQ6mTk=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczPMTto9eRhQAxiU9or7y6It_JNI4S8tuRHEfRzxHpyWNfz3iUHdfpIV3cFtoeyBbe08bLSfSW2u-zLALvAiNQ2v2QRn1VTnkrd7Aw9_ydk8x3qL7-k=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczPdV3O6E15ZEKGEcDBhuZEq_JBQZPgYnB64S7OiuDKqhV9KzinyQN0SD_RskM1Fr9NtTNnWmOiRsuCnf-GRhZG9Y9qi8sIrR1afXW1wmhkJ-wkQg14=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczPfaww4Y5-e2xepsTspVuUMgmyct0oMpizKrFOS3ZADTnuWJldkR8t6gihPGjGVUM5zVBqTywKM8osvOI7YmZH2QRbop19zIJ0i-0fXQw9bJggQclA=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczMukEPxHIwUXEAZkf2xCdK1X89wfbQd7dgknF-nTNSeNMyn334XLykGN5qWVL3qiyaS2ZRonxQ6WkqYQMmdcVhmyMjfRkCEezq-7Iah9kb-0H52KPY=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczPXAVtttG231HgJFJXCmUTxxQ6wGNKT20mVTitc9fey16Gx55ehbnU7NBmOkeYcArnDoeBFA5UXv682zR_h2G25R5KBag3n9ExThNaLeatLnIN0jAM=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczN25dYw_Q-xyX47KFVaf8Y8LIDJjd8wiHDA_9XJokza7wJlXQanqv5uS-c8ocDLB2Ucw-viQesdaLyYfp5CF7qW10K2owCFSpPHz3cvUWeK3w-Sp_o=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczMkAIuLNtdqzYHVQh8ZIpogWC2EtnFvU9eXkGJbm2yKoNRF5snotNAZwnz2P93aX_xqXkFhwT0_ldF6Brqixb3FR5RnxgtXmHZM5AchS_6alpKOeAs=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczPNVnEs4PSGMwPJSfnyKZgDk66A6MV6PGdPyHMNDUvlesRLu1PME4wiaE_uOD-Yq1LvpJBPKK4mgwsJvUKJhDFNcWwudDnPJCjw0Hae5QGrE5Cprog=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczNzBfDzTbyvCZ-Ec9LSenOKLnj3K48nsRKNQKLISoh1hcf8mLCeUlLVxQAojttKZvxsIgiMGXfRrGoDUh4kqB09n-rjFWl9GniCU0TDJQR4s-x1iGs=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczOLOGBNrPMLy5E-ZPV402ZlhwCs51edyF29e02mQambh0evkqmfYW4c9p5Mm7Z1dilZg2AkQ439QWtIQBEN4NOttOLmG7V-ce_M-51yPjIyt112JpY=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczNWXIt0cSUUmWIm0hyygmHllYPNjU9c-SSZACVajEL7woJu37WSUhuLctp3u68uy7DNFL7D7ZvbShU_-IZ5tITvTGS5QfC5hO0cITC_TuSkXBnB7gg=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczOJ5n132_pxpGOxTEdWxxbgzBR1F412TushdCdfNkS_eF1-Kx01AF-P6NNjaiiYmbytXclv_E7VctwcFrxFgmiVBK5ovHxkX0eP5gqf7Reb27u2qLI=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczOqljx6N4YpTOP_uRp8cVDgQ--TvpO5_K484GeVR5QTj5fbCBMQyfwbkO5jK0w2hv9J4kJ7D2Bely5rv6-I7HMtzTBvYA-rpJsE3NAqJKOK1LBJ4uo=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczMmE_sKUPtViHuk13JcrYzLYScrxsVatSCyB02TZx1LLfsw7xT0fH_9mYopUs91MFijtVLC0TcTXObMYx_20gFS4ncfGmoqxSzy9EaijZuiq7rUGOQ=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczPgAQj8zbJd5hE1eDriKZqWBRZ_iX67lxQ54vUhtH2Tt2Ev3apkEQecC5mC_S-DtcpwxDbJBXzKQaxyhqsLeVPymkmNay-5i0PpL_33ketqtKaBr64=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczNHvWeK2vCOLSdHEA0UStdDAkwayi6ZT0nm7DWdu6WOOz3s2Z9yFuiJ3-asm5aFLJ9NSlWc-kZzW-l4u61PdnzBq6-xK9EIQoogANvsj68qfe-8ZqA=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczMTaZhdRr0JTfmWJ9etdfdD_z1PlvfKKZFLOo4apUxooDIv0tMRMwjUww20PxS3XXUQXLC21jZjG2ehbh0aM1ycounIR-GdAatbqmmxo8MFXdLWoMo=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczMsAj8pWh8izkOuzQXadT6YRi81SCBwy-Szi5RMyz1pF22Uv1SWDF8w8YQDUTZKAKNSA0hY9d_xTaVUE2g4FqUaAfkYWYSWCRRjXdFcFlEhq7Xb3YU=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczMDMSbZouyL_8Ph8kknq07VTSRhKkifJEmVUArwr_gaWGMwI7k4KGkDUWqorNgSWZtpxwvtpnCG_RCVftnLOgrY2G8BFYB7rpoT271PKzKt1KlXAPk=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczO_PAy40OF-UvSvzEXpF5G5lwXK87e7j2n7a4uL_lVEiu2V1gPLP8eCKo96miv6ACiOln0r__-kLzULej0kGR8jcdEOLy22vvq7zoe_uNAPhvcFoQg=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczMxKoQGu1ABgLqGbgh2TZGKslxpieCn9ycY1o5piJhCl5dWB_EFH3q1dZ-WyDbM_nmrtYVJeg6hcAGTvECLRkCmbHPbiYvlpa42wJE9Q6X88Dao1SA=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczMi6vNoVEvf_PmvZogsrgcopsLtJrVZqIMgkJG88aj85ZK29d5tDejksPbG2akPEtCnHVE24-fnzk93Rim3iWexAkUz-NJ1GQUNBKx6-Lhz051bySg=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczNB4B6dHntnoKxML2d1yt-nMjudm8p-22jLB5t56iuB4r_8-WtR9FkDflmtP6qYeK-RZODk95ClLyB8dOupBt1K7BH4dBvpU4uiFmJoLv-MOx9GYgk=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczO0u5xiNH3yolTY_tNfuuTnu1ZNdOoHFcdT8nX94mNgrNayvkyqq-kw_KFAgTOa4ZvF_F16LiPYPRup09SuQHkFoTpcGH4hXfzGZtd9QsvNsP0gfcQ=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczNrJBb3zEtkvwkHR1_yJAWXF_JgiVR-5M0UvM57z0bU6kOn5E44eETH2MTR3GwFCT5An27Q5OZcQ9I70OJY2rtYZ1JSvSFmHjnIvkG4jplEy5tKDow=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczM8UFw10_sTntyw5KOgrCaNSZydOtDZIUpZpvE8ftTugg_A_F9gWF-4bv3R1A8lfT2ugwxemkO6EZ6sPUlnKfFt2NlCfizLXysodqgu-nvOv_XyvlA=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczOEU7dIUbRrqFrkw9Sd1d6344FHIViZ3e6RUXUPVjNs7-0URI6vpWlS6u6FHtmu2qHfNO2l0rEDzDvBr6OUtY7LVwPjwvDIawUAe-lv0zajCJDXXTY=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczPRZr8pojHxiU26WOeUHwG3ICYMSdW6pZUc4OF3DH4i83UyqrvgBDBHB3uEXIsgqcqLuOSD6blv4ePnS6b2tA-BVjZEvTqaQcm0CNg4SGD1L2WtY1s=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczP7L4tfjYpbUl-2HREe1LiihsxvcDqxl0aQI40rh6y00-b0WMyITUfivseBFweFxoz1m7raBZOdgf6CuvUw8vB2BedMP1UsXTCQ2e0nfzBoGT_VTPE=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczNscDYJIiBrLAoru-xOtg8BvY9c4wo4JDULYula9kWCMlXMxsbye2olWhpOX3CkWCDwBkr6ksc3M30lxOdpcr7iPkwE3kf0Pc1AaHB3jgd3KwpIzc8=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczOqAGWL1hXAb7OmD-Zgftf3C8GgVmx9cq81n3GAbOl96KyfeO8Ijhi6BwfQ2ZQTJoM1eTE6m_wPUpVeaKLQ6QGVatHeoxonyJhyCPckj28aMOSedEc=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczMrHKcmeejPn2IJoVcP1YVQT8vq7uTZyfQ0iI4puvHznyI1jgFH7YGQZhpSDUxmZ7R0N9PQDXkE7dP3W8qcmowS_-lMsockkF_r4L3SHjwgoWlMsk4=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczNqjuiUCU4RHTyQN3-p-0rVLIFIg0sq3Rva9sGBHBKOOBmChumPChJf-TNyOy1Dd0VjvjGWlb2l2t-CD6ujxut9QgKMDrg_xyZozB_tLUTg8KwlMfk=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczPr6EVt-5n4ppmV28QLqPGlGeHqh0O5dfC-xKQOpuVxOtk8S_jHZhMlIIja75jw8TQLGkyMXv-FDIHI_CPIH2TmZ2aidFUCZfioPhTnvC_UZ_Pk-2M=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczOymCpR66Ay7JYkvusSt6orOxScyLtxo5kGnfV5wYkkEUePWUTvLI5YHrSrMqzl0lzDaPG1-M4G-tGYaPeYODspx_aeQfwArPYQpeKn6N0gh94F4ls=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczNiVp8TIDbKWeWwFenbsI39Ux3V4Xj8GK4fqRemKrc0eXnwEY6Q_y83nmdARAKlMJz_6q8CHQYEOEcWtFaLQE50J3U5RHPWtPKI6h-3yRBxm_UliPo=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczOEI8OT84z0wrHvfD2lsfREZg07sQ0kNoZ2W4KQQRaAA3u8PdcmFsQzOSX_-JtKjP5to4AoGidsmw6bA7alq52ntefCjR5ox7PBtSdmIzgf8x3WKHc=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczOU4y-GFRD1Q6Js4_vD6y60LbyfYT3E5VVP3zTfA7dnm6u4ieL5HaJK5sGjiD5bgs5MqYz9Nd-qAAo_h6w_ZTtu-x052V1CMdUOfaFbHSCI41Udsos=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczPnZ9M5pAFgC5j6BpUZl-Zju4yFyDQDHzBe3zEum15AZ5fUGrhj6uY48mBrypEvpMDbK-bh0_yFMgHQRMgbMx0YMssgb6bgOpw0Xuex-bqCR7aP5c0=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczO0w2eTssyOI2gE4ZVx0UByMwpRZoIyNrWHIQaaKdy37ga-sybUQdRKXJdJtLdeNoz1ap6MrIkEVVdAlwUXeiIpudvFACeWMrPaXCLRrQL2I50zl3k=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczNe_Q8ANuUQfHotfcMGvSwF4c86kw_9JTIquRaU8nMW7za3_aP_i_FyqfKEp7-Ye-sGnpZE0TSninBFcbszVS-yxBBNZ78-lY540hNuLFlhiUHDJLc=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczNmHf0LnNNStW9hXlBqp7w4Ynp94kEVClCJxzcxWSuO-mm8K-wMVZht7IFeMiELMSseWnbCo_gnqRiH_enq_wrGpfBvY_4C3HHn5TnH4tYZAvSa_NI=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczNqt2o4waUnrWxQLvstGFowWG_GaMRhk0wh5aQaXGak8b2_4KFoLON1EgGibJ4-v0773ep4eUoGyQ3SCNjDKMTYcaB9hCnRK8CeDwn2_NPcGnpauAo=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczPRp6cNOgR7qywDG8pNnHYnVdX1juevvXFouTak0dMIQZfL1UPEVdon_Pva44DwpLlIeLz1hComq_Al11nlcUYtZXqlm0IPbTvPOwKeUY6vKphVPuQ=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczMyDNgqQQLHvRDJa6-yCbXt5wdL60rNTsET6k_C5OHNdM7sjFvkyubf8k_H2zuM3iswwodjLOwyrGJUIKILMLxuLExo7EFP-7Xz06vtXtGsjuGXLXM=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczOIVMnWQV4O6nUoY5EWmFsnMwSbC8v0K8rxk5u2GRfSy-k3XJjU1k90Hh6ikDhx1-Lk5MF2FQB4mPcCihu4aYxvxpUuBfPuo5I6Drvg4Zf4NN1yszM=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczMmqR3iYJYjuUj2uCyoUeg24mTWUwTEMlCmHBqgHCyfnj2BYr_iF5U--0jykCb5rIJ4VWz4-gumkr0Txm8OkmyuWO1-1-nXG2GbTi3gYO-Ie10VlmM=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczNc1lusnIFLs6x2jPqOoz9T3CZu9V4ak_QyVTennzNktrD_pYpARwDAzpa0l0_zeH9kAgY2pZ-XgdoLVJ-3yg1C4idHu6os_E_SVv-K4BnWDTGuxtc=w1920-h1080"></object>
</div>
`
