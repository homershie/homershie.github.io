<template>
  <!-- ==================== Start Contact ==================== -->
  <section class="contact section-padding">
    <div class="container">
      <div class="sec-head mb-80">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <div class="d-inline-block">
              <div class="sub-title-icon d-flex align-items-center">
                <span class="icon fas fa-map-marker-alt"></span>
                <h6>聯絡我</h6>
              </div>
            </div>
            <h3>如有任何問題，請隨時與我聯繫。</h3>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="google-map mb-80">
            <iframe
              id="gmap_canvas"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1807.7907963814307!2d121.46259308881785!3d25.01432952508229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a8196a224e67%3A0xec9f88ff96729962!2zMjIw5paw5YyX5biC5p2_5qmL5Y2A57ij5rCR5aSn6YGT5LqM5q61N-iVn-adv-api-i7iuermQ!5e0!3m2!1szh-TW!2stw!4v1722060602168!5m2!1szh-TW!2stw"
              width="100%"
              height="400"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            >
            </iframe>
          </div>
        </div>
        <div class="col-lg-5 valign">
          <div class="info full-width md-mb80">
            <div class="item mb-30 d-flex align-items-center">
              <div class="mr-15">
                <font-awesome-icon :icon="['far', 'envelope']" class="icon main-color" />
              </div>
              <div class="mr-10">
                <h6 class="opacity-7">Email</h6>
              </div>
              <div class="ml-auto">
                <h4>
                  <a href="mailto:homerxworkshop@gmail.com">homerxworkshop@gmail.com</a>
                </h4>
              </div>
            </div>
            <div class="item d-flex align-items-center">
              <div class="mr-15">
                <font-awesome-icon :icon="['far', 'map']" class="icon main-color" />
              </div>
              <div class="mr-10">
                <h6 class="opacity-7">Address</h6>
              </div>
              <div class="ml-auto">
                <h4>新北市板橋區，台灣</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-7 valign">
          <div class="full-width">
            <form ref="contactForm" @submit.prevent="submitForm">
              <div v-if="formMessage" class="messages">
                <div :class="messageClass">{{ formMessage }}</div>
              </div>

              <div class="controls row">
                <div class="col-lg-6">
                  <div class="form-group mb-30">
                    <label>你的名字 *</label>
                    <input
                      v-model="form.name"
                      type="text"
                      name="name"
                      required
                      :disabled="isSubmitting"
                    />
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-group mb-30">
                    <label>你的電子信箱 *</label>
                    <input
                      v-model="form.email"
                      type="email"
                      name="email"
                      required
                      :disabled="isSubmitting"
                    />
                  </div>
                </div>

                <div class="col-12">
                  <div class="form-group mb-30">
                    <label>主旨</label>
                    <input
                      v-model="form.subject"
                      type="text"
                      name="subject"
                      :disabled="isSubmitting"
                    />
                  </div>
                </div>

                <div class="col-12">
                  <div class="form-group">
                    <label>你的訊息 *</label>
                    <textarea
                      v-model="form.message"
                      name="message"
                      rows="6"
                      required
                      :disabled="isSubmitting"
                      placeholder="請詳細描述您的需求、預算範圍、專案時程等資訊..."
                    ></textarea>
                  </div>
                  <div class="mt-30">
                    <button type="submit" :disabled="isSubmitting" class="submit-btn">
                      <span v-if="!isSubmitting" class="text">傳送訊息</span>
                      <span v-else class="text">
                        <i class="fas fa-spinner fa-spin"></i> 傳送中...
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ==================== End Contact ==================== -->
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useImageFormat } from '@/composables/useImageFormat.js'

const { toWebP } = useImageFormat()

// 將圖片路徑轉換為WebP格式
const getWebpImage = imagePath => {
  return toWebP(imagePath)
}

const isSubmitting = ref(false)
const formMessage = ref('')
const messageClass = ref('')

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

async function submitForm() {
  isSubmitting.value = true
  formMessage.value = ''

  try {
    const res = await fetch('https://portfolio-backend-pky9.onrender.com/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    if (!res.ok) throw new Error()
    formMessage.value = '訊息已成功發送！'
    messageClass.value = 'alert alert-success'
    Object.keys(form).forEach(k => (form[k] = ''))
  } catch {
    formMessage.value = '發送失敗，請稍後再試。'
    messageClass.value = 'alert alert-danger'
  } finally {
    isSubmitting.value = false
    setTimeout(() => (formMessage.value = ''), 5000)
  }
}
</script>

<style scoped>
.google-map iframe {
  width: 100%;
  height: 400px;
  border: 0;
  border-radius: 10px;
}

.info .item {
  padding: 30px 25px;
  border-radius: 10px;
  position: relative;
  background: #0c0c0c;
}

.info .item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(140deg, rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0.04));
  opacity: 0.3;
  pointer-events: none;
  border-radius: 10px;
}

.info .item::after {
  content: '';
  position: absolute;
  top: -1px;
  right: -1px;
  bottom: -1px;
  left: -1px;
  background: linear-gradient(140deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.01));
  pointer-events: none;
  border-radius: 10px;
}

.info .item .icon {
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: var(--maincolor);
  font-size: 20px;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--maincolor);
  color: white;
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #333;
  transform: translateY(-2px);
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #fff;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  background: transparent;
  color: #fff;
  transition: border-color 0.3s ease;
  font-family: inherit;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #fff;
}

.form-group input:disabled,
.form-group textarea:disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
}

.submit-btn {
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 15px 35px;
  width: 100%;
  border-radius: 15px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.4s;
  min-width: 150px;
}

.submit-btn:hover:not(:disabled) {
  background: var(--maincolor);
  color: #1d1d1d;
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.messages .alert {
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 20px;
}

.alert-success {
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  color: #155724;
}

.alert-danger {
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  color: #721c24;
}

.contact-alternatives {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 40px;
  color: #fff;
}

.contact-card {
  background: #0c0c0c;
  border-radius: 10px;
  transition: all 0.3s ease;
  height: 100%;
  color: #fff;
  position: relative;
}

.contact-card:before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(140deg, rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0.04));
  opacity: 0.3;
  border-radius: 10px;
  pointer-events: none;
}

.contact-card:hover {
  background: #1a1a1a;
  transform: translateY(-5px);
}

.contact-link {
  color: var(--maincolor);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: #333;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .info .item {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }

  .info .item .ml-auto {
    margin-left: 0 !important;
  }

  .social-links {
    justify-content: center;
  }
}
</style>
